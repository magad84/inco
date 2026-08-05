import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

interface E2eFixture {
  cases: Array<{ caseId: string; expected: { decisionState: string } }>;
}

interface ReadinessGate {
  gateId: string;
  status: "PASS" | "FAIL";
  scope: string;
  requiredScenarioIds: string[];
  requiredDecisionStates: string[];
  controls: {
    strictTypeScript: boolean;
    ciRequired: boolean;
    bilingualReports: boolean;
    paidDependencyAllowed: boolean;
    liveAcceptanceClaimAllowed: boolean;
    finalDgClassificationAllowed: boolean;
    productionLaunchApproved: boolean;
  };
  evidence: {
    ciRunId: number;
    firstWaveFixture: string;
    secondWaveFixture: string;
    gateDocument: string;
  };
}

const root = resolve(process.cwd(), "../..");
const gate = JSON.parse(
  readFileSync(resolve(root, "fixtures/uat/readiness-gate.v1.0.json"), "utf8"),
) as ReadinessGate;
const firstWave = JSON.parse(
  readFileSync(resolve(root, gate.evidence.firstWaveFixture), "utf8"),
) as E2eFixture;
const secondWave = JSON.parse(
  readFileSync(resolve(root, gate.evidence.secondWaveFixture), "utf8"),
) as E2eFixture;
const gateDocument = readFileSync(resolve(root, gate.evidence.gateDocument), "utf8");

const allCases = [...firstWave.cases, ...secondWave.cases];

test("GATE-UAT-READY covers all six approved scenarios", () => {
  assert.equal(gate.gateId, "GATE-UAT-READY");
  assert.equal(gate.status, "PASS");
  assert.equal(gate.scope, "internal_functional_testing_only");
  assert.deepEqual(
    allCases.map((item) => item.caseId).sort(),
    gate.requiredScenarioIds.slice().sort(),
  );
  assert.equal(new Set(gate.requiredScenarioIds).size, 6);
});

test("readiness gate preserves safety and commercial boundaries", () => {
  assert.equal(gate.controls.strictTypeScript, true);
  assert.equal(gate.controls.ciRequired, true);
  assert.equal(gate.controls.bilingualReports, true);
  assert.equal(gate.controls.paidDependencyAllowed, false);
  assert.equal(gate.controls.liveAcceptanceClaimAllowed, false);
  assert.equal(gate.controls.finalDgClassificationAllowed, false);
  assert.equal(gate.controls.productionLaunchApproved, false);
  assert.ok(gate.evidence.ciRunId > 0);
});

test("gate document explicitly limits approval to internal testing", () => {
  assert.match(gateDocument, /PASS FOR INTERNAL FUNCTIONAL TESTING/);
  assert.match(gateDocument, /does not approve production launch/);
  assert.match(gateDocument, /No paid dependency introduced/);
  assert.match(gateDocument, /No unsupported carrier or authority acceptance claim/);
});

test("scenario expectations exercise conservative decision states", () => {
  const states = new Set(allCases.map((item) => item.expected.decisionState));
  assert.ok(states.has("confirmation_required"));
  assert.ok(states.has("blocked_information_required"));
  assert.ok(states.has("enhanced_compliance_required"));
  for (const state of states) {
    assert.ok(gate.requiredDecisionStates.includes(state));
  }
});
