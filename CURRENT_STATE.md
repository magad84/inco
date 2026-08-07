# INCO Current State

**Date:** 2026-08-07  
**Phase:** PRODUCT KNOWLEDGE CLOSURE COMPLETE / CODEX TECHNICAL VALIDATION NEXT  
**Product Owner:** Mostafa Gad  
**Repository:** `magad84/inco`

This file records current status only. Stable product requirements live in `PROJECT_CONTEXT.md`.

---

# 1. Current Phase

- `DONE` Product/business knowledge consolidated into GitHub.
- `APPROVED` V1 product positioning, scope, free-service model, controlled states, safety/privacy boundaries, MyGPT role, SEO/GEO direction, canonical routes, and MostafaGad.net brand relationship.
- `APPROVED` Four bilingual Figma visual baselines and logo governance.
- `APPROVED` EN route `/inco/` and AR route `/ar/inco/` with self-canonicals and reciprocal hreflang.
- `APPROVED` `/products/inco/` and `/ar/products/inco/` are redirect-only if they exist; product hubs remain discovery pages.
- `APPROVED` MyGPT link and operating boundary.
- `IN PROGRESS` Nothing in this closure turn; no feature development was started.
- `NOT STARTED IN THIS CLOSURE` Codex repository/architecture/implementation audit.
- `NOT LIVE` Public production deployment is not declared complete.

---

# 2. Approved Design Completed

## Figma

File: `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2`

Approved screens:

1. `APPROVED` EN Desktop — node `2:2`.
2. `APPROVED` EN Mobile — node `2:150`.
3. `APPROVED` AR Desktop RTL — node `40:2`.
4. `APPROVED` AR Mobile RTL — node `45:2`.

Approved logo master: node `31:12`.

Approved MyGPT sections:

- EN Desktop `12:26`
- EN Mobile `12:33`
- AR Desktop `40:156`
- AR Mobile `45:84`

The mobile baselines were corrected before closure to preserve the planned transaction-date input. Specialist English terminology may remain in Arabic where professionally clearer.

---

# 3. Remaining Design

- `DESIGN REQUIRED` Dedicated Terms of Use page treatment if the parent-site legal template is not reused.
- `DESIGN REQUIRED` Dedicated Privacy Notice page treatment if the parent-site legal template is not reused.
- `TECHNICAL VALIDATION REQUIRED` Confirm whether any other required legal/footer/pre-use elements need a Figma amendment or can be implemented through the approved parent-site design system without altering the locked product baseline.

No authentication, dashboard, saved-case, billing, upload, admin, marketplace, or paid-report screens are approved for V1.

---

# 4. Known Implementation State

This closure is **not** a repository implementation audit.

Earlier project documentation records a deterministic domain core, browser UI foundation, static build, governed JSON knowledge export, tests, CI, and security controls. These statements are **DOCUMENTED AS PREVIOUSLY IMPLEMENTED**, not independently revalidated in this closure.

Therefore:

- `TECHNICAL VALIDATION REQUIRED` actual architecture.
- `TECHNICAL VALIDATION REQUIRED` actual code-to-Figma parity.
- `TECHNICAL VALIDATION REQUIRED` actual EN/AR crawlable routing.
- `TECHNICAL VALIDATION REQUIRED` actual canonical/redirect/hreflang behavior.
- `TECHNICAL VALIDATION REQUIRED` actual five-state public contract and legacy `unsupported_scope` handling.
- `TECHNICAL VALIDATION REQUIRED` data persistence / privacy invariants.
- `TECHNICAL VALIDATION REQUIRED` current tests, CI, CodeQL, build, leakage checks, and artifact contents.
- `TECHNICAL VALIDATION REQUIRED` current MyGPT button implementation.
- `TECHNICAL VALIDATION REQUIRED` Terms/Privacy/footer/pre-use boundary implementation.
- `TECHNICAL VALIDATION REQUIRED` parent MostafaGad.net integration.

Codex must inspect the real repository before marking any of these `DONE`.

---

# 5. Open / Missing Information

## OWNER / LEGAL DECISION REQUIRED

- Governing law.
- Jurisdiction and dispute wording.
- Final limitation-of-liability language.

## TECHNICAL / HOSTING VALIDATION REQUIRED

- Actual Neom Cloud / parent-site request logging.
- Technical-log purposes, access, retention, and deletion.
- Whether the parent site or hosting layer injects analytics, trackers, scripts, cookies, or headers into INCO routes.

## TECHNICAL VALIDATION REQUIRED

- Exact production routing implementation for `/inco/` and `/ar/inco/`.
- Redirect layer for legacy product routes.
- Sitemap/internal-link integration.
- Final production artifact and deployment procedure after repository audit.

No other strategic product decision is currently known to be open.

---

# 6. Current Risks

- `RISK` Historical repository documents still contain superseded paid/auth/subdomain/GPT-gateway ideas. `PROJECT_CONTEXT.md` and latest ADRs govern when conflicts exist.
- `RISK` Historical technical documents may describe architecture that no longer matches the actual repository. Codex must verify, not assume.
- `RISK` Legal drafts are not publication-ready until owner/legal and hosting validation are complete.
- `RISK` Figma and runtime may still differ materially; live Figma must be inspected directly.
- `RISK` Arabic crawlability could be lost if implementation falls back to JS-only translation at the EN URL.
- `RISK` Public artifacts must not expose protected/internal/licensed source material.

---

# 7. Dependencies

- Live Figma access for visual comparison.
- GitHub repository access for code/architecture audit.
- Parent MostafaGad.net routing/navigation/sitemap context for final integration.
- Neom Cloud access only when deployment/live verification begins.
- Owner/legal input for final public legal wording.

---

# 8. Current Priorities

1. `NOT STARTED` Codex reads `PROJECT_CONTEXT.md`, this file, and `AGENTS.md`.
2. `NOT STARTED` Codex audits the actual repository and establishes the true technical baseline.
3. `NOT STARTED` Codex compares implementation against the four live approved Figma frames.
4. `NOT STARTED` Codex produces requirement/architecture/implementation conflict matrix.
5. `NOT STARTED` Codex fixes technical issues that do not change product requirements.
6. `NOT STARTED` Codex escalates product/architecture/security/privacy changes that require owner/CTO decision.
7. `NOT STARTED` Codex runs all relevant tests/security/build checks.
8. `NOT STARTED` Codex produces pre-deployment QA and artifact evidence.
9. `BLOCKED UNTIL TECHNICAL QA` Neom Cloud deployment and live verification.
10. `BLOCKED UNTIL LEGAL/HOSTING REVIEW` Final public Terms/Privacy publication where unresolved clauses/data facts apply.

---

# 9. Recommended Next Step

**Recommended Codex entry point:**

1. Read `PROJECT_CONTEXT.md`.
2. Read `CURRENT_STATE.md`.
3. Read `AGENTS.md`.
4. Read the latest ADRs and pre-Codex gate referenced there.
5. Inspect the actual repository before editing.
6. Inspect live Figma nodes `2:2`, `2:150`, `40:2`, `45:2`.
7. Produce the technical gap/conflict matrix before changing code.

Do not begin with a rebuild, redesign, or new feature.
