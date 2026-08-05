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
  status:
    | "requirements_found"
    | "confirmation_required"
    | "source_unavailable"
    | "no_applicable_rules";
  findings: CountryRequirementFinding[];
  missingInputs: string[];
  staleRuleIds: string[];
  audit: {
    evaluatedAt: string;
    evaluatedRuleIds: string[];
  };
}

function parseDate(value: string, label: string): Date {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`${label} must be a valid ISO date`);
  }
  return parsed;
}

function hasFact(facts: Record<string, unknown>, key: string): boolean {
  const value = facts[key];
  return value !== undefined && value !== null && value !== "";
}

function matchesValue(actual: unknown, expected: unknown): boolean {
  if (Array.isArray(expected)) {
    return expected.includes(actual);
  }
  return actual === expected;
}

function triggerMatches(
  trigger: Record<string, unknown>,
  facts: Record<string, unknown>,
): boolean {
  for (const [key, expected] of Object.entries(trigger)) {
    if (!hasFact(facts, key)) {
      continue;
    }
    if (!matchesValue(facts[key], expected)) {
      return false;
    }
  }
  return true;
}

export function evaluateCountryRequirements(
  input: CountryRequirementsInput,
  rules: DestinationCountryRule[],
  evaluatedAt = new Date().toISOString(),
): CountryRequirementsResult {
  if (!/^[A-Z]{2}$/.test(input.countryCode)) {
    throw new Error("countryCode must be an ISO alpha-2 uppercase code");
  }

  const transactionDate = parseDate(input.transactionDate, "transactionDate");
  parseDate(evaluatedAt, "evaluatedAt");

  const countryRules = rules.filter(
    (rule) => rule.countryCode === input.countryCode && rule.status !== "inactive",
  );

  if (countryRules.length === 0) {
    return {
      countryCode: input.countryCode,
      status: "source_unavailable",
      findings: [],
      missingInputs: [],
      staleRuleIds: [],
      audit: { evaluatedAt, evaluatedRuleIds: [] },
    };
  }

  const findings: CountryRequirementFinding[] = [];
  const allMissing = new Set<string>();
  const staleRuleIds: string[] = [];

  for (const rule of countryRules) {
    if (!triggerMatches(rule.trigger, input.facts)) {
      continue;
    }

    const missingInputs = (rule.requiredInputs ?? []).filter(
      (key) => !hasFact(input.facts, key),
    );
    for (const key of missingInputs) allMissing.add(key);

    const reviewDate = parseDate(rule.review.nextReviewAt, `${rule.ruleId}.nextReviewAt`);
    const effectiveFrom = rule.effectiveFrom
      ? parseDate(rule.effectiveFrom, `${rule.ruleId}.effectiveFrom`)
      : null;
    const effectiveTo = rule.effectiveTo
      ? parseDate(rule.effectiveTo, `${rule.ruleId}.effectiveTo`)
      : null;

    const outsideEffectivePeriod =
      (effectiveFrom !== null && transactionDate < effectiveFrom) ||
      (effectiveTo !== null && transactionDate > effectiveTo);

    if (outsideEffectivePeriod) {
      continue;
    }

    const stale =
      transactionDate > reviewDate ||
      rule.status === "stale_review_required" ||
      rule.review.lastVerifiedAt === null;

    if (stale) staleRuleIds.push(rule.ruleId);

    let decision = rule.outcome.decision;
    let confirmationRequired = rule.confirmation.required;

    if (missingInputs.length > 0 || stale || rule.status === "research_seed") {
      decision = stale && rule.sources.length === 0
        ? "source_unavailable"
        : "confirmation_required";
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
      ...(rule.outcome.impactIfNotConfirmed
        ? { impactIfNotConfirmed: rule.outcome.impactIfNotConfirmed }
        : {}),
      authorityOrProvider: rule.confirmation.authorityOrProvider,
      confirmationRequired,
      stale,
      sources: [...rule.sources],
    });
  }

  let status: CountryRequirementsResult["status"] = "no_applicable_rules";
  if (findings.some((finding) => finding.decision === "source_unavailable")) {
    status = "source_unavailable";
  } else if (
    findings.some(
      (finding) =>
        finding.confirmationRequired ||
        finding.decision === "confirmation_required" ||
        finding.decision === "conditional",
    )
  ) {
    status = "confirmation_required";
  } else if (findings.length > 0) {
    status = "requirements_found";
  }

  return {
    countryCode: input.countryCode,
    status,
    findings,
    missingInputs: [...allMissing].sort(),
    staleRuleIds: [...new Set(staleRuleIds)].sort(),
    audit: {
      evaluatedAt,
      evaluatedRuleIds: findings.map((finding) => finding.ruleId),
    },
  };
}
