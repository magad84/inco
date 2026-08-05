# INCO

**Bilingual Decision Support for International Trade and Logistics**

INCO is a rules-first, source-governed decision-support engine that converts cargo, country, route, carrier, gateway, and trade-term information into transparent and traceable professional guidance.

It is designed for supply-chain, logistics, procurement, customs, trade, and operations professionals who need to identify missing information, operational risks, required confirmations, and practical next actions before relying on a shipment plan.

## Current Status

INCO has reached **internal functional testing with a real deterministic engine and browser console**.

Implemented:

- deterministic TypeScript domain core;
- cargo calculations;
- destination-country requirement evaluation;
- dangerous-goods and special-cargo pre-screen;
- trade-lane, gateway, and carrier-service evaluation;
- controlled trade-term records and verification overlay;
- bilingual test reporting;
- real HTTP evaluation endpoint and browser UAT console;
- six launch scenarios plus negative, contradiction, road, multimodal, battery, medicine, food, chemical, and oversized tests;
- source freshness, review-date, and uncertainty controls;
- production-readiness and security gap analysis.

Latest validated internal cycle: `UAT-CYCLE-003`.

## Why INCO Is Different

INCO does not hide uncertainty or generate unsupported certainty.

When evidence is incomplete or volatile, the engine returns controlled states such as:

- `confirmation_required`
- `source_unavailable`
- `blocked_information_required`
- `enhanced_compliance_required`

A route candidate is not a booking. A cargo pre-screen is not a final dangerous-goods classification. A country rule is not customs approval. A carrier record is not live acceptance, capacity, schedule, cut-off, or price.

## Initial Coverage

### Destination markets

- United Arab Emirates
- Saudi Arabia
- Egypt
- Oman

### Priority origins

- China
- India
- Turkey
- Italy
- United States
- Russia, with enhanced-compliance controls
- Australia

### Transport and cargo coverage

- ocean;
- air cargo;
- courier and express;
- initial road candidates;
- initial multimodal candidates;
- general, containerized, temperature-controlled, pharmaceutical, food, chemical, battery, dangerous-goods, oversized, and project cargo indicators.

## Run the Internal Console

From `packages/domain-core`:

```bash
npm install
npm run uat:console
```

Open:

```text
http://localhost:4173
```

The console calls the real deterministic engine through `/api/evaluate` and displays the decision state, cargo status, country status, route status, missing information, required confirmations, risks, and source identifiers.

## Open-Core Positioning

INCO is positioned first as an open professional showcase, trust-building platform, and consulting lead-generation asset.

The public core may include:

- deterministic logic;
- schemas;
- representative source-governed datasets;
- tests and UAT evidence;
- architecture and governance documentation;
- a clearly limited demo.

Protected knowledge operations remain private, including licensed source files, customer data, private rule packs, credentials, expert-reviewed reports, and company-specific deployments.

Commercial opportunities are expected primarily from consulting, training, expert-reviewed decision packs, private deployments, white-label implementations, company rule packs, and advanced professional modules.

See `docs/ADR_004_OPEN_CORE_POSITIONING_AND_COMMERCIAL_BOUNDARY.md`.

## Repository and Licensing Status

This repository is public. A final open-source license has **not yet been selected**. Public visibility alone must not be interpreted as a completed unrestricted-use license decision.

The license model will be chosen separately after reviewing permissive, copyleft, and source-available options against INCO's commercial strategy.

## Safety and Professional Boundary

INCO provides professional decision support. It does not replace:

- current carrier acceptance;
- authority or customs approval;
- legal or sanctions review;
- dangerous-goods classification;
- insurance advice;
- route or abnormal-load approval;
- qualified operational verification.

## Key Documents

1. `CURRENT_STATE.md`
2. `PROJECT_CONTEXT.md`
3. `docs/UAT_READINESS_GATE_v1.0.md`
4. `docs/UAT_CYCLE_003_REPORT_v1.0.md`
5. `docs/PRODUCTION_READINESS_ARCHITECTURE_SECURITY_GAP_ANALYSIS_v1.0.md`
6. `docs/ADR_004_OPEN_CORE_POSITIONING_AND_COMMERCIAL_BOUNDARY.md`
7. `SECURITY.md`
8. `CONTRIBUTING.md`

## Governance

- Product Owner: Mostafa Gad
- Strategic product and architecture governance: ChatGPT
- Engineering execution: Codex and controlled GitHub workflows
- Source control: GitHub
- Repository: `magad84/inco`
