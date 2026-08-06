# INCO

**Free International Trade and Logistics Decision Support**

INCO is a bilingual, rules-first, source-governed service that converts cargo, country, route, carrier, gateway, and trade-term information into transparent and traceable professional guidance.

It is designed for supply-chain, logistics, procurement, customs, trade, and operations professionals, entrepreneurs, small importers, and individual importers who need to identify missing information, operational risks, required confirmations, and practical next actions before relying on a shipment plan.

## Purpose

INCO is a real, free, limited professional service. It is not positioned as a temporary demo, paid SaaS, or software-development showcase.

Its purpose is to provide useful initial guidance, attract qualified professional traffic, strengthen trust in Mostafa Gad's management and supply-chain expertise, and connect users with relevant knowledge, research, books, videos, and professional pages.

## Professional Positioning

INCO supports the approved Mostafa Gad V3 positioning:

> **Business & Operations Leader with Deep Supply Chain Expertise**

Operations is the executive core. Supply Chain is the flagship deep expertise. Applied AI, automation, product design, and open-source engineering are management enablers and execution capabilities, not the primary professional identity.

Mostafa Gad's role in INCO is:

- Founder;
- Product Owner;
- Domain Architect;
- Business-Rules Owner;
- Knowledge and Source-Governance Lead.

The repository demonstrates the ability to translate management and supply-chain expertise into governed tools, workflows, decision logic, and operational controls.

See `docs/ADR_006_BRAND_POSITIONING_AND_FREE_SERVICE_MODEL.md`.

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
- production-readiness and security gap analysis;
- optional provider-agnostic AI explanation adapter, disabled by default for launch.

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

## Launch Boundary

The initial public service will be:

- free;
- anonymous;
- without registration;
- without payments;
- without saved cases;
- without document uploads;
- without live booking or rates;
- without final customs, carrier, authority, legal, insurance, or dangerous-goods approval.

The deterministic engine and bilingual templates will produce the result. AI remains optional and disabled by default until usage demonstrates a clear benefit.

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

The public core includes or may include:

- deterministic logic;
- schemas;
- representative source-governed datasets;
- tests and UAT evidence;
- architecture and governance documentation;
- the free limited service interface.

Protected knowledge operations remain private, including licensed source files, customer data, private rule packs, credentials, expert-reviewed reports, managed services, and company-specific deployments.

See:

- `docs/ADR_004_OPEN_CORE_POSITIONING_AND_COMMERCIAL_BOUNDARY.md`
- `docs/ADR_006_BRAND_POSITIONING_AND_FREE_SERVICE_MODEL.md`

## License

The INCO public core is licensed under the **Apache License, Version 2.0**.

You may use, modify, and distribute the licensed public core, including commercially, subject to the terms in `LICENSE` and the attribution information in `NOTICE`.

The public license does not include or grant rights to:

- protected or licensed source files;
- the controlled source identified as `INTERNAL-TRADE-001`;
- customer, shipment, or private operational data;
- credentials and deployment secrets;
- private company rule packs;
- expert-reviewed customer reports;
- managed services or private deployments;
- the INCO name, visual identity, logos, or Mostafa Gad name as trademarks, endorsements, certifications, or indications of affiliation beyond reasonable attribution.

Copyright 2026 Mostafa Gad.

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
7. `docs/ADR_005_AI_EXPLANATION_PROVIDER_STRATEGY.md`
8. `docs/ADR_006_BRAND_POSITIONING_AND_FREE_SERVICE_MODEL.md`
9. `LICENSE`
10. `NOTICE`
11. `SECURITY.md`
12. `CONTRIBUTING.md`

## Governance

- Founder and Product Owner: Mostafa Gad
- Domain architecture, business rules, and knowledge governance: Mostafa Gad
- Strategic product and architecture support: ChatGPT
- Engineering execution: Codex and controlled GitHub workflows
- Source control: GitHub
- Repository: `magad84/inco`
