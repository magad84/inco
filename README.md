# INCO

**Free Bilingual Decision Support for International Trade and Logistics**

INCO is a free, rules-first, source-governed professional service for supply-chain and logistics professionals, entrepreneurs, and individual importers. It identifies missing information, operational risks, required confirmations, and practical next steps before a shipment plan is relied upon.

Public service URL: `https://mostafagad.net/inco`

## Founder and Positioning

INCO was founded by **Mostafa Gad**, a **Business and Operations Leader with deep supply-chain expertise**.

His project role is Founder, Product Owner, Domain Architect, Business-Rules Owner, Knowledge and Source-Governance Lead, and strategic quality-governance owner. Technology is a management and execution enabler; the project does not position him as a software developer, AI engineer, or technical specialist.

## First Public Release

- no registration or payment;
- no saved shipment cases or uploads;
- no production customer database;
- no AI dependency;
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

## Browser Architecture

The approved public release runs as static files on Neom Cloud:

```text
mostafagad.net/inco
  -> index.html + styles.css + app.js
  -> engine.js deterministic browser bundle
  -> same-origin governed JSON knowledge packs
```

The browser UI does not call `/api/evaluate`. The internal Node server and API remain development/test utilities only.

## Build and Test

From `packages/domain-core`:

```bash
npm install
npm run check
```

`npm run check` executes the test suite and generates the governed static release in:

```text
dist-public/
```

GitHub Actions publishes the same directory as the `inco-static-public` artifact.

## Deployment

Upload the contents of `dist-public` to:

```text
public_html/inco
```

No Node.js, npm, Docker, Caddy, database, Redis, Qdrant, or AI provider is required on Neom Cloud for the first release.

See:

- `docs/ADR_007_STATIC_BROWSER_DEPLOYMENT_ON_NEOM.md`
- `docs/NEOM_STATIC_DEPLOYMENT_RUNBOOK_v1.0.md`

## Knowledge Governance

The static build exports only explicitly approved public JSON packs. It blocks internal/private/licensed/credential markers and excludes `INTERNAL-TRADE-001`, protected source text, customer data, credentials, and private rule packs.

No dataset implies live route, schedule, capacity, price, cut-off, acceptance, clearance, permit, or authority approval.

## MyGPT Boundary

The approved INCO Assistant on ChatGPT may explain deterministic results, ask for material missing facts, and create checklists, but it cannot override the website engine.

Approved MyGPT status:

- instructions baseline: v1.2;
- governed Knowledge files: `01` through `08` only;
- audit: 16/16 completed with zero failures;
- post-cleanup regression: 3/3 passed;
- owner approval for public-link implementation: granted.

Approved URL:

`https://chatgpt.com/g/g-6a66319a00a48191a0601bc4039fb159-inco`

The website link is not considered live until final coded alignment and production verification are complete. The website must not transfer shipment values, result content, query parameters, personal data, confidential data, or browser-storage values to MyGPT.

## Privacy and Legal Launch Drafts

Current launch-review drafts:

- `docs/INCO_TERMS_OF_USE_DRAFT_v1.0.md`
- `docs/INCO_PRIVACY_NOTICE_DRAFT_v1.0.md`

These drafts describe the approved V1 product and data boundaries. Jurisdiction-specific legal wording, governing law, final limitation-of-liability language, and production hosting-log retention remain subject to owner/legal/hosting review before public publication.

## Open-Core Governance and License

The INCO public core is licensed under the **Apache License, Version 2.0**. See `LICENSE` and `NOTICE`. The license does not grant rights to protected sources, customer data, credentials, the visual identity, or the Mostafa Gad name as a trademark, certification, endorsement, or affiliation beyond reasonable attribution.

Copyright 2026 Mostafa Gad.

## Key Documents

1. `CURRENT_STATE.md`
2. `docs/INCO_PRE_CODEX_REVIEW_DEFECT_AND_IMPROVEMENT_REGISTER_v1.0.md`
3. `docs/CODEX_PREEXECUTION_GATE_v1.0.md`
4. `docs/ADR_007_STATIC_BROWSER_DEPLOYMENT_ON_NEOM.md`
5. `docs/NEOM_STATIC_DEPLOYMENT_RUNBOOK_v1.0.md`
6. `docs/MYGPT_AUDIT_EXECUTION_LOG_v1.0.md`
7. `docs/THREAT_MODEL_v1.0.md`
8. `SECURITY.md`
9. `CONTRIBUTING.md`
10. `LICENSE`
11. `NOTICE`

## Governance

- Founder and Product Owner: Mostafa Gad
- Strategic product and architecture governance: ChatGPT
- Engineering execution: Codex and controlled GitHub workflows
- Repository: `magad84/inco`
