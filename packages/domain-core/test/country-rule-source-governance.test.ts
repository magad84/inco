import assert from "node:assert/strict";
import test from "node:test";
import {
  evaluateCountryRequirements,
  validateCountryRuleSources,
  type DestinationCountryRule,
} from "../src/index.js";

function rule(overrides: Partial<DestinationCountryRule> = {}): DestinationCountryRule {
  return {
    ruleId: "CR-AE-TEST-001",
    countryCode: "AE",
    stage: "pre_import",
    category: "customs",
    status: "verified",
    trigger: { transactionRole: "import" },
    requiredInputs: ["transactionRole"],
    outcome: {
      decision: "requirement_applies",
      message: { en: "Requirement applies.", ar: "ينطبق المتطلب." },
    },
    confirmation: {
      required: false,
      authorityOrProvider: { en: "UAE customs", ar: "جمارك الإمارات" },
      reason: { en: "Official source reviewed.", ar: "تمت مراجعة المصدر الرسمي." },
      sourceRoute: "official customs portal",
    },
    effectiveFrom: null,
    effectiveTo: null,
    sources: ["SRC-AE-001"],
    review: {
      lastVerifiedAt: "2026-08-01T00:00:00Z",
      nextReviewAt: "2026-11-01T00:00:00Z",
      reviewOwner: "INCO Knowledge Governance",
    },
    ...overrides,
  };
}

test("verified rule with complete source lifecycle is executable", () => {
  const findings = validateCountryRuleSources([rule()]);
  assert.deepEqual(findings, [
    { ruleId: "CR-AE-TEST-001", issues: [], executableStatus: "verified" },
  ]);
});

test("research seed is forced to confirmation-required governance", () => {
  const seed = rule({
    status: "research_seed",
    review: {
      lastVerifiedAt: null,
      nextReviewAt: "2026-11-01T00:00:00Z",
      reviewOwner: "INCO Knowledge Governance",
    },
  });
  const [finding] = validateCountryRuleSources([seed]);
  assert.equal(finding?.executableStatus, "confirmation_required");
  assert.ok(finding?.issues.includes("research_seed_not_fully_verified"));
  assert.ok(finding?.issues.includes("missing_last_verified_at"));
});

test("missing source record produces source unavailable", () => {
  const unsupported = rule({ sources: [] });
  const result = evaluateCountryRequirements(
    {
      countryCode: "AE",
      transactionDate: "2026-08-05",
      facts: { transactionRole: "import" },
    },
    [unsupported],
    "2026-08-05T18:45:00Z",
  );

  assert.equal(result.status, "source_unavailable");
  assert.equal(result.findings[0]?.decision, "source_unavailable");
  assert.ok(
    result.audit.sourceGovernanceFindings[0]?.issues.includes("missing_source_record"),
  );
});

test("verified claim without date or official route cannot pass as verified", () => {
  const invalid = rule({
    confirmation: {
      required: false,
      authorityOrProvider: { en: "Authority", ar: "الجهة" },
      reason: { en: "Claimed verified.", ar: "معلن كمتحقق." },
      sourceRoute: null,
    },
    review: {
      lastVerifiedAt: null,
      nextReviewAt: "2026-11-01T00:00:00Z",
      reviewOwner: "INCO Knowledge Governance",
    },
  });
  const [finding] = validateCountryRuleSources([invalid]);
  assert.equal(finding?.executableStatus, "confirmation_required");
  assert.ok(finding?.issues.includes("verified_without_verification_date"));
  assert.ok(finding?.issues.includes("verified_without_official_source_route"));
});

test("duplicate country rule IDs are rejected", () => {
  assert.throws(
    () => evaluateCountryRequirements(
      {
        countryCode: "AE",
        transactionDate: "2026-08-05",
        facts: { transactionRole: "import" },
      },
      [rule(), rule()],
    ),
    /IDs must be unique/,
  );
});
