const $ = (id) => document.getElementById(id);
const locale = document.documentElement.lang === "ar" ? "ar" : "en";
let enginePromise;
let lastResult;

const text = {
  en: {
    none: "None identified.",
    working: "Checking the shipment inside your browser...",
    error: "The request could not be evaluated.",
    correct: "Review the information and try again.",
    copied: "Copied.",
    copyFailed:
      "Copy was not available. Select and copy the technical evidence manually.",
    noResult: "Run a shipment check first.",
    states: {
      candidate: "Candidate",
      confirmation_required: "Confirmation required",
      source_unavailable: "Source unavailable",
      blocked_information_required: "Information required",
      enhanced_compliance_required: "Enhanced compliance required",
    },
    summaries: {
      candidate:
        "A structured candidate result is available. Live booking and authority commitments remain outside this check.",
      confirmation_required:
        "The route is plausible, but carrier acceptance and destination requirements still need confirmation.",
      source_unavailable:
        "A required route or destination source is not available for this check.",
      blocked_information_required:
        "Cargo information or specialist evidence is required before a route recommendation can be relied upon.",
      enhanced_compliance_required:
        "Transaction-specific enhanced compliance screening is required before route reliance.",
    },
    lane: {
      candidate:
        "A candidate route is available. Live schedule, capacity, price, cut-off, and acceptance are not confirmed.",
      confirmation_required:
        "A candidate route was identified. Current carrier and gateway confirmation is required.",
      source_unavailable:
        "No complete governed route source is available for the current facts.",
      enhanced_compliance_required:
        "Route reliance is paused pending transaction-specific compliance screening.",
    },
    destination: {
      requirements_found:
        "Destination requirements were identified from the governed country pack.",
      confirmation_required:
        "Destination requirements remain subject to current competent-authority confirmation.",
      source_unavailable:
        "A current destination source is unavailable; obtain official local confirmation.",
      no_applicable_rules:
        "No destination-specific rule applies to the current facts.",
    },
    cargo: {
      NO_INDICATOR_FOUND:
        "No dangerous-goods indicator was detected from the current facts. This is not a final classification.",
      POSSIBLE_DANGEROUS_GOODS:
        "Possible dangerous-goods indicators require qualified classification review.",
      DANGEROUS_GOODS_DATA_REQUIRED:
        "Dangerous-goods technical data is required before the shipment can be assessed safely.",
      SPECIAL_CARGO_DATA_REQUIRED:
        "Special-cargo handling information is required before route reliance.",
      CARRIER_ACCEPTANCE_REQUIRED:
        "Written acceptance from the actual operating carrier is required.",
      AUTHORITY_CONFIRMATION_REQUIRED:
        "Confirmation from the relevant authority is required.",
      SPECIALIST_CONFIRMATION_REQUIRED:
        "Qualified specialist confirmation is required.",
      INSUFFICIENT_INFORMATION:
        "The current cargo facts are insufficient for a reliable result.",
    },
    confirmationSource:
      "Use the applicable official authority portal or obtain written provider confirmation.",
    confirmationImpact:
      "Without confirmation, the shipment may be rejected, delayed, or require rework.",
    genericAuthority: "Relevant carrier, customs authority, regulator, or qualified specialist.",
    additionalInformation: "Additional operational information",
    next: {
      blocked_information_required:
        "Complete the missing facts or specialist evidence before selecting or relying on a route.",
      enhanced_compliance_required:
        "Do not rely on the general result until transaction-specific party, destination, and compliance screening is completed.",
      source_unavailable:
        "Obtain a current source or confirmation from the identified authority or provider before proceeding.",
      confirmation_required:
        "Obtain the listed carrier or authority confirmations, then reassess the shipment.",
      candidate:
        "Use the result as an initial candidate and obtain current confirmations before booking or execution.",
    },
  },
  ar: {
    none: "لم يتم تحديد شيء.",
    working: "جارٍ فحص الشحنة داخل متصفحك...",
    error: "تعذر تقييم الطلب.",
    correct: "راجع البيانات وحاول مرة أخرى.",
    copied: "تم النسخ.",
    copyFailed: "تعذر النسخ تلقائيًا. انسخ الأدلة الفنية يدويًا.",
    noResult: "شغّل فحص الشحنة أولًا.",
    states: {
      candidate: "مرشح أولي",
      confirmation_required: "يلزم التأكيد",
      source_unavailable: "المصدر غير متاح",
      blocked_information_required: "معلومات مطلوبة",
      enhanced_compliance_required: "يلزم فحص امتثال معزز",
    },
    summaries: {
      candidate:
        "تتوفر نتيجة مبدئية منظمة، بينما تظل التزامات الحجز والجهات المختصة خارج نطاق هذا الفحص.",
      confirmation_required:
        "المسار قابل للتنفيذ مبدئيًا، لكن قبول الناقل ومتطلبات جهة الوصول ما زالا بحاجة إلى تأكيد.",
      source_unavailable:
        "لا يتوفر مصدر مطلوب للمسار أو جهة الوصول ضمن هذا الفحص.",
      blocked_information_required:
        "يلزم استكمال بيانات البضاعة أو الأدلة المتخصصة قبل الاعتماد على أي توصية للمسار.",
      enhanced_compliance_required:
        "يلزم استكمال فحص امتثال معزز خاص بالمعاملة قبل الاعتماد على المسار.",
    },
    lane: {
      candidate:
        "يتوفر مسار مبدئي. لم يتم تأكيد الجدول الفعلي أو السعة أو السعر أو موعد الإغلاق أو القبول.",
      confirmation_required:
        "تم تحديد مسار مبدئي، ويلزم تأكيد حالي من الناقل والبوابة التشغيلية.",
      source_unavailable:
        "لا يتوفر مصدر محكوم ومكتمل للمسار وفق البيانات الحالية.",
      enhanced_compliance_required:
        "تم تعليق الاعتماد على المسار لحين استكمال فحص الامتثال الخاص بالمعاملة.",
    },
    destination: {
      requirements_found:
        "تم تحديد متطلبات جهة الوصول من حزمة الدولة المحكومة.",
      confirmation_required:
        "تظل متطلبات جهة الوصول خاضعة لتأكيد حالي من الجهة المختصة.",
      source_unavailable:
        "لا يتوفر مصدر حالي لجهة الوصول؛ احصل على تأكيد رسمي محلي.",
      no_applicable_rules:
        "لا تنطبق قاعدة خاصة بجهة الوصول على البيانات الحالية.",
    },
    cargo: {
      NO_INDICATOR_FOUND:
        "لم تظهر مؤشرات على بضائع خطرة وفق البيانات الحالية. وهذا لا يُعد تصنيفًا نهائيًا.",
      POSSIBLE_DANGEROUS_GOODS:
        "تستلزم مؤشرات البضائع الخطرة المحتملة مراجعة تصنيف مؤهلة.",
      DANGEROUS_GOODS_DATA_REQUIRED:
        "يلزم توفير البيانات الفنية للبضائع الخطرة قبل تقييم الشحنة بأمان.",
      SPECIAL_CARGO_DATA_REQUIRED:
        "يلزم توفير بيانات مناولة البضاعة الخاصة قبل الاعتماد على المسار.",
      CARRIER_ACCEPTANCE_REQUIRED:
        "يلزم قبول كتابي من الناقل الفعلي المشغّل.",
      AUTHORITY_CONFIRMATION_REQUIRED:
        "يلزم تأكيد من الجهة المختصة.",
      SPECIALIST_CONFIRMATION_REQUIRED:
        "يلزم تأكيد من مختص مؤهل.",
      INSUFFICIENT_INFORMATION:
        "البيانات الحالية عن البضاعة غير كافية للوصول إلى نتيجة موثوقة.",
    },
    confirmationSource:
      "استخدم البوابة الرسمية المطبقة أو احصل على تأكيد كتابي من مقدم الخدمة.",
    confirmationImpact:
      "من دون التأكيد قد تُرفض الشحنة أو تتأخر أو تحتاج إلى إعادة تجهيز.",
    genericAuthority: "الناقل أو الجمارك أو الجهة التنظيمية أو المختص المؤهل بحسب الحالة.",
    additionalInformation: "بيانات تشغيلية إضافية",
    next: {
      blocked_information_required:
        "استكمل المعلومات الناقصة أو الأدلة الفنية قبل اختيار المسار أو الاعتماد عليه.",
      enhanced_compliance_required:
        "لا تعتمد على النتيجة العامة قبل استكمال فحص الأطراف والوجهة والامتثال الخاص بالمعاملة.",
      source_unavailable:
        "احصل على مصدر حالي أو تأكيد من الجهة أو مقدم الخدمة المحدد قبل التنفيذ.",
      confirmation_required:
        "احصل على التأكيدات الموضحة من الناقل أو الجهة المختصة، ثم أعد تقييم الشحنة.",
      candidate:
        "استخدم النتيجة كمرشح أولي واحصل على التأكيدات الحالية قبل الحجز أو التنفيذ.",
    },
  },
};

const ui = text[locale];
const list = (values) =>
  values?.length ? values.join(locale === "ar" ? "، " : ", ") : ui.none;
const sentenceList = (values) =>
  values?.length ? values.join(" ") : ui.none;
const getEngine = () => (enginePromise ??= import("./engine.js"));

const missingLabels = {
  composition: ["Composition", "تركيب البضاعة"],
  dangerous_goods_indicators: ["Dangerous-goods indicators", "مؤشرات البضائع الخطرة"],
  destination: ["Destination", "جهة الوصول"],
  destination_country: ["Destination country", "دولة الوصول"],
  emirate: ["Emirate", "الإمارة"],
  gateway_or_city: ["Gateway or city", "البوابة أو المدينة"],
  loaded_gross_weight: ["Loaded gross weight", "الوزن الإجمالي بعد التحميل"],
  movement_time: ["Planned movement time", "موعد الحركة المخطط"],
  origin: ["Origin", "جهة المنشأ"],
  origin_country: ["Origin country", "دولة المنشأ"],
  overall_height: ["Overall height", "الارتفاع الإجمالي"],
  overall_length: ["Overall length", "الطول الإجمالي"],
  overall_width: ["Overall width", "العرض الإجمالي"],
  package_details: ["Package details", "بيانات الطرود"],
  product_description: ["Product description", "وصف المنتج"],
  route: ["Planned route", "المسار المخطط"],
  service: ["Carrier service", "خدمة الناقل"],
  vehicle_and_trailer_type: ["Vehicle and trailer type", "نوع المركبة والمقطورة"],
};

function localizeMissing(values) {
  if (!values?.length) return ui.none;
  const localized = values.map((value) => missingLabels[value]?.[locale === "ar" ? 1 : 0]);
  const visible = [...new Set(localized.filter(Boolean))];
  if (visible.length !== values.length) visible.push(ui.additionalInformation);
  return list(visible);
}

function localizedValue(value) {
  return value?.[locale] ?? value?.en;
}

function cargoSummary(result) {
  const indicatorCopy = result.cargo.indicators
    .map((indicator) => localizedValue(indicator.whyItMatters))
    .filter(Boolean);
  if (indicatorCopy.length) return sentenceList([...new Set(indicatorCopy)]);
  return list(result.cargo.statuses.map((status) => ui.cargo[status]).filter(Boolean));
}

function destinationSummary(result) {
  const findingCopy = result.destination.findings
    .map((finding) => localizedValue(finding.message))
    .filter(Boolean);
  return findingCopy.length
    ? sentenceList([...new Set(findingCopy)])
    : ui.destination[result.destination.status];
}

function confirmationAuthorities(result) {
  const authorities = result.destination.findings
    .filter((finding) => finding.confirmationRequired)
    .map((finding) => localizedValue(finding.authorityOrProvider))
    .filter(Boolean);
  return authorities.length ? list([...new Set(authorities)]) : ui.genericAuthority;
}

function confirmationImpact(result) {
  const impacts = [
    ...result.cargo.confirmations.map((item) => localizedValue(item.impactIfNotConfirmed)),
    ...result.destination.findings.map((finding) => localizedValue(finding.impactIfNotConfirmed)),
  ].filter(Boolean);
  return impacts.length
    ? sentenceList([...new Set(impacts)])
    : ui.confirmationImpact;
}

function requestPayload() {
  const origin = $("origin").value.trim().toUpperCase();
  const exportCountry = $("exportCountry").value.trim().toUpperCase();
  return {
    originCountry: origin,
    exportCountry,
    destinationCountry: $("destination").value.trim().toUpperCase(),
    mode: $("mode").value,
    cargoCategory: $("cargo").value.trim(),
    technicalDescription: $("description").value.trim(),
    physicalState: $("physicalState").value,
    compositionKnown: $("compositionKnown").checked,
    hazardIndicators: $("hazards")
      .value.split(",")
      .map((value) => value.trim())
      .filter(Boolean),
    specialCargoIndicators: $("special")
      .value.split(",")
      .map((value) => value.trim())
      .filter(Boolean),
    enhancedComplianceTrigger:
      $("enhanced").checked || origin === "RU" || exportCountry === "RU",
    transactionDate: $("transactionDate").value,
  };
}

function privacySafeResult(result) {
  return [
    `${locale === "ar" ? "حالة القرار" : "INCO decision state"}: ${ui.states[result.decisionState]}`,
    `${locale === "ar" ? "حالة المسار" : "Route status"}: ${ui.lane[result.lane.decisionState]}`,
    `${locale === "ar" ? "حالة البضاعة" : "Cargo status"}: ${cargoSummary(result)}`,
    `${locale === "ar" ? "متطلبات جهة الوصول" : "Destination requirements"}: ${destinationSummary(result)}`,
    `${locale === "ar" ? "المعلومات الناقصة" : "Missing information"}: ${localizeMissing(result.missingInformation)}`,
    `${locale === "ar" ? "الجهة أو مقدم الخدمة" : "Authority/provider"}: ${confirmationAuthorities(result)}`,
    `${locale === "ar" ? "الإجراء التالي" : "Next action"}: ${ui.next[result.decisionState]}`,
    locale === "ar"
      ? "هذه نتيجة أولية لدعم القرار، ولا تؤكد قبول الجمارك أو الجهة المختصة أو الناقل."
      : "This is preliminary decision support and does not confirm customs, authority, or carrier acceptance.",
  ].join("\n");
}

async function copyText(value, statusElement) {
  try {
    await navigator.clipboard.writeText(value);
    statusElement.textContent = ui.copied;
  } catch {
    statusElement.textContent = ui.copyFailed;
  }
}

function renderResult(result) {
  const state = result.decisionState;
  $("state").textContent = ui.states[state] ?? state;
  $("state").dataset.state = state;
  $("reason").textContent = ui.summaries[state];
  $("confirmationReason").textContent = ui.summaries[state];
  $("confirmations").textContent = confirmationAuthorities(result);
  $("missing").textContent = localizeMissing(result.missingInformation);
  $("risks").textContent = confirmationImpact(result);
  $("sources").textContent = ui.confirmationSource;
  $("laneState").textContent = ui.lane[result.lane.decisionState] ?? ui.lane.source_unavailable;
  $("cargoState").textContent = cargoSummary(result);
  $("countryState").textContent = destinationSummary(result);
  $("nextStep").textContent = ui.next[state];
  $("raw").textContent = JSON.stringify(result, null, 2);
}

async function evaluateScenario(event) {
  event.preventDefault();
  $("run").disabled = true;
  $("reason").textContent = ui.working;
  try {
    const { evaluatePublicRequest } = await getEngine();
    lastResult = await evaluatePublicRequest(requestPayload());
    renderResult(lastResult);
    $("results").scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  } catch (error) {
    lastResult = undefined;
    $("state").textContent = ui.error;
    $("state").dataset.state = "request_error";
    $("reason").textContent = error instanceof Error ? error.message : ui.error;
    $("confirmations").textContent = ui.none;
    $("missing").textContent = ui.correct;
    $("risks").textContent = ui.error;
    $("sources").textContent = ui.none;
    $("nextStep").textContent = ui.correct;
    $("raw").textContent = "";
  } finally {
    $("run").disabled = false;
  }
}

$("transactionDate").value = new Date().toISOString().slice(0, 10);
$("shipment-form").addEventListener("submit", evaluateScenario);
$("copyResult").addEventListener("click", () =>
  lastResult
    ? copyText(privacySafeResult(lastResult), $("copyStatus"))
    : ($("copyStatus").textContent = ui.noResult),
);

document.documentElement.classList.add("js");
