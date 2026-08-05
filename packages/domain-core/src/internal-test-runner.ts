import {
  evaluateIntegratedDecision,
  type IntegratedDecisionInput,
  type IntegratedDecisionResult,
  type IntegratedDecisionState,
} from "./integrated-decision-engine.js";
import type { DestinationCountryRule } from "./country-requirements-evaluator.js";
import type { TradeLaneCorridor } from "./trade-lane-evaluator.js";

export interface InternalTestScenario {
  caseId: string;
  title: string;
  countryRuleFile: string;
  input: IntegratedDecisionInput;
  expected: {
    decisionState: IntegratedDecisionState;
  };
}

export interface InternalTestExecution {
  caseId: string;
  title: string;
  passed: boolean;
  expectedDecisionState: IntegratedDecisionState;
  actualDecisionState: IntegratedDecisionState;
  result: IntegratedDecisionResult;
  defects: string[];
}

export interface InternalTestCycleResult {
  cycleId: string;
  executedAt: string;
  total: number;
  passed: number;
  failed: number;
  gateStatus: "PASS" | "FAIL";
  executions: InternalTestExecution[];
}

export function executeInternalTestCycle(
  scenarios: InternalTestScenario[],
  corridors: TradeLaneCorridor[],
  rulesByFile: Record<string, DestinationCountryRule[]>,
  cycleId: string,
  executedAt = new Date().toISOString(),
): InternalTestCycleResult {
  const executions = scenarios.map((scenario): InternalTestExecution => {
    const rules = rulesByFile[scenario.countryRuleFile];
    if (!rules) {
      throw new Error(`Missing country rule file: ${scenario.countryRuleFile}`);
    }

    const result = evaluateIntegratedDecision(
      scenario.input,
      corridors,
      rules,
      executedAt,
    );
    const defects: string[] = [];

    if (result.decisionState !== scenario.expected.decisionState) {
      defects.push(
        `Expected ${scenario.expected.decisionState} but received ${result.decisionState}`,
      );
    }
    if (result.reasons.length === 0) defects.push("No decision reason was returned");
    if (
      result.decisionState === "confirmation_required" &&
      result.requiredConfirmations.length === 0
    ) {
      defects.push("Confirmation-required result has no confirmation checklist");
    }
    if (
      result.decisionState === "blocked_information_required" &&
      result.missingInformation.length === 0 &&
      result.cargo.requiredEvidence.length === 0
    ) {
      defects.push("Blocked result has no missing-information or evidence checklist");
    }

    return {
      caseId: scenario.caseId,
      title: scenario.title,
      passed: defects.length === 0,
      expectedDecisionState: scenario.expected.decisionState,
      actualDecisionState: result.decisionState,
      result,
      defects,
    };
  });

  const passed = executions.filter((execution) => execution.passed).length;
  const failed = executions.length - passed;

  return {
    cycleId,
    executedAt,
    total: executions.length,
    passed,
    failed,
    gateStatus: failed === 0 ? "PASS" : "FAIL",
    executions,
  };
}

export function renderInternalTestCycleMarkdown(
  cycle: InternalTestCycleResult,
  language: "en" | "ar" = "en",
): string {
  const lines: string[] = [];
  if (language === "ar") {
    lines.push(`# تقرير دورة الاختبار الداخلي ${cycle.cycleId}`);
    lines.push("");
    lines.push(`- الحالة: **${cycle.gateStatus}**`);
    lines.push(`- إجمالي الحالات: ${cycle.total}`);
    lines.push(`- ناجح: ${cycle.passed}`);
    lines.push(`- فاشل: ${cycle.failed}`);
  } else {
    lines.push(`# Internal Test Cycle ${cycle.cycleId}`);
    lines.push("");
    lines.push(`- Gate: **${cycle.gateStatus}**`);
    lines.push(`- Total: ${cycle.total}`);
    lines.push(`- Passed: ${cycle.passed}`);
    lines.push(`- Failed: ${cycle.failed}`);
  }

  for (const execution of cycle.executions) {
    lines.push("");
    lines.push(`## ${execution.caseId}: ${execution.title}`);
    lines.push(`- ${language === "ar" ? "النتيجة" : "Result"}: ${execution.passed ? "PASS" : "FAIL"}`);
    lines.push(`- ${language === "ar" ? "حالة القرار" : "Decision state"}: ${execution.actualDecisionState}`);
    lines.push(`- ${language === "ar" ? "التأكيدات المطلوبة" : "Required confirmations"}: ${execution.result.requiredConfirmations.join(", ") || "none"}`);
    lines.push(`- ${language === "ar" ? "المعلومات الناقصة" : "Missing information"}: ${execution.result.missingInformation.join(", ") || "none"}`);
    if (execution.defects.length > 0) {
      lines.push(`- ${language === "ar" ? "العيوب" : "Defects"}: ${execution.defects.join("; ")}`);
    }
  }

  return `${lines.join("\n")}\n`;
}
