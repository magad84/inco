import assert from "node:assert/strict";
import test from "node:test";
import {
  evaluateTradeLane,
  validateTradeLaneCorridors,
  type TradeLaneCorridor,
} from "../src/index.js";

const complete: TradeLaneCorridor = {
  tradeLaneId: "TL-CN-AE-COMPLETE",
  originCountry: "CN",
  destinationCountry: "AE",
  mode: "ocean",
  originGatewayId: "GATEWAY-CN-SHANGHAI-PORT",
  destinationGatewayId: "GATEWAY-AE-KHALIFA",
  candidateServiceIds: ["SERVICE-MSC-UAE-GENERAL"],
  cargoScope: ["general"],
  status: "candidate_route",
  decisionState: "confirmation_required",
  requiredConfirmations: ["carrier_schedule"],
  riskFlags: ["live_schedule_not_integrated"],
  reviewBy: "2026-09-05",
};

const incomplete: TradeLaneCorridor = {
  ...complete,
  tradeLaneId: "TL-CN-AE-INCOMPLETE",
  originGatewayId: null,
  candidateServiceIds: [],
  decisionState: "source_unavailable",
};

test("validator exposes explicit corridor structure gaps", () => {
  const findings = validateTradeLaneCorridors([complete, incomplete]);
  assert.deepEqual(findings, [
    {
      tradeLaneId: "TL-CN-AE-INCOMPLETE",
      issues: ["missing_origin_gateway", "missing_carrier_service"],
    },
  ]);
});

test("mixed complete and incomplete records remain confirmation-required, not falsely unavailable", () => {
  const result = evaluateTradeLane(
    {
      originCountry: "CN",
      destinationCountry: "AE",
      mode: "ocean",
      cargoCategories: ["general"],
      transactionDate: "2026-08-05",
    },
    [complete, incomplete],
  );

  assert.equal(result.decisionState, "confirmation_required");
  assert.ok(result.requiredConfirmations.includes("TL-CN-AE-INCOMPLETE:missing_origin_gateway"));
  assert.ok(result.riskFlags.includes("missing_carrier_service"));
});

test("only incomplete matching corridors return source unavailable", () => {
  const result = evaluateTradeLane(
    {
      originCountry: "CN",
      destinationCountry: "AE",
      mode: "ocean",
      cargoCategories: ["general"],
      transactionDate: "2026-08-05",
    },
    [incomplete],
  );

  assert.equal(result.decisionState, "source_unavailable");
  assert.match(result.reasons.join(" "), /No complete matching corridor/);
});

test("duplicate corridor IDs are rejected", () => {
  assert.throws(
    () => evaluateTradeLane(
      {
        originCountry: "CN",
        destinationCountry: "AE",
        mode: "ocean",
        cargoCategories: ["general"],
        transactionDate: "2026-08-05",
      },
      [complete, { ...complete }],
    ),
    /IDs must be unique/,
  );
});
