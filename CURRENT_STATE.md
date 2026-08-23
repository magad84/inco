# INCO Current State

**Date:** 2026-08-23
**Phase:** V1 IMPLEMENTATION AND LOCAL PREVIEW VALIDATED / READY WITH CONDITIONS / PRODUCTION DEPLOYMENT STILL SEPARATE
**Product Owner:** Mostafa Gad  
**Repository:** `magad84/inco`

This file records current status only. Stable product requirements live in `PROJECT_CONTEXT.md`.

## 0. P4 implementation checkpoint — 2026-08-21

- `DONE` Implemented independent static EN `/inco/` and AR RTL `/ar/inco/` documents from the four current approved Figma frames.
- `DONE` Preserved the deterministic browser engine and local case-processing boundary.
- `DONE` Added canonical/hreflang/structured-data, responsive/RTL/accessibility/motion, exact approved assets, safe MyGPT entry and current V1.1 footer/parent-return behavior.
- `DONE` Removed superseded feedback, paid-model remnants, JS-only language switching and the dead `unsupported_scope` UI branch.
- `PASS` TypeScript, 132/132 automated tests, governed static build, leakage checks and 14/14 bilingual responsive browser combinations.
- `READY WITH CONDITIONS` for Owner pre-production review and non-Production integration. Final legal wording, real hosting/logging verification and explicit Production authorization remain separate gates.
- Evidence: `docs/INCO_P4_V1_IMPLEMENTATION_EVIDENCE_2026-08-21.md`.

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
- `OWNER APPROVED 2026-08-16` V1.1 integration polish described below.
- `NOT LIVE` Public production deployment is not declared complete by this review.

## Figma

File: `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2`

Current Owner-approved screens:

1. EN Desktop, node `2:2` — **V1.1 / parent return + footer navigation + no feedback**.
2. EN Mobile, node `2:150` — **V1.1 / parent return + footer navigation + no feedback**.
3. AR Desktop RTL, node `40:2` — **V1.1 / parent return + footer navigation + no feedback**.
4. AR Mobile RTL, node `45:2` — **V1.1 / parent return + footer navigation + no feedback**.

Approved logo master: node `31:12`.

## V1.1 Owner-approved visual / UX changes

1. **Parent ecosystem return**
   - Add a clear footer route back to `MostafaGad.net / Products`.
   - Preserve INCO's independent visual identity; do not replace the INCO header with the parent website header.

2. **Footer navigation**
   - Add visible labels for `Privacy`, `Terms`, `Sources`, and `Methodology` in EN and genuine Arabic counterparts in AR.
   - Legal wording and final legal destinations remain governed by the later Legal pass; do not invent legal copy or wire dead/unapproved destinations.

3. **Feedback block removed from V1**
   - The earlier feedback UI with `Very useful` / `Needs development` is removed from the V1 visual baseline because V1 has no approved real feedback persistence mechanism.
   - Codex must not render buttons that imply feedback was stored when it is not actually submitted/persisted.
   - A future privacy-safe feedback mechanism may be added only through a later explicit product decision.

4. **Approval annotations are not product UI**
   - Figma approval-baseline badges were hidden from the actual product screens and must not be implemented in production UI.

---

# 3. Runtime Boundary

## Approved V1 public runtime

The approved public deployment model is the governed static browser release under MostafaGad.net. Public runtime does not require Node.js, Docker, a database, Redis, Qdrant, or an AI provider.

The browser UI must continue to respect the approved privacy boundary: no intentional shipment-case persistence or transmission merely to provide the deterministic result.

## Retained development/test tooling

The repository retains:

- `Dockerfile` for Node-based UAT/development execution;
- `docker-compose.prod.yml` as a historical filename used for development/test container orchestration, now explicitly labeled as not being the approved V1 public production model;
- `.env.example` as a secret-free development/demo template;
- internal build/test utilities required to generate and validate the governed static public artifact.

Useful tooling was retained rather than deleted merely for presentation cleanup.

---

# 4. Codex implementation instructions from V1.1 approval

When INCO reaches its authorized implementation/release position, Codex must:

1. preserve canonical EN `/inco/` and AR `/ar/inco/` routes;
2. implement the parent return link to `/products/`;
3. preserve the INCO product header/identity rather than injecting the full parent-site header;
4. omit the removed Feedback block in V1;
5. not create fake/no-op feedback actions;
6. add Footer navigation for Privacy / Terms / Sources / Methodology only with authoritative destinations or approved internal anchors; no dead links and no invented legal content;
7. preserve self-canonical + reciprocal hreflang behavior for genuine EN/AR counterparts;
8. preserve static browser/runtime privacy boundaries and deterministic rules-first result behavior;
9. keep MyGPT conversational assistance subordinate to the deterministic result and never auto-transfer shipment data;
10. run visual parity QA against all four V1.1 Figma frames before release.

These instructions do not authorize production deployment by themselves.

---

# 5. Validation Evidence

The public-readiness change set and V1.1 design-state documentation do not by themselves claim a new build, test, or production deployment result.

Previously verified repository evidence reviewed during the 2026-08-10 public-readiness pass:

- `CodeQL` scheduled run on then-current pre-readiness `main` commit `a03700a4063a4405b11b597c2602e0300c64389a`: `SUCCESS` on 2026-08-10.
- `Domain Core` workflow on Dependabot PR #20: `SUCCESS` on 2026-08-10.
- The `Domain Core` workflow executes repository-defined `npm run check`, generates the static bundle, verifies required public artifact files, and scans the generated artifact for forbidden internal/private/licensed/credential markers.

No test, build, security, or deployment result is claimed for a run that did not execute.

---

# 6. Licensing

- `APPROVED / CURRENT` Public core license: Apache License, Version 2.0.
- `LICENSE`, `NOTICE`, `README.md`, and `CONTRIBUTING.md` are aligned to that state.
- Protected/licensed source material, customer data, credentials, private rule packs, confidential operational knowledge, visual identity, and name/trademark rights remain outside any broader implication of public visibility and are governed by the actual license/notices and repository boundaries.

---

# 7. Legal and Privacy Status

Current legal/privacy files remain launch-review drafts.

## OWNER / LEGAL DECISION REQUIRED

- Governing law.
- Jurisdiction and dispute wording.
- Final limitation-of-liability language.
- Final public destinations/wording for INCO Privacy and Terms links where not already conclusively governed.

## TECHNICAL / HOSTING VALIDATION REQUIRED

- Actual Neom Cloud / parent-site request logging.
- Technical-log purposes, access, retention, and deletion.
- Whether the parent site or hosting layer injects analytics, trackers, scripts, cookies, or headers into INCO routes.

These items do not change the repository's suitability as a truthful public proof of work, but they remain blockers to any unsupported legal or live-production claim.

---

# 8. Production and Integration Items Still Separate

- Live deployment of `/inco/` and `/ar/inco/`.
- Live route, canonical, redirect, hreflang, sitemap, and internal-link verification.
- Final live Figma-to-code V1.1 visual parity verification.
- Final hosting/logging/analytics facts.
- Final public Terms and Privacy publication after required decisions.

None of these are implied by GitHub profile promotion or Figma approval.

---

# 9. Public Profile Positioning

Approved GitHub positioning:

- Founder and Product Owner: Mostafa Gad.
- Domain Architect and Business-Rules Owner.
- Knowledge and Source-Governance Lead.
- Technology is a management, transformation, and execution enabler.
- The repository does not position Mostafa Gad as a software developer or AI engineer.

---

# 10. Current Decision

**Figma V1.1 integration polish:** `OWNER APPROVED`.

**Repository public-readiness classification:** `READY FOR PUBLIC PROFILE PROMOTION` after applicable readiness conditions are satisfied.

**Production-live classification:** `NOT DECLARED LIVE`.

The next implementation/release action must follow the governing execution queue and release gates; this document does not bypass them.

---

# 11. Knowledge asset reconciliation checkpoint — 2026-08-22

- Existing knowledge was inventoried and reused; no replacement research was
  conducted.
- `knowledge/asset-manifest.v1.0.json` classifies the public runtime inputs,
  reference-source data, research evidence and archived research seeds.
- A domain-core contract test now keeps the public build allowlist aligned with
  the five governed launch datasets and verifies that archived seeds remain out.
- Full details are recorded in
  `docs/INCO_KNOWLEDGE_ASSET_RECONCILIATION_2026-08-22.md`.

---

# 12. Arabic result-parity recovery — 2026-08-23

- `FIXED` The Arabic deterministic result no longer exposes English engine
  reasons, raw decision/status codes, internal confirmation identifiers, or
  untranslated missing-information keys in the primary result UI.
- `FIXED` Public result cards and the five-part Official Confirmation Protocol
  now resolve from governed bilingual country/cargo findings plus controlled
  EN/AR presentation copy.
- `FIXED` The UAT adapter now passes shipment facts already collected by the
  public form into destination-rule evaluation, so known facts are not
  incorrectly reported as missing.
- `PASS` TypeScript, 136/136 automated tests, and governed public build.
- `PASS` Real-browser EN 1440px and AR RTL 390px shipment checks: localized
  result flow, no horizontal overflow, and no console warnings/errors.
- No Production deployment, DNS, live cutover, secret, or product-scope change
  occurred.
