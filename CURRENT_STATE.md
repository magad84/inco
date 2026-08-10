# INCO Current State

**Date:** 2026-08-10  
**Phase:** PUBLIC REPOSITORY READINESS COMPLETE / PRODUCTION DEPLOYMENT STILL SEPARATE  
**Product Owner:** Mostafa Gad  
**Repository:** `magad84/inco`

This file records current status only. Stable product requirements live in `PROJECT_CONTEXT.md`.

---

# 1. Public Repository Readiness

- `DONE` Public repository presentation reviewed under Issue #17.
- `DONE` Public licensing statements reconciled to Apache License 2.0 across `README.md`, `LICENSE`, `NOTICE`, and `CONTRIBUTING.md`.
- `DONE` README made business-first and aligned with the approved Founder / Product Owner / Domain and Governance positioning.
- `DONE` Approved V1 public runtime clearly identified as the governed static browser build under MostafaGad.net.
- `DONE` Node.js, Docker, compose, UAT server, and environment-template assets classified as development/test tooling rather than the approved V1 production runtime.
- `DONE` `.env.example` remains a secret-free development/demo template and contains no committed credential value.
- `DONE` Terms and Privacy material remains explicitly classified as draft pending unresolved owner/legal/hosting items.
- `DONE` Public/private/protected knowledge boundaries remain explicit.
- `READY FOR PUBLIC PROFILE PROMOTION` Repository-level public presentation is suitable for GitHub profile promotion after the readiness PR is merged and `main` is re-verified.

This readiness classification applies to the public GitHub repository and profile presentation. It does not declare production deployment live.

---

# 2. Approved Product and Design State

- `APPROVED` V1 product positioning, scope, free-service model, controlled states, safety/privacy boundaries, MyGPT role, SEO/GEO direction, canonical routes, and MostafaGad.net brand relationship.
- `APPROVED` Four bilingual Figma visual baselines and logo governance.
- `APPROVED` EN route `/inco/` and AR route `/ar/inco/` with self-canonicals and reciprocal hreflang.
- `APPROVED` `/products/inco/` and `/ar/products/inco/` are redirect-only if they exist; product hubs remain discovery pages.
- `APPROVED` MyGPT operating boundary.
- `NOT LIVE` Public production deployment is not declared complete by this repository-readiness review.

## Figma

File: `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2`

Approved screens:

1. `APPROVED` EN Desktop, node `2:2`.
2. `APPROVED` EN Mobile, node `2:150`.
3. `APPROVED` AR Desktop RTL, node `40:2`.
4. `APPROVED` AR Mobile RTL, node `45:2`.

Approved logo master: node `31:12`.

---

# 3. Runtime Boundary

## Approved V1 public runtime

The approved public deployment model is the governed static browser release under MostafaGad.net. Public runtime does not require Node.js, Docker, a database, Redis, Qdrant, or an AI provider.

## Retained development/test tooling

The repository retains:

- `Dockerfile` for Node-based UAT/development execution;
- `docker-compose.prod.yml` as a historical filename used for development/test container orchestration, now explicitly labeled as not being the approved V1 public production model;
- `.env.example` as a secret-free development/demo template;
- internal build/test utilities required to generate and validate the governed static public artifact.

Useful tooling was retained rather than deleted merely for presentation cleanup.

---

# 4. Validation Evidence

The public-readiness change set is documentation and tooling-classification only. The configured `Domain Core` and `CodeQL` workflows use path filters and therefore do not run for README / CONTRIBUTING / Docker-comment / environment-comment-only changes unless their configured code/workflow paths are affected.

Verified repository evidence reviewed during the 2026-08-10 public-readiness pass:

- `CodeQL` scheduled run on current pre-readiness `main` commit `a03700a4063a4405b11b597c2602e0300c64389a`: `SUCCESS` on 2026-08-10.
- `Domain Core` workflow on Dependabot PR #20: `SUCCESS` on 2026-08-10.
- The `Domain Core` workflow executes repository-defined `npm run check`, generates the static bundle, verifies required public artifact files, and scans the generated artifact for forbidden internal/private/licensed/credential markers.

No test, build, security, or deployment result is claimed for a run that did not execute.

---

# 5. Licensing

- `APPROVED / CURRENT` Public core license: Apache License, Version 2.0.
- `LICENSE`, `NOTICE`, `README.md`, and `CONTRIBUTING.md` are aligned to that state.
- Protected/licensed source material, customer data, credentials, private rule packs, confidential operational knowledge, visual identity, and name/trademark rights remain outside any broader implication of public visibility and are governed by the actual license/notices and repository boundaries.

---

# 6. Legal and Privacy Status

Current legal/privacy files remain launch-review drafts.

## OWNER / LEGAL DECISION REQUIRED

- Governing law.
- Jurisdiction and dispute wording.
- Final limitation-of-liability language.

## TECHNICAL / HOSTING VALIDATION REQUIRED

- Actual Neom Cloud / parent-site request logging.
- Technical-log purposes, access, retention, and deletion.
- Whether the parent site or hosting layer injects analytics, trackers, scripts, cookies, or headers into INCO routes.

These items do not change the repository's suitability as a truthful public proof of work, but they remain blockers to any unsupported legal or live-production claim.

---

# 7. Production and Integration Items Still Separate

- Live deployment of `/inco/` and `/ar/inco/`.
- Live route, canonical, redirect, hreflang, sitemap, and internal-link verification.
- Final live Figma-to-code visual parity verification.
- Final hosting/logging/analytics facts.
- Final public Terms and Privacy publication after required decisions.

None of these are implied by GitHub profile promotion.

---

# 8. Public Profile Positioning

Approved GitHub positioning:

- Founder and Product Owner: Mostafa Gad.
- Domain Architect and Business-Rules Owner.
- Knowledge and Source-Governance Lead.
- Technology is a management, transformation, and execution enabler.
- The repository does not position Mostafa Gad as a software developer or AI engineer.

---

# 9. Current Decision

**Repository public-readiness classification:** `READY FOR PUBLIC PROFILE PROMOTION` after readiness PR merge and final `main` verification.

**Production-live classification:** `NOT DECLARED LIVE`.

**Next profile action:** promote/pin INCO on the public GitHub profile where the available GitHub capability supports profile pin mutation; otherwise record the exact manual UI action still required.

---

# 10. MG Ecosystem Alignment — 2026-08-10

The Owner approved a shared MostafaGad.net product-experience contract for CAP and INCO while preserving each product's independent visual identity. For parent-facing product experience and design status, INCO is treated as `AVAILABLE`; that Owner-facing label does not silently override the separate technical statement above that live Production deployment has not yet been verified by this repository.

## Figma alignment references

**Figma file:** `ukiYrUNG1zs38GMS3edxJ2`  
**Dedicated page:** `01 • MG ECOSYSTEM ALIGNMENT`  
**Page node:** `55:2`

- `55:3` — `01.0 / INCO ECOSYSTEM CONTRACT`
- `55:36` — `01.1 / INCO HEADER + ASSISTANT DISTINCTION`
- `55:69` — `01.2 / INCO ASSURANCE + FOOTER`
- `55:97` — `01.3 / ASK MG VISIBILITY MATRIX`

These references are additive. They do **not** replace or modify the approved EN/AR desktop/mobile baselines or the approved logo master listed above.

## Approved integration direction

- INCO remains product-first and keeps its approved logo, colors, visual language and product navigation.
- A thin neutral ecosystem utility layer carries `← MostafaGad.net`, `Search MostafaGad.net`, and the parent-facing `AVAILABLE` state without installing the full parent-site header over INCO.
- Global Search is parent public-content discovery only. It must not search, index or transmit shipment facts, result state or private case information.
- INCO assurance wording is `Professional Use & Source Governance`, covering rules-first output, source/confirmation discipline, professional limitations and privacy/data boundaries.
- INCO uses the shared compact product-ecosystem footer information architecture while keeping INCO visual styling.
- Final Terms, Privacy and hosting/logging facts remain governed by the legal/technical status in this file; the ecosystem alignment does not invent or close those items.

## Ask MG vs INCO Assistant

The design explicitly separates the two conversational layers:

**Ask MG**
- MostafaGad.net AI Knowledge Assistant.
- Hosted/running through the approved Hostinger AI/services environment.
- Connected to the Owner-governed public Ask MG Knowledge Base.
- May use public page context only.
- Must not receive shipment facts, result state or private INCO data.

**INCO Assistant / MyGPT explanation layer**
- Product-specific explanation of the INCO deterministic result.
- May explain follow-up questions and practical next actions.
- Cannot override or downgrade the deterministic result.
- Shipment data must not be transferred automatically merely because the assistant is available.

Visibility direction:

- Public hero / About / Knowledge: Ask MG visible.
- Shipment facts form: Ask MG suppressed.
- Initial result / decision cards: Ask MG minimized.
- INCO Assistant result-discussion block: Ask MG suppressed so the two assistants do not compete.
- Post-task / public guidance: Ask MG may become visible again without receiving the completed task data.

The two assistants must not both be presented generically as `AI Assistant`; labels and visual treatment must preserve the parent-knowledge versus product-result distinction.
