import {
  prescreenCargo,
  type DgPrescreenInput,
  type DgPrescreenResult,
  type DgPrescreenStatus,
} from "./dg-prescreen.js";

function unique<T>(values: T[]): T[] {
  return [...new Set(values)];
}

function parseDate(value: string, field: string): Date {
  const parsed = new Date(`${value}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(parsed.valueOf())) {
    throw new Error(`${field} must be a valid ISO date (YYYY-MM-DD)`);
  }
  return parsed;
}

export function prescreenCargoEnhanced(
  input: DgPrescreenInput,
  evaluatedAt = new Date().toISOString(),
): DgPrescreenResult {
  const base = prescreenCargo(input, evaluatedAt);
  const statuses = new Set<DgPrescreenStatus>(base.statuses);
  const missing = new Set(base.missingInformation);
  const indicators = [...base.indicators];
  const requiredEvidence = [...base.requiredEvidence];
  const confirmations = [...base.confirmations];
  const nextActions = [...base.nextActions];

  const hazardIndicators = new Set(input.product.hazardIndicators ?? []);
  const hasRegulatedData = Boolean(
    input.technicalData?.unNumber ||
      input.technicalData?.properShippingName ||
      input.technicalData?.classOrDivision ||
      input.technicalData?.packingGroup,
  );

  if (
    input.product.compositionKnown === true &&
    hazardIndicators.has("unknown_chemical_composition")
  ) {
    statuses.add("INSUFFICIENT_INFORMATION");
    statuses.add("SPECIALIST_CONFIRMATION_REQUIRED");
    indicators.push({
      indicatorId: "DG-CONTRADICTORY-COMPOSITION",
      category: "data_contradiction",
      severity: "critical",
      whyItMatters: {
        en: "The declared known composition conflicts with an unknown-composition hazard indicator.",
        ar: "يتعارض التصريح بأن التركيب معروف مع وجود مؤشر بأن التركيب الكيميائي غير معروف.",
      },
    });
    missing.add("resolve_composition_contradiction");
    requiredEvidence.push({
      evidenceId: "verified_composition_and_current_sds",
      status: "DOCUMENT_REVIEW_REQUIRED",
      reason: {
        en: "Conflicting declarations must be reconciled against current technical evidence.",
        ar: "يجب تسوية التصريحات المتعارضة بالرجوع إلى مستندات فنية حالية.",
      },
      blockedWithoutIt: true,
    });
    confirmations.push({
      type: "specialist",
      reason: {
        en: "A material contradiction cannot be resolved by automatic screening.",
        ar: "لا يمكن حسم التعارض الجوهري من خلال الفحص الآلي.",
      },
      impactIfNotConfirmed: {
        en: "Do not rely on the cargo classification or proceed to booking.",
        ar: "لا تعتمد على تصنيف البضاعة ولا تنتقل إلى الحجز.",
      },
    });
  }

  if (input.technicalData?.sdsAvailable === false && hasRegulatedData) {
    statuses.add("INSUFFICIENT_INFORMATION");
    statuses.add("DANGEROUS_GOODS_DATA_REQUIRED");
    indicators.push({
      indicatorId: "DG-REGULATED-DATA-WITHOUT-SDS",
      category: "document_contradiction",
      severity: "high",
      whyItMatters: {
        en: "Regulated transport data were declared while the supporting safety data sheet was declared unavailable.",
        ar: "تم إدخال بيانات نقل منظمة مع التصريح بعدم توفر صحيفة بيانات السلامة الداعمة.",
      },
    });
    missing.add("current_sds_or_equivalent_verified_document");
    requiredEvidence.push({
      evidenceId: "current_sds_or_equivalent_verified_document",
      status: "NOT_PROVIDED",
      reason: {
        en: "Declared regulated data require current supporting documentation and review.",
        ar: "تحتاج بيانات النقل المنظمة المعلنة إلى مستند داعم حالي ومراجعته.",
      },
      blockedWithoutIt: true,
    });
  }

  if (input.technicalData?.sdsRevisionDate) {
    const revision = parseDate(
      input.technicalData.sdsRevisionDate,
      "technicalData.sdsRevisionDate",
    );
    const evaluation = new Date(evaluatedAt);
    if (Number.isNaN(evaluation.valueOf())) {
      throw new Error("evaluatedAt must be a valid ISO date");
    }
    const ageDays = Math.floor(
      (evaluation.valueOf() - revision.valueOf()) / (24 * 60 * 60 * 1000),
    );

    if (ageDays < 0) {
      statuses.add("INSUFFICIENT_INFORMATION");
      indicators.push({
        indicatorId: "DG-SDS-FUTURE-DATE",
        category: "document_date",
        severity: "high",
        whyItMatters: {
          en: "The safety data sheet revision date is later than the evaluation date.",
          ar: "تاريخ مراجعة صحيفة بيانات السلامة لاحق لتاريخ التقييم.",
        },
      });
      missing.add("correct_sds_revision_date");
    } else if (ageDays > 1095) {
      statuses.add("DANGEROUS_GOODS_DATA_REQUIRED");
      statuses.add("SPECIALIST_CONFIRMATION_REQUIRED");
      indicators.push({
        indicatorId: "DG-SDS-STALE-REVIEW",
        category: "document_age",
        severity: "high",
        whyItMatters: {
          en: "The safety data sheet is older than the internal three-year review threshold and requires current verification.",
          ar: "صحيفة بيانات السلامة أقدم من حد المراجعة الداخلي البالغ ثلاث سنوات وتحتاج تحققًا حاليًا.",
        },
      });
      requiredEvidence.push({
        evidenceId: "current_sds_verification",
        status: "EXPIRED_OR_STALE",
        reason: {
          en: "Document age exceeds the internal review threshold; this is not a legal expiry determination.",
          ar: "عمر المستند تجاوز حد المراجعة الداخلي، وهذا لا يمثل حكمًا قانونيًا بانتهاء الصلاحية.",
        },
        blockedWithoutIt: true,
      });
      missing.add("current_sds_verification");
    }
  } else if (input.technicalData?.sdsAvailable === true) {
    statuses.add("DANGEROUS_GOODS_DATA_REQUIRED");
    missing.add("technicalData.sdsRevisionDate");
    requiredEvidence.push({
      evidenceId: "sds_revision_date",
      status: "DOCUMENT_REVIEW_REQUIRED",
      reason: {
        en: "The SDS was declared available, but its revision date was not provided for currency review.",
        ar: "تم التصريح بتوفر صحيفة بيانات السلامة دون تقديم تاريخ مراجعتها للتحقق من حداثتها.",
      },
      blockedWithoutIt: true,
    });
  }

  if (statuses.has("SPECIALIST_CONFIRMATION_REQUIRED")) {
    confirmations.push({
      type: "specialist",
      reason: {
        en: "Technical evidence or contradictory data require competent specialist review.",
        ar: "تحتاج المستندات الفنية أو البيانات المتعارضة إلى مراجعة متخصص مختص.",
      },
      impactIfNotConfirmed: {
        en: "The result remains blocked and must not be treated as final classification.",
        ar: "تظل النتيجة محجوبة ولا يجوز معاملتها كتصنيف نهائي.",
      },
    });
  }

  nextActions.push({
    en: "Resolve contradictory declarations and verify document currency before relying on the pre-screen result.",
    ar: "سوِّ التصريحات المتعارضة وتحقق من حداثة المستندات قبل الاعتماد على نتيجة الفحص المبدئي.",
  });

  return {
    ...base,
    statuses: unique([...statuses]),
    indicators,
    missingInformation: [...missing].sort(),
    requiredEvidence,
    confirmations: confirmations.filter(
      (item, index, array) =>
        array.findIndex(
          (candidate) =>
            candidate.type === item.type &&
            candidate.reason.en === item.reason.en,
        ) === index,
    ),
    nextActions,
    confidence:
      statuses.has("INSUFFICIENT_INFORMATION") ||
      statuses.has("SPECIALIST_CONFIRMATION_REQUIRED")
        ? "low"
        : base.confidence,
    audit: {
      ...base.audit,
      ruleVersion: "DG-PRESCREEN-0.2",
    },
  };
}
