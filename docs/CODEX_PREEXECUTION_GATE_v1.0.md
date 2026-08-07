# INCO Codex Pre-Execution Gate v1.0

**Date:** 2026-08-07  
**Status:** MANDATORY

Before any final implementation work, Codex must read in this order:

1. `CURRENT_STATE.md`
2. `docs/INCO_PRE_CODEX_REVIEW_DEFECT_AND_IMPROVEMENT_REGISTER_v1.0.md`
3. `docs/CODEX_FINAL_IMPLEMENTATION_AND_PREDEPLOYMENT_v1.0.md`
4. live approved Figma nodes `2:2`, `2:150`, `40:2`, `45:2`

## Mandatory gate rules

- Perform gap analysis before editing.
- Address every P0/P1 register item explicitly in the QA matrix.
- Do not delete the mobile planned-transaction-date input merely to match the current mobile Figma omission.
- Do not ship mixed English/Arabic visible text in the Arabic mobile experience.
- Do not invent governing law, jurisdiction, liability, consent, retention, or legal terms. Report owner/legal decisions.
- Do not add analytics, tracking, remote scripts, persistent case storage, server-side feedback collection, or third-party data transmission without explicit approval.
- Preserve local browser evaluation and same-origin governed knowledge loading.
- Trace and reconcile the legacy `unsupported_scope` handling with the approved five-state public contract.
- Update stale README/security/MyGPT status wording during final alignment where verified.
- Terms and Privacy launch controls are release requirements; Codex may implement approved neutral templates/links, but jurisdiction-specific legal language requires owner/legal approval.
- The exact approved MyGPT URL must send no shipment/result/query data.

## Release gate

Codex must output `NOT READY` if any unresolved P0 item remains.

Codex must not deploy to Neom Cloud or declare the production site live.
