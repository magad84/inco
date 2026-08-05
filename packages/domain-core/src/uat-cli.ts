import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  executeInternalTestCycle,
  renderInternalTestCycleMarkdown,
  type InternalTestScenario,
} from "./internal-test-runner.js";
import type { DestinationCountryRule } from "./country-requirements-evaluator.js";
import type { TradeLaneCorridor } from "./trade-lane-evaluator.js";

const repositoryRoot = resolve(process.cwd(), "../..");
const corridorPath = resolve(
  repositoryRoot,
  "knowledge/trade-lanes/launch-corridors.v0.1.json",
);

function readFixture(fileName: string): InternalTestScenario[] {
  return (
    JSON.parse(
      readFileSync(resolve(repositoryRoot, "fixtures/e2e", fileName), "utf8"),
    ) as { cases: InternalTestScenario[] }
  ).cases;
}

const waveIndex = process.argv.indexOf("--wave");
const requestedWave = waveIndex >= 0 ? process.argv[waveIndex + 1] : "first";
if (!requestedWave || !["first", "second", "all"].includes(requestedWave)) {
  throw new Error("--wave must be first, second, or all");
}

const scenarios =
  requestedWave === "first"
    ? readFixture("cases.v0.1.json")
    : requestedWave === "second"
      ? readFixture("cases.v0.2.json")
      : [...readFixture("cases.v0.1.json"), ...readFixture("cases.v0.2.json")];

const corridorData = JSON.parse(readFileSync(corridorPath, "utf8")) as {
  corridors: TradeLaneCorridor[];
};

const ruleFileNames = [
  ...new Set(scenarios.map((scenario) => scenario.countryRuleFile)),
];
const rulesByFile = Object.fromEntries(
  ruleFileNames.map((fileName) => {
    const data = JSON.parse(
      readFileSync(
        resolve(repositoryRoot, "knowledge/country-rules", fileName),
        "utf8",
      ),
    ) as { rules: DestinationCountryRule[] };
    return [fileName, data.rules];
  }),
);

const now = new Date().toISOString();
const cycleId =
  requestedWave === "first"
    ? "UAT-CYCLE-001-CLI"
    : requestedWave === "second"
      ? "UAT-CYCLE-002-CLI"
      : "UAT-CYCLE-ALL-CLI";
const cycle = executeInternalTestCycle(
  scenarios,
  corridorData.corridors,
  rulesByFile,
  cycleId,
  now,
);

const language = process.argv.includes("--ar") ? "ar" : "en";
const outputIndex = process.argv.indexOf("--output");
const markdown = renderInternalTestCycleMarkdown(cycle, language);

if (outputIndex >= 0) {
  const outputPath = process.argv[outputIndex + 1];
  if (!outputPath) throw new Error("--output requires a file path");
  writeFileSync(resolve(process.cwd(), outputPath), markdown, "utf8");
} else {
  process.stdout.write(markdown);
}

if (cycle.gateStatus !== "PASS") {
  process.exitCode = 1;
}
