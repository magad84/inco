import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import {
  evaluateIntegratedDecision,
  type DestinationCountryRule,
  type DgPrescreenStatus,
  type IntegratedDecisionInput,
  type IntegratedDecisionState,
  type TradeLaneCorridor,
} from "../src/index.js";

interface E2eCase {
  caseId: string;
  title: string;
  countryRuleFile: string;
  input: IntegratedDecisionInput;
  expected: {
    decisionState: IntegratedDecisionState;
    requiredCargoStatus?: DgPrescreenStatus;
    requiredConfirmationIncludes?: string[];
    mustHaveSources?: boolean;
    mustHaveMissingInformation?: boolean;
  };
}

const root = resolve(process.cwd(), "../..");
const fixture = JSON.parse(
  readFileSync(resolve(root, "fixtures/e2e/cases.v0.2.json"), "utf8"),
) as { policy: string; cases: E2eCase[] };
const corridorData = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/trade-lanes/launch-corridors.v0.1.json"),
    "utf8",
  ),
) as { corridors: TradeLaneCorridor[] };

function loadRules(fileName: string): DestinationCountryRule[] {
  return (
    JSON.parse(
      readFileSync(resolve(root, "knowledge/country-rules", fileName), "utf8"),
    ) as { rules: DestinationCountryRule[] }
  ).rules;
}

for (const scenario of fixture.cases) {
  test(`${scenario.caseId}: ${scenario.title}`, () => {
    const result = evaluateIntegratedDecision(
      scenario.input,
      corridorData.corridors,
      loadRules(scenario.countryRuleFile),
      "2026-08-05T18:30:00Z",
    );

    assert.equal(result.decisionState, scenario.expected.decisionState);

    if (scenario.expected.requiredCargoStatus) {
      assert.ok(result.cargo.statuses.includes(scenario.expected.requiredCargoStatus));
    }

    for (const confirmation of scenario.expected.requiredConfirmationIncludes ?? []) {
      assert.ok(
        result.requiredConfirmations.some(
          (value) => value === confirmation || value.includes(confirmation),
        ),
        `${scenario.caseId} missing confirmation ${confirmation}`,
      );
    }

    if (scenario.expected.mustHaveSources) {
      assert.ok(result.sources.length > 0, `${scenario.caseId} must expose sources`);
    }

    if (scenario.expected.mustHaveMissingInformation) {
      assert.ok(result.missingInformation.length > 0);
    }

    assert.ok(result.reasons.length > 0);
  });
}

test("second-wave fixture covers E2E-004 through E2E-006", () => {
  assert.deepEqual(
    fixture.cases.map((scenario) => scenario.caseId).sort(),
    ["E2E-004", "E2E-005", "E2E-006"],
  );
  assert.match(fixture.policy, /enhanced-compliance overrides/);
});
