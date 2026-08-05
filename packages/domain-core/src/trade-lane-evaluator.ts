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
  if (!COUNTRY_PATTERN.test(input.originCountry)) {
    throw new Error("originCountry must be a two-letter uppercase country code");
  }
  if (!COUNTRY_PATTERN.test(input.destinationCountry)) {
    throw new Error("destinationCountry must be a two-letter uppercase country code");
  }
  if (!input.mode.trim()) {
    throw new Error("mode is required");
  }
  if (input.cargoCategories.length === 0) {
    throw new Error("at least one cargo category is required");
  }

  const transactionDate = parseDate(input.transactionDate, "transactionDate");
  const laneMatches = corridors.filter(
    (corridor) =>
      corridor.originCountry === input.originCountry &&
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
      requiredConfirmations: unique([
        "counterparty_screening",
        "beneficial_owner_screening",
        "bank_and_payment_route_screening",
        "product_and_end_use_controls",
        "carrier_gateway_and_transit_screening",
        ...laneMatches.flatMap((lane) => lane.requiredConfirmations),
      ]),
      riskFlags: unique(["enhanced_compliance_trigger", ...laneMatches.flatMap((lane) => lane.riskFlags)]),
      staleCorridorIds: laneMatches
        .filter((lane) => parseDate(lane.reviewBy, `${lane.tradeLaneId}.reviewBy`) < transactionDate)
        .map((lane) => lane.tradeLaneId),
      reasons: ["Transaction-specific enhanced compliance screening is required before route recommendation."],
    };
  }

  if (laneMatches.length === 0) {
    return {
      decisionState: "source_unavailable",
      matchedCorridorIds: [],
      candidateCorridors: [],
      requiredConfirmations: ["verified_corridor_source"],
      riskFlags: ["no_matching_verified_corridor"],
      staleCorridorIds: [],
      reasons: ["No corridor record matches the requested countries, mode, cargo category and optional gateway or service filters."],
    };
  }

  const stale = laneMatches.filter(
    (lane) => parseDate(lane.reviewBy, `${lane.tradeLaneId}.reviewBy`) < transactionDate,
  );
  const missingStructure = laneMatches.some(
    (lane) => !lane.originGatewayId || !lane.destinationGatewayId || lane.candidateServiceIds.length === 0,
  );
  const sourceUnavailable = laneMatches.every((lane) => lane.decisionState === "source_unavailable");

  let decisionState: TradeLaneDecisionState = "candidate";
  const reasons: string[] = [];

  if (stale.length > 0) {
    decisionState = "confirmation_required";
    reasons.push("One or more matching corridor records are past their review date.");
  }
  if (missingStructure) {
    decisionState = sourceUnavailable ? "source_unavailable" : "confirmation_required";
    reasons.push("At least one matching corridor lacks a verified gateway or carrier-service reference.");
  }
  if (laneMatches.some((lane) => lane.decisionState === "confirmation_required")) {
    decisionState = "confirmation_required";
    reasons.push("The corridor record requires current operational confirmation.");
  }
  if (sourceUnavailable) {
    decisionState = "source_unavailable";
    reasons.push("Available matching records do not yet contain a verified carrier-service source.");
  }

  return {
    decisionState,
    matchedCorridorIds: laneMatches.map((lane) => lane.tradeLaneId),
    candidateCorridors: laneMatches,
    requiredConfirmations: unique(laneMatches.flatMap((lane) => lane.requiredConfirmations)),
    riskFlags: unique(laneMatches.flatMap((lane) => lane.riskFlags)),
    staleCorridorIds: stale.map((lane) => lane.tradeLaneId),
    reasons: unique(reasons.length > 0 ? reasons : ["A structured candidate corridor was found; live booking confirmation is still outside the deterministic dataset."]),
  };
}
