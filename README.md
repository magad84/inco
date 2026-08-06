# INCO

**Free Bilingual Decision Support for International Trade and Logistics**

INCO is a free, rules-first, source-governed professional service for supply-chain and logistics professionals, entrepreneurs, and individual importers. It helps users identify missing information, operational risks, required confirmations, and practical next steps before relying on a shipment plan.

Public service URL: `https://inco.mostafagad.net`

## Founder and Positioning

INCO was founded by **Mostafa Gad**, a **Business and Operations Leader with deep supply-chain expertise**.

His role in the project is:

- Founder and Product Owner;
- Domain Architect;
- Business-Rules Owner;
- Knowledge and Source-Governance Lead;
- strategic technical and quality-governance owner.

Technology is used as a management and execution enabler. The project does not position its founder as a software developer, AI engineer, or technical specialist.

## Service Model

INCO is a real, free, limited professional service. It is not positioned as a paid SaaS or a temporary demo.

The first public release has:

- no registration;
- no payment;
- no saved shipment cases;
- no document upload;
- no production customer database requirement;
- no AI dependency;
- bilingual deterministic results;
- links to related knowledge on MostafaGad.net and the public GitHub repository.

The objective is to provide practical value, increase qualified professional visits, demonstrate management and supply-chain expertise, and connect users with Mostafa Gad’s articles, research, books, videos, and professional work.

## What the Service Checks

- destination-country requirements for UAE, Saudi Arabia, Egypt, and Oman;
- cargo and special-handling indicators;
- dangerous-goods and incomplete-information pre-screening;
- route, gateway, and carrier-service candidate conditions;
- international trade-term responsibilities and checkpoints;
- missing information, risks, required confirmations, controlled sources, and recommended next steps;
- CBM, gross, volumetric, and chargeable-weight calculations in the domain core.

Priority origin markets include China, India, Turkey, Italy, the United States, Russia with enhanced-compliance controls, and Australia.

## Safety Boundary

INCO provides preliminary professional decision support. It does not replace:

- current carrier acceptance;
- customs or authority approval;
- final dangerous-goods classification;
- sanctions or legal review;
- insurance advice;
- route, permit, or abnormal-load approval;
- live rates, capacity, schedules, cut-offs, or booking;
- qualified operational verification.

Missing or volatile evidence returns controlled states such as:

- `confirmation_required`
- `source_unavailable`
- `blocked_information_required`
- `enhanced_compliance_required`

## Public Interface

The current interface has been converted from an internal UAT console into a responsive bilingual public-service experience with:

- English LTR and Arabic RTL modes;
- simplified shipment inputs;
- clear result cards;
- recommended next-step logic;
- visible privacy and professional boundaries;
- canonical metadata and `WebApplication` structured data;
- links to MostafaGad.net and the open-source repository.

## Run Locally

From `packages/domain-core`:

```bash
npm install
npm run uat:console
```

Open:

```text
http://127.0.0.1:4173
```

Operational endpoints:

```text
GET /healthz
GET /readyz
POST /api/evaluate
```

## Deployment Direction

- MostafaGad.net remains hosted on Neom Cloud.
- `inco.mostafagad.net` is deployed on the existing Hostinger VPS runtime.
- Caddy provides HTTPS and reverse proxying.
- The INCO service runs privately behind the proxy.
- Ollama, PostgreSQL, Redis, and Qdrant are not required for the initial release.
- AI remains disabled at launch through `AI_ENABLED=false`.

See `docs/PUBLIC_SERVICE_DEPLOYMENT_RUNBOOK_v1.0.md`.

## Open-Core Governance

The public core may include deterministic logic, schemas, representative source-governed datasets, automated tests, architecture, and governance documentation.

Protected knowledge operations remain outside the public repository, including licensed source files, customer data, credentials, private rule packs, expert-reviewed customer outputs, managed services, and company-specific deployments.

## License

The INCO public core is licensed under the **Apache License, Version 2.0**. See `LICENSE` and `NOTICE`.

The license does not grant rights to protected sources, customer data, private operational knowledge, credentials, the INCO visual identity, or the Mostafa Gad name as a trademark, endorsement, certification, or affiliation beyond reasonable attribution.

Copyright 2026 Mostafa Gad.

## Key Documents

1. `CURRENT_STATE.md`
2. `docs/ADR_006_BRAND_POSITIONING_AND_FREE_SERVICE_MODEL.md`
3. `docs/PUBLIC_SERVICE_DEPLOYMENT_RUNBOOK_v1.0.md`
4. `docs/PRODUCTION_READINESS_ARCHITECTURE_SECURITY_GAP_ANALYSIS_v1.0.md`
5. `docs/THREAT_MODEL_v1.0.md`
6. `docs/UAT_CYCLE_003_REPORT_v1.0.md`
7. `SECURITY.md`
8. `CONTRIBUTING.md`
9. `LICENSE`
10. `NOTICE`

## Governance

- Founder and Product Owner: Mostafa Gad
- Strategic product and architecture governance: ChatGPT
- Engineering execution: Codex and controlled GitHub workflows
- Source control: GitHub
- Repository: `magad84/inco`
