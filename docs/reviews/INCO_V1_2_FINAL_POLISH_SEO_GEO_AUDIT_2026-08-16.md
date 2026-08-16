# INCO V1.2 Final Polish + SEO/GEO Audit

**Date:** 2026-08-16  
**Repository:** `magad84/inco`  
**Status:** FIGMA FINAL POLISH COMPLETE / OWNER REVIEW PENDING / CODEX IMPLEMENTATION HANDOFF  
**Scope:** EN Desktop visual/content polish plus SEO/GEO implementation audit. No production deployment is authorized by this record.

## 1. Governing Figma state

Figma file: `ukiYrUNG1zs38GMS3edxJ2`

Current polished EN Desktop:
- Node `2:2`
- Name: `OWNER REVIEW PENDING • EN • DESKTOP • V1.2 • FINAL POLISH • 2026-08-16`

Safety backup created before changes:
- Node `65:2`
- Name: `BACKUP / EN DESKTOP / V1.1 / PRE FINAL POLISH / 2026-08-16`

Figma remains the visual authority.

## 2. Owner-approved polish applied

The following changes were applied to the EN Desktop design without changing deterministic product behavior:

1. Internal controlled state is no longer shown to users as raw `confirmation_required`; UI copy is `Confirmation required` while the engine/API value remains unchanged.
2. Country fields now show human-friendly labels while retaining ISO codes: `China (CN)` and `United Arab Emirates (AE)`.
3. Hero image clarity was increased modestly and the navy overlay was lightened while preserving text contrast and the INCO visual direction.
4. Result hierarchy was improved without deleting information:
   - `Missing information` receives stronger visual emphasis.
   - `Recommended next action` receives stronger visual emphasis.
   - `Official confirmation protocol` remains visible but visually secondary.
5. INCO Assistant copy was tightened while preserving the controlling boundary: the assistant cannot override the deterministic result and no shipment data is transferred automatically.
6. Founder/credibility treatment was strengthened without converting the product into a personal-brand page.
7. Credibility copy now contains truthful service/entity context for human users and search/AI retrieval:
   - Mostafa Gad as founder/domain-governance authority.
   - international-trade and logistics checks.
   - primary V1 destination packs: UAE, Saudi Arabia, Egypt, Oman.

## 3. Current implementation parity gaps found on `main`

The current public build still copies `packages/uat-ui/index.html`, `styles.css`, and `app.js` directly into `dist-public` through `scripts/build-public.mjs`.

The current implementation does not yet match the latest approved design/product state in several important areas:

### P1-A. Raw internal status codes are still rendered

`packages/uat-ui/app.js` currently writes `result.decisionState` directly into the visible state element. Codex must introduce a locale-aware presentation-label map for all approved controlled states while preserving machine values in data attributes/internal logic.

Required principle:

`confirmation_required` -> visible EN `Confirmation required` / approved AR equivalent.

Apply the same human-label rule to other machine enums/statuses where they appear in user-facing UI. Do not alter engine contracts merely to improve labels.

### P1-B. Current language implementation is not crawlable bilingual routing

`packages/uat-ui/index.html` is currently one EN HTML document with JavaScript language switching.

This conflicts with the approved architecture:
- EN canonical route: `/inco/`
- AR canonical route: `/ar/inco/`
- each route must expose its own language in initial crawlable HTML
- reciprocal `hreflang=en` / `hreflang=ar`
- `hreflang=x-default` -> `/inco/`

Codex must not rely on a JS toggle at a single URL as the SEO/GEO language architecture.

### P1-C. Canonical normalization

Current HTML uses `https://mostafagad.net/inco` while the approved canonical route is `https://mostafagad.net/inco/`.

Use one normalized canonical form consistently across:
- canonical tags
- hreflang
- sitemap
- internal links
- redirects
- Open Graph URL
- structured data URL

`/products/inco/` and `/ar/products/inco/`, if present, must remain permanent redirects only and must not be indexed as competing detail pages.

### P1-D. Figma V1.2 parity

Current UAT HTML still contains superseded UI/content such as the feedback block and older assistant/founder copy. Codex must implement the latest approved/pending Figma baseline, not preserve stale UAT presentation simply because it exists in `packages/uat-ui`.

## 4. SEO implementation requirements

### 4.1 Language-specific metadata

Each language route requires its own truthful metadata.

Recommended EN title direction:

`INCO | Free International Trade & Logistics Decision Support`

Recommended EN description direction:

`Free international trade and logistics decision support to identify shipment risks, missing facts, required confirmations, and practical next steps before execution.`

Arabic must use genuine Arabic title/description rather than translating metadata client-side after load.

Keep titles descriptive and concise. Do not keyword-stuff.

### 4.2 Open Graph / social metadata

The current HTML has no complete language-specific Open Graph layer.

Add, per route:
- `og:title`
- `og:description`
- `og:url`
- `og:type=website`
- approved INCO social/preview image
- appropriate locale / alternate-locale metadata where used

Use an approved INCO visual asset. Do not generate an unofficial logo or misleading product screenshot.

### 4.3 Sitemap and discovery

The parent MostafaGad.net sitemap should include only canonical INCO URLs intended for indexing:
- `/inco/`
- `/ar/inco/`

Do not include redirect-only product-detail aliases as canonical URLs.

Where practical, include language alternates in sitemap or HTML hreflang. Reciprocal annotations must be consistent.

### 4.4 Semantic HTML

Preserve a clear hierarchy:
- one primary H1 describing the user problem
- descriptive H2/H3 sections
- real navigation links rather than JS-only pseudo-links
- accessible labels and form controls
- useful alt text for meaningful imagery; decorative imagery may use empty alt appropriately

### 4.5 Visible expert-led content

SEO/GEO must not depend only on metadata.

The public page should visibly and truthfully establish:
- what INCO is: international trade and logistics decision support
- what it checks: destination requirements, cargo/DG indicators, route/service conditions, missing information, required confirmations, next action
- current V1 destination packs: UAE, Saudi Arabia, Egypt, Oman
- founder/domain-governance relationship to Mostafa Gad
- rules-first / source-governed methodology and professional limitations

The V1.2 credibility block now carries part of this context without interrupting the shipment workflow.

## 5. Structured data

Current HTML uses JSON-LD `WebApplication`, which is directionally appropriate.

Codex should make the structured data language-specific and align it with visible content. Recommended truthful entity model:
- `WebApplication`
- `name: INCO`
- canonical route URL for that language
- `applicationCategory: BusinessApplication`
- `operatingSystem: Web`
- `isAccessibleForFree: true`
- `inLanguage: en` or `ar` per route, rather than a single mixed-language page signal
- `creator` / founder link to the canonical Mostafa Gad public profile/entity page
- `isPartOf` the MostafaGad.net website entity where accurate
- useful `description`

If Google SoftwareApplication rich-result eligibility is intentionally pursued, validate all Google-required properties, including the applicable Offer/price requirements for a free application. Do not add arbitrary commercial currency/offer data solely to chase a rich result. Fewer complete and truthful properties are preferred over inflated schema.

No fake reviews, ratings, awards, certifications, approvals, or unsupported authority claims.

## 6. GEO / AI-search requirements

There is no separate INCO strategy based on AI-specific hacks. GEO is part of the same discoverability strategy as SEO.

### Required

1. Keep important product/methodology/source statements in crawlable public HTML.
2. Use stable canonical URLs and source-grounded factual statements.
3. Maintain clear entity relationships: INCO, Mostafa Gad, MostafaGad.net, supported destination packs, and the product's rules-first methodology.
4. Ensure `Sources` and `Methodology` footer destinations resolve to real crawlable content or approved on-page anchors, not dead/no-op links.
5. Keep source/provenance information non-sensitive and useful where published.
6. Allow normal search crawling for public INCO routes.
7. If the Owner wants visibility in ChatGPT Search, ensure the parent `robots.txt` does not block `OAI-SearchBot` from public INCO content. This is separate from any decision about training crawlers such as GPTBot.
8. Verify no WAF/CDN/bot rule inadvertently blocks legitimate public search crawlers.

### Optional / P2

- Use IndexNow on real public-content updates if the parent deployment architecture supports it cleanly, mainly to accelerate Bing/Copilot discovery.
- Monitor Google Search Console generative-AI visibility reports and Bing Webmaster Tools AI Performance when available for the property.
- Track ChatGPT referral traffic only if/when the wider site analytics/privacy model is explicitly approved. Do not introduce tracking into anonymous INCO merely for GEO measurement without the required privacy decision.

### Not required

- `llms.txt` is not a launch requirement.
- no mass AI-generated landing pages
- no doorway pages
- no keyword permutation pages
- no artificial citation/mention schemes
- no rewriting copy into unnatural AI-targeted fragments

## 7. Implementation acceptance checklist for Codex

Before INCO is considered SEO/GEO implementation-ready, verify:

1. EN page initial HTML is English and crawlable at `/inco/`.
2. AR page initial HTML is Arabic/RTL and crawlable at `/ar/inco/`.
3. Self-canonicals use the normalized final URLs.
4. Reciprocal hreflang and x-default pass validation.
5. Redirect-only aliases do not compete for indexing.
6. Sitemap contains canonical routes only.
7. Visible state labels are human-readable while engine values remain stable.
8. Country UI is human-readable while payloads retain controlled codes.
9. V1.2 Figma visual/content parity is met.
10. Feedback UI remains removed unless a later data-flow decision re-authorizes it.
11. INCO Assistant link/copy preserves the no-auto-transfer and deterministic-authority boundary.
12. Language-specific title, description, OG and JSON-LD are truthful and validated.
13. Source and Methodology destinations are real and crawlable.
14. Google Rich Results / schema validation is run where applicable.
15. Search Console URL inspection is completed after deployment.
16. Public robots/WAF behavior is checked for Google/Bing and OAI-SearchBot if ChatGPT Search visibility is desired.
17. No analytics/tracking is introduced contrary to the anonymous V1/privacy boundary.

## 8. External primary guidance reviewed

Current recommendations were checked against primary sources available on 2026-08-16, including:

- Google Search Central: optimizing for generative AI features on Google Search
  - https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central: multilingual / multi-regional sites
  - https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Google Search Central: canonicalization
  - https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google Search Central: SoftwareApplication structured data
  - https://developers.google.com/search/docs/appearance/structured-data/software-app
- OpenAI Publisher FAQ: OAI-SearchBot / ChatGPT Search discoverability
  - https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Microsoft Bing Webmaster: AI Performance / AI-search visibility and IndexNow
  - https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview

## 9. Governance

This audit authorizes no production deployment and does not change INCO's approved product scope.

Codex may implement routine technical SEO/GEO corrections that preserve this approved product/design direction. Material changes to product scope, privacy, analytics, legal claims, supported markets, data flows, or public authority claims require a new Owner Decision.
