# INCO Internal Test Defect Register v1.0

**Opened:** 2026-08-05  
**Current cycle:** Post `UAT-CYCLE-002`  
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
| `DEF-CR-001` | MEDIUM | Country rules | Several rules remain verified-partial or research seed pending official source normalization. | Preserve confirmation states; normalize official records market by market. | Non-blocking |
| `DEF-DG-001` | MEDIUM | DG pre-screen | Contradictory declarations and document-evidence lifecycle need broader fixtures. | Add contradiction, stale SDS, and user-declared versus document-provided cases. | Non-blocking |
| `DEF-GC-001` | MEDIUM | Carrier data | No live schedule, capacity, rate, or final acceptance source. | Continue candidate-only output and mandatory current confirmation. | Non-blocking |
| `DEF-TL-001` | MEDIUM | Trade lanes | Some corridors intentionally contain incomplete gateway or service structure. | Return `source_unavailable` or `confirmation_required`; expand official-source coverage. | Non-blocking |
| `DEF-TT-001` | MEDIUM | Trade terms | Record-by-record controlled source review and expanded fixtures remain incomplete. | Complete verification and regression cases before public release. | Non-blocking |
| `DEF-UAT-001` | LOW | Reporting | Current UAT renderer produces Markdown and JSON-oriented evidence, not a production interface. | Retain internal-use status until production UX is approved. | Non-blocking |

## Closed Items

| Defect ID | Severity | Resolution |
|---|---:|---|
| `DEF-ENG-001` | HIGH | TypeScript integrated-engine test typing error corrected; CI passed. |
| `DEF-CI-001` | HIGH | Invalid lockfile issue removed; dependency installation and tests restored. |

## Gate Rule

`GATE-UAT-READY` remains valid only while:

- No `CRITICAL` defect is open.
- No unaccepted `HIGH` defect is open.
- CI remains green.
- Safety boundaries remain enforced.
- The gate is used for internal functional testing only.
