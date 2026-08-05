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

interface E2eFixture {
  datasetVersion: string;
  policy: string;
  cases: E2eCase[];
}

const root = resolve(process.cwd(), "../..");
const fixture = JSON.parse(
  readFileSync(resolve(root, "fixtures/e2e/cases.v0.1.json"), "utf8"),
) as E2eFixture;
const corridorData = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/trade-lanes/launch-corridors.v0.1.json"),
    "utf8",
  ),
) as { corridors: TradeLaneCorridor[] };

function loadRules(fileName: string): DestinationCountryRule[] {
  const data = JSON.parse(
    readFileSync(resolve(root, "knowledge/country-rules", fileName), "utf8"),
  ) as { rules: DestinationCountryRule[] };
  return data.rules;
}

for (const scenario of fixture.cases) {
  test(`${scenario.caseId}: ${scenario.title}`, () => {
    const result = evaluateIntegratedDecision(
      scenario.input,
      corridorData.corridors,
      loadRules(scenario.countryRuleFile),
      "2026-08-05T18:20:00Z",
    );

    assert.equal(result.decisionState, scenario.expected.decisionState);

    if (scenario.expected.requiredCargoStatus) {
      assert.ok(
        result.cargo.statuses.includes(scenario.expected.requiredCargoStatus),
        `${scenario.caseId} missing cargo status ${scenario.expected.requiredCargoStatus}`,
      );
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
      assert.ok(
        result.missingInformation.length > 0,
        `${scenario.caseId} must expose missing information`,
      );
    }

    assert.ok(result.reasons.length > 0);
  });
}

test("first-wave fixture covers the mandatory internal scenarios", () => {
  assert.deepEqual(
    fixture.cases.map((scenario) => scenario.caseId).sort(),
    ["E2E-001", "E2E-002", "E2E-003"],
  );
  assert.ok(fixture.policy.includes("not live carrier acceptance"));
});
