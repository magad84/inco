# INCO P4 V1 Implementation Evidence

**Date:** 2026-08-21
**Branch:** `codex/p4-inco-v1-2026-08-21`
**Base:** `4e0b50a`
**Environment:** Development / local Preview
**Production:** Not deployed or modified

## Outcome

The approved INCO V1 public application is now implemented as a governed static browser release with independent crawlable English `/inco/` and Arabic RTL `/ar/inco/` documents. The deterministic engine remains controlling, case evaluation remains local to the browser, and the public experience contains no registration, payment, upload, saved-case, analytics, or persistent customer-data workflow.

## Authority reconciled

- Current repository governance and Issue #15.
- Live Figma EN Desktop `2:2`, EN Mobile `2:150`, AR Desktop RTL `40:2`, AR Mobile RTL `45:2`.
- Approved logo master and exported Figma assets, without redraw or approximation.
- ADR-008, ADR-009, ADR-010 and the 2026-08-16 final EN/AR parity record.

## Implemented

- Exact approved INCO logo, logistics hero image, visual hierarchy and controlled icon assets.
- Real EN and Arabic RTL documents, language switch routes, reciprocal hreflang, `x-default`, self-canonical, Open Graph and truthful `WebApplication` structured data.
- Shipment intake with origin, export/dispatch, destination, mode, cargo, physical state, planned transaction date, description, hazards, special handling, composition and enhanced-compliance inputs.
- Result hierarchy prioritizing missing information and recommended next action, followed by route, cargo, destination and the five-part Official Confirmation Protocol.
- Exact approved INCO Assistant URL in a safe new tab with no case/result/query transfer; deterministic result remains controlling.
- Parent Products return, legal links, controlled Sources/Methodology anchors and concise pre-use professional boundary.
- Removed the superseded feedback survey, `small fee`/paid-model remnants, JS-only language switch and dead `unsupported_scope` UI branch.
- Responsive behavior, true RTL/bidi, visible focus, 44 px targets, restrained hero/interaction motion and reduced-motion fallback.
- Static artifact mirrors the governed route tree at `dist-public/inco/` and `dist-public/ar/inco/`.

## Gap matrix

| Authority item                               | Result                                                                             |
| -------------------------------------------- | ---------------------------------------------------------------------------------- |
| FIG-001 Arabic coherence                     | MATCH after current Figma corrections                                              |
| FIG-002 mobile planned date                  | MATCH                                                                              |
| FIG-003 visual implementation                | MATERIAL GAP resolved                                                              |
| FIG-004 mobile copy-result parity            | MATCH                                                                              |
| FIG-005 / LEGAL-004 navigation               | MATCH using governed parent legal routes and internal anchors                      |
| DATA-001 local case vs hosting logs boundary | MATCH without inventing hosting retention                                          |
| DATA-002 MyGPT boundary                      | MATCH                                                                              |
| DATA-003 obsolete feedback                   | REMOVED per current V1.1 authority                                                 |
| DATA-004 no browser persistence              | MATCH and tested                                                                   |
| LEGAL-003 pre-use boundary                   | MATCH                                                                              |
| GOV-002 `unsupported_scope`                  | Dead UI branch removed; engine already exposes only the approved five states       |
| A11Y-001 through A11Y-004                    | MATCH within approved system-font, focus, text-state and reduced-motion boundaries |

## Validation

- TypeScript compile: PASS.
- Automated suite: 132/132 PASS.
- Static public build: PASS.
- Public knowledge leakage gate: PASS as part of build.
- Browser QA: 14/14 EN/AR route and viewport combinations at 360, 375, 390, 430, 768, 1024 and 1440; correct LTR/RTL, one H1, correct self-canonical, zero horizontal overflow and minimum 44 px effective interactive targets.
- Browser decision scenarios: standard confirmation, unknown chemical, damaged lithium battery by air, Russia enhanced compliance and unsupported destination fallback all returned controlled deterministic states; zero console errors.
- EN and AR form-to-result flow: PASS; Arabic state label and RTL behavior verified.
- Motion: hero entry settled correctly; hover/focus feedback present; `prefers-reduced-motion` fallback present.
- Secret scan and protected-content scan: PASS.
- `git diff --check`: PASS.

Artifact checksums:

- EN HTML: `db45f501323b8b24b9effff5743cf45154219e6d43ea05ecbe5f682092b1877c`
- AR HTML: `638dc94bdbba67e7e86410af465f23fb175c51e0513b46d7d4208784fbf88ee9`
- Engine: `8fc11bb9697900841e8c5d2975972d9c419e9f4a5868b35ba9f355e1d8b2154d`

## Remaining conditions

- Final governing-law, jurisdiction, dispute and liability wording remains Owner/legal work and was not invented.
- Actual Neom Cloud/parent-host logging, retention and inherited analytics/tracking behavior requires hosting verification before public legal publication.
- Parent-site Preview/Staging integration must consume the artifact and validate its routing layer, redirects and sitemap without changing the governed canonicals.
- Production upload, DNS, cutover, redirects, secrets and public launch remain separately prohibited.

**Recommendation:** `READY WITH CONDITIONS` for Owner pre-production review and non-Production integration. Not authorized for Production.
