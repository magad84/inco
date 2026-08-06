# Prompt for Project Aggregation Chat: INCO V1 Closure and Codex Handoff

انسخ النص التالي كاملًا إلى شات تجميع المشروعات:

---

أضف مشروع INCO إلى ملف تجميع المشروعات باعتباره مشروعًا مغلقًا من ناحية تعريف المنتج والتصميم للإصدار الأول V1، وجاهزًا للانتقال إلى التنفيذ البرمجي النهائي بواسطة Codex.

## اسم المشروع

INCO — Trade and Logistics Decision Support

## حالة المشروع

- Product definition: APPROVED AND CLOSED FOR V1
- English Desktop design: APPROVED
- English Mobile design: APPROVED
- Arabic Desktop RTL design: APPROVED
- Arabic Mobile RTL design: APPROVED
- Logo master: APPROVED
- Codebase and deterministic engine: موجودان على GitHub
- Production deployment: لم يتم بعد
- Public launch: لم يتم بعد

المشروع مغلق كحزمة V1 من حيث الهوية، النطاق، الهيكل، المنطق العام، النتيجة، الخصوصية، التصميم ثنائي اللغة، ومسار النشر. أي تعديل جوهري بعد ذلك يتطلب Change Control واعتمادًا جديدًا من Mostafa Gad.

## رابط الموقع المطلوب

https://mostafagad.net/inco

## GitHub

Repository:
https://github.com/magad84/inco

ابدأ بقراءة الملفات التالية داخل المستودع:

- CURRENT_STATE.md
- docs/INCO_V1_PROJECT_CLOSURE_AND_HANDOFF_v1.0.md
- docs/INCO_FIGMA_VISUAL_BASELINE_APPROVAL_v1.0.md
- docs/ADR_007_STATIC_BROWSER_DEPLOYMENT_ON_NEOM.md
- docs/NEOM_STATIC_DEPLOYMENT_RUNBOOK_v1.0.md
- docs/MYGPT_INCO_REVIEW_v1.0.md

## Figma

Main Figma file:
https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2

Approved logo master:
https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2?node-id=31-3

Approved English Desktop:
https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2?node-id=2-2

Approved English Mobile:
https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2?node-id=2-150

Approved Arabic Desktop RTL:
https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2?node-id=40-2

Approved Arabic Mobile RTL:
https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2?node-id=45-2

## تعليمات إلزامية لـ Codex

1. لا يبدأ Codex بإعادة تصميم المشروع أو تغيير الهوية أو إعادة كتابة النطاق.
2. يستخدم Figma المعتمد كمصدر بصري وحيد للواجهة.
3. يستخدم صفحة `00 • INCO LOGO MASTER • APPROVED` كمصدر وحيد للوجو.
4. يحافظ على النسخ الأربع المعتمدة: English Desktop, English Mobile, Arabic RTL Desktop, Arabic RTL Mobile.
5. يحافظ على المحرك deterministic rules-first باعتباره المصدر النهائي للقرار.
6. لا يسمح للذكاء الاصطناعي أو MyGPT بتجاوز نتيجة المحرك.
7. لا يضيف أسعارًا حية أو جداول أو سعة أو مواعيد قطع أو قبول ناقل أو موافقة جمركية أو تصريحًا أو تخليصًا باعتبارها حقائق مؤكدة.
8. لا يضيف تسجيلًا أو دفعًا أو حفظ حالات أو رفع مستندات أو قاعدة بيانات أو Analytics دون اعتماد جديد.
9. يحافظ على المعالجة داخل المتصفح وعدم النقل المقصود لبيانات حالة الشحنة.
10. يحافظ على بروتوكول التأكيد الرسمي الذي يوضح السبب والجهة والمصدر والأثر والخطوة التالية.
11. يحافظ على دعم English LTR وArabic RTL.
12. يحافظ على التوافق مع النشر Static على Neom Cloud cPanel داخل `public_html/inco`.
13. يشغّل جميع الاختبارات وBuild وleakage checks وCodeQL قبل التسليم.
14. يرفع كل التغييرات إلى GitHub مع commits واضحة ومراجعة نهائية قبل النشر.

## المطلوب من شات تجميع المشروعات

- تسجيل المشروع كـ V1 CLOSED FOR DESIGN AND PRODUCT DEFINITION.
- تصنيفه كجاهز للتنفيذ البرمجي النهائي والنشر.
- حفظ الروابط السابقة كمراجع رسمية.
- إنشاء مهمة Codex للتنفيذ من Figma إلى الكود داخل نفس المستودع.
- عدم فتح نقاشات استراتيجية أو تصميمية سبق حسمها.
- العودة إلى Mostafa Gad فقط عند وجود قرار جوهري جديد أو احتياج فعلي إلى صلاحيات Neom Cloud أو اعتماد نهائي قبل النشر.

## ملاحظة مهمة

إغلاق V1 لا يعني أن الموقع أصبح Live. الإغلاق يخص مرحلة تعريف المنتج والتصميم والحوكمة. ما يزال التنفيذ النهائي من Figma إلى الكود، الاختبارات، MyGPT final audit، والنشر على Neom Cloud مهام تنفيذية مفتوحة.

---
