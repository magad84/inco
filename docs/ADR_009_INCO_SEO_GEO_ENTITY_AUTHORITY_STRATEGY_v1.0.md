# ADR-009: INCO SEO, GEO, and Entity-Authority Strategy v1.0

**Status:** APPROVED  
**Date:** 2026-08-07  
**Owner:** Mostafa Gad  
**Repository:** `magad84/inco`

## Decision

INCO will be implemented as a search- and AI-retrieval-ready flagship authority product under `MostafaGad.net`.

SEO and GEO are one coordinated discoverability strategy. GEO is not treated as a separate layer of tricks, mass AI content, or AI-only technical files. The implementation must prioritize crawlability, canonical consistency, original expert-led content, source-grounded statements, structured entities, stable URLs, and clear answer architecture.

Primary canonical product URL:

`https://mostafagad.net/inco/`

Any legacy or alternate `/products/inco/` route must permanently redirect to `/inco/` and must not remain independently indexable.

## Brand Objective

The discoverability objective is not only to rank the word `INCO`.

INCO should strengthen the entity and topical authority of:

- Mostafa Gad;
- MostafaGad.net;
- Business and Operations leadership;
- Supply Chain and Logistics expertise;
- international trade decision support;
- knowledge-to-execution capability;
- applied AI and automation as management execution enablers.

The intended relationship is:

`Mostafa Gad` → `professional domain expertise` → `INCO` → `structured, source-governed decision support`.

INCO must not be positioned as an independent corporate brand detached from MostafaGad.net.

## Search Intent Strategy

Prioritize real professional/problem intent rather than brand-name repetition.

Representative English topics include:

- shipment compliance check;
- import and export requirements;
- shipment preparation checklist;
- dangerous-goods pre-screening;
- customs and destination requirements;
- freight-quotation readiness;
- shipping risk assessment;
- missing SDS and unknown-chemical shipment decisions;
- damaged lithium-battery shipment decisions;
- candidate HS guidance versus final classification.

Arabic content should express the same user problems naturally rather than through literal keyword translation.

Do not keyword-stuff UI copy.

## GEO / AI Retrieval Principles

Content intended for public retrieval should make important facts easy to identify and ground.

Where applicable, INCO content and results should expose a clear structure such as:

1. What is known.
2. What information is missing.
3. Material risks.
4. Authority or provider that must confirm.
5. Controlled/official source reference.
6. Impact if not confirmed.
7. Recommended next action.

This structure supports humans first and also improves machine retrieval and answer grounding.

## Provenance and Freshness

Where technically and editorially appropriate, public technical evidence may show non-sensitive provenance such as:

- INCO engine/release version;
- knowledge release identifier;
- evaluation date;
- source review/effective date;
- source identifier or public source link where allowed.

Do not expose protected, licensed, private, credential, or internal source material.

Do not label a source or result `live`, `current`, `verified`, or equivalent unless the underlying process actually supports that claim.

## Structured Data and Entity Linking

The INCO public page should use truthful JSON-LD or equivalent structured metadata consistent with visible content.

The graph should represent, as supported by the implementation:

- INCO as a WebApplication or equivalent appropriate product entity;
- `url`: `https://mostafagad.net/inco/`;
- `isAccessibleForFree: true`;
- English and Arabic language support;
- Mostafa Gad as creator/founder where supported by the public page;
- a consistent MostafaGad.net person/site identity.

Do not fabricate ratings, reviews, organizations, certifications, awards, availability, capabilities, or endorsements.

## Metadata

The final public implementation should use one consistent canonical URL with trailing slash.

Preferred title direction:

`INCO | Free International Trade & Logistics Decision Support | Mostafa Gad`

Metadata should be concise, human-readable, and aligned with visible page content.

Open Graph, structured data, sitemap references, internal links, canonical references, and hreflang references must use the same approved canonical architecture.

## Bilingual Search Architecture

The final MostafaGad.net V3 integration must provide crawlable English and Arabic experiences consistent with the site's approved language-routing architecture.

Requirements include, where applicable:

- correct `lang` and `dir` values;
- self-consistent canonicals;
- `hreflang` for EN and AR language alternatives;
- `x-default` only where justified by the site architecture;
- no duplicate competing indexable versions generated solely by client-side language toggles.

Codex must coordinate with the actual V3 routing architecture rather than invent an unrelated INCO-only URL pattern.

## Internal-Link Authority Loop

INCO should participate in a controlled internal-link loop:

`MostafaGad.net expertise/content` → `INCO` → `relevant Mostafa Gad content/expertise`.

Useful links may include:

- About Mostafa Gad;
- Supply Chain and Operations expertise;
- relevant articles/research;
- Knowledge-to-Execution Digital Platforms;
- Products hub;
- GitHub methodology/open-source proof where contextually appropriate.

Avoid excessive navigational or promotional links inside the transactional form/result flow.

## Supporting Content Cluster

Post-launch content should grow around genuine user problems and INCO decision logic, not mass generated pages.

Priority themes may include:

- preparing shipment facts before requesting freight quotations;
- why price or a route does not equal acceptance;
- unknown chemical composition and SDS gaps;
- damaged lithium batteries;
- UAE, Saudi Arabia, Egypt, and Oman shipment preparation;
- candidate classification guidance;
- destination and provider confirmation;
- uncertainty and risk controls in international trade.

Content should be expert-led, source-grounded, useful independently, and linked contextually to INCO.

## Prohibited GEO/SEO Patterns

Do not use:

- mass AI-generated thin pages;
- doorway pages or keyword permutations;
- fake citations, fake reviews, or synthetic authority signals;
- hidden keyword blocks;
- duplicated `/products/inco/` and `/inco/` indexable pages;
- claims of live rates, capacity, booking, approval, or clearance without live support;
- unnecessary AI-specific files or mechanisms presented as guaranteed ranking/citation controls;
- an `llms.txt` file as an assumed launch requirement unless later supported by a concrete, approved use case.

## Measurement After Launch

Launch measurement should focus on brand and authority outcomes, including:

- Search Console impressions, clicks, queries, and landing pages;
- Arabic versus English visibility;
- indexed canonical health;
- referrals from supporting articles into INCO;
- clicks from INCO into relevant Mostafa Gad expertise/content;
- MyGPT outbound clicks without shipment-data transfer;
- AI-search or citation reporting made available by supported webmaster platforms.

Any analytics implementation must be privacy-reviewed and must not collect shipment descriptions, confidential facts, or case content.

## Codex Release Requirements

Before declaring the static artifact ready, Codex must verify:

1. canonical is exactly `https://mostafagad.net/inco/`;
2. no competing indexable INCO URL is introduced;
3. title/meta/structured data are aligned with the approved brand relationship;
4. JSON-LD contains only truthful visible facts;
5. Mostafa Gad entity association is present but does not turn the product UI into a self-promotional biography;
6. semantic heading hierarchy is clear;
7. EN/AR language and direction are correct;
8. sitemap/internal-link/hreflang requirements are documented for V3 integration;
9. source/provenance fields do not expose protected internal material;
10. no SEO/GEO shortcut, mass-page generation, or unapproved tracking is introduced.

## Strategic Outcome

INCO is approved as a **free authority product** and a flagship proof of Mostafa Gad's knowledge-to-execution positioning.

Search and AI retrieval should amplify the relationship between INCO, Mostafa Gad's professional expertise, and MostafaGad.net rather than building INCO as a detached standalone brand.
