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
const fixturePath = resolve(repositoryRoot, "fixtures/e2e/cases.v0.1.json");
const corridorPath = resolve(
  repositoryRoot,
  "knowledge/trade-lanes/launch-corridors.v0.1.json",
);

const fixture = JSON.parse(readFileSync(fixturePath, "utf8")) as {
  cases: InternalTestScenario[];
};
const corridorData = JSON.parse(readFileSync(corridorPath, "utf8")) as {
  corridors: TradeLaneCorridor[];
};

const ruleFileNames = [
  ...new Set(fixture.cases.map((scenario) => scenario.countryRuleFile)),
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
const cycle = executeInternalTestCycle(
  fixture.cases,
  corridorData.corridors,
  rulesByFile,
  "UAT-CYCLE-CLI",
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
