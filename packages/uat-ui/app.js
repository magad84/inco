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
const getEngine = () => (enginePromise ??= import("./engine.js"));

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
    `INCO decision state: ${result.decisionState}`,
    `Route state: ${result.lane.decisionState}`,
    `Cargo status: ${list(result.cargo.statuses)}`,
    `Destination status: ${result.destination.status}`,
    `Reasons: ${list(result.reasons)}`,
    `Missing information: ${list(result.missingInformation)}`,
    `Required confirmations: ${list(result.requiredConfirmations)}`,
    `Critical risks: ${list(result.criticalRisks)}`,
    `Controlled sources: ${list(result.sources)}`,
    `Next action: ${ui.next[result.decisionState]}`,
    "This is preliminary decision support and does not confirm customs, authority, or carrier acceptance.",
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
  $("reason").textContent = list(result.reasons);
  $("confirmationReason").textContent = list(result.reasons);
  $("confirmations").textContent = list(result.requiredConfirmations);
  $("missing").textContent = list(result.missingInformation);
  $("risks").textContent = list(result.criticalRisks);
  $("sources").textContent = list(result.sources);
  $("laneState").textContent = result.lane.decisionState;
  $("cargoState").textContent = list(result.cargo.statuses);
  $("countryState").textContent = result.destination.status;
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
