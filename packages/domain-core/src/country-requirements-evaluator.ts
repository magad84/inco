export type CountryRuleDecision =
  | "requirement_applies"
  | "conditional"
  | "confirmation_required"
  | "source_unavailable"
  | "not_applicable";

export interface BilingualText {
  en: string;
  ar: string;
}

export interface DestinationCountryRule {
  ruleId: string;
  countryCode: string;
  stage: string;
  category: string;
  status: "research_seed" | "verified_partial" | "verified" | "stale_review_required" | "inactive";
  trigger: Record<string, unknown>;
  requiredInputs?: string[];
  outcome: {
    decision: CountryRuleDecision;
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
  effectiveFrom?: string | null;
  effectiveTo?: string | null;
  sources: string[];
  review: {
    lastVerifiedAt: string | null;
    nextReviewAt: string;
    reviewOwner: string;
    notes?: string;
  };
}

export interface CountryRuleSourceFinding {
  ruleId: string;
  issues: string[];
  executableStatus: "verified" | "confirmation_required" | "source_unavailable";
}

export interface CountryRequirementsInput {
  countryCode: string;
  transactionDate: string;
  facts: Record<string, unknown>;
}

export interface CountryRequirementFinding {
  ruleId: string;
  stage: string;
  category: string;
  decision: CountryRuleDecision;
  missingInputs: string[];
  message: BilingualText;
  nextAction?: BilingualText;
  impactIfNotConfirmed?: BilingualText;
  authorityOrProvider: BilingualText;
  confirmationRequired: boolean;
  stale: boolean;
  sources: string[];
}

export interface CountryRequirementsResult {
  countryCode: string;
  status: "requirements_found" | "confirmation_required" | "source_unavailable" | "no_applicable_rules";
  findings: CountryRequirementFinding[];
  missingInputs: string[];
  staleRuleIds: string[];
  audit: {
    evaluatedAt: string;
    evaluatedRuleIds: string[];
    sourceGovernanceFindings: CountryRuleSourceFinding[];
  };
}

function parseDate(value: string, label: string): Date {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) throw new Error(`${label} must be a valid ISO date`);
  return parsed;
}

export function validateCountryRuleSources(
  rules: DestinationCountryRule[],
): CountryRuleSourceFinding[] {
  const seen = new Set<string>();
  return rules.map((rule) => {
    const issues: string[] = [];
    if (!rule.ruleId.trim()) issues.push("missing_rule_id");
    if (seen.has(rule.ruleId)) issues.push("duplicate_rule_id");
    seen.add(rule.ruleId);
    if (rule.sources.length === 0) issues.push("missing_source_record");
    if (!rule.review.reviewOwner.trim()) issues.push("missing_review_owner");
    parseDate(rule.review.nextReviewAt, `${rule.ruleId}.nextReviewAt`);
    if (rule.review.lastVerifiedAt) parseDate(rule.review.lastVerifiedAt, `${rule.ruleId}.lastVerifiedAt`);
    if (rule.status === "verified" && !rule.review.lastVerifiedAt) issues.push("verified_without_verification_date");
    if (rule.status === "verified" && !rule.confirmation.sourceRoute) issues.push("verified_without_official_source_route");
    if (rule.status === "research_seed") issues.push("research_seed_not_fully_verified");
    if (rule.review.lastVerifiedAt === null) issues.push("missing_last_verified_at");

    let executableStatus: CountryRuleSourceFinding["executableStatus"] = "verified";
    if (issues.includes("missing_source_record")) executableStatus = "source_unavailable";
    else if (issues.length > 0 || rule.status !== "verified") executableStatus = "confirmation_required";

    return { ruleId: rule.ruleId, issues, executableStatus };
  });
}

function hasFact(facts: Record<string, unknown>, key: string): boolean {
  const value = facts[key];
  return value !== undefined && value !== null && value !== "";
}

function matchesValue(actual: unknown, expected: unknown): boolean {
  return Array.isArray(expected) ? expected.includes(actual) : actual === expected;
}

function triggerMatches(trigger: Record<string, unknown>, facts: Record<string, unknown>): boolean {
  for (const [key, expected] of Object.entries(trigger)) {
    if (!hasFact(facts, key)) continue;
    if (!matchesValue(facts[key], expected)) return false;
  }
  return true;
}

export function evaluateCountryRequirements(
  input: CountryRequirementsInput,
  rules: DestinationCountryRule[],
  evaluatedAt = new Date().toISOString(),
): CountryRequirementsResult {
  if (!/^[A-Z]{2}$/.test(input.countryCode)) throw new Error("countryCode must be an ISO alpha-2 uppercase code");

  const transactionDate = parseDate(input.transactionDate, "transactionDate");
  parseDate(evaluatedAt, "evaluatedAt");
  const governance = validateCountryRuleSources(rules);
  if (governance.some((finding) => finding.issues.includes("duplicate_rule_id"))) {
    throw new Error("country rule IDs must be unique");
  }

  const countryRules = rules.filter((rule) => rule.countryCode === input.countryCode && rule.status !== "inactive");
  if (countryRules.length === 0) {
    return {
      countryCode: input.countryCode,
      status: "source_unavailable",
      findings: [],
      missingInputs: [],
      staleRuleIds: [],
      audit: { evaluatedAt, evaluatedRuleIds: [], sourceGovernanceFindings: governance },
    };
  }

  const findings: CountryRequirementFinding[] = [];
  const allMissing = new Set<string>();
  const staleRuleIds: string[] = [];

  for (const rule of countryRules) {
    if (!triggerMatches(rule.trigger, input.facts)) continue;
    const sourceFinding = governance.find((finding) => finding.ruleId === rule.ruleId)!;
    const missingInputs = (rule.requiredInputs ?? []).filter((key) => !hasFact(input.facts, key));
    for (const key of missingInputs) allMissing.add(key);

    const reviewDate = parseDate(rule.review.nextReviewAt, `${rule.ruleId}.nextReviewAt`);
    const effectiveFrom = rule.effectiveFrom ? parseDate(rule.effectiveFrom, `${rule.ruleId}.effectiveFrom`) : null;
    const effectiveTo = rule.effectiveTo ? parseDate(rule.effectiveTo, `${rule.ruleId}.effectiveTo`) : null;
    const outsideEffectivePeriod = (effectiveFrom !== null && transactionDate < effectiveFrom) || (effectiveTo !== null && transactionDate > effectiveTo);
    if (outsideEffectivePeriod) continue;

    const stale = transactionDate > reviewDate || rule.status === "stale_review_required" || rule.review.lastVerifiedAt === null;
    if (stale) staleRuleIds.push(rule.ruleId);

    let decision = rule.outcome.decision;
    let confirmationRequired = rule.confirmation.required;
    if (sourceFinding.executableStatus === "source_unavailable") {
      decision = "source_unavailable";
      confirmationRequired = true;
    } else if (missingInputs.length > 0 || stale || sourceFinding.executableStatus === "confirmation_required") {
      decision = "confirmation_required";
      confirmationRequired = true;
    }

    findings.push({
      ruleId: rule.ruleId,
      stage: rule.stage,
      category: rule.category,
      decision,
      missingInputs,
      message: rule.outcome.message,
      ...(rule.outcome.nextAction ? { nextAction: rule.outcome.nextAction } : {}),
      ...(rule.outcome.impactIfNotConfirmed ? { impactIfNotConfirmed: rule.outcome.impactIfNotConfirmed } : {}),
      authorityOrProvider: rule.confirmation.authorityOrProvider,
      confirmationRequired,
      stale,
      sources: [...rule.sources],
    });
  }

  let status: CountryRequirementsResult["status"] = "no_applicable_rules";
  if (findings.some((finding) => finding.decision === "source_unavailable")) status = "source_unavailable";
  else if (findings.some((finding) => finding.confirmationRequired || finding.decision === "confirmation_required" || finding.decision === "conditional")) status = "confirmation_required";
  else if (findings.length > 0) status = "requirements_found";

  return {
    countryCode: input.countryCode,
    status,
    findings,
    missingInputs: [...allMissing].sort(),
    staleRuleIds: [...new Set(staleRuleIds)].sort(),
    audit: {
      evaluatedAt,
      evaluatedRuleIds: findings.map((finding) => finding.ruleId),
      sourceGovernanceFindings: governance.filter((finding) => countryRules.some((rule) => rule.ruleId === finding.ruleId)),
    },
  };
}
