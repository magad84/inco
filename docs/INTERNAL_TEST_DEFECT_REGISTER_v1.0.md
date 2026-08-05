# INCO Internal Test Defect Register v1.0

**Opened:** 2026-08-05  
**Current cycle:** Post `UAT-CYCLE-002` hardening  
**Gate:** `GATE-UAT-READY`  
**Status:** No open functional defect in the approved internal-testing scope

## Severity Model

- `CRITICAL`: unsafe or unsupported definitive output, broken core execution, or hidden material risk.
- `HIGH`: materially incorrect decision state, missing mandatory confirmation, or incorrect source handling.
- `MEDIUM`: incomplete coverage or output quality issue that does not create unsupported certainty.
- `LOW`: wording, formatting, or maintenance improvement.

## Open Items

No open defect remains inside the approved deterministic internal-testing scope.

The following are product limitations or future-stage dependencies rather than unhandled defects:

- Live carrier schedule, capacity, rates, cut-offs, and final acceptance require current provider confirmation or a future approved integration.
- Trade-term records remain controlled drafts until the licensed internal source review is completed record by record.
- The current browser console is an internal test interface, not an approved production UX.

## Closed Items

| Defect ID | Severity | Resolution |
|---|---:|---|
| `DEF-GC-001` | MEDIUM | Added deterministic carrier-service governance. Every service is assessed for source availability, verification date, review expiry, volatile status, and mandatory booking confirmation. Stale records return `stale_review_required`; unsupported records return `source_unavailable`; no record can imply live route, capacity, cut-off, rate, or acceptance. CI run `31036320891` passed. |
| `DEF-TT-001` | MEDIUM | Added governance regression tests across all 11 approved trade terms. Tests enforce one record per term, draft/unverified status, internal-source traceability, separation of delivery and risk, responsibility coverage, required questions, and the maritime-only term set. Record-by-record substantive verification remains a controlled publishing gate, not an unhandled engine defect. CI run `31036320891` passed. |
| `DEF-UAT-001` | LOW | Added a responsive internal browser test console with origin, destination, mode, cargo, technical description, enhanced-compliance trigger, controlled decision states, confirmations, missing-information display, and explicit safety boundary. Static smoke tests enforce required inputs and prohibited production claims. CI run `31036320891` passed. |
| `DEF-CR-001` | MEDIUM | Added executable source-lifecycle governance for country rules. Research seeds, missing verification dates, missing official source routes, and missing source records can no longer pass as verified. Unsupported rules return `confirmation_required` or `source_unavailable`; duplicate rule IDs are rejected. Official record normalization remains a controlled knowledge backlog, not an unhandled functional defect. CI run `31036036176` passed. |
| `DEF-TL-001` | MEDIUM | Added corridor structure validation for missing gateways, carrier services, cargo scope, invalid dates, and duplicate IDs. Mixed complete/incomplete matches remain conservative without falsely discarding valid candidates; wholly incomplete matches return `source_unavailable`. Structural gaps are exposed as confirmations and risk flags. CI passed in the final combined run `31036036176`. |
| `DEF-DG-001` | MEDIUM | Added enhanced DG evidence controls for contradictory composition declarations, regulated data without SDS, stale SDS review, missing SDS revision dates, and future-dated SDS records. Integrated engine now uses `DG-PRESCREEN-0.2`; CI run `31035631890` passed. |
| `DEF-ENG-001` | HIGH | TypeScript integrated-engine test typing error corrected; CI passed. |
| `DEF-CI-001` | HIGH | Invalid lockfile issue removed; dependency installation and tests restored. |

## Gate Rule

`GATE-UAT-READY` remains valid only while:

- No `CRITICAL` defect is open.
- No unaccepted `HIGH` defect is open.
- CI remains green.
- Safety boundaries remain enforced.
- The gate is used for internal functional testing only.
