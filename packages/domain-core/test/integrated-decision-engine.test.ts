import assert from "node:assert/strict";
import test from "node:test";
import {
  evaluateIntegratedDecision,
  type DestinationCountryRule,
  type TradeLaneCorridor,
} from "../src/index.js";

const corridor: TradeLaneCorridor = {
  tradeLaneId: "TL-CN-AE-TEST",
  originCountry: "CN",
  destinationCountry: "AE",
  mode: "ocean",
  originGatewayId: "GATEWAY-CN-SHANGHAI-PORT",
  destinationGatewayId: "GATEWAY-AE-KHALIFA",
  candidateServiceIds: ["SERVICE-MAERSK-ME-GENERAL"],
  cargoScope: ["general_cargo", "dangerous_goods"],
  status: "verified_partial",
  decisionState: "confirmation_required",
  requiredConfirmations: ["carrier_booking_confirmation"],
  riskFlags: ["volatile_carrier_conditions"],
  reviewBy: "2026-11-05",
};

const countryRule: DestinationCountryRule = {
  ruleId: "CR-AE-TEST-001",
  countryCode: "AE",
  stage: "import",
  category: "customs",
  status: "verified_partial",
  trigger: { transactionRole: "import" },
  requiredInputs: ["importerRecordKnown"],
  outcome: {
    decision: "conditional",
    message: { en: "Importer and customs process must be confirmed.", ar: "يجب تأكيد المستورد والإجراء الجمركي." },
    nextAction: { en: "Confirm with the relevant customs administration.", ar: "أكد مع الإدارة الجمركية المختصة." },
    impactIfNotConfirmed: { en: "Clearance may be delayed.", ar: "قد يتأخر التخليص." },
  },
  confirmation: {
    required: true,
    authorityOrProvider: { en: "Relevant UAE customs administration", ar: "الإدارة الجمركية الإماراتية المختصة" },
    reason: { en: "Jurisdiction and transaction details vary.", ar: "تختلف الجهة وتفاصيل المعاملة." },
    sourceRoute: null,
  },
  effectiveFrom: null,
  effectiveTo: null,
  sources: ["CR-AE-OFFICIAL-SEED"],
  review: {
    lastVerifiedAt: "2026-08-05T00:00:00Z",
    nextReviewAt: "2026-11-05T00:00:00Z",
    reviewOwner: "INCO Knowledge Governance",
  },
};

function baseInput() {
  return {
    lane: {
      originCountry: "CN",
      destinationCountry: "AE",
      mode: "ocean",
      cargoCategories: ["general_cargo"],
      transactionDate: "2026-08-05",
    },
    cargo: {
      product: {
        commercialName: "Metal parts",
        technicalDescription: "Finished non-hazardous metal components",
        compositionKnown: true,
        physicalState: "solid" as const,
        hazardIndicators: [],
        specialCargoIndicators: [],
      },
      shipment: {
        originCountry: "CN",
        destinationCountry: "AE",
        mode: "ocean" as const,
        plannedShipmentDate: "2026-08-05",
      },
    },
    destinationFacts: {
      transactionRole: "import",
      importerRecordKnown: true,
    },
  };
}

test("integrated engine returns confirmation-required candidate", () => {
  const result = evaluateIntegratedDecision(
    baseInput(),
    [corridor],
    [countryRule],
    "2026-08-05T18:30:00Z",
  );
  assert.equal(result.decisionState, "confirmation_required");
  assert.ok(result.requiredConfirmations.includes("carrier_booking_confirmation"));
  assert.ok(result.sources.includes("CR-AE-OFFICIAL-SEED"));
});

test("cargo data gap blocks route reliance", () => {
  const input = baseInput();
  input.cargo.product.technicalDescription = "";
  const result = evaluateIntegratedDecision(
    input,
    [corridor],
    [countryRule],
    "2026-08-05T18:30:00Z",
  );
  assert.equal(result.decisionState, "blocked_information_required");
  assert.ok(result.missingInformation.includes("technicalDescription"));
});

test("enhanced compliance overrides other modules", () => {
  const input = baseInput();
  input.lane.enhancedComplianceTrigger = true;
  const result = evaluateIntegratedDecision(
    input,
    [corridor],
    [countryRule],
    "2026-08-05T18:30:00Z",
  );
  assert.equal(result.decisionState, "enhanced_compliance_required");
  assert.ok(result.requiredConfirmations.includes("counterparty_screening"));
});
