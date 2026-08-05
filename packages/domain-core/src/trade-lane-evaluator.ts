export type TradeLaneDecisionState =
  | "candidate"
  | "confirmation_required"
  | "source_unavailable"
  | "enhanced_compliance_required"
  | "not_supported"
  | "insufficient_information";

export interface TradeLaneCorridor {
  tradeLaneId: string;
  originCountry: string;
  destinationCountry: string;
  mode: string;
  originGatewayId: string | null;
  destinationGatewayId: string | null;
  candidateServiceIds: string[];
  cargoScope: string[];
  status: string;
  decisionState: string;
  requiredConfirmations: string[];
  riskFlags: string[];
  reviewBy: string;
}

export interface TradeLaneEvaluationInput {
  originCountry: string;
  destinationCountry: string;
  mode: string;
  cargoCategories: string[];
  requestedOriginGatewayId?: string | null;
  requestedDestinationGatewayId?: string | null;
  requestedServiceId?: string | null;
  transactionDate: string;
  enhancedComplianceTrigger?: boolean;
}

export interface TradeLaneEvaluationResult {
  decisionState: TradeLaneDecisionState;
  matchedCorridorIds: string[];
  candidateCorridors: TradeLaneCorridor[];
  requiredConfirmations: string[];
  riskFlags: string[];
  staleCorridorIds: string[];
  reasons: string[];
}

export interface TradeLaneCorridorValidationFinding {
  tradeLaneId: string;
  issues: string[];
}

const COUNTRY_PATTERN = /^[A-Z]{2}$/;

function parseDate(value: string, field: string): Date {
  const parsed = new Date(`${value}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(parsed.valueOf())) {
    throw new Error(`${field} must be a valid ISO date (YYYY-MM-DD)`);
  }
  return parsed;
}

function unique(values: string[]): string[] {
  return [...new Set(values)];
}

export function validateTradeLaneCorridors(
  corridors: TradeLaneCorridor[],
): TradeLaneCorridorValidationFinding[] {
  const seen = new Set<string>();
  const findings: TradeLaneCorridorValidationFinding[] = [];

  for (const corridor of corridors) {
    const issues: string[] = [];
    if (!corridor.tradeLaneId.trim()) issues.push("missing_trade_lane_id");
    if (seen.has(corridor.tradeLaneId)) issues.push("duplicate_trade_lane_id");
    seen.add(corridor.tradeLaneId);
    if (!COUNTRY_PATTERN.test(corridor.originCountry)) issues.push("invalid_origin_country");
    if (!COUNTRY_PATTERN.test(corridor.destinationCountry)) issues.push("invalid_destination_country");
    if (!corridor.mode.trim()) issues.push("missing_mode");
    if (corridor.cargoScope.length === 0) issues.push("missing_cargo_scope");
    parseDate(corridor.reviewBy, `${corridor.tradeLaneId}.reviewBy`);
    if (!corridor.originGatewayId) issues.push("missing_origin_gateway");
    if (!corridor.destinationGatewayId) issues.push("missing_destination_gateway");
    if (corridor.candidateServiceIds.length === 0) issues.push("missing_carrier_service");
    if (issues.length > 0) findings.push({ tradeLaneId: corridor.tradeLaneId, issues });
  }

  return findings;
}

function cargoMatches(corridor: TradeLaneCorridor, requested: string[]): boolean {
  return requested.some((category) => corridor.cargoScope.includes(category));
}

function gatewayMatches(requested: string | null | undefined, actual: string | null): boolean {
  return !requested || requested === actual;
}

export function evaluateTradeLane(
  input: TradeLaneEvaluationInput,
  corridors: TradeLaneCorridor[],
): TradeLaneEvaluationResult {
  if (!COUNTRY_PATTERN.test(input.originCountry)) throw new Error("originCountry must be a two-letter uppercase country code");
  if (!COUNTRY_PATTERN.test(input.destinationCountry)) throw new Error("destinationCountry must be a two-letter uppercase country code");
  if (!input.mode.trim()) throw new Error("mode is required");
  if (input.cargoCategories.length === 0) throw new Error("at least one cargo category is required");

  const validation = validateTradeLaneCorridors(corridors);
  if (validation.some((finding) => finding.issues.includes("duplicate_trade_lane_id"))) {
    throw new Error("trade-lane corridor IDs must be unique");
  }

  const transactionDate = parseDate(input.transactionDate, "transactionDate");
  const laneMatches = corridors.filter(
    (corridor) => corridor.originCountry === input.originCountry &&
      corridor.destinationCountry === input.destinationCountry &&
      corridor.mode === input.mode &&
      cargoMatches(corridor, input.cargoCategories) &&
      gatewayMatches(input.requestedOriginGatewayId, corridor.originGatewayId) &&
      gatewayMatches(input.requestedDestinationGatewayId, corridor.destinationGatewayId) &&
      (!input.requestedServiceId || corridor.candidateServiceIds.includes(input.requestedServiceId)),
  );

  if (input.enhancedComplianceTrigger) {
    return {
      decisionState: "enhanced_compliance_required",
      matchedCorridorIds: laneMatches.map((lane) => lane.tradeLaneId),
      candidateCorridors: laneMatches,
      requiredConfirmations: unique(["counterparty_screening", "beneficial_owner_screening", "bank_and_payment_route_screening", "product_and_end_use_controls", "carrier_gateway_and_transit_screening", ...laneMatches.flatMap((lane) => lane.requiredConfirmations)]),
      riskFlags: unique(["enhanced_compliance_trigger", ...laneMatches.flatMap((lane) => lane.riskFlags)]),
      staleCorridorIds: laneMatches.filter((lane) => parseDate(lane.reviewBy, `${lane.tradeLaneId}.reviewBy`) < transactionDate).map((lane) => lane.tradeLaneId),
      reasons: ["Transaction-specific enhanced compliance screening is required before route recommendation."],
    };
  }

  if (laneMatches.length === 0) {
    return { decisionState: "source_unavailable", matchedCorridorIds: [], candidateCorridors: [], requiredConfirmations: ["verified_corridor_source"], riskFlags: ["no_matching_verified_corridor"], staleCorridorIds: [], reasons: ["No corridor record matches the requested countries, mode, cargo category and optional gateway or service filters."] };
  }

  const stale = laneMatches.filter((lane) => parseDate(lane.reviewBy, `${lane.tradeLaneId}.reviewBy`) < transactionDate);
  const matchedValidation = validation.filter((finding) => laneMatches.some((lane) => lane.tradeLaneId === finding.tradeLaneId));
  const completeMatches = laneMatches.filter((lane) => !matchedValidation.some((finding) => finding.tradeLaneId === lane.tradeLaneId && finding.issues.some((issue) => issue.startsWith("missing_"))));
  const sourceUnavailable = laneMatches.every((lane) => lane.decisionState === "source_unavailable") || completeMatches.length === 0;
  const reasons: string[] = [];
  let decisionState: TradeLaneDecisionState = "candidate";

  if (stale.length > 0) { decisionState = "confirmation_required"; reasons.push("One or more matching corridor records are past their review date."); }
  if (matchedValidation.length > 0) { decisionState = sourceUnavailable ? "source_unavailable" : "confirmation_required"; reasons.push("At least one matching corridor has an explicit gateway or carrier-service evidence gap."); }
  if (laneMatches.some((lane) => lane.decisionState === "confirmation_required")) { decisionState = "confirmation_required"; reasons.push("The corridor record requires current operational confirmation."); }
  if (sourceUnavailable) { decisionState = "source_unavailable"; reasons.push("No complete matching corridor contains the minimum gateway and carrier-service structure."); }

  const structuralConfirmations = matchedValidation.flatMap((finding) => finding.issues.map((issue) => `${finding.tradeLaneId}:${issue}`));
  return {
    decisionState,
    matchedCorridorIds: laneMatches.map((lane) => lane.tradeLaneId),
    candidateCorridors: laneMatches,
    requiredConfirmations: unique([...laneMatches.flatMap((lane) => lane.requiredConfirmations), ...structuralConfirmations]),
    riskFlags: unique([...laneMatches.flatMap((lane) => lane.riskFlags), ...matchedValidation.flatMap((finding) => finding.issues)]),
    staleCorridorIds: stale.map((lane) => lane.tradeLaneId),
    reasons: unique(reasons.length > 0 ? reasons : ["A structured candidate corridor was found; live booking confirmation is still outside the deterministic dataset."]),
  };
}
