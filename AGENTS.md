# AGENTS.md

This file governs Codex and other engineering agents working in `magad84/inco`.

## 1. Mandatory Read Order

Before making any implementation change, read in this order:

1. `PROJECT_CONTEXT.md` — stable Product / Business Source of Truth.
2. `CURRENT_STATE.md` — current phase, open items, risks, and next priorities.
3. `AGENTS.md` — execution and change-control rules.
4. Latest approved INCO ADRs and closure documents relevant to the task.
5. `docs/CODEX_PREEXECUTION_GATE_v1.0.md`.
6. Live approved Figma nodes when UI/UX is involved.
7. The actual repository implementation, tests, build, routing, and data before editing.

If old documentation conflicts with `PROJECT_CONTEXT.md` or newer explicit owner approvals, treat the old material as historical/superseded unless a current ADR explicitly revives it.

## 2. Roles

- **Mostafa Gad:** Product Owner and final product decision maker.
- **CTO / Strategic Technical Lead:** validates architecture, technical direction, implementation quality, security, deployment, and escalations.
- **Codex:** technical inspection, implementation, testing, correction, and technical documentation.

Codex implements approved scope. It must not invent product strategy, business rules, commercial model, legal position, visual identity, data ownership, security/privacy policy, or future integrations.

## 3. Product Source of Truth Rule

`PROJECT_CONTEXT.md` is the consolidated product/business knowledge source.

It defines:

- product identity and positioning;
- target users and roles;
- V1 scope and deferred scope;
- modules and functional boundaries;
- business and validation rules;
- controlled decision states;
- data/privacy principles;
- MyGPT behavior;
- screen/UX map;
- Figma references;
- route/canonical/SEO/GEO requirements;
- source/RAG governance;
- change-control boundaries.

Do not infer a requirement from old code or brainstorming when it is absent from the current Product Context.

## 4. Current Execution Rule

The next phase is **technical validation and implementation alignment**, not new feature development.

Before editing, Codex must establish the actual repository baseline and compare:

```text
Approved Product Requirements
        ↓
GitHub Documentation
        ↓
Actual Repository
        ↓
Actual Data / APIs / Routing / Architecture
        ↓
Actual Implementation
```

Codex must identify:

- architecture conflicts;
- requirement conflicts;
- missing implementation;
- incorrect implementation;
- duplicate logic;
- dead code;
- technical debt;
- security/privacy issues;
- data-model inconsistencies;
- routing/canonical/hreflang conflicts;
- integration problems;
- scalability/maintainability risks;
- missing tests;
- documentation drift.

Do not assume the architecture is correct because an older document says it is.

## 5. Change Authority

Codex may propose and implement a technical correction when it does **not** change an approved product requirement.

Examples:

- refactoring duplicate implementation;
- fixing broken routing while preserving the approved route model;
- correcting accessibility defects;
- correcting a test or build defect;
- removing dead code that has no product effect;
- fixing a privacy leak while preserving the approved privacy model;
- aligning code to an approved Figma state;
- strengthening maintainability without changing behavior.

Codex must stop and classify `CTO / PRODUCT OWNER DECISION REQUIRED` if a proposed fix changes any of:

- product scope;
- business rule or controlled decision state;
- user journey;
- approved screen behavior or major visual hierarchy;
- commercial/free model;
- data ownership or retention;
- major architecture boundary;
- integration strategy;
- security/privacy policy;
- brand positioning;
- canonical/language route model;
- legal obligations or public claims.

## 6. Approved V1 Non-Negotiables

- INCO V1 is free.
- No V1 payment, pricing, subscription, paid tier, freemium upgrade, or paid-report upsell.
- No registration/account requirement.
- No saved cases or persistent customer database.
- No document upload.
- Deterministic/rules-first result is controlling.
- Public controlled states are exactly:
  - `candidate`
  - `confirmation_required`
  - `source_unavailable`
  - `blocked_information_required`
  - `enhanced_compliance_required`
- MyGPT may explain/checklist only and may not override the deterministic result.
- No automatic shipment/result data transfer to MyGPT.
- No unsupported live rate/capacity/schedule/cut-off/booking/acceptance/clearance/permit claims.
- Primary V1 destination packs: UAE, Saudi Arabia, Egypt, Oman.
- EN route: `https://mostafagad.net/inco/`.
- AR route: `https://mostafagad.net/ar/inco/`.
- Each route self-canonicalizes and uses reciprocal hreflang plus `x-default` to EN.
- Legacy product-detail routes are redirect-only if present.
- Figma approved nodes remain visual authority.
- No protected/internal/licensed source leakage.
- Specialist professional terminology may remain English in Arabic where clearer; do not force awkward translation.

## 7. Figma Rules

Live Figma file:

`https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2`

Approved frames:

- EN Desktop `2:2`.
- EN Mobile `2:150`.
- AR Desktop RTL `40:2`.
- AR Mobile RTL `45:2`.

Approved logo master: `31:12`.

MyGPT sections:

- EN Desktop `12:26`.
- EN Mobile `12:33`.
- AR Desktop `40:156`.
- AR Mobile `45:84`.

Rules:

- inspect live nodes before visual work;
- do not use archive material as production source;
- do not redraw or approximate the logo;
- do not redesign locked baselines without owner approval;
- distinguish `Designed` from `Implemented` in every QA report;
- dedicated Terms/Privacy page design is not currently an approved bespoke Figma screen unless a parent-site legal template is reused.

## 8. Data / Privacy Rules

Approved V1 intent:

- shipment-case processing in browser;
- no intentional remote INCO case-evaluation API transmission;
- no deliberate persistent case storage;
- no shipment/result values in localStorage, sessionStorage, IndexedDB, cookies, URL query strings, analytics payloads, or third-party scripts without a new approval;
- ordinary hosting/security logs are a separate technical-data category and must be validated in production;
- no analytics/tracking may be added merely for convenience without owner/privacy approval.

Codex must verify actual implementation rather than assuming these boundaries are already met.

## 9. Safety / Decision Rules

- Missing material facts must not be guessed.
- Unknown chemical composition/SDS gaps must not be treated as non-dangerous evidence.
- Damaged lithium batteries must not be represented as accepted for air transport without qualified assessment and actual-carrier confirmation.
- Russia-related transactions require enhanced transaction-specific compliance screening.
- Unsupported destination coverage must remain general/candidate guidance only; do not invent local certainty.
- When live/current provider-controlled data is unavailable, use the approved controlled-state logic rather than inventing values.
- User risk acceptance cannot remove carrier/authority/specialist requirements.

## 10. Official Confirmation Protocol

When official/provider confirmation is required, preserve all five elements:

1. Reason.
2. Authority/provider.
3. Official source, where available.
4. Impact if not confirmed.
5. Recommended next action.

## 11. MyGPT Rules

Approved external URL:

`https://chatgpt.com/g/g-6a66319a00a48191a0601bc4039fb159-inco`

Requirements:

- open manually by user action;
- new tab with safe link behavior;
- no appended shipment/result/personal/confidential data;
- website deterministic result remains controlling;
- ChatGPT is a separate external service boundary;
- do not claim that MyGPT has current live provider data unless a supported process exists;
- do not expose protected/internal sources.

## 12. Source / RAG Governance

Prefer official government, international safety/transport, carrier, port/airport/postal/customs/road authority sources.

Secondary material may support discovery but must not silently become executable authority.

Executable rules should be traceable, versioned, testable, and effective/review dated where relevant.

Public artifacts must exclude internal/private/licensed/protected source content, credentials, secrets, and customer data.

MyGPT Knowledge is governed separately and uses the approved `01–08` pack only.

## 13. SEO / GEO Rules

- SEO and GEO are one coordinated discoverability strategy.
- Keep EN and AR independently crawlable.
- Use correct self-canonicals, hreflang, language-aware metadata, structured data, sitemap entries, and internal links.
- Preserve truthful Mostafa Gad creator/founder/entity relationship where visible and supported.
- Use semantic headings and source-grounded content.
- Do not add fake ratings, certifications, endorsements, reviews, live claims, mass thin pages, doorway pages, keyword permutations, or GEO hacks.
- `llms.txt` is not a launch requirement.

## 14. Deferred Features

Do not build unless separately approved:

- authentication;
- saved cases;
- persistent reports;
- document uploads;
- payment/pricing/subscriptions/freemium;
- live carrier or government integrations;
- public API;
- ERP integration;
- team workspaces;
- broker marketplace;
- paid report generation;
- public container-load planner;
- embedded generative chat;
- additional country expansion beyond approved work package.

## 15. Legal / Hosting Open Items

Do not invent:

- governing law;
- jurisdiction/dispute wording;
- final limitation-of-liability language;
- hosting-log retention facts;
- inherited analytics/tracking behavior.

Use the existing Terms/Privacy drafts as product-boundary drafts only. Final publication must reflect verified hosting facts and approved legal wording.

## 16. Testing and Completion Standard

For any technical task, run the relevant existing tests and add tests only when needed to verify approved behavior.

A task is not complete until:

- implementation has been compared to approved requirements;
- affected tests pass;
- no product rule was silently changed;
- privacy/security boundaries are preserved;
- bilingual/RTL behavior is tested when relevant;
- canonical/routing/SEO rules are tested when relevant;
- Figma parity is checked when relevant;
- known unresolved items are documented;
- `CURRENT_STATE.md` is updated after material changes.

Do not declare production `READY` or `LIVE` without the required technical, security, artifact, deployment, and live verification evidence.
