# INCO Current State

**Date:** 2026-08-06  
**Phase:** Static public-release preparation for Neom Cloud  
**Implementation status:** deterministic domain core, bilingual browser interface, governed public-knowledge export, static production build, CI artifact generation, CodeQL, privacy controls, and passing internal UAT foundation.

## Approved Strategic Positioning

INCO supports Mostafa Gad’s approved brand position:

> **Business and Operations Leader with deep supply-chain expertise**

Technology, automation, and AI are execution enablers, not the primary professional identity.

Mostafa Gad’s project role is Founder, Product Owner, Domain Architect, Business-Rules Owner, and Knowledge and Source-Governance Lead.

## Approved Service Model

INCO is a real, free, limited professional service for professionals, entrepreneurs, and individual importers. The first public release has:

- no registration or payment;
- no saved shipment cases or document uploads;
- no persistent customer database;
- no AI dependency;
- bilingual deterministic output;
- browser-side processing with no intentional shipment-case transmission;
- clear privacy and professional boundaries.

## Approved Hosting and Runtime

- Public URL: `https://mostafagad.net/inco`
- Hosting: Neom Cloud cPanel under `public_html/inco`.
- Runtime: static HTML, CSS, JavaScript, and approved JSON knowledge assets.
- Build environment: GitHub Actions with Node.js used only to test and generate the static release artifact.
- Public runtime requires no Node.js, npm, Docker, Caddy, database, Redis, Qdrant, or AI provider.
- `inco.mostafagad.net` remains reserved for a future redirect, API, or isolated advanced service and is not the first-release public entry.

See `docs/ADR_007_STATIC_BROWSER_DEPLOYMENT_ON_NEOM.md` and `docs/NEOM_STATIC_DEPLOYMENT_RUNBOOK_v1.0.md`.

## Implemented Deterministic Core

- CBM, gross, volumetric, and chargeable-weight calculations.
- Destination-country requirement evaluation.
- Dangerous-goods and special-cargo pre-screen.
- Trade-lane corridor evaluation.
- Integrated cargo, country, route, gateway, and carrier decision output.
- Controlled states: `candidate`, `confirmation_required`, `source_unavailable`, `blocked_information_required`, and `enhanced_compliance_required`.
- Extensive unit, integration, E2E, UAT, governance, and security tests.
- Internal HTTP server retained for development and testing only; it is not the approved public runtime.

## Implemented Browser Release

- Browser entry calls the same deterministic evaluator used by the tested core.
- Rules for UAE, Saudi Arabia, Egypt, and Oman load as same-origin static JSON.
- Public UI no longer calls `/api/evaluate`.
- English LTR and Arabic RTL modes.
- Mobile-responsive and accessible layout foundation.
- Result cards for route, cargo, destination, risks, missing facts, confirmations, sources, and next action.
- Privacy-safe result-copy function.
- Local-only pre-launch feedback summary; no transmission or storage.
- Canonical URL and structured data aligned to `mostafagad.net/inco`.
- MyGPT public link remains disabled pending final instructions, knowledge alignment, and audit.

## Governed Public Knowledge Build

The build exports only the approved launch corridor file and the four approved destination packs. It:

- validates every exported file as JSON;
- blocks internal, private, licensed, credential, secret, and password markers;
- excludes `INTERNAL-TRADE-001` and all protected source text;
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

Additional governed coverage includes road and multimodal candidate structures, medicines, food, chemicals, batteries, carrier and gateway seeds, source-normalization rules, and eleven controlled trade-term records.

## Current Release Gate

### Completed or substantially completed

- deterministic engine and UAT cycles;
- source-governed public knowledge foundation;
- browser runtime adapter;
- static production-bundle generator;
- public knowledge leakage controls;
- bilingual public UI foundation;
- feedback and privacy-safe result-copy interactions;
- Neom deployment architecture;
- CI artifact workflow and CodeQL foundation;
- Apache-2.0 public-core governance.

### Remaining before public launch

1. Confirm the final Domain Core and CodeQL runs are green after the latest governance updates.
2. Download and inspect the generated `inco-static-public` artifact.
3. Complete manual browser, mobile, RTL, and accessibility review.
4. Complete repository-history review for secrets and protected source content.
5. Finalize the public result wording and official-confirmation presentation.
6. Produce the final MyGPT Knowledge Pack and one final instructions revision, then run the audit scenarios.
7. Upload the approved artifact to `public_html/inco` on Neom Cloud.
8. Validate HTTPS, asset paths, cache behavior, rollback, and live deterministic scenarios.
9. Integrate navigation, sitemap, and internal links into MostafaGad.net V3.
10. Add privacy-safe analytics only after the measurement boundary is approved.

## Owner Inputs Still Required

No strategic product decision is pending. Execution-time access is required only for the final cPanel upload and live-site verification.

## Change Log

### 2026-08-06

- Approved static browser deployment under `mostafagad.net/inco` on Neom Cloud.
- Replaced the public API dependency with a browser runtime using the deterministic core.
- Added governed public-knowledge export and leakage checks.
- Added CI generation of the static deployment artifact.
- Aligned canonical metadata, privacy messaging, feedback interactions, and MyGPT audit gating.
- Deferred the final MyGPT instructions revision until all website concepts and output fields are stable.
