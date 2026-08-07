# ADR-008: INCO Canonical URL and Brand Authority

**Status:** APPROVED  
**Date:** 2026-08-07  
**Owner:** Mostafa Gad

## Decision

The official canonical public URL for INCO is:

`https://mostafagad.net/inco/`

This is the single indexable canonical product URL for INCO.

Any alternate or legacy product path, including:

`https://mostafagad.net/products/inco/`

must permanently redirect with HTTP `301` to:

`https://mostafagad.net/inco/`

The `/products/` route remains the MostafaGad.net product hub and may contain an INCO card or summary that links to `/inco/`.

## Brand Rationale

INCO is a flagship Mostafa Gad knowledge-to-execution product, not an independent corporate brand. The direct `/inco/` route keeps search authority, inbound links, product discovery, and professional credibility consolidated under `MostafaGad.net` while giving the product a short, memorable, first-class URL.

The public relationship should be clear but restrained:

- INCO is created/founded and domain-governed by Mostafa Gad.
- Mostafa Gad is positioned as a Business and Operations Leader with deep supply-chain expertise.
- Technology, automation, and AI remain execution enablers rather than the primary professional identity.

## SEO Requirements

Implementation must use the exact trailing-slash canonical consistently:

`https://mostafagad.net/inco/`

This exact URL must be used in:

- HTML canonical tag;
- XML sitemap;
- internal links;
- structured data;
- Open Graph URL;
- hreflang references where applicable;
- GitHub/public documentation;
- share links and product-hub links.

Do not maintain two indexable INCO pages with materially duplicate content.

## Redirect Requirement

`/products/inco/` -> `301` -> `/inco/`

No redirect chain should be introduced.

## Structured Entity Relationship

The INCO page should identify INCO as a `WebApplication` or equivalent appropriate schema entity and connect it to the Mostafa Gad person entity using accurate `creator` and/or `founder` relationships.

Do not fabricate ratings, reviews, certifications, affiliations, or unsupported claims.

## Product Hub Relationship

`https://mostafagad.net/products/` remains indexable as a discovery hub.

Its INCO entry should link directly to:

`https://mostafagad.net/inco/`

It must not create a second canonical product detail page.

## Acceptance Criteria

This decision is implemented when:

1. `/inco/` is the only canonical INCO product URL.
2. `/products/inco/` returns a permanent 301 to `/inco/` if that path exists.
3. sitemap, canonical, structured data, internal navigation, and share metadata use the same canonical URL.
4. no duplicate indexable INCO product page exists.
5. the page preserves the approved Mostafa Gad brand relationship without turning INCO into a separate corporate identity.

## Governance

This ADR supersedes any earlier planning reference that treated `/products/inco/` as the primary public product URL.

Any later change to the canonical URL requires explicit owner approval because it affects SEO, internal linking, redirects, analytics continuity, and product-brand architecture.
