# INCO Codex Pre-Execution Gate v1.2

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
8. `docs/CODEX_FINAL_IMPLEMENTATION_AND_PREDEPLOYMENT_v1.0.md`
9. live corrected Figma nodes `2:2`, `2:150`, `40:2`, `45:2`

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

## Canonical / SEO / GEO / Entity Authority Rules

- Canonical must be exactly `https://mostafagad.net/inco/` with trailing slash.
- `/products/inco/`, if present at the site-routing layer, must permanently redirect to `/inco/` and must not remain independently indexable.
- `/products/` remains the product-discovery hub and should link to `/inco/` rather than create a duplicate detail page.
- SEO and GEO are one coordinated discoverability strategy; do not introduce GEO hacks or AI-only ranking shortcuts.
- Preserve the approved brand relationship: INCO is a flagship Mostafa Gad knowledge-to-execution product, not a detached independent corporate brand.
- Implement truthful structured data aligned with visible content and the Mostafa Gad creator/founder relationship where supported.
- Use clear semantic heading hierarchy and crawlable EN/AR experiences.
- Document V3 hreflang/language-routing requirements; do not invent a standalone INCO language URL model that conflicts with the parent-site architecture.
- Support source-grounded retrieval through clear result/content structure, non-sensitive provenance, and stable URLs where technically supported.
- Do not expose protected/internal/licensed source material in provenance or structured data.
- Do not add mass AI-generated thin pages, doorway pages, keyword permutations, fake citations/reviews/authority signals, or duplicate indexable routes.
- Do not add `llms.txt` as a launch requirement unless a later approved concrete use case exists.
- Do not claim live/current verification, rates, capacity, booking, acceptance, clearance, or authority approval without an actual supported live process.

## SEO/GEO QA Requirements

The final QA report must explicitly verify:

1. canonical URL consistency across HTML, JSON-LD, Open Graph, and public documentation;
2. no competing indexable INCO URL in the implementation scope;
3. title/meta direction consistent with the approved brand strategy;
4. truthful WebApplication/entity structured data;
5. semantic heading hierarchy;
6. EN/AR `lang` / `dir` correctness;
7. V3 sitemap/internal-link/hreflang integration requirements are documented;
8. no protected/internal source leakage in visible provenance;
9. no unapproved tracking or shipment-case analytics;
10. no mass-page or SEO/GEO shortcut was introduced.

## Release gate

Codex must output `NOT READY` if any unresolved product/security/privacy P0 remains.

Open owner/legal/hosting-verification placeholders that are clearly isolated from implementation may be reported separately, but Codex must not convert drafts into final jurisdiction-specific legal claims.

Codex must not deploy to Neom Cloud or declare the production site live.
