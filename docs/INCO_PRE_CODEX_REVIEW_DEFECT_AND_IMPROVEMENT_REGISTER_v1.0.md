# INCO Pre-Codex Review, Defect & Improvement Register v1.0

**Date:** 2026-08-07  
**Repository:** `magad84/inco`  
**Figma:** `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2`  
**Status:** MANDATORY PRE-CODEX INPUT  
**Purpose:** Record verified defects, implementation gaps, data-flow findings, legal/privacy gaps, and controlled improvement opportunities before final coded alignment.

## 1. Review Scope

Reviewed against the current project state, approved Figma baselines, static browser architecture, current browser UI files, public build script, security/readiness documents, and approved MyGPT boundary.

Reviewed Figma baselines:

- EN Desktop `2:2`
- EN Mobile `2:150`
- AR Desktop RTL `40:2`
- AR Mobile RTL `45:2`

Reviewed code / governance sources include:

- `CURRENT_STATE.md`
- `packages/uat-ui/index.html`
- `packages/uat-ui/app.js`
- `packages/uat-ui/styles.css`
- `packages/domain-core/src/browser-entry.ts`
- `scripts/build-public.mjs`
- `README.md`
- `SECURITY.md`
- `docs/PRODUCTION_READINESS_ARCHITECTURE_SECURITY_GAP_ANALYSIS_v1.0.md`
- `docs/ADR_006_BRAND_POSITIONING_AND_FREE_SERVICE_MODEL.md`
- current MyGPT approval/audit documents.

## 2. Release Classification

- **P0 BLOCKER:** must be resolved before public deployment.
- **P1 MATERIAL:** must be resolved in final coded alignment unless explicitly accepted by owner.
- **P2 QUALITY:** should be resolved where low risk; may be accepted as documented non-blocking debt.
- **OWNER/LEGAL DECISION:** Codex must not invent the decision.

---

# 3. Verified Figma / UX Defects

## `FIG-001` — Arabic Mobile contains visible English remnants

**Severity:** P0 BLOCKER  
**Frame:** `45:2`

Verified visible-content mismatches include English values/text in the Arabic mobile baseline, including examples such as:

- `Ocean`
- `General cargo`
- `Solid`
- `01 SHIPMENT FACTS`
- `02 INITIAL RESULT`
- English recommended-next-action text
- English destination-requirement text
- an approval badge that still says `APPROVED EN BASELINE`.

**Required action:** Correct the Arabic mobile baseline and runtime copy before production. Do not ship mixed-language UI.

## `FIG-002` — Mobile baselines omit planned transaction date

**Severity:** P0 BLOCKER / DESIGN-FUNCTION CONFLICT  
**Frames:** `2:150`, `45:2`

Desktop Figma and the current browser runtime include a planned transaction date. The mobile approved frames do not show the date field.

**Risk:** The mobile visual baseline can cause Codex to remove or hide a material engine input simply to match Figma.

**Required action:** Preserve the functional date input. Resolve the Figma mobile omission before treating pixel parity as authoritative. Codex must not delete a material input to satisfy a visual mismatch.

## `FIG-003` — Current coded UI is a foundation, not a visual match to approved Figma

**Severity:** P1 MATERIAL

Verified material differences include:

- Figma uses the approved graphic INCO logo; current runtime header uses text `INCO / by Mostafa Gad`.
- Figma desktop includes a logistics-image hero with navy overlay and readiness snapshot; current runtime uses a simple text hero/background.
- Figma desktop includes header navigation (`How it works`, `Check shipment`, `Knowledge`, `About`); current runtime does not.
- Figma desktop form includes `Country of export / dispatch`; current runtime has origin and destination only.
- Figma result presentation and official-confirmation card hierarchy differ materially from the current runtime result grid.
- Figma MyGPT entry is designed and approved; current runtime still renders the assistant as pending/disabled.
- Feedback interaction differs materially between Figma and runtime.

**Required action:** Gap analysis first, then targeted alignment. Do not rebuild compliant deterministic logic.

## `FIG-004` — Mobile functional-action parity needs explicit review

**Severity:** P1 MATERIAL

Desktop Figma exposes result-copy behavior more clearly than mobile. Mobile must retain access to privacy-safe result copy and not silently lose a useful action due to layout simplification.

**Required action:** Verify mobile interaction parity during implementation QA.

## `FIG-005` — No legal/privacy navigation is represented in the approved product footer

**Severity:** P0 BLOCKER for public release

Current Figma footer contains copyright/service wording but no visible link to Terms, Privacy, or service limitations.

**Required action:** Add a controlled legal/footer pattern before production. This is a governance addition, not a brand redesign.

---

# 4. Data-Flow Review

## Current approved anonymous V1 flow

Observed public flow:

`User fields in browser DOM`
→ `requestPayload()` in `packages/uat-ui/app.js`
→ dynamic import of local `engine.js`
→ `evaluatePublicRequest()`
→ same-origin fetch of governed static JSON knowledge
→ deterministic in-browser evaluation
→ result rendered into DOM.

### Verified current properties

- No public `/api/evaluate` call is used by the browser release.
- Country/corridor knowledge is fetched from same-origin static JSON.
- The public build copies only explicitly approved JSON packs.
- The build blocks known internal/private/licensed/credential markers.
- Shipment fields are not intentionally sent to the deterministic evaluator over a remote API.
- Result-copy uses the browser clipboard only after user action.
- Feedback UX in the current runtime prepares/copies a local summary rather than transmitting a survey response.
- The MyGPT boundary requires an external link with no shipment/result/query data transfer.

## `DATA-001` — Privacy wording must distinguish case data from ordinary hosting logs

**Severity:** P0 BLOCKER

Current copy correctly says the service does not *intentionally* save or transmit the shipment case, but public privacy wording must not be interpreted as a promise that the web server processes no technical request data at all.

**Required wording model:**

- shipment facts are evaluated locally in the browser for V1;
- INCO does not intentionally transmit or persist the shipment case;
- normal hosting/security logs may still process technical request information such as IP address, user agent, timestamps, and requested assets according to the parent-site/hosting privacy policy;
- no analytics or tracking may be added later without updating the notice and consent model where required.

## `DATA-002` — MyGPT third-party boundary must be explicit

**Severity:** P1 MATERIAL

Opening MyGPT transfers the user to ChatGPT as a separate service. No shipment data may be encoded in the URL or automatically transferred.

**Required action:** Preserve the existing warning and add legal/privacy wording that use of ChatGPT is subject to the third party's own account, privacy, and service terms. Do not imply INCO controls ChatGPT data handling.

## `DATA-003` — Feedback interaction can create a false collection expectation

**Severity:** P1 MATERIAL

Current runtime says the pre-launch survey is not transmitted/stored and instead copies feedback. Figma visually resembles direct feedback buttons.

**Required action:** Either:
1. keep V1 local-only and label the action clearly as `Copy feedback / نسخ التقييم`, or
2. implement actual collection only after an approved data-flow, privacy notice, retention rule, consent basis, endpoint, abuse control, and owner approval.

Do not silently turn the current local feedback control into server-side collection.

## `DATA-004` — No persistent case storage means no accidental browser persistence

**Severity:** P1 MATERIAL

Codex must verify no shipment/result fields are written to `localStorage`, `sessionStorage`, IndexedDB, cookies, URL query strings, analytics payloads, or third-party scripts.

Add automated checks where feasible.

---

# 5. Terms, Privacy, and Professional-Boundary Review

The repository's own production-readiness analysis previously recorded that formal privacy/retention controls and production legal-boundary acceptance were missing. The launch architecture has since changed to an anonymous static browser service, which reduces risk but does not remove the need for public terms/privacy disclosures.

## `LEGAL-001` — Public Terms of Use are missing

**Severity:** P0 BLOCKER  
**Type:** OWNER/LEGAL DECISION for final jurisdiction-specific language

Minimum V1 Terms content should cover:

1. Service identity and scope: free, limited decision-support service.
2. No final carrier/customs/regulatory/DG/legal/tax/insurance approval.
3. User responsibility to verify current requirements with the competent provider/authority.
4. No live-rate, live-capacity, live-booking, clearance, permit, or acceptance guarantee.
5. Information may be incomplete, stale, jurisdiction-specific, or subject to change.
6. Prohibited use: false declarations, concealment, sanctions evasion, unsafe/illegal trade, misuse of the service.
7. User responsibility for accuracy and legality of submitted facts.
8. No confidential or unnecessary personal data should be entered.
9. Third-party links/services, including ChatGPT, are separate services.
10. Intellectual-property/open-source boundary: code licence does not grant rights to protected sources, brand identity, or name/endorsement.
11. Availability/change/withdrawal of free service.
12. Appropriate limitation-of-liability / no-warranty wording subject to legal review.
13. Governing law, jurisdiction, contact and dispute wording: **owner/legal decision required; Codex must not invent**.

## `LEGAL-002` — Standalone Privacy Notice is missing

**Severity:** P0 BLOCKER  
**Type:** OWNER/LEGAL DECISION for jurisdiction-specific compliance language

Minimum V1 privacy notice should accurately describe:

- what shipment fields are entered;
- that V1 deterministic case processing occurs locally in the browser;
- that INCO does not intentionally save or transmit shipment-case values;
- normal web-hosting/server/security logs and their potential technical data;
- cookies/analytics status at launch;
- clipboard behavior;
- external links and MyGPT/ChatGPT boundary;
- no document upload/account/payment at V1;
- retention rules for any technical logs actually retained by hosting;
- security contact / privacy contact route;
- effective date and update mechanism.

Do not publish claims such as `we collect no data` unless technically and operationally proven end-to-end.

## `LEGAL-003` — Professional boundary should appear before/at first use, not only after result

**Severity:** P1 MATERIAL

Current runtime includes a strong boundary below the result. A concise pre-use acknowledgement should also be visible around the run action.

Recommended low-friction pattern:

`By running this check, you acknowledge that INCO provides preliminary decision support and that current carrier, customs, regulatory and specialist confirmation may still be required. Terms | Privacy`

Final clickwrap/checkbox requirement is an owner/legal decision. Do not introduce mandatory consent friction without approval.

## `LEGAL-004` — Footer legal links required in both languages

**Severity:** P0 BLOCKER

Required minimum visible routes:

- Terms / الشروط
- Privacy / الخصوصية
- Professional limitations / الحدود المهنية (may be part of Terms if clearly linked)

---

# 6. Governance and Documentation Defects

## `GOV-001` — README MyGPT status is stale

**Severity:** P1 MATERIAL

`README.md` still says the MyGPT companion is under final alignment and the public link is gated. Current approved state is MyGPT v1.2, 16/16 audit passed, 3/3 regression passed, owner approval granted, and link approved for implementation.

**Required action:** Update README during final alignment. Do not state the production link is live until verified.

## `GOV-002` — Legacy `unsupported_scope` state appears in browser copy/next-step logic

**Severity:** P1 MATERIAL / GOVERNANCE REVIEW

Current approved controlled states are:

- `candidate`
- `confirmation_required`
- `source_unavailable`
- `blocked_information_required`
- `enhanced_compliance_required`

Current `packages/uat-ui/app.js` still contains explicit handling for `unsupported_scope`.

**Required action:** Trace the engine and tests. Do not simply rename/delete until the source of the state is understood. The public contract must use the approved controlled-state model or document a deliberately separate non-decision scope status.

## `GOV-003` — SECURITY.md maturity statement is stale

**Severity:** P2 QUALITY

`SECURITY.md` still describes the project primarily as internal-functional-testing/open-core showcase, while current V1 strategy is a real anonymous free public service using static browser evaluation.

**Required action:** Reconcile security wording with current static-launch boundary without overstating production capability.

---

# 7. Accessibility / Front-End Quality Findings

## `A11Y-001` — Arabic font implementation does not match approved direction

**Severity:** P1 MATERIAL

Current CSS uses `Tahoma, Arial` for RTL while Figma/brand implementation needs to follow the approved visual typography baseline. Codex must use the actual approved/legal font assets or approved performant equivalent, not guess.

## `A11Y-002` — Focus coverage must be expanded beyond form inputs

**Severity:** P1 MATERIAL

Current CSS has clear focus styling for text controls and skip link, but final implementation must verify visible keyboard focus for all buttons, navigation, language switcher, MyGPT link, disclosure controls, footer legal links and feedback actions.

## `A11Y-003` — Decision states cannot rely on color alone

**Severity:** P1 MATERIAL

Final state components must preserve visible text/icon/label meaning in addition to badge color. Test with contrast and screen-reader naming.

## `A11Y-004` — Reduced-motion rule must be present if approved motion is introduced

**Severity:** P2 QUALITY

Do not add decorative motion without `prefers-reduced-motion` handling.

---

# 8. Controlled Improvement Proposals

These are not authorization for scope expansion.

## `IMP-001` — Add `Data & Privacy` micro-panel near form

A concise panel can explain:

- processed in your browser;
- no account;
- no saved shipment case;
- do not enter confidential identifiers;
- Terms / Privacy links.

This improves trust without converting the page into legal copy.

## `IMP-002` — Make source freshness visible where material

Where a rule has a review/effective date, show a restrained `Source checked / last reviewed` indicator. Do not imply live verification unless it occurred.

## `IMP-003` — Result should distinguish `Decision state` from `Confidence / completeness`

This is already a governance rule in MyGPT and should be visually consistent in the website result where confidence/completeness is displayed later.

## `IMP-004` — Add release/version provenance to technical evidence

When technically appropriate, include engine/build/knowledge release identifiers in the technical evidence area to improve reproducibility without exposing internal source text.

## `IMP-005` — Preserve static/no-third-party-runtime posture

Do not add trackers, remote fonts, chat widgets, external scripts, CDN dependencies, or analytics as part of visual alignment unless separately approved and privacy-reviewed.

---

# 9. Mandatory Codex Execution Order

Codex must execute in this order:

1. Read `CURRENT_STATE.md`.
2. Read this register completely.
3. Inspect current runtime and the four live Figma frames.
4. Produce a gap matrix referencing every P0/P1 item in this register.
5. Stop on owner/legal decisions instead of inventing jurisdiction, liability, consent or data-retention terms.
6. Resolve approved Figma/content defects or report them as blockers when Figma itself must change.
7. Align only verified implementation gaps.
8. Add tests for data-flow/privacy invariants and MyGPT no-data-transfer behavior.
9. Run all existing tests/build/security/leakage checks.
10. Produce the final QA report and explicitly list unresolved P0/P1 items.

Codex must not recommend `READY FOR NEOM CLOUD DEPLOYMENT` while any P0 item remains unresolved.

# 10. Current Pre-Codex Decision

**Status: NOT YET READY FOR FINAL CODEX IMPLEMENTATION WITHOUT THIS REGISTER.**

The deterministic core and static browser privacy architecture are strong foundations, but final launch alignment must explicitly resolve the Arabic-mobile content defects, mobile date-field conflict, Terms/Privacy launch controls, legal footer/pre-use boundary, MyGPT activation state, stale governance wording, and verified data-flow invariants.
