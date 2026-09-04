# INCO Agent Instructions

**Purpose:** Keep Codex execution focused, evidence-based, and efficient while preserving INCO V1 product, safety, privacy, and source-governance rules.

## 1. Authority

Resolve real conflicts in this order:

1. Latest explicit Owner decision.
2. `CURRENT_STATE.md`.
3. Relevant sections of `PROJECT_CONTEXT.md`.
4. Relevant current ADR / approved Figma / task-specific governing document.
5. Current implementation and tests.
6. Historical documents, parent-site descriptions, old branches, and superseded material.

Do not reopen approved decisions without material new evidence.

## 2. Default execution model

Use:

**Understand → inspect relevant scope → implement → targeted test → concise report**

For routine work:

- Read `CURRENT_STATE.md` first.
- Read only the relevant section(s) of `PROJECT_CONTEXT.md`; do not consume the full document unless the task is genuinely cross-cutting.
- Inspect affected code, routes, data, knowledge files, and tests.
- Open ADRs, Figma nodes, legal drafts, SEO/GEO, source/RAG, or other documents only when the task touches those areas.

Do **not** perform a repository-wide gap analysis, architecture audit, technical-debt review, or documentation-drift review before every task.

`docs/CODEX_PREEXECUTION_GATE_v1.0.md` is a **release/cross-cutting validation gate**, not a mandatory prerequisite for routine implementation.

## 3. Core V1 boundaries

Preserve the current approved product rules in `PROJECT_CONTEXT.md`, including:

- INCO V1 remains free unless a newer Owner decision changes the model;
- no registration/account requirement for V1;
- no saved cases or intentional persistent customer-case database;
- no document upload in V1;
- deterministic/rules-first result remains controlling;
- MyGPT may explain/checklist but must not override the deterministic result;
- no unsupported live provider, rate, capacity, booking, acceptance, clearance, or authority claims;
- approved EN/AR canonical route model must be preserved;
- no protected, internal, licensed, credential, secret, or customer-data leakage.

Do not duplicate these rules into new governance files unless necessary.

## 4. Codex autonomy

Codex may proceed without Owner approval for normal technical work that preserves approved product behavior, such as:

- bug fixes;
- small refactoring;
- removing dead/duplicate code;
- accessibility and RTL corrections;
- test fixes/additions;
- implementation alignment to approved routes/Figma;
- maintainability improvements;
- privacy/security defect fixes that preserve the approved model.

Minor technical uncertainty should be resolved using reasonable engineering judgment.

## 5. Escalation gates

Stop for Owner decision only if a change materially affects:

- product scope or controlled decision states;
- business or safety rules;
- commercial/free model;
- public claims or brand positioning;
- privacy, retention, tracking, analytics, or data ownership;
- authentication or persistent user/account architecture;
- payment architecture;
- major route/canonical/language strategy;
- repository/deployment architecture;
- destructive data changes;
- cross-product runtime integration;
- significant legal position;
- Production deployment/cutover.

## 6. Sources, safety, and RAG

Use official/primary sources where executable or safety-sensitive rules depend on current authority.

Do not guess missing material facts. Preserve the approved controlled-state logic when confirmation is required or a live provider source is unavailable.

MyGPT and public artifacts must not expose protected/internal source material or receive shipment/result/personal/confidential data automatically.

Read detailed source/RAG or safety documents only for tasks that affect those rules.

## 7. UI, bilingual, SEO/GEO

For UI tasks, inspect only the relevant approved Figma node(s) and affected implementation.

For route/SEO/GEO/bilingual tasks, validate the affected EN/AR canonical, hreflang, language/dir, metadata, structured data, and redirects as applicable.

A full bilingual/SEO matrix is required for release-wide validation, not for unrelated routine tasks.

## 8. Testing

Prefer targeted tests during implementation.

Run broader validation when changes affect:

- deterministic decision logic;
- shared routing/canonical behavior;
- privacy/data persistence;
- source/RAG execution;
- security boundaries;
- bilingual/RTL infrastructure;
- deployment or release readiness.

Do not run unrelated test suites solely for ceremony.

## 9. Documentation

Update `CURRENT_STATE.md` only when project state, blockers, approved behavior, or next actions materially change.

Do not regenerate unchanged documents.
Do not create a new governance report for a routine fix.

Follow DRY, YAGNI, and KISS.

## 10. Completion standard

A normal task is complete when:

- requested behavior is implemented;
- relevant tests/validation pass;
- approved product/safety/privacy boundaries remain intact;
- no material blocker remains in the affected scope.

Normal report:

- what changed;
- files materially affected;
- tests/results;
- any real blocker or Owner decision required.

Do not declare Production `LIVE` or perform Production deployment without the applicable release authority.
