import type { DestinationCountryRule } from "./country-requirements-evaluator.js";
import {
  evaluateIntegratedDecision,
  type IntegratedDecisionResult,
} from "./integrated-decision-engine.js";
import type { TradeLaneCorridor } from "./trade-lane-evaluator.js";

export interface UatEvaluationRequest {
  originCountry: string;
  destinationCountry: string;
  mode: "ocean" | "air_cargo" | "courier" | "postal" | "road" | "multimodal";
  cargoCategory: string;
  technicalDescription: string;
  physicalState?: "solid" | "liquid" | "gas" | "aerosol" | "powder" | "paste" | "gel" | "article" | "unknown";
  compositionKnown?: boolean;
  hazardIndicators?: string[];
  specialCargoIndicators?: string[];
  enhancedComplianceTrigger?: boolean;
  transactionDate: string;
}

export interface UatEvaluationDependencies {
  corridors: TradeLaneCorridor[];
  destinationRules: DestinationCountryRule[];
}

export function evaluateUatRequest(
  request: UatEvaluationRequest,
  dependencies: UatEvaluationDependencies,
  evaluatedAt = new Date().toISOString(),
): IntegratedDecisionResult {
  const origin = request.originCountry.trim().toUpperCase();
  const destination = request.destinationCountry.trim().toUpperCase();
  const description = request.technicalDescription.trim();
  const cargoCategory = request.cargoCategory.trim();

  if (!/^[A-Z]{2}$/.test(origin)) throw new Error("originCountry must be an ISO alpha-2 code");
  if (!/^[A-Z]{2}$/.test(destination)) throw new Error("destinationCountry must be an ISO alpha-2 code");
  if (!cargoCategory) throw new Error("cargoCategory is required");
  if (!description) throw new Error("technicalDescription is required");

  const laneMode = request.mode;
  const shipmentMode = request.mode === "air_cargo" ? "air" : request.mode;

  return evaluateIntegratedDecision(
    {
      lane: {
        originCountry: origin,
        destinationCountry: destination,
        mode: laneMode,
        cargoCategories: [cargoCategory],
        transactionDate: request.transactionDate,
        enhancedComplianceTrigger: request.enhancedComplianceTrigger ?? false,
      },
      cargo: {
        product: {
          commercialName: cargoCategory,
          technicalDescription: description,
          compositionKnown: request.compositionKnown ?? true,
          physicalState: request.physicalState ?? "solid",
          hazardIndicators: request.hazardIndicators ?? [],
          specialCargoIndicators: request.specialCargoIndicators ?? [],
        },
        shipment: {
          originCountry: origin,
          destinationCountry: destination,
          mode: shipmentMode,
          plannedShipmentDate: request.transactionDate,
        },
      },
      destinationFacts: {
        transactionRole: "import",
        transaction_role: "import",
        transportMode: shipmentMode,
        transport_mode: shipmentMode,
        cargoCategory,
      },
    },
    dependencies.corridors,
    dependencies.destinationRules,
    evaluatedAt,
  );
}
