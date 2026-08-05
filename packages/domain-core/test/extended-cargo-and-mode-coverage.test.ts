import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { evaluateUatRequest, type DestinationCountryRule, type TradeLaneCorridor } from "../src/index.js";

const root = resolve(process.cwd(), "../..");
const corridors = (JSON.parse(readFileSync(resolve(root, "knowledge/trade-lanes/launch-corridors.v0.1.json"), "utf8")) as { corridors: TradeLaneCorridor[] }).corridors;
const files: Record<string, string> = { AE: "uae.v0.1.json", SA: "ksa.v0.1.json", EG: "egypt.v0.1.json", OM: "oman.v0.1.json" };
function rules(country: string): DestinationCountryRule[] {
  const file = files[country];
  if (!file) throw new Error(`Missing country-rule fixture for ${country}`);
  return (JSON.parse(readFileSync(resolve(root, "knowledge/country-rules", file), "utf8")) as { rules: DestinationCountryRule[] }).rules;
}

test("damaged battery case remains blocked for specialist and carrier review", () => {
  const result = evaluateUatRequest({
    originCountry: "CN", destinationCountry: "AE", mode: "air_cargo", cargoCategory: "dangerous_goods",
    technicalDescription: "Damaged lithium battery returned for disposal", physicalState: "article",
    hazardIndicators: ["battery", "damaged_battery"], specialCargoIndicators: [], transactionDate: "2026-08-05",
  }, { corridors, destinationRules: rules("AE") });
  assert.equal(result.decisionState, "blocked_information_required");
  assert.ok(result.cargo.statuses.includes("DANGEROUS_GOODS_DATA_REQUIRED"));
});

test("temperature-controlled medicine requires special-cargo evidence", () => {
  const result = evaluateUatRequest({
    originCountry: "IN", destinationCountry: "SA", mode: "air_cargo", cargoCategory: "pharmaceutical",
    technicalDescription: "Prescription medicine requiring two-to-eight degree temperature control", physicalState: "solid",
    specialCargoIndicators: ["temperature_controlled", "pharmaceutical"], transactionDate: "2026-08-05",
  }, { corridors, destinationRules: rules("SA") });
  assert.equal(result.decisionState, "blocked_information_required");
  assert.ok(result.cargo.statuses.includes("SPECIAL_CARGO_DATA_REQUIRED"));
});

test("food cargo remains controlled by destination and carrier confirmation", () => {
  const result = evaluateUatRequest({
    originCountry: "TR", destinationCountry: "EG", mode: "ocean", cargoCategory: "food",
    technicalDescription: "Shelf-stable packaged food for commercial import", physicalState: "solid",
    transactionDate: "2026-08-05",
  }, { corridors, destinationRules: rules("EG") });
  assert.ok(["confirmation_required", "source_unavailable"].includes(result.decisionState));
});

test("oversized road shipment cannot produce a verified route without corridor data", () => {
  const result = evaluateUatRequest({
    originCountry: "OM", destinationCountry: "AE", mode: "road", cargoCategory: "project_cargo",
    technicalDescription: "Oversized transformer requiring abnormal-load route study", physicalState: "article",
    specialCargoIndicators: ["oversized", "overweight", "project_cargo"], transactionDate: "2026-08-05",
  }, { corridors, destinationRules: rules("AE") });
  assert.equal(result.decisionState, "blocked_information_required");
  assert.equal(result.lane.decisionState, "source_unavailable");
});

test("multimodal chemical contradiction remains blocked before route reliance", () => {
  const result = evaluateUatRequest({
    originCountry: "US", destinationCountry: "OM", mode: "multimodal", cargoCategory: "chemical",
    technicalDescription: "Chemical mixture with inconsistent declaration and no current composition evidence", physicalState: "liquid",
    compositionKnown: true, hazardIndicators: ["unknown_chemical_composition", "flammable_liquid"], transactionDate: "2026-08-05",
  }, { corridors, destinationRules: rules("OM") });
  assert.equal(result.decisionState, "blocked_information_required");
  assert.equal(result.lane.decisionState, "source_unavailable");
});
