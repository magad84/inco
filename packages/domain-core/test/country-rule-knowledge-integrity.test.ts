import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

interface BilingualText {
  en: string;
  ar: string;
}

interface CountryRule {
  ruleId: string;
  countryCode: string;
  jurisdiction: BilingualText;
  stage: string;
  category: string;
  status: string;
  requiredInputs?: string[];
  outcome: {
    decision: string;
    message: BilingualText;
    nextAction?: BilingualText;
    impactIfNotConfirmed?: BilingualText;
  };
  confirmation: {
    required: boolean;
    authorityOrProvider: BilingualText;
    reason: BilingualText;
    sourceRoute?: string | null;
  };
  sources: string[];
  review: {
    lastVerifiedAt: string | null;
    nextReviewAt: string;
    reviewOwner: string;
    notes?: string;
  };
}

interface CountryRuleFile {
  datasetVersion: string;
  countryCode: string;
  status: string;
  policy: string;
  rules: CountryRule[];
}

const root = resolve(process.cwd(), "../..");
const packs = [
  ["AE", "uae.v0.1.json"],
  ["SA", "ksa.v0.1.json"],
  ["EG", "egypt.v0.1.json"],
  ["OM", "oman.v0.1.json"],
] as const;

function readPack(fileName: string): CountryRuleFile {
  return JSON.parse(
    readFileSync(resolve(root, "knowledge/country-rules", fileName), "utf8"),
  ) as CountryRuleFile;
}

function assertBilingual(value: BilingualText, label: string): void {
  assert.ok(value.en.trim().length > 0, `${label}.en is required`);
  assert.ok(value.ar.trim().length > 0, `${label}.ar is required`);
}

function assertIsoDate(value: string, label: string): void {
  assert.match(value, /^\d{4}-\d{2}-\d{2}/, `${label} must be an ISO date`);
}

test("launch destination-country rules are traceable and uncertainty-safe", () => {
  const ids = new Set<string>();

  for (const [countryCode, fileName] of packs) {
    const data = readPack(fileName);
    assert.equal(data.countryCode, countryCode);
    assert.ok(data.rules.length >= 3, `${countryCode} needs at least three seed rules`);
    assert.ok(data.policy.length > 0);

    for (const rule of data.rules) {
      assert.match(rule.ruleId, new RegExp(`^CR-${countryCode}-`));
      assert.ok(!ids.has(rule.ruleId), `Duplicate rule ${rule.ruleId}`);
      ids.add(rule.ruleId);

      assert.equal(rule.countryCode, countryCode);
      assertBilingual(rule.jurisdiction, `${rule.ruleId}.jurisdiction`);
      assertBilingual(rule.outcome.message, `${rule.ruleId}.outcome.message`);
      assertBilingual(
        rule.confirmation.authorityOrProvider,
        `${rule.ruleId}.confirmation.authorityOrProvider`,
      );
      assertBilingual(rule.confirmation.reason, `${rule.ruleId}.confirmation.reason`);

      assert.ok(rule.sources.length > 0, `${rule.ruleId} requires a source reference`);
      assert.ok(rule.review.reviewOwner.length > 0, `${rule.ruleId} requires a review owner`);
      assertIsoDate(rule.review.nextReviewAt, `${rule.ruleId}.review.nextReviewAt`);

      if (rule.status === "research_seed" || rule.review.lastVerifiedAt === null) {
        assert.equal(
          rule.confirmation.required,
          true,
          `${rule.ruleId} must require confirmation until verified`,
        );
        assert.ok(
          ["confirmation_required", "source_unavailable", "conditional"].includes(
            rule.outcome.decision,
          ),
          `${rule.ruleId} cannot issue a definitive decision while unverified`,
        );
      }

      if (rule.confirmation.required) {
        assert.ok(rule.outcome.nextAction, `${rule.ruleId} requires a next action`);
        assert.ok(
          rule.outcome.impactIfNotConfirmed,
          `${rule.ruleId} requires impact-if-not-confirmed guidance`,
        );
      }
    }
  }
});
