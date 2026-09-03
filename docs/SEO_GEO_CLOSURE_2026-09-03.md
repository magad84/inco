# INCO — SEO/GEO Closure

**Date:** 2026-09-03  
**Status:** OWNER-AUTHORIZED IMPLEMENTATION AUTHORITY  
**Production:** NOT AUTHORIZED

## Canonical public routes

- EN: `https://mostafagad.net/inco/`
- AR: `https://mostafagad.net/ar/inco/`
- `hreflang=en` → `/inco/`
- `hreflang=ar` → `/ar/inco/`
- `x-default` → `/inco/`
- `/products/inco/` and `/ar/products/inco/` are redirect-only aliases if present.

## Product identity lock

EN descriptor: `Free International Trade & Logistics Decision Support`  
AR descriptor: `أداة مجانية لدعم قرارات التجارة الدولية والشحن`

INCO V1 remains free, bilingual, anonymous, deterministic/rules-first, source-governed and browser-local for shipment-case processing by design. It is not a paid/freemium service, live booking/rates platform, customs approval service, or ICC-affiliated/endorsed product.

## Metadata baseline

### EN
- Title: `INCO | Free International Trade & Logistics Decision Support`
- Description: `Free bilingual, rules-first decision support for international trade, shipping and logistics, showing risks, missing information, required confirmations and practical next actions.`

### AR
- Title: `INCO | دعم مجاني لقرارات التجارة الدولية والشحن`
- Description: `أداة مجانية ثنائية اللغة لدعم قرارات التجارة الدولية والشحن بمنهج قواعد واضح يبرز المخاطر والمعلومات الناقصة والتأكيدات المطلوبة والخطوة التالية.`

## Required rendered implementation

- preserve self-canonical and reciprocal hreflang;
- one H1 and semantic landmarks;
- unique EN/AR metadata;
- `WebPage` + `BreadcrumbList` minimum JSON-LD;
- `SoftwareApplication` only when every included attribute is visible and verified;
- no commercial/live-service capability invented in schema;
- stable INCO Open Graph/Twitter preview asset using approved identity;
- informative-image ALT;
- visible source/methodology/governance explanation;
- visible free/anonymous/rules-first boundaries;
- contextual links to relevant MostafaGad.net expertise/research where useful;
- no mass SEO pages, doorway pages or country/keyword permutations.

## GEO rule

The rendered page must make clear: what INCO is, target users, the decision problem it addresses, the four V1 destination packs, how the rules-first result works, what missing facts/risks/confirmations mean, what is outside scope, source-governance and privacy/local-processing boundaries, Mostafa Gad attribution, and the next user action.

Do not add ICC affiliation claims or unsupported live rate/capacity/booking/customs-approval statements.

## Status

V1.1 design integration polish, canonical routes, bilingual structure, SEO/GEO direction and hreflang are already Owner Approved. Remaining work is implementation parity and rendered Staging verification, not strategic redesign.

This document does not authorize Production deployment.