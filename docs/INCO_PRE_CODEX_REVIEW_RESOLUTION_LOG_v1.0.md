# INCO Pre-Codex Review Resolution Log v1.0

**Date:** 2026-08-07  
**Purpose:** Record defects already corrected before Codex starts final implementation, and distinguish them from still-open implementation or owner/legal items.

## Owner Translation Direction

Specialist logistics, trade, customs, DG, and operational terminology does **not** need forced Arabic translation when the English term is clearer or professionally standard. Arabic UI consistency is required for general navigation, section labels, instructions, and ordinary explanatory copy. Codex must not translate technical terminology merely for cosmetic language purity.

## Resolved Before Codex

### FIG-001 — Arabic Mobile visible-language defects

**Status:** PARTIALLY RESOLVED / NO LONGER P0 AS ORIGINALLY DEFINED

Corrected in live Figma frame `45:2`:

- `01 SHIPMENT FACTS` → `01 بيانات الشحنة`
- `02 INITIAL RESULT` → `02 النتيجة الأولية`
- English recommended-next-action sentence → Arabic explanatory sentence
- `APPROVED EN BASELINE` → `APPROVED AR RTL BASELINE`

Technical values such as `Ocean`, `General cargo`, `Solid`, and specialized English terminology may remain English by explicit owner direction and are not defects by themselves.

The English destination-requirement sentence may remain temporarily where it is treated as specialist/regulatory terminology, but Codex should prefer coherent bilingual presentation when implementing runtime copy without forcing awkward translations.

### FIG-002 — Mobile planned transaction date omission

**Status:** RESOLVED IN FIGMA

Added `Planned transaction date` to EN Mobile frame `2:150` and `تاريخ المعاملة المتوقع` to AR Mobile frame `45:2`.

Both mobile shipment-form frames were expanded and downstream sections shifted consistently. New mobile frame height: `3701`; new mobile form height: `948`.

Codex must preserve the date input in runtime and match the corrected live Figma baseline.

### GOV-001 — README MyGPT status stale

**Status:** RESOLVED

README now records MyGPT instructions v1.2, governed Knowledge `01–08`, audit 16/16, regression 3/3, owner link approval, and the rule that production link status remains subject to coded/live verification.

### GOV-003 — SECURITY.md maturity statement stale

**Status:** RESOLVED

Security policy now reflects the approved anonymous static V1 browser architecture and current data/privacy boundaries.

### LEGAL-001 — Terms draft missing

**Status:** DRAFT CREATED / FINAL LEGAL DECISIONS OPEN

Created:

`docs/INCO_TERMS_OF_USE_DRAFT_v1.0.md`

The product/service boundary is drafted. Governing law, jurisdiction, disputes, and final limitation-of-liability language remain owner/legal decisions and must not be invented by Codex.

### LEGAL-002 — Privacy draft missing

**Status:** DRAFT CREATED / HOSTING VERIFICATION OPEN

Created:

`docs/INCO_PRIVACY_NOTICE_DRAFT_v1.0.md`

The intended V1 browser data flow is documented. Actual Neom Cloud / parent-site technical log retention, access, and any inherited analytics/tracking must be verified before publication.

## Still Open for Codex Implementation / QA

### FIG-003

Current runtime remains materially behind the approved Figma visual baseline. Codex must perform gap analysis and targeted visual alignment.

### FIG-004

Verify mobile privacy-safe result-copy action and functional parity.

### FIG-005 / LEGAL-004

Implement visible Terms / Privacy / Professional limitations links in EN and AR footer using approved neutral routes/patterns. Do not invent unresolved jurisdiction-specific clauses.

### DATA-001

Implement privacy copy that distinguishes locally processed shipment-case values from ordinary hosting/security technical logs.

### DATA-002

Keep MyGPT as a separate external-service boundary; no automatic data transfer.

### DATA-003

Keep feedback local-only unless separately approved. Label the action clearly as copy/prepare feedback rather than implying server submission.

### DATA-004

Verify no shipment/result persistence in localStorage, sessionStorage, IndexedDB, cookies, URL parameters, analytics payloads, or third-party scripts.

### LEGAL-003

Add concise pre-use professional-boundary notice near the run action. No mandatory checkbox unless separately approved.

### GOV-002

Trace `unsupported_scope`; determine whether it is dead code, scope status, or legacy decision state. Preserve the approved five controlled public decision states.

### A11Y-001 through A11Y-004

Remain implementation/QA items.

## Remaining Owner / External Verification Items

These items must not block Codex from performing implementation work, but they block final public legal release if unresolved:

1. Governing law / jurisdiction / dispute wording.
2. Final limitation-of-liability wording if required.
3. Actual Neom Cloud / parent-site hosting log retention and access configuration.
4. Confirmation that no inherited analytics or trackers affect the `/inco` production route unless separately approved.

## Current Pre-Codex Status

**READY FOR CODEX FINAL ALIGNMENT WITH CONTROLLED OPEN LEGAL/HOSTING VERIFICATION ITEMS.**

Codex should no longer treat the mobile date-field omission or the corrected general Arabic labels as open blockers. It must use the live corrected Figma nodes as the visual source of truth.
