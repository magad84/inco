# INCO SEO / GEO Implementation Requirements

**Date:** 2026-08-16  
**Owner:** Mostafa Gad  
**Status:** OWNER-APPROVED POLISH DIRECTION / CODEX IMPLEMENTATION REQUIREMENTS  
**Scope:** Canonical INCO public routes `/inco/` and `/ar/inco/`  

## 1. Governing intent

INCO must remain human-first, rules-first and evidence/source-governed. SEO and generative-search visibility must improve discoverability without changing product claims, inventing capabilities, keyword stuffing, or writing artificial copy for AI systems.

The current approved product facts remain authoritative:

- Free bilingual international trade and logistics decision support.
- Rules-first / deterministic result behavior.
- No registration or payment for V1.
- No intentional shipment-case persistence or transmission merely to provide a result.
- Primary V1 destination packs: UAE, Saudi Arabia, Egypt and Oman.
- INCO Assistant may explain/follow up but cannot override the deterministic result and must not receive shipment data automatically.

## 2. Canonical and language architecture

- EN canonical route: `https://mostafagad.net/inco/`
- AR canonical route: `https://mostafagad.net/ar/inco/`
- Each route must self-canonical.
- EN and AR must use reciprocal `hreflang` only because they are genuine counterparts.
- `/products/inco/` and `/ar/products/inco/`, if present, are redirect-only and must not compete as indexable duplicates.
- Include both canonical URLs in the XML sitemap after the routes are live and verified.
- Do not introduce forced browser-language redirects.

## 3. Search title and description direction

Recommended EN title direction:

`INCO | Free International Trade & Logistics Decision Support`

Recommended EN meta-description direction:

`Check shipment plans before execution with INCO, a free rules-first international trade and logistics decision-support service for the UAE, Saudi Arabia, Egypt and Oman.`

Codex may make minor length/punctuation adjustments for implementation, but must preserve the meaning and must not introduce unsupported claims.

Arabic title/description must be professionally localized rather than mechanically translated and must reflect the same verified product scope.

## 4. Visible content semantics

The approved EN Desktop polish establishes the following human-facing content principles:

- Never expose internal machine status codes such as `confirmation_required` as user-facing copy. Render `Confirmation required` while retaining internal status values in application state/API contracts.
- Country selectors/fields should display human-readable names plus ISO codes, e.g. `China (CN)` and `United Arab Emirates (AE)`.
- The hero visible description should explicitly establish the entity and topic:
  - INCO is free;
  - rules-first;
  - international trade and logistics;
  - decision support;
  - aimed at professionals, entrepreneurs and importers;
  - identifies missing information, operational risks, required confirmations and practical next steps.
- Preserve one clear page H1. Use semantic H2/H3 hierarchy for Shipment Facts, Initial Result, explanation/confirmation areas, assistant and About/Founder content.
- Form labels must be actual accessible labels, not presentation-only text.
- Important explanatory copy must be present as crawlable DOM text and must not exist only in canvas, CSS-generated content, images or inaccessible client-side states.

## 5. Crawlable product explanation

The interactive experience must not be the only source of product meaning.

Codex must ensure the initial crawlable DOM contains enough truthful static content for a user/search system to understand at minimum:

- what INCO is;
- who it is for;
- what it checks at a high level;
- primary V1 supported destination packs;
- rules-first / deterministic boundary;
- privacy/no-saved-case direction;
- major limitations and need for official/carrier confirmation;
- relationship to INCO Assistant;
- founder/domain-governance attribution.

This can reuse the existing approved hero, form guidance, trust chips, founder block, navigation anchors and existing content. Do not create a long SEO essay or duplicate the same copy repeatedly.

If the result panel only appears after user interaction in production, include concise static explanatory content elsewhere in the initial DOM rather than depending on the generated result state for indexing.

## 6. Structured data

Use structured data only where it truthfully describes visible content. Do not add fake ratings, reviews, prices, availability or organization claims.

Recommended implementation evaluation:

1. Use the parent site's established `WebSite` / `Person` entity graph where already governed.
2. Represent INCO as a web/software application only if the implementation can satisfy the selected schema type accurately.
3. If using Google-supported `SoftwareApplication` markup, validate all required fields and represent the free offer truthfully (for example price `0` where appropriate under the selected markup), with no fabricated rating/review data.
4. Link the INCO entity to the verified Mostafa Gad / parent-platform entity using stable IDs/URLs in the site's JSON-LD graph rather than duplicating inconsistent entities.
5. Validate JSON-LD with the applicable structured-data/Rich Results validation tools before release.

Structured data is supportive SEO, not a special GEO ranking mechanism.

## 7. Images and entity consistency

- Hero image must have meaningful alt text only if it conveys content; otherwise use an empty alt for purely decorative imagery.
- Do not keyword-stuff alt text.
- INCO name, logo, description, supported-country scope and founder relationship must remain consistent across visible content, metadata, structured data, Open Graph/social metadata and product references.
- Use the approved INCO logo master; do not redraw/recolor it for SEO/social output.
- Provide an optimized Open Graph image/social preview derived from approved INCO branding and truthful product positioning.

## 8. Technical SEO

Codex must verify before release:

- HTTP 200 on the canonical EN/AR routes;
- no accidental `noindex`/robots block;
- crawlable links to the canonical route from the parent Products Hub and relevant internal navigation;
- correct canonical and reciprocal hreflang;
- sitemap inclusion;
- semantic HTML and accessible headings/labels;
- descriptive title/meta description;
- fast, responsive rendering and Core Web Vitals-friendly image/font loading;
- no duplicate indexable `/products/inco/` page;
- no client-side requirement that prevents core explanatory text from entering the DOM;
- correct Open Graph/Twitter-style metadata where used by the parent platform;
- Search Console verification/inspection after launch where operational access exists.

## 9. GEO / generative-search direction

No artificial AI-only rewrite is required. The implementation should maximize clarity, retrieval and citation value through:

- concise entity definition early on the page;
- unique domain expertise and rules-first methodology;
- visible limitations and source/confirmation boundaries;
- clear supported-country scope;
- consistent entity/product terminology across text, metadata and images;
- crawlable structured explanatory content;
- current/updated authoritative source references where relevant;
- strong internal linking from relevant parent-platform Supply Chain, Logistics and product-discovery content;
- factual founder/domain-governance attribution without exaggerated personal claims.

Do not create thin keyword-variant pages for each phrase or country merely for GEO.

## 10. Bing / AI visibility and freshness

After live deployment and verification:

- keep Bing Webmaster Tools connected for the parent domain;
- review Bing AI Performance when available for URL citation/AI-answer visibility;
- use IndexNow through the parent-site implementation if already adopted or technically appropriate, especially when INCO public content/source packs materially change;
- do not treat IndexNow as a substitute for sitemap, crawlability or quality content.

## 11. `llms.txt`

Do not make `llms.txt` a launch dependency or claim it improves Google Search/AI visibility. If the parent platform later adopts it for other consumers, it must be generated from current public source-of-truth content and must not expose internal/private knowledge.

## 12. Approved visual polish to implement faithfully

The EN Desktop Figma V1.3 polish includes:

- human-readable `Confirmation required` display;
- human-readable country name + ISO-code display;
- lighter hero overlay for improved image clarity while preserving contrast;
- stronger hierarchy for `Missing information` and `Recommended next action`;
- tighter INCO Assistant explanatory copy;
- stronger founder/domain-governance block;
- hero copy that explicitly defines INCO as a free, rules-first international trade and logistics decision-support service.

Figma remains the visual authority. Internal engine/API values remain governed by the INCO product contracts.

## 13. Official search guidance used for this implementation note

- Google Search Central: Optimizing your website for generative AI features on Google Search.
- Google Search Central: SEO Guide for Web Developers.
- Google Search Central: Search appearance / structured data guidance.
- Google Search Central: SoftwareApplication structured data guidance.
- Google Search Central: Snippet/meta-description guidance.
- Microsoft Bing Webmaster Blog: AI Performance in Bing Webmaster Tools and IndexNow guidance.

Codex should check current official documentation at implementation/release time because search platform requirements can change.

## 14. Boundary

This document does not authorize production deployment by itself. It supplies implementation/QA requirements for the already-governed INCO release process.
