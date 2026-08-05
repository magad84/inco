# INCO Current State

**Date:** 2026-08-05  
**Phase:** Architecture approval gate before deterministic core implementation  
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

Status: In progress; deterministic contracts established.

Completed:

- Initial questionnaire architecture.
- eleven-term operational rule matrix.
- named-place, responsibility, risk, cost, alternative, and suitability structures.
- controlled source-governance note.
- machine-readable rule schema.
- structured eleven-term dataset version 0.1.
- trade-term review input and output schemas.
- seven representative transaction fixtures.
- controlled Arabic-English terminology register.

Remaining before trade-term implementation:

- Controlled record-by-record source review.
- final source and rule verification dates.
- additional term-level fixtures.
- executable message-key catalog.

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

- Normalize verified source records into executable country and carrier rules.
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
- Implementation is intentionally blocked pending ADR-001 approval.

## Architecture Decision Gate

ADR-001 recommends:

- Strict TypeScript deterministic domain core.
- No web framework, database, authentication, payment, PDF, AI, or network calls in the first package.
- One small reviewed decimal-arithmetic dependency.
- JSON Schemas as external contracts.
- Automated unit tests generated from committed fixtures.
- Optional Python optimization service deferred until the paid Container Load Planner is benchmarked and justified.

Files and issue:

- `docs/ADR_001_DETERMINISTIC_CORE_ARCHITECTURE.md`
- GitHub Issue #3: `ADR-001 Decision: Approve TypeScript deterministic core`

Approval authorizes only the first Cargo Calculator domain package and tests. It does not authorize production application architecture, authentication, payment, deployment, AI, or container optimization.

## Current Document Set

See `docs/README.md` for the full governed index.

New machine-readable trade-term artifacts:

- `schemas/trade-term-rule.schema.json`
- `schemas/trade-term-review-input.schema.json`
- `schemas/trade-term-review-output.schema.json`
- `knowledge/trade-terms.v0.1.json`
- `fixtures/trade-term-review/cases.json`
- `docs/TRADE_TERM_SOURCE_GOVERNANCE.md`

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

## Work That May Continue Without ADR Approval

1. Controlled review of structured trade-term records.
2. Additional trade-term fixtures and message keys.
3. DG and country-rule machine-readable contracts.
4. Official source-gap research.
5. Carrier rule normalization.

## Work Requiring Immediate Owner Approval

Approve or reject ADR-001 before creating `packages/domain-core` and writing executable Cargo Calculator code.

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
- ADR-001 proposed and GitHub Issue #3 opened.
- Trade-term rule schema, review schemas, structured dataset, source-governance note, and fixtures created.
- Governing files and documentation index aligned.
