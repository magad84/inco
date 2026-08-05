# INCO Documentation Index

**Date:** 2026-08-05  
**Status:** Current project document map

## 1. Governing Read Order

Before strategy, research, design, or implementation work, read:

1. `../PROJECT_CONTEXT.md`
2. `../CURRENT_STATE.md`
3. `../AGENTS.md`
4. `KNOWLEDGE_ARCHITECTURE.md`
5. `SOURCE_REGISTRY.md`
6. The specification and country pack for the affected module.

## 2. Product Foundation

| File | Purpose | Status |
|---|---|---|
| `MVP_PRODUCT_SPEC.md` | Core trade-term MVP journey, output, and free/paid boundary | Working specification |
| `TRADE_TERM_RULE_MATRIX.md` | Deterministic rules for the eleven principal trade terms | Implementation seed; requires structured conversion and tests |
| `QUESTION_ARCHITECTURE.md` | Conditional question families and entry routes | Working architecture |
| `QUESTION_RULE_TRACEABILITY.md` | Maps questions to formulas, rules, outputs, commercial boundary, and retention | Working traceability matrix |
| `ACCEPTANCE_SCENARIOS.md` | Cross-module expected behavior before code | Initial deterministic test library |

## 3. Knowledge Governance

| File | Purpose | Status |
|---|---|---|
| `KNOWLEDGE_ARCHITECTURE.md` | Product modules, source hierarchy, volatility, rule/source schemas, certainty boundaries | Governing architecture |
| `SOURCE_REGISTRY.md` | Verified and pending source records | Seed registry; ongoing official-source research |
| `RESEARCH_BACKLOG.md` | Prioritized gaps and research tasks | Active |
| `COUNTRY_PACK_SCHEMA.md` | Standard schema for national and local compliance packs | Working schema |

## 4. Cargo and Transport Modules

| File | Purpose | Status |
|---|---|---|
| `DG_PRESCREEN_SPEC.md` | Dangerous-goods and special-cargo evidence triage | Working specification |
| `CARGO_CALCULATORS_SPEC.md` | CBM, volumetric, chargeable-weight, container estimate, and paid load-planner requirements | Working specification |
| `OPEN_SOURCE_EVALUATION.md` | Technical and legal evaluation of container-loading projects | Active; no dependency approved |

## 5. Country Packs

| File | Coverage | Status |
|---|---|---|
| `country/UAE_SEED_PACK.md` | Federal UAE, Dubai, and initial Abu Dhabi sources | Research seed |
| `country/KSA_SEED_PACK.md` | Heavy goods, broker licensing, postal/DG, and exceptional-load indicators | Research seed |
| `country/EGYPT_SEED_PACK.md` | Customs, environmental licensing, hazardous-waste indicators, and blocked road/postal areas | Research seed |
| `country/OMAN_SEED_PACK.md` | Exceptional-load permits, Naql, customs brokers, permits, and postal rules | Research seed |

A seed pack is not production-ready. It identifies verified candidates, missing sources, and required user questions.

## 6. Marketplace

| File | Purpose | Status |
|---|---|---|
| `BROKER_MARKETPLACE_SPEC.md` | Provider registration, license verification, matching, consent, complaints, and monetization boundary | Future-module specification |

## 7. Current Gates

### Research Gate

A source can drive a rule only when:

- It is authoritative or approved.
- scope and jurisdiction are clear.
- effective and review dates are recorded.
- public use is legally permitted.

### Rule Gate

A rule can enter implementation only when:

- Inputs and trigger are explicit.
- output and uncertainty state are explicit.
- source IDs are attached.
- representative tests exist.

### Module Gate

A module can enter production development only when:

- Input/output schemas are approved.
- formulas and rules are traceable.
- safety and confirmation boundaries are defined.
- P0/P1 acceptance scenarios pass.

### Commercial Gate

Pricing, payment provider, credits, subscriptions, and company plans require owner approval after the output scope and operating model are validated.

### AI Gate

AI remains pending. No model or provider is part of the current implementation scope.

## 8. Current Next Work

1. Convert the trade-term matrix into structured rule records.
2. assign rule and source IDs to all material questions.
3. normalize the first country rules.
4. complete missing official road, postal, and carrier research.
5. define data schemas and bilingual terminology.
6. convert acceptance scenarios into executable fixtures.
7. start the first deterministic implementation module only after its gate is met.
