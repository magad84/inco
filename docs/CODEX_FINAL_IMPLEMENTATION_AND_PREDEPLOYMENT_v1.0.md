# Codex Final Alignment and Pre-Deployment Task v1.1

**Project:** INCO  
**Repository:** `magad84/inco`  
**Target branch:** `main`  
**Public target:** `https://mostafagad.net/inco`  
**Hosting target:** Neom Cloud cPanel, `public_html/inco`  
**Owner:** Mostafa Gad  
**Status:** APPROVED FOR EXECUTION

## Objective

Audit the current coded implementation against the latest approved INCO V1 sources of truth, identify only genuine gaps, correct those gaps, verify the already-approved MyGPT entry section and link behavior, run pre-deployment QA, and produce an inspectable static public artifact.

This is not a redesign, rebuild, re-platforming exercise, or authorization to reinterpret the closed V1 baseline. Preserve working implementation and change only what is demonstrably inconsistent with the approved sources.

## Current Approved State

- Product definition, bilingual visual design, and MyGPT governance are closed and approved.
- Deterministic domain core and browser release foundation already exist.
- Approved MyGPT configuration: instructions v1.2, governed Knowledge files `01` through `08`, audit 16/16 passed, regression 3/3 passed.
- Owner approval for public MyGPT-link implementation is granted.
- The MyGPT entry section already exists in all four approved Figma frames.
- The public site is not yet declared live.

## Sources of Truth

Use current repository content and live Figma content, not prior summaries. Resolve conflicts in this order:

1. `CURRENT_STATE.md`
2. Live approved Figma file and nodes listed below
3. `docs/INCO_FIGMA_VISUAL_BASELINE_APPROVAL_v1.0.md`
4. `docs/CODEX_MYGPT_LINK_ACTIVATION_v1.0.md`
5. `docs/MYGPT_AUDIT_EXECUTION_LOG_v1.0.md`
6. `docs/INCO_V1_PROJECT_CLOSURE_AND_HANDOFF_v1.0.md`
7. `docs/ADR_007_STATIC_BROWSER_DEPLOYMENT_ON_NEOM.md`
8. `docs/NEOM_STATIC_DEPLOYMENT_RUNBOOK_v1.0.md`
9. Existing tested deterministic rules, bilingual runtime strings, browser code, tests, and governed build scripts.

Before editing, read the repository implementation and inspect the live Figma nodes using Figma design context or equivalent node-level inspection. Do not rely only on screenshots or old exported descriptions.

## Latest Approved Figma Baseline

File:

`https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2`

Page:

`INCO Product Page v1.0` (`0:1`)

Approved frames:

- EN Desktop: `Desktop / INCO Product Page • EN • V1 APPROVED` (`2:2`)
- EN Mobile: `Mobile / INCO Product Page • EN • V1 APPROVED` (`2:150`)
- AR Desktop RTL: `Desktop / INCO Product Page • AR • RTL • V1 APPROVED` (`40:2`)
- AR Mobile RTL: `Mobile / INCO Product Page • AR • RTL • V1 APPROVED` (`45:2`)

Existing approved MyGPT sections:

- EN Desktop: `MyGPT Entry / Desktop` (`12:26`)
- EN Mobile: `MyGPT Entry / Mobile` (`12:33`)
- AR Desktop: `MyGPT Entry / Desktop` (`40:156`)
- AR Mobile: `MyGPT Entry / Mobile` (`45:84`)

Approved logo source:

- Page: `00 • INCO LOGO MASTER • APPROVED`
- Primary master node: `31:12`

Do not redraw, reconstruct, recolor, stretch, crop, or approximate the logo.

## Mandatory Execution Sequence

### 1. Establish the actual code baseline

Before changing files:

- inspect the current browser entry, styles, bilingual strings, assets, deterministic evaluator integration, public build, and relevant tests;
- run the existing test and build commands to establish a clean baseline;
- identify whether each approved section already exists in code;
- record the current implementation-to-Figma gaps in the QA report.

Do not assume that an approved Figma section is absent merely because an older task described it as pending.

### 2. Perform a gap analysis, not a rebuild

Compare the current implementation with the four approved frames and classify findings as:

- `MATCH` — already compliant; do not rewrite;
- `MINOR GAP` — spacing, copy, responsive, directionality, asset, interaction, or accessibility correction;
- `MATERIAL GAP` — approved section or required behavior genuinely absent or materially inconsistent;
- `NON-ISSUE` — prototype-only visual detail that should not alter functional runtime.

Implement only verified `MINOR GAP` and `MATERIAL GAP` items.

Preserve:

- current architecture and static browser runtime;
- tested deterministic result logic;
- five controlled states exactly;
- privacy-safe browser-side processing;
- same-origin approved public JSON;
- approved bilingual information architecture;
- existing working semantic and accessible behavior.

Do not add registration, payments, document uploads, saved cases, persistent storage, new product scope, new destination packs, new AI dependency, new design direction, or new runtime infrastructure.

### 3. Verify and complete visual alignment

For each approved frame, verify:

- section order and hierarchy;
- header, hero, shipment form, initial result, result cards, confirmation protocol, next action, MyGPT entry, boundary/about/feedback/footer areas as applicable;
- approved copy and labels;
- typography, spacing, proportions, responsive behavior, and visual states;
- EN LTR and AR RTL directionality;
- absence of clipped content and horizontal overflow;
- use of approved assets and logo.

Do not delete or redesign the existing MyGPT entry section. Align the code to the approved section if a gap exists.

### 4. Implement or verify the approved MyGPT link

Approved URL:

`https://chatgpt.com/g/g-6a66319a00a48191a0601bc4039fb159-inco`

Requirements:

- use the exact approved URL;
- expose the link in the approved English and Arabic desktop/mobile MyGPT sections;
- open in a new tab with safe link attributes;
- send no query parameters or fragments;
- transfer no form values, result content, shipment facts, selections, identifiers, local-storage values, analytics payloads, personal data, or confidential information;
- preserve the approved explanatory wording that MyGPT cannot override the deterministic result;
- keep the website result visible and controlling;
- do not claim the website integration is live until production verification is completed.

### 5. Reconcile bilingual copy only where required

- compare runtime strings with the live approved Figma content and current governance documents;
- correct stale, conflicting, untranslated, or superseded strings;
- preserve exact controlled-state identifiers in technical contexts;
- verify Arabic punctuation, alignment, component order, and `dir="rtl"` behavior;
- remove obsolete public-link gate wording;
- do not introduce public references to protected publishers or organizations.

### 6. Validate deterministic authority and privacy boundaries

Confirm that:

- the public browser uses the tested deterministic evaluator;
- no LLM output changes or reissues the decision state;
- the public UI does not call `/api/evaluate`;
- no live rate, capacity, schedule, cut-off, booking, acceptance, clearance, permit, or authority approval is inferred;
- no shipment case is intentionally stored or transmitted;
- result copy remains privacy-safe;
- no internal, private, licensed, protected, secret, or credential content reaches the public artifact.

## Required Automated Validation

Run all repository checks that exist, including:

- unit tests;
- integration tests;
- E2E tests;
- UAT and governance tests;
- accessibility checks;
- public-knowledge validation;
- protected-content and secret-leakage checks;
- static public build;
- CodeQL or equivalent security checks;
- internal link and asset-path checks.

Add or update tests only where needed to cover verified gaps, including:

1. Exact MyGPT URL.
2. New-tab and safe-link attributes.
3. No query parameters or shipment-data transfer.
4. MyGPT entry rendering in EN and AR, desktop and mobile.
5. Correct RTL behavior.
6. Controlled-state preservation.
7. No public-browser call to `/api/evaluate`.
8. No internal or protected content in `dist-public`.
9. Deployment under `/inco` without broken asset paths.

Do not change deterministic business rules merely to make a test pass. Stop and report any genuine rule conflict.

## Release Artifact

Generate the governed static public artifact using the repository’s approved build.

Requirements:

- output: `dist-public` or the existing approved equivalent;
- include only deployable public files;
- exclude source code not needed at runtime, tests, internal notes, private Knowledge, credentials, protected text, and development-only files;
- preserve canonical and structured-data references for `https://mostafagad.net/inco`;
- operate correctly from the `/inco` path;
- retain governed release provenance where implemented;
- compute and record an artifact checksum where practical.

## Manual Inspection

Inspect the built artifact locally and record results for:

- EN Desktop against node `2:2`;
- EN Mobile against node `2:150`;
- AR Desktop RTL against node `40:2`;
- AR Mobile RTL against node `45:2`;
- form-to-result flow;
- all five decision states;
- UAE, Saudi Arabia, Egypt, and Oman packs;
- unknown chemical block;
- damaged lithium battery block;
- Russia enhanced-compliance behavior;
- unsupported destination behavior;
- live-data unavailable behavior;
- privacy-safe result copy;
- all four MyGPT entry states and exact link behavior;
- no console errors, missing assets, broken paths, clipped content, horizontal overflow, or protected-source leakage.

## Required Deliverables

Commit to `main`:

1. Only verified implementation corrections.
2. Necessary test updates or additions.
3. `docs/INCO_PREDEPLOYMENT_QA_REPORT_v1.0.md`, containing:
   - source commit and final commit;
   - commands run and results;
   - implementation-to-Figma gap matrix using `MATCH`, `MINOR GAP`, `MATERIAL GAP`, and `NON-ISSUE`;
   - files changed and reason for each change;
   - automated and manual QA results;
   - known non-blocking issues;
   - artifact path/name and checksum where available;
   - explicit recommendation: `READY FOR NEOM CLOUD DEPLOYMENT` or `NOT READY`.
4. Update `CURRENT_STATE.md` only to reflect verified completed work.

Do not mark the production site live. Neom Cloud upload and live verification remain separate owner-controlled steps.

## Acceptance Criteria

Complete only when:

- the current implementation has been compared directly with all four live approved Figma frames;
- existing compliant implementation was preserved;
- all verified material and minor gaps were corrected;
- the existing approved MyGPT sections are implemented faithfully and the exact link behavior is tested;
- deterministic logic and privacy boundaries remain intact;
- bilingual, responsive, RTL, accessibility, security, and regression checks pass;
- the public artifact contains no internal, licensed, protected, credential, or secret content;
- the artifact is manually inspected;
- the QA report recommends `READY FOR NEOM CLOUD DEPLOYMENT`;
- no material unresolved defect remains.

## Stop Conditions

Stop and report instead of improvising when:

- live Figma nodes cannot be accessed or interpreted;
- the approved logo asset is unavailable;
- the current implementation materially conflicts with the approved closed baseline;
- a deterministic-rule conflict or regression is found;
- the build or repository exposes internal, licensed, protected, credential, or secret material;
- a material product, design, architecture, copy, privacy, or governance change appears necessary;
- production credentials or Neom Cloud access are required.
