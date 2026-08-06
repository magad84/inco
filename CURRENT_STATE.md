# INCO Current State

**Date:** 2026-08-06  
**Phase:** V1 product definition, bilingual visual design, and MyGPT governance audit closed  
**Implementation status:** deterministic domain core, bilingual browser interface foundation, governed public-knowledge export, static production build foundation, CI artifact generation, CodeQL, privacy controls, approved English and Arabic Desktop and Mobile Figma baselines, approved MyGPT configuration, and completed MyGPT audit.

## V1 Closure Status

INCO V1 is formally closed and approved for product definition, scope, governance, logo usage, bilingual information architecture, deterministic-result hierarchy, privacy boundary, official-confirmation presentation, responsive visual design, and MyGPT operating controls.

This closure does not mean the public site is live. Final coded visual alignment, implementation QA, release artifact inspection, Neom Cloud deployment, and live verification remain execution tasks.

See:

- `docs/INCO_V1_PROJECT_CLOSURE_AND_HANDOFF_v1.0.md`
- `docs/INCO_FIGMA_VISUAL_BASELINE_APPROVAL_v1.0.md`
- `docs/INCO_PROJECT_AGGREGATION_CHAT_PROMPT_v1.0.md`
- `docs/MYGPT_INCO_REVIEW_v1.0.md`
- `docs/MYGPT_AUDIT_EXECUTION_LOG_v1.0.md`
- `docs/CODEX_MYGPT_LINK_ACTIVATION_v1.0.md`

## Approved Strategic Positioning

INCO supports Mostafa Gad’s approved brand position:

> **Business and Operations Leader with deep supply-chain expertise**

Technology, automation, and AI are execution enablers, not the primary professional identity.

Mostafa Gad’s project role is Founder, Product Owner, Domain Architect, Business-Rules Owner, and Knowledge and Source-Governance Lead.

## Approved Service Model

INCO is a real, free, limited professional service for professionals, entrepreneurs, and individual importers. V1 has:

- no registration or payment;
- no saved shipment cases or document uploads;
- no persistent customer database;
- no AI dependency for the deterministic result;
- bilingual deterministic output;
- browser-side processing with no intentional shipment-case transmission;
- clear privacy and professional boundaries.

## Approved Hosting and Runtime

- Public URL: `https://mostafagad.net/inco`
- Hosting: Neom Cloud cPanel under `public_html/inco`.
- Runtime: static HTML, CSS, JavaScript, and approved JSON knowledge assets.
- Build environment: GitHub Actions with Node.js used only to test and generate the static release artifact.
- Public runtime requires no Node.js, npm, Docker, Caddy, database, Redis, Qdrant, or AI provider.

See `docs/ADR_007_STATIC_BROWSER_DEPLOYMENT_ON_NEOM.md` and `docs/NEOM_STATIC_DEPLOYMENT_RUNBOOK_v1.0.md`.

## Approved Figma V1 Baseline

Figma file:

- `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2`

Approved frames:

- English Desktop: `Desktop / INCO Product Page • EN • V1 APPROVED` (`2:2`)
- English Mobile: `Mobile / INCO Product Page • EN • V1 APPROVED` (`2:150`)
- Arabic Desktop RTL: `Desktop / INCO Product Page • AR • RTL • V1 APPROVED` (`40:2`)
- Arabic Mobile RTL: `Mobile / INCO Product Page • AR • RTL • V1 APPROVED` (`45:2`)

Approved logo source:

- Page: `00 • INCO LOGO MASTER • APPROVED`
- Primary-logo master node: `31:12`

Manual redrawing, reconstruction, stretching, recoloring, cropping, or text approximation is prohibited.

## Implemented Deterministic Core

- CBM, gross, volumetric, and chargeable-weight calculations.
- Destination-country requirement evaluation.
- Dangerous-goods and special-cargo pre-screen.
- Trade-lane corridor evaluation.
- Integrated cargo, country, route, gateway, and carrier decision output.
- Controlled states: `candidate`, `confirmation_required`, `source_unavailable`, `blocked_information_required`, and `enhanced_compliance_required`.
- Extensive unit, integration, E2E, UAT, governance, and security tests.

## Implemented Browser Release Foundation

- Browser entry calls the same deterministic evaluator used by the tested core.
- Rules for UAE, Saudi Arabia, Egypt, and Oman load as same-origin static JSON.
- Public UI no longer calls `/api/evaluate`.
- English LTR and Arabic RTL modes.
- Mobile-responsive and accessible layout foundation.
- Result cards for route, cargo, destination, risks, missing facts, confirmations, sources, and next action.
- Privacy-safe result-copy function.
- Canonical URL and structured data aligned to `mostafagad.net/inco`.

## MyGPT Final Status

Approved MyGPT:

- URL: `https://chatgpt.com/g/g-6a66319a00a48191a0601bc4039fb159-inco`
- Final instruction baseline: v1.2
- Knowledge configuration: governed files `01` through `08` only
- Full audit: 16/16 completed, 0 failures
- Post-cleanup regression: 3/3 passed, with one non-material state-selection note
- Owner approval: granted
- Public-link activation: approved for implementation

MyGPT remains explanatory and checklist-oriented. The deterministic website result is controlling. The public button must:

- open in a new tab;
- use the approved URL only;
- transfer no form values, shipment data, result content, query parameters, personal data, or confidential data;
- never imply that MyGPT replaces the deterministic result.

The MyGPT button is not considered live until implementation and production verification are complete.

## Governed Public Knowledge Build

The build exports only approved launch corridors and the four approved destination packs. It:

- validates exported JSON;
- blocks internal, private, licensed, credential, secret, and password markers;
- excludes `INTERNAL-TRADE-001` and protected source text;
- creates `dist-public` with release provenance;
- publishes the `inco-static-public` GitHub Actions artifact.

No dataset implies live route, schedule, capacity, price, cut-off, acceptance, clearance, permit, or authority approval.

## Knowledge Coverage

Primary destination markets:

- UAE;
- Saudi Arabia;
- Egypt;
- Oman.

Priority origins include China, India, Turkey, Italy, the United States, Russia with enhanced-compliance controls, and Australia.

## Remaining Before Public Launch

1. Implement the approved four Figma frames faithfully in the repository.
2. Reconcile final bilingual copy with runtime strings.
3. Implement and verify the approved MyGPT button behavior.
4. Run browser, mobile, RTL, accessibility, and regression QA.
5. Confirm Domain Core tests, build, leakage checks, CodeQL, and release workflows are green.
6. Generate, download, and manually inspect the final `dist-public` artifact.
7. Review current repository content and relevant history for secrets or protected-source leakage.
8. Upload only the approved public artifact to `public_html/inco` on Neom Cloud.
9. Validate HTTPS, asset paths, caching, rollback, bilingual behavior, MyGPT link, and live deterministic scenarios.
10. Integrate navigation, sitemap, metadata, and internal links into MostafaGad.net V3.

## Owner Inputs Still Required

No strategic product, design, or MyGPT governance decision is pending. Execution-time access is required only for final Neom Cloud upload and live-site verification, plus approval for any material change outside the closed V1 baseline.

## Change Log

### 2026-08-06

- Approved static browser deployment under `mostafagad.net/inco` on Neom Cloud.
- Approved the deterministic browser runtime and governed public-knowledge export.
- Approved English Desktop and Mobile visual baselines.
- Approved Arabic RTL Desktop and Mobile visual baselines.
- Approved `00 • INCO LOGO MASTER • APPROVED` as the only Figma logo source.
- Closed INCO V1 product-definition and bilingual visual-design phase.
- Completed the governed MyGPT configuration and knowledge cleanup.
- Completed the mandatory MyGPT audit with 16/16 scenarios and zero failures.
- Completed the post-cleanup MyGPT regression with 3/3 scenarios passed.
- Granted owner approval for public MyGPT-link implementation.
- Moved the project to final coded alignment, pre-deployment QA, release artifact generation, Neom Cloud deployment, and live verification.
