import assert from "node:assert/strict";
import test from "node:test";
import { renderInternalTestReport, type IntegratedDecisionResult } from "../src/index.js";

const result: IntegratedDecisionResult = {
  decisionState: "confirmation_required",
  lane: {
    decisionState: "confirmation_required",
    matchedCorridorIds: ["TL-CN-AE-TEST"],
    candidateCorridors: [],
    requiredConfirmations: ["carrier_booking_confirmation"],
    riskFlags: ["volatile_carrier_conditions"],
    staleCorridorIds: [],
    reasons: ["Current carrier confirmation is required."],
  },
  cargo: {
    statuses: ["NO_INDICATOR_FOUND"],
    confidence: "high",
    indicators: [],
    missingInformation: [],
    requiredEvidence: [],
    confirmations: [],
    nextActions: [],
    audit: {
      ruleVersion: "0.1",
      evaluatedAt: "2026-08-05T18:30:00Z",
      mode: "ocean",
      disclaimerKeys: ["not_final_dg_classification"],
    },
  },
  destination: {
    countryCode: "AE",
    status: "confirmation_required",
    findings: [],
    missingInputs: [],
    staleRuleIds: [],
    audit: {
      evaluatedAt: "2026-08-05T18:30:00Z",
      evaluatedRuleIds: [],
      sourceGovernanceFindings: [],
    },
  },
  criticalRisks: ["volatile_carrier_conditions"],
  missingInformation: [],
  requiredConfirmations: ["carrier_booking_confirmation"],
  sources: ["CR-AE-OFFICIAL-SEED"],
  reasons: ["Current carrier, gateway, authority or country confirmation is required."],
};

test("internal report renders bilingual controlled output", () => {
  const report = renderInternalTestReport({
    caseId: "E2E-001",
    title: { en: "China to UAE", ar: "الصين إلى الإمارات" },
    result,
    generatedAt: "2026-08-05T18:30:00Z",
  });

  assert.match(report, /E2E-001/);
  assert.match(report, /الصين إلى الإمارات/);
  assert.match(report, /confirmation_required/);
  assert.match(report, /ليست قبول ناقل/);
  assert.match(report, /CR-AE-OFFICIAL-SEED/);
});
