import {
  evaluateCountryRequirements,
  type CountryRequirementsResult,
  type DestinationCountryRule,
} from "./country-requirements-evaluator.js";
import {
  type DgPrescreenInput,
  type DgPrescreenResult,
} from "./dg-prescreen.js";
import { prescreenCargoEnhanced } from "./dg-prescreen-enhanced.js";
import {
  evaluateTradeLane,
  type TradeLaneCorridor,
  type TradeLaneEvaluationInput,
  type TradeLaneEvaluationResult,
} from "./trade-lane-evaluator.js";

export type IntegratedDecisionState =
  | "enhanced_compliance_required"
  | "blocked_information_required"
  | "source_unavailable"
  | "confirmation_required"
  | "candidate";

export interface IntegratedDecisionInput {
  lane: TradeLaneEvaluationInput;
  cargo: DgPrescreenInput;
  destinationFacts: Record<string, unknown>;
}

export interface IntegratedDecisionResult {
  decisionState: IntegratedDecisionState;
  lane: TradeLaneEvaluationResult;
  cargo: DgPrescreenResult;
  destination: CountryRequirementsResult;
  criticalRisks: string[];
  missingInformation: string[];
  requiredConfirmations: string[];
  sources: string[];
  reasons: string[];
}

function unique(values: string[]): string[] {
  return [...new Set(values)].sort();
}

export function evaluateIntegratedDecision(
  input: IntegratedDecisionInput,
  corridors: TradeLaneCorridor[],
  destinationRules: DestinationCountryRule[],
  evaluatedAt = new Date().toISOString(),
): IntegratedDecisionResult {
  if (input.lane.destinationCountry !== input.cargo.shipment.destinationCountry) {
    throw new Error("lane and cargo destination countries must match");
  }
  if (input.lane.originCountry !== input.cargo.shipment.originCountry) {
    throw new Error("lane and cargo origin countries must match");
  }

  const lane = evaluateTradeLane(input.lane, corridors);
  const cargo = prescreenCargoEnhanced(input.cargo, evaluatedAt);
  const destination = evaluateCountryRequirements(
    {
      countryCode: input.lane.destinationCountry,
      transactionDate: input.lane.transactionDate,
      facts: input.destinationFacts,
    },
    destinationRules,
    evaluatedAt,
  );

  const blockingCargoStatuses = new Set([
    "INSUFFICIENT_INFORMATION",
    "DANGEROUS_GOODS_DATA_REQUIRED",
    "SPECIAL_CARGO_DATA_REQUIRED",
    "SPECIALIST_CONFIRMATION_REQUIRED",
  ]);

  const missingInformation = unique([
    ...cargo.missingInformation,
    ...destination.missingInputs,
  ]);

  const requiredConfirmations = unique([
    ...lane.requiredConfirmations,
    ...cargo.confirmations.map((item) => item.type),
    ...destination.findings
      .filter((finding) => finding.confirmationRequired)
      .map((finding) => `${finding.ruleId}:${finding.authorityOrProvider.en}`),
  ]);

  const sources = unique([
    ...destination.findings.flatMap((finding) => finding.sources),
  ]);

  const criticalRisks = unique([
    ...lane.riskFlags,
    ...cargo.indicators
      .filter((indicator) => indicator.severity === "critical" || indicator.severity === "high")
      .map((indicator) => indicator.indicatorId),
    ...destination.findings
      .filter((finding) => finding.stale || finding.decision === "source_unavailable")
      .map((finding) => finding.ruleId),
  ]);

  let decisionState: IntegratedDecisionState = "candidate";
  const reasons: string[] = [];

  if (lane.decisionState === "enhanced_compliance_required") {
    decisionState = "enhanced_compliance_required";
    reasons.push("Transaction-specific enhanced compliance screening overrides route recommendation.");
  } else if (cargo.statuses.some((status) => blockingCargoStatuses.has(status))) {
    decisionState = "blocked_information_required";
    reasons.push("Cargo information or specialist evidence is required before a route recommendation can be relied upon.");
  } else if (
    lane.decisionState === "source_unavailable" ||
    destination.status === "source_unavailable"
  ) {
    decisionState = "source_unavailable";
    reasons.push("At least one required route or destination source is unavailable.");
  } else if (
    lane.decisionState === "confirmation_required" ||
    destination.status === "confirmation_required" ||
    cargo.statuses.includes("CARRIER_ACCEPTANCE_REQUIRED") ||
    cargo.statuses.includes("AUTHORITY_CONFIRMATION_REQUIRED")
  ) {
    decisionState = "confirmation_required";
    reasons.push("Current carrier, gateway, authority or country confirmation is required.");
  } else {
    reasons.push("A structured candidate result is available; live booking and authority commitments remain outside the deterministic engine.");
  }

  return {
    decisionState,
    lane,
    cargo,
    destination,
    criticalRisks,
    missingInformation,
    requiredConfirmations,
    sources,
    reasons,
  };
}
