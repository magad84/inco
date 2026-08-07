# INCO Codex Pre-Execution Gate v1.3

**Date:** 2026-08-07  
**Status:** MANDATORY

Before any final implementation work, Codex must read in this order:

1. `CURRENT_STATE.md`
2. `docs/INCO_PRE_CODEX_REVIEW_DEFECT_AND_IMPROVEMENT_REGISTER_v1.0.md`
3. `docs/INCO_PRE_CODEX_REVIEW_RESOLUTION_LOG_v1.0.md`
4. `docs/INCO_TERMS_OF_USE_DRAFT_v1.0.md`
5. `docs/INCO_PRIVACY_NOTICE_DRAFT_v1.0.md`
6. `docs/ADR_008_INCO_CANONICAL_URL_AND_BRAND_AUTHORITY_v1.0.md`
7. `docs/ADR_009_INCO_SEO_GEO_ENTITY_AUTHORITY_STRATEGY_v1.0.md`
8. `docs/ADR_010_INCO_BILINGUAL_ROUTES_V3_PRECEDENCE_AND_FREE_V1_MODEL_v1.0.md`
9. `docs/CODEX_FINAL_IMPLEMENTATION_AND_PREDEPLOYMENT_v1.0.md`
10. live corrected Figma nodes `2:2`, `2:150`, `40:2`, `45:2`

The Resolution Log overrides the earlier register only for defects explicitly recorded there as resolved or reclassified.

## Mandatory gate rules

- Perform gap analysis before editing.
- Address every still-open P0/P1 register item explicitly in the QA matrix.
- The mobile planned-transaction-date field has been corrected in live Figma and must be preserved in code.
- Arabic general UI labels and explanatory copy must be coherent. Specialist logistics, trade, customs, DG, and operational terminology may remain English where professionally clearer; do not force awkward translation.
- Do not invent governing law, jurisdiction, dispute rules, final liability exclusions, technical-log retention, or other unresolved owner/legal/hosting decisions.
- Do not add analytics, tracking, remote scripts, persistent case storage, server-side feedback collection, or third-party data transmission without explicit approval.
- Preserve local browser evaluation and same-origin governed knowledge loading.
- Trace and reconcile the legacy `unsupported_scope` handling with the approved five-state public contract.
- README and SECURITY maturity/MyGPT wording have already been updated; preserve the corrected state unless implementation evidence requires a factual update.
- Implement approved neutral Terms / Privacy / Professional limitations navigation and concise pre-use professional-boundary copy. Jurisdiction-specific legal language remains outside Codex authority.
- The exact approved MyGPT URL must send no shipment/result/query data.
- Feedback remains local-only unless separately approved; the UI must not imply successful server submission.
- Verify no shipment/result values are persisted in localStorage, sessionStorage, IndexedDB, cookies, URL parameters, analytics payloads, or third-party scripts.
- Remove any V1 `small fee`, freemium, premium, upgrade, paid-tier, pricing, subscription, or paid-report messaging.
- Preferred service wording is `Free professional decision-support service` / `خدمة مجانية لدعم القرار المهني`.

## Governance Precedence

For INCO-specific implementation, use current INCO governance over conflicting historical parent-site descriptions.

Precedence:

1. `CURRENT_STATE.md`
2. Current approved INCO ADRs, especially ADR-008, ADR-009, ADR-010
3. Current approved live INCO Figma baselines
4. This Codex gate and the current final implementation task
5. Parent MostafaGad.net V3 architecture for non-conflicting cross-site integration requirements
6. Historical parent-site descriptions of INCO as background only

Do not revert INCO to an external-GPT-only gateway, subdomain-only application, or `/products/inco/` canonical detail page because an older parent document contains that description.

## Canonical / Bilingual / SEO / GEO / Entity Authority Rules

- EN route and canonical: `https://mostafagad.net/inco/`.
- AR route and canonical: `https://mostafagad.net/ar/inco/`.
- Each route must self-canonicalize.
- `hreflang="en"` -> `/inco/`.
- `hreflang="ar"` -> `/ar/inco/`.
- `hreflang="x-default"` -> `/inco/`.
- The Arabic experience must be independently crawlable; a JS-only language toggle at `/inco/` is not sufficient for final production.
- The language switcher must navigate between the real EN and AR routes.
- `/products/inco/`, if present, must permanently redirect to `/inco/` and must not remain independently indexable.
- `/ar/products/inco/`, if present, must permanently redirect to `/ar/inco/` and must not remain independently indexable.
- `/products/` and `/ar/products/` remain product-discovery hubs and should link to the canonical INCO routes rather than create duplicate detail pages.
- SEO and GEO are one coordinated discoverability strategy; do not introduce GEO hacks or AI-only ranking shortcuts.
- Preserve the approved brand relationship: INCO is a flagship Mostafa Gad knowledge-to-execution product, not a detached independent corporate brand.
- Implement truthful structured data aligned with visible content and the Mostafa Gad creator/founder relationship where supported.
- Use clear semantic heading hierarchy and correct language-specific `lang` / `dir` values.
- Keep metadata, Open Graph, sitemap entries, internal links, canonical tags, and structured data language-aware.
- Support source-grounded retrieval through clear result/content structure, non-sensitive provenance, and stable URLs where technically supported.
- Do not expose protected/internal/licensed source material in provenance or structured data.
- Do not add mass AI-generated thin pages, doorway pages, keyword permutations, fake citations/reviews/authority signals, or duplicate indexable routes.
- Do not add `llms.txt` as a launch requirement unless a later approved concrete use case exists.
- Do not claim live/current verification, rates, capacity, booking, acceptance, clearance, or authority approval without an actual supported live process.

## SEO/GEO/Bilingual QA Requirements

The final QA report must explicitly verify:

1. EN canonical consistency across HTML, JSON-LD, Open Graph, sitemap, and public documentation;
2. AR canonical consistency across HTML, JSON-LD, Open Graph, sitemap, and public documentation;
3. reciprocal EN/AR hreflang plus `x-default`;
4. no competing indexable INCO detail URL;
5. title/meta direction consistent with the approved brand strategy;
6. truthful WebApplication/entity structured data;
7. semantic heading hierarchy;
8. EN `lang="en"` / LTR and AR `lang="ar"` / RTL correctness;
9. real crawlable AR route rather than JS-only translation at the EN URL;
10. product-hub/internal-link integration;
11. no protected/internal source leakage in visible provenance;
12. no unapproved tracking or shipment-case analytics;
13. no mass-page or SEO/GEO shortcut introduced;
14. no paid/freemium V1 messaging remains.

## Release gate

Codex must output `NOT READY` if any unresolved product/security/privacy P0 remains or if the required bilingual crawlable routing cannot be produced without a parent-site architecture conflict.

Open owner/legal/hosting-verification placeholders that are clearly isolated from implementation may be reported separately, but Codex must not convert drafts into final jurisdiction-specific legal claims.

Codex must not deploy to Neom Cloud or declare the production site live.
