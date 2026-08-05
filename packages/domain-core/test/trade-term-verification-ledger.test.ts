import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(process.cwd(), "../..");
const dataset = JSON.parse(readFileSync(resolve(root, "knowledge/trade-terms.v0.1.json"), "utf8")) as {
  rules: Array<{ rule_id: string; term_code: string }>;
};
const ledger = JSON.parse(readFileSync(resolve(root, "knowledge/trade-terms.verification.v1.0.json"), "utf8")) as {
  sourceId: string;
  reviewedAt: string;
  records: Array<{
    termCode: string;
    ruleId: string;
    status: string;
    sourcePageStart: number;
    sourcePageEnd: number;
    checks: Record<string, boolean>;
  }>;
  gate: { status: string; recordCount: number; allowedForPublicOutput: boolean; conditions: string[] };
};

const approved = ["EXW", "FCA", "CPT", "CIP", "DAP", "DPU", "DDP", "FAS", "FOB", "CFR", "CIF"];

test("verification ledger covers each controlled trade-term record exactly once", () => {
  assert.equal(ledger.sourceId, "INTERNAL-TRADE-001");
  assert.match(ledger.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert.deepEqual(ledger.records.map((r) => r.termCode).sort(), approved.slice().sort());
  assert.equal(new Set(ledger.records.map((r) => r.ruleId)).size, 11);
  assert.deepEqual(
    ledger.records.map((r) => r.ruleId).sort(),
    dataset.rules.map((r) => r.rule_id).sort(),
  );
});

test("every verification record passes all required conceptual checks", () => {
  for (const record of ledger.records) {
    assert.equal(record.status, "VERIFIED");
    assert.ok(record.sourcePageStart > 0);
    assert.ok(record.sourcePageEnd >= record.sourcePageStart);
    assert.equal(Object.keys(record.checks).length, 9);
    assert.ok(Object.values(record.checks).every(Boolean), `${record.termCode} has an incomplete review`);
  }
});

test("publication overlay remains conditional and does not expose protected source text", () => {
  assert.equal(ledger.gate.status, "PASS");
  assert.equal(ledger.gate.recordCount, 11);
  assert.equal(ledger.gate.allowedForPublicOutput, true);
  assert.ok(ledger.gate.conditions.includes("original_inco_wording_only"));
  assert.ok(ledger.gate.conditions.includes("no_protected_source_text"));
  assert.ok(ledger.gate.conditions.includes("named_point_required"));
  assert.ok(ledger.gate.conditions.includes("version_required"));
});
