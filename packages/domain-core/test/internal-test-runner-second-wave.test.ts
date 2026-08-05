import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import {
  executeInternalTestCycle,
  renderInternalTestCycleMarkdown,
  type DestinationCountryRule,
  type InternalTestScenario,
  type TradeLaneCorridor,
} from "../src/index.js";

const root = resolve(process.cwd(), "../..");
const fixture = JSON.parse(
  readFileSync(resolve(root, "fixtures/e2e/cases.v0.2.json"), "utf8"),
) as { cases: InternalTestScenario[] };
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

const rulesByFile = Object.fromEntries(
  [...new Set(fixture.cases.map((scenario) => scenario.countryRuleFile))].map(
    (fileName) => [fileName, loadRules(fileName)],
  ),
);

test("second internal cycle passes all second-wave scenarios", () => {
  const cycle = executeInternalTestCycle(
    fixture.cases,
    corridorData.corridors,
    rulesByFile,
    "UAT-CYCLE-002",
    "2026-08-05T18:35:00Z",
  );

  assert.equal(cycle.total, 3);
  assert.equal(cycle.failed, 0);
  assert.equal(cycle.gateStatus, "PASS");
  assert.deepEqual(
    cycle.executions.map((execution) => execution.caseId),
    ["E2E-004", "E2E-005", "E2E-006"],
  );
});

test("second internal cycle renders bilingual evidence", () => {
  const cycle = executeInternalTestCycle(
    fixture.cases,
    corridorData.corridors,
    rulesByFile,
    "UAT-CYCLE-002",
    "2026-08-05T18:35:00Z",
  );
  const english = renderInternalTestCycleMarkdown(cycle, "en");
  const arabic = renderInternalTestCycleMarkdown(cycle, "ar");

  assert.match(english, /Internal Test Cycle UAT-CYCLE-002/);
  assert.match(english, /Gate: \*\*PASS\*\*/);
  assert.match(arabic, /تقرير دورة الاختبار الداخلي UAT-CYCLE-002/);
  assert.match(arabic, /الحالة: \*\*PASS\*\*/);
  assert.match(english, /enhanced_compliance_required/);
});
