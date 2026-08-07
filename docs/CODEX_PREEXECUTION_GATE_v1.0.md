# INCO Codex Pre-Execution Gate v1.1

**Date:** 2026-08-07  
**Status:** MANDATORY

Before any final implementation work, Codex must read in this order:

1. `CURRENT_STATE.md`
2. `docs/INCO_PRE_CODEX_REVIEW_DEFECT_AND_IMPROVEMENT_REGISTER_v1.0.md`
3. `docs/INCO_PRE_CODEX_REVIEW_RESOLUTION_LOG_v1.0.md`
4. `docs/INCO_TERMS_OF_USE_DRAFT_v1.0.md`
5. `docs/INCO_PRIVACY_NOTICE_DRAFT_v1.0.md`
6. `docs/CODEX_FINAL_IMPLEMENTATION_AND_PREDEPLOYMENT_v1.0.md`
7. live corrected Figma nodes `2:2`, `2:150`, `40:2`, `45:2`

The Resolution Log overrides the earlier register only for defects explicitly recorded there as resolved or reclassified.

## Mandatory gate rules

- Perform gap analysis before editing.
- Address every still-open P0/P1 register item explicitly in the QA matrix.
- The mobile planned-transaction-date field has been corrected in live Figma and must be preserved in code.
- Arabic general UI labels and explanatory copy must be coherent. Specialist logistics, trade, customs, DG, and operational terminology may remain English where professionally clearer; do not force awkward translation.
- Do not invent governing law, jurisdiction, dispute rules, final liability exclusions, technical-log retention, or other unresolved owner/legal/hosting decisions.
- Do not add analytics, tracking, remote scripts, persistent case storage, server-side feedback collection, or third-party data transmission without explicit approval.
- Preserve local browser evaluation and same-origin governed knowledge loading.
- Trace and reconcile the legacy `unsupported_scope` handling with the approved five-state public contract.
- README and SECURITY maturity/MyGPT wording have already been updated; preserve the corrected state unless implementation evidence requires a factual update.
- Implement approved neutral Terms / Privacy / Professional limitations navigation and concise pre-use professional-boundary copy. Jurisdiction-specific legal language remains outside Codex authority.
- The exact approved MyGPT URL must send no shipment/result/query data.
- Feedback remains local-only unless separately approved; the UI must not imply successful server submission.
- Verify no shipment/result values are persisted in localStorage, sessionStorage, IndexedDB, cookies, URL parameters, analytics payloads, or third-party scripts.

## Release gate

Codex must output `NOT READY` if any unresolved product/security/privacy P0 remains.

Open owner/legal/hosting-verification placeholders that are clearly isolated from implementation may be reported separately, but Codex must not convert drafts into final jurisdiction-specific legal claims.

Codex must not deploy to Neom Cloud or declare the production site live.
