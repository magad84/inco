# INCO Current State

**Date:** 2026-08-05  
**Phase:** Deterministic domain contracts and architecture decision preparation  
**Implementation status:** Production coding not started

## Approved Product Direction

- INCO is an independent bilingual international-commerce and logistics decision-support platform.
- Trade-term review remains the core product.
- The expanded approved direction includes:
  - Cargo-nature and dangerous-goods pre-screening.
  - Country Compliance Packs for UAE, Saudi Arabia, Egypt, and Oman.
  - Carrier Rules Registry for sea, air cargo, courier, postal, road, and specialist transport.
  - CBM, gross-weight, volumetric-weight, chargeable-weight, pallet, and preliminary container calculators.
  - A future paid multi-SKU Container Load Planner.
  - Road, bridge, tunnel, truck-restriction, and abnormal-load indicators.
  - A future verified customs-broker marketplace.
- The product is rules-first and must work without generative AI.
- The AI module remains intentionally pending.
- Free professional diagnostics and paid execution/report outputs are approved as the commercial direction.
- Users should receive useful free results before registration.
- Google sign-in is planned for saving, resuming, purchasing, and report access.
- Authentication and payment processing remain separate.

## Active Work Packages

### WP-01: MVP Trade-Term Decision Logic

Status: In progress; core matrix, terminology, traceability, and scenarios created.

Completed:

- Initial questionnaire architecture.
- eleven-term deterministic rule matrix.
- named-place, responsibility, risk, cost, alternative, and suitability structures.
- representative trade-term acceptance scenarios.
- controlled Arabic-English terminology register.

Remaining before implementation:

- Convert matrix into structured rule records.
- assign source IDs and effective rule version.
- create trade-term input/output schemas.
- complete term-level scenario fixtures.

### WP-02: Logistics Knowledge Architecture and Source Registry

Status: Active; foundation substantially established.

Completed:

- Knowledge architecture and module boundaries.
- Source Registry version 0.2.
- country-pack schema.
- UAE, Saudi Arabia, Egypt, and Oman seed packs.
- cargo and dangerous-goods pre-screen specification.
- calculator and paid load-planner specification.
- customs-broker marketplace specification.
- question-to-rule traceability.
- cross-module acceptance scenario library.
- open-source solver evaluation version 0.2.
- research backlog.

Remaining:

- Normalize verified source records into executable rules.
- fill P0 official-source gaps.
- create machine-readable DG and country-rule schemas and fixtures.
- validate later implementation slices.

## First Implementation Slice Readiness

The deterministic free Cargo Calculator now has:

- Functional specification.
- exact unit conversion rules.
- CBM, gross-weight, volumetric-weight, and chargeable-weight formulas.
- precision and rounding rules.
- stale and user-configured carrier-factor behavior.
- input JSON Schema.
- output JSON Schema.
- valid arithmetic and conversion fixtures.
- invalid validation and stale-rule fixtures.
- audit and source/version requirements.

Files:

- `docs/CARGO_CALCULATORS_SPEC.md`
- `docs/CARGO_CALCULATOR_RULES.md`
- `schemas/cargo-calculator-input.schema.json`
- `schemas/cargo-calculator-output.schema.json`
- `fixtures/cargo-calculator/cases.json`

Important limitation:

- The schemas and fixtures have been authored but not yet executed by CI or a selected runtime.
- No implementation language or application architecture has been approved.

## Current Document Set

### Governing

- `README.md`
- `PROJECT_CONTEXT.md`
- `CURRENT_STATE.md`
- `AGENTS.md`
- `.gitignore`

### Documentation index

- `docs/README.md`

### Product and rules

- `docs/MVP_PRODUCT_SPEC.md`
- `docs/TRADE_TERM_RULE_MATRIX.md`
- `docs/QUESTION_ARCHITECTURE.md`
- `docs/QUESTION_RULE_TRACEABILITY.md`
- `docs/ACCEPTANCE_SCENARIOS.md`
- `docs/BILINGUAL_TERMINOLOGY.md`

### Knowledge and research

- `docs/KNOWLEDGE_ARCHITECTURE.md`
- `docs/SOURCE_REGISTRY.md`
- `docs/RESEARCH_BACKLOG.md`
- `docs/COUNTRY_PACK_SCHEMA.md`
- `docs/DG_PRESCREEN_SPEC.md`

### Calculators and optimization

- `docs/CARGO_CALCULATORS_SPEC.md`
- `docs/CARGO_CALCULATOR_RULES.md`
- `docs/OPEN_SOURCE_EVALUATION.md`
- `schemas/cargo-calculator-input.schema.json`
- `schemas/cargo-calculator-output.schema.json`
- `fixtures/cargo-calculator/cases.json`

### Marketplace

- `docs/BROKER_MARKETPLACE_SPEC.md`

### Country packs

- `docs/country/UAE_SEED_PACK.md`
- `docs/country/KSA_SEED_PACK.md`
- `docs/country/EGYPT_SEED_PACK.md`
- `docs/country/OMAN_SEED_PACK.md`

## Research Progress

The Source Registry contains initial authoritative-source records for:

- International cargo transport unit packing and securing.
- maritime and air dangerous-goods frameworks and edition control.
- Dubai special-load and truck restriction sources.
- Abu Dhabi heavy-vehicle time restrictions and commercial transport permits.
- UAE customs, postal, and airline sources.
- Saudi heavy-goods transport, customs-broker licensing, broker status, and official postal prohibited/DG sources.
- Egypt customs registration, advance cargo information, and environmental licensing sources.
- Oman abnormal-load permits, transport platform, customs-clearance licensing, permit services, and official postal sources.
- Selected carrier volumetric rules and container-equipment references.
- Open-source loading candidates and license/maintenance findings.

These are research seeds. They must be converted into versioned executable rules before product use.

## Open-Source Load Planner Position

- No external solver has been imported or approved.
- `coin-or/clp-spreadsheet-solver` is currently the strongest requirements and benchmark reference, but its Excel/VBA delivery and license obligations prevent direct production adoption without review.
- `hansehe/ContainerLoading` is limited to algorithm experimentation because of minimal documentation, old maintenance signal, and identified data/constraint concerns.
- `mahdims/3D-bin-packing` is not eligible for code reuse because no explicit repository license was detected and it depends on Python 2.
- INCO will define its own data model, tests, and replaceable engine interface before benchmarking implementations.

## Current P0 Research Gaps

- Egypt official exceptional-load, road, bridge, tunnel, axle, and escort sources.
- Egypt Post official prohibited/restricted item and service-limit sources.
- Complete active Saudi exceptional-load permit workflow and thresholds.
- UAE abnormal-load and route rules outside the current Dubai seed, plus full Abu Dhabi exceptional-load workflow.
- Official road axle-load and route-approval data for all four countries.
- National dangerous-goods variations and competent-authority contacts by mode.
- Country/service-specific carrier rules and volumetric factors.
- Public customs-broker verification routes for jurisdictions where no direct status service is yet verified.

The platform must return `confirmation required`, `source unavailable`, or `stale review required` instead of inferring a rule.

## Commercial Boundaries

### Free direction

- Core trade-term review.
- basic cargo and DG pre-screen.
- basic CBM and weight calculations.
- preliminary container and route indicators.
- critical risks and missing-information guidance.

### Paid direction

- Trade Decision Pack.
- detailed professional report.
- multi-option comparison.
- multi-SKU Container Load Plan.
- saved case, visualization, and printable plan.
- advanced compliance brief where verified rules support it.
- future provider RFQ or marketplace workflow.

Pricing amounts, payment gateway, credits, subscriptions, and company plans remain undecided.

## Explicitly Not Started

- Production frontend and backend.
- production database.
- Google authentication.
- payment integration.
- PDF generation.
- production container solver.
- provider onboarding portal.
- AI model evaluation or integration.
- live carrier or government APIs.
- deployment.

## Next Autonomous Work

Work may continue without owner interruption on:

1. Technical architecture proposal for the deterministic domain core.
2. structured trade-term rule records and schemas.
3. DG and country-rule machine-readable contracts.
4. source-gap research using official sources.
5. executable fixture expansion.

Owner approval is required before:

- Starting production code under a selected architecture.
- pricing values.
- paid provider or data-license commitments.
- production hosting commitment.
- AI model or provider selection.
- launch-country changes.
- public broker-marketplace launch.
- material changes to free versus paid boundaries.

## Current Decision Gate

The next genuine owner decision is the technical architecture for the first deterministic implementation slice.

Recommended direction to document and present:

- TypeScript domain core for calculators, validation, trade-term rules, and the future web application.
- Exact decimal arithmetic through an approved small dependency or controlled decimal implementation.
- No database, authentication, payment, or external services in the first package.
- A replaceable Python optimization service may be added later only for the paid Container Load Planner if benchmark evidence justifies it.

This direction minimizes early complexity while preserving a future optimization boundary.

## Change Log

### 2026-08-05

- Repository initialized and product governance created.
- Trade-term review and paid Trade Decision Pack recorded.
- AI deferred.
- Product expanded into modular logistics decision support.
- WP-02 opened.
- Knowledge, source, country, DG, calculator, marketplace, question, rule, and test foundations created.
- Source Registry expanded with official Saudi and Oman postal sources and Abu Dhabi transport sources.
- Four country seed packs created.
- Eleven-term rule matrix created.
- Cross-module acceptance scenarios and question-to-rule traceability created.
- Open-source container-loading candidates reviewed; no dependency adopted.
- Cargo Calculator input/output schemas, deterministic rules, and fixtures created.
- Controlled bilingual terminology register created.
- Governing files and documentation index aligned.
