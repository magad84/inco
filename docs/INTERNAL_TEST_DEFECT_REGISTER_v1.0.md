# INCO Internal Test Defect Register v1.0

**Opened:** 2026-08-05  
**Current cycle:** Post `UAT-CYCLE-002` hardening  
**Gate:** `GATE-UAT-READY`  
**Status:** No open critical or high functional defect

## Severity Model

- `CRITICAL`: unsafe or unsupported definitive output, broken core execution, or hidden material risk.
- `HIGH`: materially incorrect decision state, missing mandatory confirmation, or incorrect source handling.
- `MEDIUM`: incomplete coverage or output quality issue that does not create unsupported certainty.
- `LOW`: wording, formatting, or maintenance improvement.

## Open Items

| Defect ID | Severity | Area | Finding | Control / Next Action | Gate Impact |
|---|---:|---|---|---|---|
| `DEF-GC-001` | MEDIUM | Carrier data | No live schedule, capacity, rate, or final acceptance source. | Continue candidate-only output and mandatory current confirmation. | Non-blocking |
| `DEF-TT-001` | MEDIUM | Trade terms | Record-by-record controlled source review and expanded fixtures remain incomplete. | Complete verification and regression cases before public release. | Non-blocking |
| `DEF-UAT-001` | LOW | Reporting | Current UAT renderer produces Markdown and JSON-oriented evidence, not a production interface. | Retain internal-use status until production UX is approved. | Non-blocking |

## Closed Items

| Defect ID | Severity | Resolution |
|---|---:|---|
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
