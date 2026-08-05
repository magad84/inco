import type { IntegratedDecisionResult } from "./integrated-decision-engine.js";

export interface InternalTestReportInput {
  caseId: string;
  title: { en: string; ar: string };
  result: IntegratedDecisionResult;
  generatedAt: string;
}

function list(items: string[]): string {
  return items.length > 0 ? items.map((item) => `- ${item}`).join("\n") : "- None / لا يوجد";
}

export function renderInternalTestReport(input: InternalTestReportInput): string {
  const { result } = input;
  return [
    `# ${input.caseId} - ${input.title.en}`,
    `## ${input.title.ar}`,
    "",
    `**Generated / تاريخ الإنشاء:** ${input.generatedAt}`,
    `**Decision / القرار:** \`${result.decisionState}\``,
    "",
    "## Reasons / الأسباب",
    list(result.reasons),
    "",
    "## Critical Risks / المخاطر الحرجة",
    list(result.criticalRisks),
    "",
    "## Missing Information / البيانات الناقصة",
    list(result.missingInformation),
    "",
    "## Required Confirmations / التأكيدات المطلوبة",
    list(result.requiredConfirmations),
    "",
    "## Sources / المصادر",
    list(result.sources),
    "",
    "## Safety Boundary / حدود النتيجة",
    "This output is a deterministic decision-support result. It is not carrier acceptance, authority approval, customs clearance, or a final dangerous-goods classification.",
    "هذه النتيجة دعم قرار حتمي، وليست قبول ناقل أو موافقة جهة أو تخليصًا جمركيًا أو تصنيفًا نهائيًا للبضائع الخطرة.",
    "",
  ].join("\n");
}
