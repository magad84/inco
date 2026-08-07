# ADR-010: INCO Bilingual Routes, V3 Precedence, and Free V1 Model

**Status:** APPROVED  
**Date:** 2026-08-07  
**Owner:** Mostafa Gad

## Decision

INCO V1 will use separate crawlable English and Arabic public routes within MostafaGad.net, following the parent V3 bilingual architecture while preserving INCO's independently governed product architecture.

Approved public routes:

- English: `https://mostafagad.net/inco/`
- Arabic: `https://mostafagad.net/ar/inco/`

The English route remains the primary/default public product URL and `x-default` target.

Each language page must self-canonicalize:

- EN canonical -> `https://mostafagad.net/inco/`
- AR canonical -> `https://mostafagad.net/ar/inco/`

Approved hreflang relationship:

- `hreflang="en"` -> `https://mostafagad.net/inco/`
- `hreflang="ar"` -> `https://mostafagad.net/ar/inco/`
- `hreflang="x-default"` -> `https://mostafagad.net/inco/`

The language switcher must move between the real EN and AR routes. JavaScript may support interaction, but the Arabic experience must not depend solely on client-side text replacement at the English URL.

## Legacy / Alternate Product Route

If `https://mostafagad.net/products/inco/` exists, it must return a permanent HTTP `301` redirect to:

`https://mostafagad.net/inco/`

If an Arabic alternate product-detail route such as `/ar/products/inco/` exists, it must not become a competing canonical detail page. It should redirect to:

`https://mostafagad.net/ar/inco/`

The `/products/` and `/ar/products/` pages remain product-discovery hubs only.

## Governance Precedence for INCO

For INCO-specific implementation, current INCO project decisions override older parent-site descriptions that represented INCO as only a gateway, external GPT link, subdomain application, or `/products/inco/` detail page.

The governing precedence for INCO implementation is:

1. `CURRENT_STATE.md`
2. Current approved INCO ADRs, including ADR-008, ADR-009, and this ADR-010
3. Current approved INCO Figma baselines
4. Current INCO Codex execution gate and implementation task
5. Parent MostafaGad.net V3 architecture for cross-site integration rules that do not conflict with current INCO-specific decisions
6. Historical parent-site INCO descriptions only as background, not implementation authority

This precedence does not allow INCO to override unrelated MostafaGad.net V3 architecture. It only resolves conflicts where older parent documents describe INCO differently from the current independently governed product.

## Free V1 Service Model

INCO V1 is a free professional decision-support service.

Approved public model:

- no payment;
- no subscription;
- no paid tier;
- no freemium upgrade path in V1;
- no paid-report workflow;
- no pricing messaging inside the V1 product experience.

Public copy must not imply that the basic service is intentionally constrained to sell an advanced version.

Remove or replace public wording such as:

- `advanced service for a small fee`;
- `paid tier`;
- `premium plan`;
- `subscription`;
- `upgrade`;
- other V1 freemium or pricing prompts.

Preferred footer/service wording:

- EN: `Free professional decision-support service`
- AR: `خدمة مجانية لدعم القرار المهني`

The word `limited` may still be used in Terms or professional-boundary language when it describes scope, reliance, liability, coverage, or verification limits. It must not describe a commercial free-vs-paid tier model.

## SEO / GEO Rationale

Separate language URLs support:

- independent crawlability and indexing of English and Arabic content;
- correct self-canonicalization;
- explicit hreflang relationships;
- language-specific metadata and structured data;
- Arabic and English search visibility measurement;
- stronger retrieval and citation opportunities for GEO without duplicate-language ambiguity.

Both routes remain under `mostafagad.net`, preserving Mostafa Gad entity and domain authority.

## Implementation Requirements

Codex must:

1. Preserve `/inco/` as the EN route and implement/build an independently crawlable `/ar/inco/` route or the exact parent-site-compatible static equivalent.
2. Use correct `lang` and `dir` values on each language document.
3. Add reciprocal EN/AR hreflang plus `x-default`.
4. Use self-referencing canonical tags for each language route.
5. Keep title, meta description, Open Graph, structured data, internal links, and sitemap language-aware.
6. Preserve INCO's deterministic browser architecture and privacy boundaries.
7. Remove V1 paid/freemium prompts and stale `small fee` survey wording.
8. Preserve clear specialist English terminology in Arabic where professionally appropriate; do not force translation.
9. Report any parent-site routing limitation that prevents true `/ar/inco/` crawlability instead of silently falling back to a JS-only language toggle.

## Acceptance Criteria

This ADR is satisfied when:

- `/inco/` is the EN self-canonical route;
- `/ar/inco/` is the AR self-canonical route;
- reciprocal hreflang and `x-default` are correct;
- product-hub duplicate detail routes do not compete for indexing;
- current INCO governance is used over superseded historical INCO descriptions;
- V1 public copy contains no paid-tier, subscription, pricing, or small-fee upsell message;
- both routes reinforce INCO as a flagship Mostafa Gad knowledge-to-execution product.
