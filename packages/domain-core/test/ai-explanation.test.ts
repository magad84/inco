import assert from "node:assert/strict";
import test from "node:test";
import { explainDecision, sanitizeDecisionForAi, type IntegratedDecisionResult } from "../src/index.js";

const result = {
  decisionState: "confirmation_required",
  lane: {}, cargo: {}, destination: {},
  criticalRisks: ["live_schedule_not_integrated"],
  missingInformation: ["temperature_range"],
  requiredConfirmations: ["carrier_acceptance"],
  sources: ["SOURCE-001"],
  reasons: ["Current confirmation is required."],
} as unknown as IntegratedDecisionResult;

test("AI projection contains only controlled deterministic fields", () => {
  const projection = sanitizeDecisionForAi(result);
  assert.deepEqual(Object.keys(projection).sort(), [
    "criticalRisks", "decisionState", "missingInformation", "reasons", "requiredConfirmations", "sourceIds",
  ].sort());
  assert.equal(JSON.stringify(projection).includes("customer"), false);
});

test("disabled AI returns deterministic state without network dependency", async () => {
  const output = await explainDecision(result, { enabled: false, provider: "disabled", model: "none" });
  assert.equal(output.status, "disabled");
  assert.equal(output.deterministicDecisionState, "confirmation_required");
});

test("provider failure degrades to deterministic-only result", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("offline"); };
  try {
    const output = await explainDecision(result, {
      enabled: true,
      provider: "openrouter",
      model: "openrouter/free",
      openRouterApiKey: "test-key",
      fallbackProvider: "ollama",
      fallbackModel: "local-model",
      timeoutMs: 10,
    });
    assert.equal(output.status, "unavailable");
    assert.equal(output.deterministicDecisionState, result.decisionState);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("fallback provider may explain but cannot replace deterministic state", async () => {
  const originalFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    if (calls === 1) throw new Error("primary unavailable");
    return new Response(JSON.stringify({ response: "Controlled explanation" }), { status: 200, headers: { "content-type": "application/json" } });
  };
  try {
    const output = await explainDecision(result, {
      enabled: true,
      provider: "openrouter",
      model: "openrouter/free",
      openRouterApiKey: "test-key",
      fallbackProvider: "ollama",
      fallbackModel: "local-model",
    });
    assert.equal(output.status, "generated");
    assert.equal(output.provider, "ollama");
    assert.equal(output.deterministicDecisionState, "confirmation_required");
  } finally {
    globalThis.fetch = originalFetch;
  }
});
