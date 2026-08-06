# Codex MyGPT Link Activation v1.0

Date: 2026-08-06
Owner: Mostafa Gad
Status: Approved

## Decision

Codex shall activate the INCO MyGPT button in the public INCO website.

Approved URL:
https://chatgpt.com/g/g-6a66319a00a48191a0601bc4039fb159-inco

This owner decision replaces the previous instruction to keep the website button disabled.

## Implementation requirements

- Enable the existing MyGPT call-to-action in English and Arabic.
- Apply it to Desktop and Mobile layouts.
- Keep the approved Figma placement and styling.
- Open the link in a new tab.
- Do not attach form values, shipment details, result data, personal data, or confidential information to the URL.
- Do not add shipment-related query parameters.
- Keep the deterministic INCO result as the controlling result.
- Present MyGPT only as an explanation and checklist assistant.

## Approved English copy

CTA:
Discuss this result with INCO Assistant on ChatGPT

Disclosure:
ChatGPT account access may be required. The conversation takes place outside MostafaGad.net. No shipment data is sent automatically. Do not share confidential information. INCO Assistant explains the result and cannot override the deterministic decision.

## Approved Arabic copy

CTA:
ناقش هذه النتيجة مع مساعد INCO على ChatGPT

Disclosure:
قد يتطلب الاستخدام حسابًا على ChatGPT. تتم المحادثة خارج MostafaGad.net، ولا ترسل بيانات الشحنة تلقائيًا. لا تشارك معلومات سرية. يشرح مساعد INCO النتيجة ولا يمكنه تجاوز القرار الحتمي.

## Acceptance criteria

- The button appears in English Desktop, English Mobile, Arabic Desktop RTL, and Arabic Mobile RTL.
- The approved URL opens correctly.
- No case data is transferred through the link.
- The disclosure is visible and readable.
- Arabic is rendered RTL.
- Accessibility and mobile tap targets are acceptable.
- Existing deterministic warnings and confirmation requirements remain unchanged.
- Tests and static build remain green.

References:
- Figma: https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2
- Repository: https://github.com/magad84/inco
- MyGPT review: docs/MYGPT_INCO_REVIEW_v1.0.md
- Current state: CURRENT_STATE.md
