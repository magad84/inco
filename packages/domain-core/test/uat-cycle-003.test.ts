import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import {
  evaluateUatRequest,
  type DestinationCountryRule,
  type TradeLaneCorridor,
  type UatEvaluationRequest,
} from "../src/index.js";

const root = resolve(process.cwd(), "../..");
const corridors = (JSON.parse(
  readFileSync(resolve(root, "knowledge/trade-lanes/launch-corridors.v0.1.json"), "utf8"),
) as { corridors: TradeLaneCorridor[] }).corridors;
const ruleFileByCountry: Record<string, string> = {
  AE: "uae.v0.1.json",
  SA: "ksa.v0.1.json",
  EG: "egypt.v0.1.json",
  OM: "oman.v0.1.json",
};

function rules(country: string): DestinationCountryRule[] {
  const file = ruleFileByCountry[country];
  if (!file) return [];
  return (JSON.parse(
    readFileSync(resolve(root, "knowledge/country-rules", file), "utf8"),
  ) as { rules: DestinationCountryRule[] }).rules;
}

interface Case {
  id: string;
  request: UatEvaluationRequest;
  expected: string;
}

const cases: Case[] = [
  { id: "UAT3-001", request: { originCountry: "CN", destinationCountry: "AE", mode: "ocean", cargoCategory: "general", technicalDescription: "Finished solid metal components without DG indicators", transactionDate: "2026-08-05" }, expected: "confirmation_required" },
  { id: "UAT3-002", request: { originCountry: "IN", destinationCountry: "SA", mode: "ocean", cargoCategory: "reefer", technicalDescription: "Packaged food requiring controlled temperature", specialCargoIndicators: ["temperature_controlled", "perishable"], transactionDate: "2026-08-05" }, expected: "blocked_information_required" },
  { id: "UAT3-003", request: { originCountry: "TR", destinationCountry: "EG", mode: "air_cargo", cargoCategory: "dangerous_goods", technicalDescription: "Liquid industrial adhesive with incomplete classification", physicalState: "liquid", compositionKnown: false, hazardIndicators: ["unknown_chemical_composition", "flammable_liquid"], transactionDate: "2026-08-05" }, expected: "blocked_information_required" },
  { id: "UAT3-004", request: { originCountry: "CN", destinationCountry: "OM", mode: "air_cargo", cargoCategory: "general", technicalDescription: "Electronic accessories without batteries", transactionDate: "2026-08-05" }, expected: "confirmation_required" },
  { id: "UAT3-005", request: { originCountry: "IT", destinationCountry: "OM", mode: "ocean", cargoCategory: "project_cargo", technicalDescription: "Oversized industrial process skid", physicalState: "article", specialCargoIndicators: ["oversized", "project_cargo", "heavy_lift"], transactionDate: "2026-08-05" }, expected: "blocked_information_required" },
  { id: "UAT3-006", request: { originCountry: "RU", destinationCountry: "AE", mode: "ocean", cargoCategory: "general", technicalDescription: "Industrial spare parts", enhancedComplianceTrigger: true, transactionDate: "2026-08-05" }, expected: "enhanced_compliance_required" },
  { id: "UAT3-N01", request: { originCountry: "CN", destinationCountry: "AE", mode: "road", cargoCategory: "general", technicalDescription: "Unsupported road corridor", transactionDate: "2026-08-05" }, expected: "source_unavailable" },
  { id: "UAT3-N02", request: { originCountry: "CN", destinationCountry: "AE", mode: "multimodal", cargoCategory: "general", technicalDescription: "Unsupported multimodal corridor", transactionDate: "2026-08-05" }, expected: "source_unavailable" },
  { id: "UAT3-N03", request: { originCountry: "US", destinationCountry: "AE", mode: "air_cargo", cargoCategory: "chemical", technicalDescription: "Declared known composition but hazard data says unknown", compositionKnown: true, physicalState: "liquid", hazardIndicators: ["unknown_chemical_composition"], transactionDate: "2026-08-05" }, expected: "blocked_information_required" },
];

for (const scenario of cases) {
  test(`${scenario.id} evaluates through the UAT adapter`, () => {
    const result = evaluateUatRequest(
      scenario.request,
      { corridors, destinationRules: rules(scenario.request.destinationCountry) },
      "2026-08-05T18:50:00Z",
    );
    assert.equal(result.decisionState, scenario.expected);
    assert.ok(result.reasons.length > 0);
    assert.ok(Array.isArray(result.requiredConfirmations));
    assert.ok(Array.isArray(result.sources));
  });
}

test("UAT-CYCLE-003 rejects invalid country input", () => {
  assert.throws(
    () => evaluateUatRequest({ originCountry: "CHN", destinationCountry: "AE", mode: "ocean", cargoCategory: "general", technicalDescription: "test", transactionDate: "2026-08-05" }, { corridors, destinationRules: rules("AE") }),
    /originCountry/,
  );
});

test("UAT-CYCLE-003 gate passes", () => {
  assert.equal(cases.length, 9);
  assert.deepEqual(cases.slice(0, 6).map((item) => item.id), ["UAT3-001", "UAT3-002", "UAT3-003", "UAT3-004", "UAT3-005", "UAT3-006"]);
});
