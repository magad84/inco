# Codex Final Implementation and Pre-Deployment Task v1.0

**Project:** INCO  
**Repository:** `magad84/inco`  
**Target branch:** `main`  
**Public target:** `https://mostafagad.net/inco`  
**Hosting target:** Neom Cloud cPanel, `public_html/inco`  
**Owner:** Mostafa Gad  
**Status:** APPROVED FOR EXECUTION

## Objective

Complete the final coded alignment of INCO V1, implement the approved MyGPT link, run all pre-deployment checks, and produce an inspectable static release artifact ready for Neom Cloud upload.

This task does not authorize material changes to the closed V1 product definition, decision logic, brand direction, Figma baseline, privacy boundary, public knowledge scope, or MyGPT governance.

## Sources of Truth

Use these sources in descending order:

1. `CURRENT_STATE.md`
2. `docs/INCO_V1_PROJECT_CLOSURE_AND_HANDOFF_v1.0.md`
3. `docs/INCO_FIGMA_VISUAL_BASELINE_APPROVAL_v1.0.md`
4. `docs/CODEX_MYGPT_LINK_ACTIVATION_v1.0.md`
5. `docs/MYGPT_AUDIT_EXECUTION_LOG_v1.0.md`
6. `docs/ADR_007_STATIC_BROWSER_DEPLOYMENT_ON_NEOM.md`
7. `docs/NEOM_STATIC_DEPLOYMENT_RUNBOOK_v1.0.md`
8. Existing deterministic rules, tests, bilingual runtime strings, and governed public build scripts in the repository.

Approved Figma file:

- `https://www.figma.com/design/ukiYrUNG1zs38GMS3edxJ2`

Approved frames:

- EN Desktop `2:2`
- EN Mobile `2:150`
- AR Desktop RTL `40:2`
- AR Mobile RTL `45:2`

Approved logo source:

- Page `00 • INCO LOGO MASTER • APPROVED`
- Node `31:12`

## Mandatory Implementation Scope

### 1. Visual alignment

Implement the four approved frames faithfully across desktop and mobile.

Requirements:

- preserve the approved layout hierarchy, spacing, typography, component proportions, and responsive behavior;
- preserve English LTR and Arabic RTL behavior;
- use the approved logo asset without redrawing, reconstruction, recoloring, stretching, cropping, or approximation;
- do not introduce a new design system, palette, icon style, animation direction, or copy direction;
- remove placeholder, prototype-only, or stale text not present in the approved baseline;
- ensure semantic HTML and accessible interaction states.

### 2. Deterministic result authority

The existing deterministic evaluator remains the authority.

Requirements:

- do not replace deterministic logic with LLM output;
- do not weaken or rename the five controlled states;
- do not infer live rates, capacity, schedules, cut-offs, acceptance, permits, clearance, or authority approval;
- preserve privacy-safe browser-side evaluation;
- preserve same-origin public JSON loading;
- do not add registration, payment, uploads, saved cases, or persistent customer storage.

### 3. MyGPT button activation

Approved URL:

`https://chatgpt.com/g/g-6a66319a00a48191a0601bc4039fb159-inco`

Implement the button in all approved English and Arabic desktop/mobile states.

Requirements:

- open in a new tab using safe link attributes;
- use the approved URL exactly;
- send no query parameters;
- transfer no form values, shipment data, result text, country selections, personal data, confidential data, local-storage values, analytics payloads, or identifiers;
- do not imply that MyGPT issues or changes the deterministic decision;
- preserve the approved Figma label, styling, placement, hover, focus, and mobile behavior;
- keep the deterministic website result visible and controlling.

### 4. Bilingual copy reconciliation

Reconcile runtime strings with approved English and Arabic copy.

Requirements:

- preserve professional terminology;
- preserve exact controlled-state identifiers in system or technical contexts;
- verify Arabic directionality, punctuation, alignment, number display, and component order;
- remove conflicting or superseded MyGPT gate wording;
- do not introduce public references to protected publishers or organizations.

### 5. Accessibility and browser quality

Verify at minimum:

- keyboard-only navigation;
- visible focus states;
- correct labels and accessible names;
- logical heading order;
- sufficient contrast under the approved palette;
- responsive behavior at approved mobile and desktop widths;
- no horizontal overflow in Arabic or English;
- no clipped cards, buttons, results, or source lists;
- correct language and `dir` attributes;
- graceful operation with reduced motion where applicable.

## Required Validation

Run all available repository checks, including where present:

- unit tests;
- integration tests;
- E2E tests;
- UAT and governance tests;
- accessibility tests;
- public-knowledge validation;
- protected-content and secret leakage checks;
- static build;
- CodeQL or equivalent security workflow;
- link and asset-path checks.

Add or update tests necessary to cover:

1. MyGPT URL exact match.
2. New-tab behavior.
3. Absence of query parameters and shipment-data transfer.
4. English and Arabic rendering.
5. RTL layout.
6. Controlled-state preservation.
7. No calls to `/api/evaluate` from the public browser release.
8. No internal or protected source content in `dist-public`.

## Release Artifact

Generate the final static public artifact using the governed build.

Artifact requirements:

- output directory: `dist-public` or the repository’s approved equivalent;
- contain only deployable public assets;
- exclude source files, tests, internal notes, private knowledge, credentials, protected source text, and development-only files;
- preserve canonical URL and structured data for `https://mostafagad.net/inco`;
- support deployment under the `/inco` path without broken absolute or relative asset paths;
- include release provenance where already governed.

## Manual Inspection Checklist

Before declaring readiness, inspect the built artifact locally and record:

- EN Desktop visual match;
- EN Mobile visual match;
- AR Desktop RTL visual match;
- AR Mobile RTL visual match;
- form and result flow;
- all five decision states;
- country packs for UAE, Saudi Arabia, Egypt, and Oman;
- unknown chemical block;
- damaged lithium battery block;
- Russia enhanced-compliance state;
- unsupported destination behavior;
- live-data unavailable behavior;
- privacy-safe result copy;
- MyGPT link behavior;
- no console errors;
- no missing assets;
- no protected-source leakage.

## Required Deliverables

Commit to `main`:

1. Final implementation changes.
2. Updated or added tests.
3. `docs/INCO_PREDEPLOYMENT_QA_REPORT_v1.0.md` containing:
   - commit tested;
   - commands run;
   - pass/fail results;
   - visual checks completed;
   - known non-blocking issues;
   - artifact name and checksum where available;
   - explicit release recommendation: READY or NOT READY.
4. Any necessary updates to `CURRENT_STATE.md` after implementation.

Do not mark the public site live. Deployment to Neom Cloud and production verification are separate owner-controlled steps.

## Acceptance Criteria

The task is complete only when:

- all four approved Figma states are faithfully implemented;
- MyGPT button behavior is compliant and tested;
- deterministic decision logic remains unchanged unless a verified defect required correction;
- bilingual and RTL QA passes;
- all mandatory automated checks pass;
- no secret, internal, licensed, or protected material is present in the public artifact;
- the final artifact is manually inspected;
- the QA report recommends `READY FOR NEOM CLOUD DEPLOYMENT`;
- no material unresolved defect remains.

## Stop Conditions

Stop and report instead of improvising when:

- the approved Figma asset cannot be accessed or interpreted;
- an approved logo asset is missing;
- a required test exposes a deterministic-rule conflict;
- the build includes internal or protected material;
- a material change to scope, design, wording, architecture, or governance appears necessary;
- Neom Cloud credentials or production access would be required.
