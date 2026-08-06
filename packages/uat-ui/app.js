const $ = (id) => document.getElementById(id);
let locale = "en";

const copy = {
  en: {
    eyebrow:"FREE PROFESSIONAL SERVICE",title:"Check a shipment before you rely on the plan",lead:"INCO helps professionals, entrepreneurs, and individual importers identify missing information, operational risks, required confirmations, and practical next steps.",trust1:"No registration",trust2:"No saved cases",trust3:"Rules-first result",formTitle:"Shipment facts",formHelp:"Use two-letter country codes such as CN, AE, SA, EG, or OM.",origin:"Origin country",destination:"Destination country",date:"Planned transaction date",mode:"Transport mode",cargo:"Cargo category",state:"Physical state",description:"Describe the goods clearly",hazards:"Known hazard indicators, separated by commas",special:"Special handling indicators, separated by commas",known:"Composition is known",compliance:"Enhanced compliance review may apply",run:"Check this shipment",privacy:"The first public service does not require an account and does not intentionally save your shipment case. Do not enter names, invoice numbers, account details, or confidential commercial information.",resultTitle:"Initial decision-support result",initial:"Complete the shipment facts and run the free check.",route:"Route and service status",cargoStatus:"Cargo status",countryStatus:"Destination requirements",risk:"Key risks",missing:"Missing information",confirmations:"Confirm before proceeding",sources:"Controlled source references",next:"Recommended next step",technical:"Technical evidence",boundary:"INCO provides preliminary professional decision support. It does not replace current carrier acceptance, customs or authority approval, final dangerous-goods classification, sanctions or legal review, insurance advice, permits, or qualified operational verification.",aboutTitle:"Built from management and supply-chain expertise",aboutText:"INCO was founded by Mostafa Gad, a Business and Operations Leader with deep supply-chain expertise. The service translates professional experience, controlled sources, and business rules into practical checks.",website:"Visit MostafaGad.net",github:"View the open-source project",free:"Free limited professional service",none:"None identified.",working:"Checking the shipment with the deterministic engine...",error:"The request could not be evaluated.",correct:"Review the information and try again.",notEvaluated:"Not evaluated.",runNext:"Run the check to receive a practical next action."
  },
  ar: {
    eyebrow:"خدمة مهنية مجانية",title:"افحص الشحنة قبل الاعتماد على خطة التنفيذ",lead:"يساعدك INCO على تحديد المعلومات الناقصة والمخاطر التشغيلية والتأكيدات المطلوبة والخطوات التالية قبل تنفيذ الشحنة.",trust1:"بدون تسجيل",trust2:"بدون حفظ الحالات",trust3:"نتيجة مبنية على قواعد",formTitle:"بيانات الشحنة",formHelp:"استخدم رمز الدولة من حرفين مثل CN أو AE أو SA أو EG أو OM.",origin:"دولة المنشأ",destination:"دولة الوصول",date:"تاريخ المعاملة المتوقع",mode:"وسيلة النقل",cargo:"فئة البضاعة",state:"الحالة الفيزيائية",description:"صف البضاعة بوضوح",hazards:"مؤشرات الخطورة المعروفة، مفصولة بفواصل",special:"مؤشرات المناولة الخاصة، مفصولة بفواصل",known:"تركيب البضاعة معروف",compliance:"قد يلزم فحص امتثال إضافي",run:"افحص هذه الشحنة",privacy:"لا تتطلب الخدمة حسابًا ولا تهدف إلى حفظ حالة الشحنة. لا تدخل أسماء أو أرقام فواتير أو حسابات أو معلومات تجارية سرية.",resultTitle:"نتيجة أولية لدعم القرار",initial:"أكمل بيانات الشحنة ثم شغّل الفحص المجاني.",route:"حالة المسار والخدمة",cargoStatus:"حالة البضاعة",countryStatus:"متطلبات دولة الوصول",risk:"المخاطر الرئيسية",missing:"المعلومات الناقصة",confirmations:"تأكيدات مطلوبة قبل التنفيذ",sources:"مراجع المصادر المضبوطة",next:"الخطوة التالية المقترحة",technical:"الأدلة الفنية",boundary:"يقدم INCO دعم قرار مهنيًا أوليًا، ولا يحل محل قبول الناقل الحالي أو موافقة الجمارك أو الجهات المختصة أو التصنيف النهائي للبضائع الخطرة أو مراجعة العقوبات والقانون أو التأمين أو التصاريح أو التحقق التشغيلي المتخصص.",aboutTitle:"مبني على خبرة الإدارة وسلاسل الإمداد",aboutText:"أسس مصطفى جاد INCO بصفته قائدًا في الإدارة والعمليات ذا خبرة عميقة في سلاسل الإمداد. تحول الخدمة الخبرة المهنية والمصادر المضبوطة وقواعد الأعمال إلى فحوص عملية.",website:"زيارة MostafaGad.net",github:"عرض المشروع مفتوح المصدر",free:"خدمة مهنية مجانية محدودة",none:"لم يتم تحديد شيء.",working:"جارٍ فحص الشحنة باستخدام المحرك القائم على القواعد...",error:"تعذر تقييم الطلب.",correct:"راجع البيانات وحاول مرة أخرى.",notEvaluated:"لم يتم التقييم.",runNext:"شغّل الفحص للحصول على خطوة تالية عملية."
  }
};

function t(key){ return copy[locale][key] || key; }
function list(values){ return values && values.length ? values.join(locale === "ar" ? "، " : ", ") : t("none"); }

function applyLanguage(){
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((node) => { node.textContent = t(node.dataset.i18n); });
  $("language").textContent = locale === "ar" ? "English" : "العربية";
}

function nextStep(result){
  if (result.decisionState === "blocked_information_required") return locale === "ar" ? "استكمل المعلومات الناقصة أو الأدلة الفنية قبل اختيار المسار أو الاعتماد عليه." : "Complete the missing facts or specialist evidence before selecting or relying on a route.";
  if (result.decisionState === "enhanced_compliance_required") return locale === "ar" ? "أوقف الاعتماد على النتيجة العامة ونفّذ فحص امتثال خاص بالمعاملة والأطراف والوجهة." : "Do not rely on the general result until transaction-specific party, destination, and compliance screening is completed.";
  if (result.decisionState === "source_unavailable") return locale === "ar" ? "ارجع إلى الجهة أو مقدم الخدمة المحدد للحصول على مصدر حالي قبل التنفيذ." : "Obtain a current source or confirmation from the identified authority or provider before proceeding.";
  if (result.decisionState === "confirmation_required") return locale === "ar" ? "احصل على التأكيدات الموضحة من الناقل أو الجهة المختصة، ثم أعد تقييم الشحنة." : "Obtain the listed carrier or authority confirmations, then reassess the shipment.";
  return locale === "ar" ? "استخدم النتيجة كمرشح أولي واطلب التأكيدات الحية قبل الحجز أو التنفيذ." : "Use the result as an initial candidate and obtain live confirmations before booking or execution.";
}

async function evaluateScenario(){
  $("run").disabled = true;
  $("reason").textContent = t("working");
  const payload = {
    originCountry: $("origin").value.trim().toUpperCase(), destinationCountry: $("destination").value.trim().toUpperCase(), mode: $("mode").value,
    cargoCategory: $("cargo").value.trim(), technicalDescription: $("description").value.trim(), physicalState: $("physicalState").value,
    compositionKnown: $("compositionKnown").checked, hazardIndicators: $("hazards").value.split(",").map(v=>v.trim()).filter(Boolean),
    specialCargoIndicators: $("special").value.split(",").map(v=>v.trim()).filter(Boolean), enhancedComplianceTrigger: $("enhanced").checked,
    transactionDate: $("transactionDate").value
  };
  try {
    const response = await fetch("/api/evaluate", { method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify(payload) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || t("error"));
    $("state").textContent = result.decisionState;
    $("state").dataset.state = result.decisionState;
    $("reason").textContent = list(result.reasons);
    $("confirmations").textContent = list(result.requiredConfirmations);
    $("missing").textContent = list(result.missingInformation);
    $("risks").textContent = list(result.criticalRisks);
    $("sources").textContent = list(result.sources);
    $("laneState").textContent = result.lane.decisionState;
    $("cargoState").textContent = list(result.cargo.statuses);
    $("countryState").textContent = result.destination.status;
    $("nextStep").textContent = nextStep(result);
    $("raw").textContent = JSON.stringify(result, null, 2);
    $("results").scrollIntoView({behavior:"smooth", block:"start"});
  } catch (error) {
    $("state").textContent = "request_error";
    $("state").dataset.state = "request_error";
    $("reason").textContent = error instanceof Error ? error.message : t("error");
    $("confirmations").textContent = t("none"); $("missing").textContent = t("correct"); $("risks").textContent = t("error"); $("sources").textContent = t("none");
    $("nextStep").textContent = t("correct"); $("raw").textContent = "";
  } finally { $("run").disabled = false; }
}

$("transactionDate").value = new Date().toISOString().slice(0,10);
$("run").addEventListener("click", evaluateScenario);
$("language").addEventListener("click", () => { locale = locale === "en" ? "ar" : "en"; applyLanguage(); });
applyLanguage();
