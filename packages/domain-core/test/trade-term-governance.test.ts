import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

interface TradeTermRule {
  rule_id: string;
  term_code: string;
  status: string;
  source_ids: string[];
  last_verified: string | null;
  next_review: string | null;
  verification_status: string;
  delivery: { event_key: string };
  risk_transfer: { event_key: string; same_as_delivery_event: boolean };
  responsibilities: Record<string, string>;
  required_questions: string[];
}

const root = resolve(process.cwd(), "../..");
const dataset = JSON.parse(
  readFileSync(resolve(root, "knowledge/trade-terms.v0.1.json"), "utf8"),
) as { dataset_id: string; status: string; rules: TradeTermRule[] };

const expectedTerms = [
  "EXW", "FCA", "CPT", "CIP", "DAP", "DPU", "DDP", "FAS", "FOB", "CFR", "CIF",
];

test("trade-term dataset contains one controlled record for each approved term", () => {
  assert.equal(dataset.dataset_id, "INCO-TRADE-TERMS");
  assert.equal(dataset.rules.length, 11);
  assert.deepEqual(
    dataset.rules.map((rule) => rule.term_code).sort(),
    expectedTerms.slice().sort(),
  );
  assert.equal(new Set(dataset.rules.map((rule) => rule.rule_id)).size, 11);
});

test("unverified trade-term records cannot be presented as approved", () => {
  for (const rule of dataset.rules) {
    assert.equal(rule.status, "draft");
    assert.equal(rule.verification_status, "UNVERIFIED");
    assert.equal(rule.last_verified, null);
    assert.equal(rule.next_review, null);
    assert.ok(rule.source_ids.includes("INTERNAL-TRADE-001"));
  }
});

test("every trade term separates delivery, risk, responsibilities, and questions", () => {
  for (const rule of dataset.rules) {
    assert.ok(rule.delivery.event_key);
    assert.ok(rule.risk_transfer.event_key);
    assert.equal(rule.risk_transfer.same_as_delivery_event, true);
    assert.ok(Object.keys(rule.responsibilities).length >= 10);
    assert.ok(rule.required_questions.length > 0);
  }
});

test("maritime-only terms are limited to the approved set", () => {
  const maritime = dataset.rules
    .filter((rule) => !["EXW", "FCA", "CPT", "CIP", "DAP", "DPU", "DDP"].includes(rule.term_code))
    .map((rule) => rule.term_code)
    .sort();
  assert.deepEqual(maritime, ["CFR", "CIF", "FAS", "FOB"]);
});
