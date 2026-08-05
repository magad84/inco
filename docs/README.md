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
6. The specification, country pack, gateway record, or carrier service record for the affected module.

## 2. Architecture Decisions

| File | Purpose | Status |
|---|---|---|
| `ADR_001_DETERMINISTIC_CORE_ARCHITECTURE.md` | Strict TypeScript domain core with deferred Python optimization boundary | Approved; Issue #3 completed |
| `ADR_002_TRADE_LANE_ORIGIN_GATEWAY_CARRIER_SCOPE.md` | Full origin-to-destination model, priority origin markets, gateways, and carrier scope | Approved; WP-03 active |

## 3. Product Foundation

| File | Purpose | Status |
|---|---|---|
| `MVP_PRODUCT_SPEC.md` | Core trade-term MVP journey, output, and free/paid boundary | Working specification |
| `TRADE_TERM_RULE_MATRIX.md` | Deterministic rules for the eleven principal trade terms | Implementation seed |
| `TRADE_TERM_SOURCE_GOVERNANCE.md` | Controlled use of the restricted internal trade-term reference | Governing source note |
| `QUESTION_ARCHITECTURE.md` | Conditional question families and entry routes | Working architecture |
| `QUESTION_RULE_TRACEABILITY.md` | Maps questions to formulas, rules, outputs, commercial boundary, and retention | Working traceability matrix |
| `ACCEPTANCE_SCENARIOS.md` | Cross-module expected behavior before code | Initial deterministic test library |
| `BILINGUAL_TERMINOLOGY.md` | Controlled Arabic-English terminology for trade, cargo, transport, and system outputs | Working terminology register |

## 4. Knowledge Governance

| File | Purpose | Status |
|---|---|---|
| `KNOWLEDGE_ARCHITECTURE.md` | Product modules, source hierarchy, volatility, schemas, and certainty boundaries | Governing architecture |
| `SOURCE_REGISTRY.md` | Verified and pending source records | Seed registry version 0.2; ongoing research |
| `RESEARCH_BACKLOG.md` | Prioritized gaps and research tasks | Active |
| `COUNTRY_PACK_SCHEMA.md` | Standard schema for destination-country and local compliance packs | Working schema |

## 5. Cargo and Transport Modules

| File | Purpose | Status |
|---|---|---|
| `DG_PRESCREEN_SPEC.md` | Dangerous-goods and special-cargo evidence triage | Working deterministic specification |
| `CARGO_CALCULATORS_SPEC.md` | CBM, volumetric, chargeable-weight, container estimate, and paid load-planner requirements | Working functional specification |
| `CARGO_CALCULATOR_RULES.md` | Exact units, formulas, precision, rounding, validation, and stale-rule behavior | Implementation-ready mathematical rules |
| `OPEN_SOURCE_EVALUATION.md` | Technical and legal evaluation of container-loading projects | Version 0.2; no dependency approved |

## 6. Geographic Knowledge

### Launch Destination Packs

| File | Coverage | Status |
|---|---|---|
| `country/UAE_SEED_PACK.md` | Federal UAE, Dubai, and initial Abu Dhabi sources | Research seed |
| `country/KSA_SEED_PACK.md` | Heavy goods, broker licensing, postal/DG, and exceptional-load indicators | Research seed |
| `country/EGYPT_SEED_PACK.md` | Customs, environmental licensing, hazardous-waste indicators, and blocked road/postal areas | Research seed |
| `country/OMAN_SEED_PACK.md` | Exceptional-load permits, Naql, customs brokers, permits, and postal rules | Research seed |

### Priority Origin Research Scope

- China.
- India.
- Turkey.
- Italy.
- United States.
- Russia, with enhanced compliance controls.
- Australia.

Origin seed packs are deliverables under GitHub Issue #4.

## 7. Marketplace

| File | Purpose | Status |
|---|---|---|
| `BROKER_MARKETPLACE_SPEC.md` | Provider registration, license verification, matching, consent, complaints, and monetization boundary | Future-module specification |

## 8. Machine-Readable Contracts

### Cargo Calculator

| File | Purpose | Status |
|---|---|---|
| `../schemas/cargo-calculator-input.schema.json` | Input contract for package, units, carrier factor, and requested outputs | Created; ADR-001 implementation authorized |
| `../schemas/cargo-calculator-output.schema.json` | Output, audit, warning, assumption, and provider-rule contract | Created; ADR-001 implementation authorized |
| `../fixtures/cargo-calculator/cases.json` | Valid and invalid arithmetic, conversion, and stale-rule cases | Created; execution pending |

### Trade-Term Review

| File | Purpose | Status |
|---|---|---|
| `../schemas/trade-term-rule.schema.json` | Rule-record contract | Created; implementation-neutral |
| `../schemas/trade-term-review-input.schema.json` | Transaction-review input contract | Created; implementation-neutral |
| `../schemas/trade-term-review-output.schema.json` | Explainable result, risk, alternative, and action contract | Created; implementation-neutral |
| `../knowledge/trade-terms.v0.1.json` | Structured records for the eleven principal terms | Draft; controlled source review required |
| `../fixtures/trade-term-review/cases.json` | Seven core transaction fixtures | Created; execution pending |

### Trade-Lane Knowledge

| File | Purpose | Status |
|---|---|---|
| `../schemas/origin-country-pack.schema.json` | Export, control, authority, gateway, source, and review contract for priority origins | Created under ADR-002 |
| `../schemas/transport-gateway.schema.json` | Port, cargo airport, land border, dry-port, ICD, and rail-terminal contract | Created under ADR-002 |
| `../schemas/carrier-service.schema.json` | Provider, service, route, cargo acceptance, limits, volumetric rule, and review contract | Created under ADR-002 |
| `../schemas/trade-lane.schema.json` | Origin, segments, transit, destination, requirements, risks, alternatives, and enhanced-compliance contract | Created under ADR-002 |

## 9. Current Gates

### Research Gate

A source can drive a rule only when it is authoritative or approved, its scope and jurisdiction are clear, effective and review dates are recorded, and public use is legally permitted.

### Rule Gate

A rule can enter implementation only when inputs, trigger, output, uncertainty state, source IDs, and representative tests are explicit.

### Module Gate

A module can enter production development only when input/output schemas are approved, formulas and rules are traceable, safety boundaries are defined, and P0/P1 scenarios pass.

### Carrier and Gateway Gate

A gateway code does not prove current capability. A carrier name does not prove service availability or cargo acceptance. Route, service, cargo, market, and effective date must be resolved before presenting a current result.

### Commercial Gate

Pricing, payment provider, credits, subscriptions, and company plans require owner approval after the output scope and operating model are validated.

### AI Gate

AI remains pending. No model or provider is part of the current implementation scope.

## 10. Active Work

### ADR-001 Engineering Slice

1. Create `packages/domain-core`.
2. Select and review one small decimal-arithmetic dependency.
3. Implement the deterministic Cargo Calculator.
4. Validate JSON Schemas.
5. Execute committed fixtures as tests.

### WP-03 Knowledge Slice

1. Create the seven origin seed packs.
2. Seed gateways for the four destination and seven origin markets.
3. Seed approved express, ocean, air-cargo, and postal providers by service and route.
4. Add Russia enhanced-compliance fixtures.
5. Build route, transit, carrier, and stale-rule acceptance cases.

No production UI, authentication, payment, deployment, AI, live booking, or live rate API is authorized by these decisions.
