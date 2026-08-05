import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import {
  evaluateTradeLane,
  type TradeLaneCorridor,
} from "../src/trade-lane-evaluator.js";

interface CorridorFile {
  corridors: TradeLaneCorridor[];
}

const root = resolve(process.cwd(), "../..");
const corridorFile = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/trade-lanes/launch-corridors.v0.1.json"),
    "utf8",
  ),
) as CorridorFile;

const corridors = corridorFile.corridors;

test("returns confirmation required for a structured China-UAE ocean corridor", () => {
  const result = evaluateTradeLane(
    {
      originCountry: "CN",
      destinationCountry: "AE",
      mode: "ocean",
      cargoCategories: ["containerized"],
      transactionDate: "2026-08-05",
    },
    corridors,
  );

  assert.equal(result.decisionState, "confirmation_required");
  assert.deepEqual(result.matchedCorridorIds, ["TL-CN-SHA-AE-KHALIFA-OCEAN"]);
  assert.ok(result.requiredConfirmations.includes("carrier_schedule"));
  assert.ok(result.riskFlags.includes("capacity_not_confirmed"));
});

test("returns source unavailable when gateway pair has no carrier service", () => {
  const result = evaluateTradeLane(
    {
      originCountry: "IN",
      destinationCountry: "SA",
      mode: "ocean",
      cargoCategories: ["reefer"],
      transactionDate: "2026-08-05",
    },
    corridors,
  );

  assert.equal(result.decisionState, "source_unavailable");
  assert.ok(result.requiredConfirmations.includes("carrier_service_source"));
});

test("returns source unavailable for an unsupported corridor", () => {
  const result = evaluateTradeLane(
    {
      originCountry: "US",
      destinationCountry: "EG",
      mode: "air_cargo",
      cargoCategories: ["general"],
      transactionDate: "2026-08-05",
    },
    corridors,
  );

  assert.equal(result.decisionState, "source_unavailable");
  assert.deepEqual(result.matchedCorridorIds, []);
  assert.deepEqual(result.requiredConfirmations, ["verified_corridor_source"]);
});

test("flags stale corridor records after their review date", () => {
  const result = evaluateTradeLane(
    {
      originCountry: "CN",
      destinationCountry: "AE",
      mode: "ocean",
      cargoCategories: ["general"],
      transactionDate: "2026-10-01",
    },
    corridors,
  );

  assert.equal(result.decisionState, "confirmation_required");
  assert.deepEqual(result.staleCorridorIds, ["TL-CN-SHA-AE-KHALIFA-OCEAN"]);
});

test("enhanced compliance overrides route recommendation", () => {
  const result = evaluateTradeLane(
    {
      originCountry: "CN",
      destinationCountry: "AE",
      mode: "ocean",
      cargoCategories: ["containerized"],
      transactionDate: "2026-08-05",
      enhancedComplianceTrigger: true,
    },
    corridors,
  );

  assert.equal(result.decisionState, "enhanced_compliance_required");
  assert.ok(result.requiredConfirmations.includes("beneficial_owner_screening"));
  assert.ok(result.riskFlags.includes("enhanced_compliance_trigger"));
});

test("validates required input fields", () => {
  assert.throws(
    () =>
      evaluateTradeLane(
        {
          originCountry: "china",
          destinationCountry: "AE",
          mode: "ocean",
          cargoCategories: ["general"],
          transactionDate: "2026-08-05",
        },
        corridors,
      ),
    /originCountry/,
  );

  assert.throws(
    () =>
      evaluateTradeLane(
        {
          originCountry: "CN",
          destinationCountry: "AE",
          mode: "ocean",
          cargoCategories: [],
          transactionDate: "2026-08-05",
        },
        corridors,
      ),
    /cargo category/,
  );
});
