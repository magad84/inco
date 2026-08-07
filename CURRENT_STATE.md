# INCO Current State

**Date:** 2026-08-07  
**Phase:** V1 product definition, bilingual visual design, MyGPT governance audit, Figma administrative organization, pre-Codex review, canonical brand/SEO architecture, GEO/entity-authority strategy, bilingual route architecture, V3 precedence, and free V1 model approved  
**Implementation status:** deterministic domain core, bilingual browser interface foundation, governed public-knowledge export, static production build foundation, CI artifact generation, CodeQL, privacy controls, approved English and Arabic Desktop and Mobile Figma baselines, organized and locked Figma source file, approved MyGPT configuration, completed MyGPT audit, corrected mobile date-field conflict, pre-Codex defect register, Terms/Privacy drafts, approved canonical URL architecture, approved SEO/GEO/entity-authority strategy, and approved separate EN/AR crawlable route architecture.

## V1 Closure Status

INCO V1 is formally closed and approved for product definition, scope, governance, logo usage, bilingual information architecture, deterministic-result hierarchy, privacy boundary, official-confirmation presentation, responsive visual design, MyGPT operating controls, Figma file organization, canonical URL/brand relationship, SEO/GEO/entity-authority direction, bilingual crawlable routing, INCO-vs-parent governance precedence, and the free V1 service model.

This closure does not mean the public site is live. Final coded gap analysis and alignment, implementation QA, release artifact inspection, Neom Cloud deployment, and live verification remain execution tasks.

See:

- `docs/INCO_V1_PROJECT_CLOSURE_AND_HANDOFF_v1.0.md`
- `docs/INCO_FIGMA_VISUAL_BASELINE_APPROVAL_v1.0.md`
- `docs/INCO_FIGMA_FILE_ORGANIZATION_LOG_v1.0.md`
- `docs/INCO_PRE_CODEX_REVIEW_DEFECT_AND_IMPROVEMENT_REGISTER_v1.0.md`
- `docs/INCO_PRE_CODEX_REVIEW_RESOLUTION_LOG_v1.0.md`
- `docs/INCO_FINAL_PRODUCT_BRAND_SEO_GEO_REVIEW_v1.0.md`
- `docs/ADR_008_INCO_CANONICAL_URL_AND_BRAND_AUTHORITY_v1.0.md`
- `docs/ADR_009_INCO_SEO_GEO_ENTITY_AUTHORITY_STRATEGY_v1.0.md`
- `docs/ADR_010_INCO_BILINGUAL_ROUTES_V3_PRECEDENCE_AND_FREE_V1_MODEL_v1.0.md`
- `docs/MYGPT_INCO_REVIEW_v1.0.md`
- `docs/MYGPT_AUDIT_EXECUTION_LOG_v1.0.md`
- `docs/CODEX_MYGPT_LINK_ACTIVATION_v1.0.md`

## Approved Strategic Positioning

INCO supports Mostafa Gad’s approved brand position:

> **Business and Operations Leader with deep supply-chain expertise**

Technology, automation, and AI are execution enablers, not the primary professional identity.

Mostafa Gad’s project role is Founder, Product Owner, Domain Architect, Business-Rules Owner, and Knowledge and Source-Governance Lead.

INCO is a flagship Mostafa Gad knowledge-to-execution product, not an independent corporate brand.

## Approved Service Model

INCO is a real, free professional decision-support service for professionals, entrepreneurs, and individual importers. V1 has:

- no registration or payment;
- no saved shipment cases or document uploads;
- no persistent customer database;
- no AI dependency for the deterministic result;
- bilingual deterministic output;
- browser-side processing with no intentional shipment-case transmission;
- clear privacy and professional boundaries.

There is no paid tier, subscription, pricing, freemium upgrade path, or paid-report workflow in V1. Public V1 copy must not contain a `small fee`, upgrade, premium, or similar commercial upsell message.

Preferred public service wording:

- EN: `Free professional decision-support service`
- AR: `خدمة مجانية لدعم القرار المهني`

The word `limited` applies only to professional scope, reliance, coverage, liability, or verification boundaries. It does not describe a free-vs-paid commercial model.

## Approved Bilingual URL Architecture

Approved crawlable public routes:

- English: `https://mostafagad.net/inco/`
- Arabic: `https://mostafagad.net/ar/inco/`

Each language route self-canonicalizes.

Approved hreflang relationship:

- `en` -> `https://mostafagad.net/inco/`
- `ar` -> `https://mostafagad.net/ar/inco/`
- `x-default` -> `https://mostafagad.net/inco/`

The English route is the default product URL. The Arabic experience must be independently crawlable and must not depend solely on JavaScript text replacement at the English URL.

If alternate product-detail routes exist:

- `/products/inco/` -> permanent `301` to `/inco/`
- `/ar/products/inco/` -> permanent `301` to `/ar/inco/`

The `/products/` and `/ar/products/` routes remain product-discovery hubs rather than competing INCO detail pages.

See `docs/ADR_010_INCO_BILINGUAL_ROUTES_V3_PRECEDENCE_AND_FREE_V1_MODEL_v1.0.md`.

## Approved Canonical URL and Brand/SEO Architecture

Primary/default English canonical:

- `https://mostafagad.net/inco/`

Arabic canonical:

- `https://mostafagad.net/ar/inco/`

The trailing-slash forms must be used consistently in canonical metadata, sitemap, internal links, structured data, Open Graph, hreflang references, and public documentation.

The route `https://mostafagad.net/products/` remains the MostafaGad.net product-discovery hub and may contain an INCO card linking directly to `/inco/`; it must not create a second canonical INCO detail page.

See `docs/ADR_008_INCO_CANONICAL_URL_AND_BRAND_AUTHORITY_v1.0.md` and `docs/ADR_010_INCO_BILINGUAL_ROUTES_V3_PRECEDENCE_AND_FREE_V1_MODEL_v1.0.md`.

## Approved SEO / GEO / Entity-Authority Strategy

SEO and GEO are one coordinated discoverability strategy for INCO. GEO is not a separate layer of AI tricks or mass-generated content.

Approved goals:

- make INCO and its supporting MostafaGad.net content easy to crawl, retrieve, understand, and cite;
- strengthen the entity relationship between `INCO`, `Mostafa Gad`, and `MostafaGad.net`;
- prioritize expert-led, source-grounded, problem-intent content rather than brand-name repetition or keyword stuffing;
- use stable canonical URLs, truthful structured data, semantic headings, bilingual crawlability, and clear source/provenance signals;
- expose non-sensitive engine/knowledge/source review provenance where useful and technically supported;
- create an internal authority loop between INCO and relevant Mostafa Gad expertise, research, and knowledge-to-execution content;
- avoid doorway pages, mass AI-generated thin pages, fake citations, fake reviews, duplicate indexable routes, unsupported live claims, and unapproved tracking;
- do not treat `llms.txt` or any AI-specific file as a required ranking/citation mechanism unless a concrete approved use case later exists.

Preferred public title direction:

- `INCO | Free International Trade & Logistics Decision Support | Mostafa Gad`

Structured data must represent only truthful visible facts and should link INCO to Mostafa Gad as creator/founder where supported by the page.

Post-launch measurement should include search visibility, canonical health, Arabic/English performance, internal authority flows, and AI citation/reporting data where supported by webmaster platforms, without collecting shipment-case content.

See `docs/ADR_009_INCO_SEO_GEO_ENTITY_AUTHORITY_STRATEGY_v1.0.md`.

## Governance Precedence for INCO

For INCO-specific implementation, current INCO project decisions override historical MostafaGad.net V3 descriptions that represented INCO as only a gateway, external GPT link, subdomain application, or `/products/inco/` detail page.

Implementation precedence:

1. `CURRENT_STATE.md`
2. Current approved INCO ADRs, including ADR-008, ADR-009, and ADR-010
3. Current approved live INCO Figma baselines
4. Current INCO Codex gate and final implementation task
5. Parent MostafaGad.net V3 rules for cross-site integration where they do not conflict with current INCO-specific decisions
6. Historical parent-site INCO descriptions as background only

This precedence applies only to INCO-specific conflicts and does not supersede unrelated parent-site V3 architecture.

## Approved Hosting and Runtime

- English public URL: `https://mostafagad.net/inco/`
- Arabic public URL: `https://mostafagad.net/ar/inco/`
- Hosting: Neom Cloud cPanel, with static deployment paths integrated into the parent-site routing structure.
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

- Page: `01 • INCO LOGO MASTER • APPROVED`
- Primary-logo master node: `31:12`

Manual redrawing, reconstruction, stretching, recoloring, cropping, or text approximation is prohibited.

The EN and AR mobile frames were corrected on 2026-08-07 to include the planned transaction date while preserving the approved design direction. Generic Arabic UI remnants were corrected; specialist professional terminology may remain in English where clearer and is not subject to forced translation.

## Figma File Organization Status

The live Figma file was administratively organized without changing the approved visual design.

Current page structure:

1. `00 • FILE GUIDE & STATUS`
2. `01 • INCO LOGO MASTER • APPROVED`
3. `10 • APPROVED V1 BASELINES • DO NOT EDIT`
4. `20 • COMPONENTS & TOKENS • CONTROLLED`
5. `90 • QA & IMPLEMENTATION NOTES`
6. `99 • ARCHIVE • DO NOT USE`

Governance status:

- approved frames `2:2`, `2:150`, `40:2`, and `45:2` are locked after approved corrections;
- closure node `48:2` is locked;
- approved logo master `31:12` is locked;
- archived material must not be used for production implementation;
- the approved node IDs remain the governing implementation references.

See `docs/INCO_FIGMA_FILE_ORGANIZATION_LOG_v1.0.md`.

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
- Final coded alignment must convert the bilingual runtime from a same-URL language toggle into independently crawlable EN and AR documents/routes while preserving shared deterministic logic.

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

## Terms, Privacy, and Launch Controls

Neutral V1 working drafts exist for:

- `docs/INCO_TERMS_OF_USE_DRAFT_v1.0.md`
- `docs/INCO_PRIVACY_NOTICE_DRAFT_v1.0.md`

Final implementation must include accessible Terms, Privacy, and professional-boundary routes/links without inventing jurisdiction-specific governing-law or liability language that has not been approved.

Privacy wording must distinguish locally processed shipment-case values from ordinary technical hosting/security logs.

## Remaining Before Public Launch

1. Inspect the current coded implementation and complete a gap matrix against the four live approved Figma nodes.
2. Change only verified visual or behavioral gaps; do not rebuild or redesign compliant areas.
3. Reconcile final bilingual copy with runtime strings, without forced translation of clear specialist terminology.
4. Implement independently crawlable EN `/inco/` and AR `/ar/inco/` routes with correct self-canonicals, `lang`, `dir`, reciprocal hreflang, and `x-default`.
5. Add permanent redirects for duplicate product-detail routes at the MostafaGad.net/site-routing layer if those alternate paths exist.
6. Remove any V1 `small fee`, freemium, premium, upgrade, paid-tier, pricing, or subscription messaging.
7. Implement/verify SEO metadata, GEO/entity relationship, semantic headings, truthful structured data, sitemap/internal-link consistency, and product-hub linking.
8. Implement/verify Terms, Privacy, and professional-boundary navigation using approved neutral content and explicit owner/legal stop conditions.
9. Implement or verify the approved MyGPT button behavior already represented in the four Figma baselines.
10. Run browser, mobile, RTL, accessibility, SEO, GEO, canonical/redirect, hreflang, structured-data, and regression QA.
11. Confirm Domain Core tests, build, leakage checks, CodeQL, and release workflows are green.
12. Generate, download, and manually inspect the final `dist-public` artifact.
13. Review current repository content and relevant history for secrets or protected-source leakage.
14. Upload only the approved public artifact to Neom Cloud.
15. Validate HTTPS, redirect behavior, asset paths, caching, rollback, bilingual behavior, MyGPT link, structured metadata, and live deterministic scenarios.
16. Integrate navigation, product hubs, sitemap, metadata, hreflang, internal links, and authority-loop links into MostafaGad.net V3.

## Owner Inputs Still Required

No strategic product, canonical URL, bilingual-route, brand relationship, SEO/GEO direction, free-V1 commercial model, design-direction, Figma-organization, or MyGPT governance decision is pending. Execution-time access is required only for final Neom Cloud upload and live-site verification, plus approval for any material change outside the closed V1 baseline or jurisdiction-specific final legal wording.

## Change Log

### 2026-08-07

- Approved English `/inco/` and Arabic `/ar/inco/` as separate crawlable product routes.
- Approved reciprocal EN/AR hreflang and English `x-default`.
- Approved self-referencing canonical per language route.
- Approved permanent redirect handling for `/products/inco/` and `/ar/products/inco/` if those alternate detail routes exist.
- Approved current INCO governance as authoritative over conflicting historical parent-site descriptions of INCO.
- Confirmed INCO V1 is fully free, with no paid tier, subscription, pricing, freemium upgrade path, paid report, or `small fee` messaging.
- Approved `Free professional decision-support service` / `خدمة مجانية لدعم القرار المهني` as preferred footer/service wording.
- Approved `https://mostafagad.net/inco/` as the primary/default English public INCO URL.
- Confirmed `/products/` remains the product-discovery hub rather than a second INCO detail route.
- Approved INCO as a flagship Mostafa Gad knowledge-to-execution product, not an independent corporate brand.
- Approved SEO and GEO as one coordinated discoverability strategy.
- Approved Mostafa Gad / MostafaGad.net entity-authority linking for INCO.
- Approved source-grounded answer structure, non-sensitive provenance, semantic crawlability, and truthful structured data as GEO requirements.
- Rejected mass AI thin pages, doorway pages, fake authority/citations, duplicate indexable URLs, and unapproved tracking as SEO/GEO tactics.
- Confirmed `llms.txt` is not an INCO launch requirement without a later concrete approved use case.
- Corrected EN/AR mobile Figma baselines to include the planned transaction date.
- Corrected generic Arabic mobile UI remnants while preserving clear specialist terminology where appropriate.
- Added pre-Codex defect/resolution governance.
- Added V1 Terms of Use and Privacy Notice working drafts.
- Updated README and SECURITY maturity/MyGPT wording.
- Completed final Product + Brand + SEO + GEO review.

### 2026-08-06

- Approved static browser deployment under `mostafagad.net/inco` on Neom Cloud.
- Approved the deterministic browser runtime and governed public-knowledge export.
- Approved English Desktop and Mobile visual baselines.
- Approved Arabic RTL Desktop and Mobile visual baselines.
- Approved the INCO primary-logo master as the only Figma logo source.
- Closed INCO V1 product-definition and bilingual visual-design phase.
- Completed the governed MyGPT configuration and knowledge cleanup.
- Completed the mandatory MyGPT audit with 16/16 scenarios and zero failures.
- Completed the post-cleanup MyGPT regression with 3/3 scenarios passed.
- Granted owner approval for public MyGPT-link implementation.
- Administratively organized the live Figma file without changing the approved visual baseline.
- Created file-guide, controlled-components, QA, and archive pages.
- Locked the four approved visual frames, V1 closure node, and approved logo master.
- Recorded the Figma organization in `docs/INCO_FIGMA_FILE_ORGANIZATION_LOG_v1.0.md`.
- Moved the project to coded gap analysis, verified alignment, pre-deployment QA, release artifact generation, Neom Cloud deployment, and live verification.
