# INCO

**Free Bilingual Decision Support for International Trade and Logistics**

INCO is a free, rules-first, source-governed professional service for supply-chain and logistics professionals, entrepreneurs, and individual importers. It identifies missing information, operational risks, required confirmations, and practical next steps before a shipment plan is relied upon.

Approved public route: `https://mostafagad.net/inco`

> Public repository note: the product architecture and release package are maintained here, but production deployment is not declared live until deployment and live-route verification are completed.

## Founder and Positioning

INCO was founded by **Mostafa Gad**, a **Business and Operations Leader with deep supply-chain expertise**.

His project role is Founder, Product Owner, Domain Architect, Business-Rules Owner, Knowledge and Source-Governance Lead, and strategic quality-governance owner. Technology is a management and execution enabler; the project does not position him as a software developer, AI engineer, or technical specialist.

## Business Problem

International trade and logistics decisions often depend on incomplete, changing, or shipment-specific information. INCO is designed to help professionals structure that uncertainty before action is taken.

The product focuses on:

- identifying material missing information;
- surfacing operational and regulatory risks;
- separating preliminary guidance from required official confirmation;
- structuring next actions and professional checks;
- supporting faster, more disciplined shipment planning.

## First Public Release Scope

- no registration or payment;
- no saved shipment cases or uploads;
- no production customer database;
- no AI dependency for deterministic results;
- bilingual deterministic results;
- browser-side evaluation without intentional shipment-case transmission;
- primary destination packs for UAE, Saudi Arabia, Egypt, and Oman.

## What the Service Checks

- destination-country requirements;
- cargo, dangerous-goods, and special-handling indicators;
- route, gateway, and carrier-service candidate conditions;
- international trade-term responsibilities and checkpoints;
- missing information, risks, confirmations, controlled sources, and next steps;
- CBM, gross, volumetric, and chargeable-weight calculations in the domain core.

Priority origins include China, India, Turkey, Italy, the United States, Russia with enhanced-compliance controls, and Australia.

## Safety Boundary

INCO provides preliminary professional decision support. It does not replace current carrier acceptance, customs or authority approval, final dangerous-goods classification, sanctions or legal review, insurance advice, route or permit approval, live rates, capacity, schedules, cut-offs, booking, or qualified operational verification.

Controlled states include:

- `candidate`
- `confirmation_required`
- `source_unavailable`
- `blocked_information_required`
- `enhanced_compliance_required`

## Approved Public Runtime

The approved V1 public release is a static browser deployment under MostafaGad.net:

```text
mostafagad.net/inco
  -> index.html + styles.css + app.js
  -> engine.js deterministic browser bundle
  -> same-origin governed JSON knowledge packs
```

The browser UI does not require Node.js, Docker, a database, Redis, Qdrant, or an AI provider at public runtime.

## Development and Test Tooling

The repository also retains Node.js, Docker, and server-side development/test utilities used for build, validation, UAT, and engineering checks. These assets are not the approved V1 production runtime and must not be interpreted as the public deployment architecture.

`.env.example` is a secret-free development/demo template only. Real credentials must never be committed.

## Build and Test

From `packages/domain-core`:

```bash
npm install
npm run check
```

`npm run check` executes the repository-defined validation suite and generates the governed static release in:

```text
dist-public/
```

GitHub Actions is configured to publish the governed static release artifact where the applicable workflow completes successfully. CI status must be read from the actual GitHub Actions result for the relevant commit or pull request; this README does not claim a run passed unless evidence exists.

## Deployment

The approved deployment target for V1 is:

```text
public_html/inco
```

Deployment and live-route verification are separate release steps. This repository does not declare the production route live merely because a build artifact exists.

See:

- `docs/ADR_007_STATIC_BROWSER_DEPLOYMENT_ON_NEOM.md`
- `docs/NEOM_STATIC_DEPLOYMENT_RUNBOOK_v1.0.md`

## Knowledge Governance

The static build is intended to export only explicitly approved public JSON packs. Internal/private/licensed/credential markers, protected source text, customer data, credentials, and private rule packs must remain excluded from the public artifact.

No dataset implies live route, schedule, capacity, price, cut-off, acceptance, clearance, permit, or authority approval.

## MyGPT Boundary

The approved INCO Assistant on ChatGPT may explain deterministic results, ask for material missing facts, and create checklists, but it cannot override the website engine.

Approved MyGPT URL:

`https://chatgpt.com/g/g-6a66319a00a48191a0601bc4039fb159-inco`

The website link is not considered live until final coded alignment and production verification are complete. The website must not transfer shipment values, result content, query parameters, personal data, confidential data, or browser-storage values to MyGPT.

## Privacy and Legal Status

Current launch-review drafts:

- `docs/INCO_TERMS_OF_USE_DRAFT_v1.0.md`
- `docs/INCO_PRIVACY_NOTICE_DRAFT_v1.0.md`

These documents remain drafts until the unresolved owner/legal/hosting items are completed. Governing law, jurisdiction-specific dispute wording, final limitation-of-liability language, and verified hosting-log/analytics facts must not be inferred from this repository.

## Open-Core Governance and License

The INCO public core is licensed under the **Apache License, Version 2.0**. See `LICENSE` and `NOTICE`.

The license does not grant rights to protected sources, customer data, credentials, private rule packs, the visual identity, or the Mostafa Gad name as a trademark, certification, endorsement, or affiliation beyond reasonable attribution and the rights expressly provided by the license.

Copyright 2026 Mostafa Gad.

## Key Documents

1. `CURRENT_STATE.md`
2. `PROJECT_CONTEXT.md`
3. `docs/INCO_PRE_CODEX_REVIEW_DEFECT_AND_IMPROVEMENT_REGISTER_v1.0.md`
4. `docs/CODEX_PREEXECUTION_GATE_v1.0.md`
5. `docs/ADR_007_STATIC_BROWSER_DEPLOYMENT_ON_NEOM.md`
6. `docs/NEOM_STATIC_DEPLOYMENT_RUNBOOK_v1.0.md`
7. `docs/MYGPT_AUDIT_EXECUTION_LOG_v1.0.md`
8. `docs/THREAT_MODEL_v1.0.md`
9. `SECURITY.md`
10. `CONTRIBUTING.md`
11. `LICENSE`
12. `NOTICE`

## Governance

- Founder and Product Owner: Mostafa Gad
- Strategic product and architecture governance: ChatGPT
- Engineering execution: Codex and controlled GitHub workflows
- Repository: `magad84/inco`
