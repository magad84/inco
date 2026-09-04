# INCO Release / Cross-Cutting Validation Gate

**Status:** RELEASE / CROSS-CUTTING ONLY  
**Not required for:** routine bug fixes, scoped refactoring, targeted UI corrections, isolated tests, or other local implementation work.

## When this gate applies

Use this gate only when the task materially affects one or more of:

- release readiness;
- deterministic decision-state logic across modules;
- bilingual/canonical route architecture;
- privacy, persistence, analytics/tracking, or third-party transmission;
- source/RAG execution or protected-source boundaries;
- major SEO/GEO/entity behavior;
- deployment/hosting assumptions;
- legal/public-boundary publication;
- a cross-cutting change spanning several INCO subsystems.

## Read strategy

Start with:

1. `CURRENT_STATE.md`.
2. Relevant sections of `PROJECT_CONTEXT.md`.
3. Only the current ADRs / legal drafts / Figma nodes / defect records that directly relate to the release risk being validated.
4. Affected implementation and tests.

Do not replay the old ten-document mandatory reading sequence unless the actual release scope genuinely requires each document.

## Release checks

Validate as applicable:

- no unresolved product/security/privacy P0 blocker;
- approved five-state deterministic contract remains intact;
- no paid/freemium messaging or functionality is introduced into free V1 without Owner approval;
- no unsupported live provider/current-status claims;
- no shipment/result persistence or third-party transmission outside approved boundaries;
- MyGPT receives no shipment/result/query/personal/confidential data automatically;
- EN/AR canonical routes, reciprocal hreflang, language/dir, metadata, structured data, sitemap, and redirects are correct when route/discoverability scope is affected;
- no protected/internal/licensed source leakage;
- legal and hosting facts are not invented;
- relevant build/tests pass.

## Reporting

For a release/cross-cutting gate, report only:

- PASS / NOT READY;
- material blockers;
- affected evidence/tests;
- Owner/legal/provider decisions still required.

Do not create a large QA matrix for routine work.

## Production boundary

This gate does not authorize Production deployment. Production release remains separately governed.
