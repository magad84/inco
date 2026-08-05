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

## 2. Architecture Decision

| File | Purpose | Status |
|---|---|---|
| `ADR_001_DETERMINISTIC_CORE_ARCHITECTURE.md` | Recommends a strict TypeScript domain core with a deferred Python optimization boundary | Proposed; owner approval required before code |

Decision issue: GitHub Issue #3.

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
| `KNOWLEDGE_ARCHITECTURE.md` | Product modules, source hierarchy, volatility, rule/source schemas, certainty boundaries | Governing architecture |
| `SOURCE_REGISTRY.md` | Verified and pending source records | Seed registry version 0.2; official-source research continues |
| `RESEARCH_BACKLOG.md` | Prioritized gaps and research tasks | Active |
| `COUNTRY_PACK_SCHEMA.md` | Standard schema for national and local compliance packs | Working schema |

## 5. Cargo and Transport Modules

| File | Purpose | Status |
|---|---|---|
| `DG_PRESCREEN_SPEC.md` | Dangerous-goods and special-cargo evidence triage | Working deterministic specification |
| `CARGO_CALCULATORS_SPEC.md` | CBM, volumetric, chargeable-weight, container estimate, and paid load-planner requirements | Working functional specification |
| `CARGO_CALCULATOR_RULES.md` | Exact units, formulas, precision, rounding, validation, and stale-rule behavior | Implementation-ready mathematical rules |
| `OPEN_SOURCE_EVALUATION.md` | Technical and legal evaluation of container-loading projects | Version 0.2; no dependency approved |

## 6. Country Packs

| File | Coverage | Status |
|---|---|---|
| `country/UAE_SEED_PACK.md` | Federal UAE, Dubai, and initial Abu Dhabi sources | Research seed |
| `country/KSA_SEED_PACK.md` | Heavy goods, broker licensing, postal/DG, and exceptional-load indicators | Research seed |
| `country/EGYPT_SEED_PACK.md` | Customs, environmental licensing, hazardous-waste indicators, and blocked road/postal areas | Research seed |
| `country/OMAN_SEED_PACK.md` | Exceptional-load permits, Naql, customs brokers, permits, and postal rules | Research seed |

A seed pack is not production-ready. It identifies verified candidates, missing sources, and required user questions.

## 7. Marketplace

| File | Purpose | Status |
|---|---|---|
| `BROKER_MARKETPLACE_SPEC.md` | Provider registration, license verification, matching, consent, complaints, and monetization boundary | Future-module specification |

## 8. Machine-Readable Contracts

### Cargo Calculator

| File | Purpose | Status |
|---|---|---|
| `../schemas/cargo-calculator-input.schema.json` | Input contract for package, units, carrier factor, and requested outputs | Created; implementation-neutral |
| `../schemas/cargo-calculator-output.schema.json` | Output, audit, warning, assumption, and provider-rule contract | Created; implementation-neutral |
| `../fixtures/cargo-calculator/cases.json` | Valid and invalid arithmetic, conversion, and stale-rule cases | Created; not yet executed by CI |

### Trade-Term Review

| File | Purpose | Status |
|---|---|---|
| `../schemas/trade-term-rule.schema.json` | Rule-record contract | Created; implementation-neutral |
| `../schemas/trade-term-review-input.schema.json` | Transaction-review input contract | Created; implementation-neutral |
| `../schemas/trade-term-review-output.schema.json` | Explainable result, risk, alternative, and action contract | Created; implementation-neutral |
| `../knowledge/trade-terms.v0.1.json` | Structured records for the eleven principal terms | Draft; controlled source review required |
| `../fixtures/trade-term-review/cases.json` | Seven core transaction fixtures | Created; not yet executed by CI |

## 9. Current Gates

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
- source IDs are attached where applicable.
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

## 10. First Implementation Readiness

The deterministic Cargo Calculator is the most implementation-ready slice because:

- The formulas are stable mathematics.
- carrier-specific factors remain external configuration.
- input and output contracts exist.
- valid and invalid fixtures exist.
- safety and commercial boundaries are defined.

Coding is blocked only by ADR-001 owner approval.

## 11. Work Continuing Without Architecture Approval

- Controlled review of the structured trade-term records.
- additional term-level fixtures.
- country-rule normalization.
- DG and special-cargo machine-readable contracts.
- official source-gap research.

## 12. Work Requiring Approval

After ADR-001 approval:

1. Create `packages/domain-core`.
2. select and review one small decimal-arithmetic dependency.
3. implement the Cargo Calculator only.
4. validate JSON Schemas.
5. execute fixtures as unit tests.
6. publish no web application, authentication, payment, database, or deployment work under this authorization.
