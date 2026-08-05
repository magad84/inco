export type DgPrescreenStatus =
  | "NO_INDICATOR_FOUND"
  | "POSSIBLE_DANGEROUS_GOODS"
  | "DANGEROUS_GOODS_DATA_REQUIRED"
  | "SPECIAL_CARGO_DATA_REQUIRED"
  | "CARRIER_ACCEPTANCE_REQUIRED"
  | "AUTHORITY_CONFIRMATION_REQUIRED"
  | "SPECIALIST_CONFIRMATION_REQUIRED"
  | "INSUFFICIENT_INFORMATION";

export interface DgPrescreenInput {
  product: {
    commercialName: string;
    technicalDescription: string;
    intendedUse?: string | null;
    compositionKnown?: boolean | null;
    physicalState:
      | "solid"
      | "liquid"
      | "gas"
      | "aerosol"
      | "powder"
      | "paste"
      | "gel"
      | "article"
      | "unknown";
    hazardIndicators?: string[];
    specialCargoIndicators?: string[];
  };
  technicalData?: {
    sdsAvailable?: boolean | null;
    sdsRevisionDate?: string | null;
    unNumber?: string | null;
    properShippingName?: string | null;
    classOrDivision?: string | null;
    packingGroup?: string | null;
    flashPointC?: number | null;
  };
  battery?: {
    present: boolean;
    chemistry?: string | null;
    configuration?: "alone" | "packed_with_equipment" | "contained_in_equipment" | null;
    wattHours?: number | null;
    damagedDefectiveRecalledPrototypeOrWaste?: boolean | null;
    testSummaryAvailable?: boolean | null;
  };
  package?: {
    packageCount?: number | null;
    netQuantity?: number | null;
    grossWeightKg?: number | null;
    packagingDescription?: string | null;
  };
  shipment: {
    originCountry: string;
    destinationCountry: string;
    transitCountries?: string[];
    mode: "ocean" | "air" | "courier" | "postal" | "road" | "multimodal";
    carrierId?: string | null;
    serviceId?: string | null;
    plannedShipmentDate: string;
  };
}

export interface DgPrescreenResult {
  statuses: DgPrescreenStatus[];
  confidence: "low" | "medium" | "high";
  indicators: Array<{
    indicatorId: string;
    category: string;
    severity: "critical" | "high" | "medium" | "low" | "information";
    whyItMatters: { en: string; ar: string };
  }>;
  missingInformation: string[];
  requiredEvidence: Array<{
    evidenceId: string;
    status:
      | "NOT_PROVIDED"
      | "USER_DECLARED"
      | "DOCUMENT_PROVIDED_UNREVIEWED"
      | "DOCUMENT_REVIEW_REQUIRED"
      | "SPECIALIST_VERIFIED"
      | "CARRIER_CONFIRMED"
      | "AUTHORITY_CONFIRMED"
      | "EXPIRED_OR_STALE";
    reason: { en: string; ar: string };
    blockedWithoutIt: boolean;
  }>;
  confirmations: Array<{
    type: "carrier" | "authority" | "specialist" | "country_and_mode";
    reason: { en: string; ar: string };
    impactIfNotConfirmed: { en: string; ar: string };
  }>;
  nextActions: Array<{ en: string; ar: string }>;
  audit: {
    ruleVersion: string;
    evaluatedAt: string;
    mode: string;
    disclaimerKeys: string[];
  };
}

function addStatus(statuses: Set<DgPrescreenStatus>, status: DgPrescreenStatus): void {
  statuses.add(status);
}

function addMissing(missing: Set<string>, key: string): void {
  missing.add(key);
}

export function prescreenCargo(
  input: DgPrescreenInput,
  evaluatedAt = new Date().toISOString(),
): DgPrescreenResult {
  const statuses = new Set<DgPrescreenStatus>();
  const missing = new Set<string>();
  const indicators: DgPrescreenResult["indicators"] = [];
  const requiredEvidence: DgPrescreenResult["requiredEvidence"] = [];
  const confirmations: DgPrescreenResult["confirmations"] = [];
  const nextActions: DgPrescreenResult["nextActions"] = [];

  if (!input.product.commercialName.trim()) addMissing(missing, "commercialName");
  if (!input.product.technicalDescription.trim()) addMissing(missing, "technicalDescription");
  if (input.product.physicalState === "unknown") addMissing(missing, "physicalState");
  if (!input.shipment.mode) addMissing(missing, "mode");

  const hazardIndicators = new Set(input.product.hazardIndicators ?? []);
  const specialIndicators = new Set(input.product.specialCargoIndicators ?? []);

  if (hazardIndicators.has("unknown_chemical_composition") || input.product.compositionKnown === false) {
    addStatus(statuses, "INSUFFICIENT_INFORMATION");
    addStatus(statuses, "DANGEROUS_GOODS_DATA_REQUIRED");
    indicators.push({
      indicatorId: "DG-UNKNOWN-COMPOSITION",
      category: "chemical_information",
      severity: "high",
      whyItMatters: {
        en: "Unknown composition prevents a reliable transport pre-screen.",
        ar: "التركيب غير المعروف يمنع إجراء فحص نقل مبدئي موثوق.",
      },
    });
    addMissing(missing, "composition_or_current_sds");
    requiredEvidence.push({
      evidenceId: "current_sds_or_technical_product_data",
      status: "NOT_PROVIDED",
      reason: {
        en: "Current technical data are needed before dangerous-goods indicators can be assessed reliably.",
        ar: "البيانات الفنية الحالية مطلوبة قبل تقييم مؤشرات البضائع الخطرة بصورة موثوقة.",
      },
      blockedWithoutIt: true,
    });
  }

  if (hazardIndicators.size > 0) {
    addStatus(statuses, "POSSIBLE_DANGEROUS_GOODS");
    addStatus(statuses, "DANGEROUS_GOODS_DATA_REQUIRED");
  }

  if (input.product.physicalState === "aerosol" || hazardIndicators.has("aerosol")) {
    indicators.push({
      indicatorId: "DG-AEROSOL",
      category: "aerosol",
      severity: "high",
      whyItMatters: {
        en: "Aerosols commonly require regulated transport data, packaging controls, and carrier acceptance.",
        ar: "غالبًا ما تحتاج العبوات الهوائية إلى بيانات نقل منظمة وضوابط تغليف وقبول الناقل.",
      },
    });
  }

  if (hazardIndicators.has("perfume_cosmetic_alcohol")) {
    indicators.push({
      indicatorId: "DG-PERFUME-ALCOHOL",
      category: "flammable_liquid_indicator",
      severity: "high",
      whyItMatters: {
        en: "Perfume or alcohol content may trigger flammable-liquid transport controls.",
        ar: "قد يؤدي العطر أو محتوى الكحول إلى تطبيق ضوابط نقل السوائل القابلة للاشتعال.",
      },
    });
  }

  if (input.battery?.present || hazardIndicators.has("battery")) {
    addStatus(statuses, "POSSIBLE_DANGEROUS_GOODS");
    addStatus(statuses, "DANGEROUS_GOODS_DATA_REQUIRED");
    indicators.push({
      indicatorId: "DG-BATTERY",
      category: "battery",
      severity: "high",
      whyItMatters: {
        en: "Battery chemistry, configuration, rating, condition, quantity, and evidence affect transport requirements.",
        ar: "تؤثر كيمياء البطارية وطريقة تعبئتها وتصنيفها وحالتها وكميتها ومستنداتها على متطلبات النقل.",
      },
    });

    if (!input.battery?.chemistry) addMissing(missing, "battery.chemistry");
    if (!input.battery?.configuration) addMissing(missing, "battery.configuration");
    if (input.battery?.wattHours == null) addMissing(missing, "battery.wattHours");
    if (input.battery?.damagedDefectiveRecalledPrototypeOrWaste == null) {
      addMissing(missing, "battery.condition");
    }

    if (input.battery?.damagedDefectiveRecalledPrototypeOrWaste === true) {
      addStatus(statuses, "SPECIALIST_CONFIRMATION_REQUIRED");
      addStatus(statuses, "CARRIER_ACCEPTANCE_REQUIRED");
      indicators.push({
        indicatorId: "DG-BATTERY-ABNORMAL-CONDITION",
        category: "battery_condition",
        severity: "critical",
        whyItMatters: {
          en: "Damaged, defective, recalled, prototype, or waste batteries require specialist and carrier review.",
          ar: "تحتاج البطاريات التالفة أو المعيبة أو المسترجعة أو النموذجية أو النفايات إلى مراجعة متخصص وناقل.",
        },
      });
      confirmations.push({
        type: "specialist",
        reason: {
          en: "Abnormal battery condition cannot be cleared by a general questionnaire.",
          ar: "لا يمكن اعتماد حالة البطارية غير الطبيعية من خلال استبيان عام.",
        },
        impactIfNotConfirmed: {
          en: "Do not book or tender the cargo until the case is reviewed.",
          ar: "لا تحجز أو تسلم الشحنة للناقل قبل مراجعة الحالة.",
        },
      });
    }
  }

  if (specialIndicators.size > 0) {
    addStatus(statuses, "SPECIAL_CARGO_DATA_REQUIRED");
    for (const indicator of specialIndicators) {
      indicators.push({
        indicatorId: `SPECIAL-${indicator.toUpperCase()}`,
        category: indicator,
        severity: indicator === "oversized" || indicator === "overweight" ? "high" : "medium",
        whyItMatters: {
          en: "Special cargo needs additional handling, route, equipment, packaging, or environmental data.",
          ar: "تحتاج البضاعة الخاصة إلى بيانات إضافية للمناولة أو المسار أو المعدات أو التغليف أو الظروف البيئية.",
        },
      });
    }
  }

  const regulatedDataKnown = Boolean(
    input.technicalData?.unNumber &&
      input.technicalData?.properShippingName &&
      input.technicalData?.classOrDivision,
  );

  if (regulatedDataKnown) {
    addStatus(statuses, "CARRIER_ACCEPTANCE_REQUIRED");
    addStatus(statuses, "AUTHORITY_CONFIRMATION_REQUIRED");
  }

  if (missing.size > 0) addStatus(statuses, "INSUFFICIENT_INFORMATION");

  if (
    statuses.has("POSSIBLE_DANGEROUS_GOODS") ||
    statuses.has("DANGEROUS_GOODS_DATA_REQUIRED")
  ) {
    addStatus(statuses, "CARRIER_ACCEPTANCE_REQUIRED");
    confirmations.push({
      type: "carrier",
      reason: {
        en: "Acceptance depends on the provider, service, station, route, equipment, cargo data, packaging, and date.",
        ar: "يعتمد القبول على مقدم الخدمة والخدمة والمحطة والمسار والمعدات وبيانات البضاعة والتغليف والتاريخ.",
      },
      impactIfNotConfirmed: {
        en: "The cargo may be refused, delayed, rerouted, or require different packaging or documentation.",
        ar: "قد تُرفض الشحنة أو تتأخر أو يُعاد توجيهها أو تحتاج تغليفًا أو مستندات مختلفة.",
      },
    });
  }

  if (statuses.size === 0) {
    addStatus(statuses, "NO_INDICATOR_FOUND");
  }

  nextActions.push({
    en: "Confirm product identity, composition, packaging, quantity, mode, route, and current provider requirements before booking.",
    ar: "أكد هوية المنتج وتركيبه وتغليفه وكميته ووسيلة النقل والمسار ومتطلبات مقدم الخدمة الحالية قبل الحجز.",
  });

  const completenessFields = [
    input.product.technicalDescription.trim().length > 0,
    input.product.physicalState !== "unknown",
    input.product.compositionKnown !== null && input.product.compositionKnown !== undefined,
    input.package?.grossWeightKg != null,
    input.package?.packageCount != null,
  ];
  const completed = completenessFields.filter(Boolean).length;
  const confidence: DgPrescreenResult["confidence"] =
    missing.size > 2 ? "low" : completed >= 4 ? "high" : "medium";

  return {
    statuses: [...statuses],
    confidence,
    indicators,
    missingInformation: [...missing].sort(),
    requiredEvidence,
    confirmations,
    nextActions,
    audit: {
      ruleVersion: "DG-PRESCREEN-0.1",
      evaluatedAt,
      mode: input.shipment.mode,
      disclaimerKeys: [
        "not_final_dg_classification",
        "not_carrier_acceptance",
        "depends_on_user_data",
        "country_and_mode_rules_may_apply",
      ],
    },
  };
}
