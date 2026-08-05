# INCO Current State

**Date:** 2026-08-05  
**Phase:** Logistics knowledge architecture and verified research  
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

Status: Open.

Purpose:

- Define the deterministic transaction questionnaire.
- create the trade-term rule matrix.
- define responsibilities, risk, cost, suitability, alternatives, and acceptance scenarios.

### WP-02: Logistics Knowledge Architecture and Source Registry

Status: Active.

Purpose:

- Build the verified source and rule foundation for the expanded logistics modules.
- derive questions from approved knowledge objects.
- document volatility, uncertainty, and confirmation states.
- evaluate open-source container-loading options without adopting a dependency prematurely.

## Completed Foundation Documents

- `README.md`
- `PROJECT_CONTEXT.md`
- `CURRENT_STATE.md`
- `AGENTS.md`
- `.gitignore`
- `docs/MVP_PRODUCT_SPEC.md`
- `docs/KNOWLEDGE_ARCHITECTURE.md`
- `docs/SOURCE_REGISTRY.md`
- `docs/CARGO_CALCULATORS_SPEC.md`
- `docs/BROKER_MARKETPLACE_SPEC.md`
- `docs/QUESTION_ARCHITECTURE.md`
- `docs/OPEN_SOURCE_EVALUATION.md`
- `docs/RESEARCH_BACKLOG.md`

## Research Completed to Seed the Architecture

The Source Registry now contains initial authoritative-source records for:

- International cargo transport unit packing and securing.
- maritime and air dangerous-goods frameworks.
- UAE road permits, truck restrictions, customs, postal, and airline sources.
- Saudi heavy-goods transport and customs-broker licensing sources.
- Egypt customs registration, advance cargo information, and environmental licensing sources.
- Oman abnormal-load permits, transport platform, customs-clearance licensing, and permit services.
- Selected carrier volumetric rules and container-equipment references.
- Initial open-source container-loading candidates and license notes.

These records are research seeds. They must be converted into versioned executable rules before application use.

## Current Research Gaps

High-priority gaps include:

- Egypt official exceptional-load, road, bridge, and tunnel permit sources.
- Official postal restrictions for Saudi Arabia, Egypt, and Oman.
- Saudi active exceptional-load permit workflow and complete thresholds.
- UAE abnormal-load and truck controls outside Dubai.
- Country-specific carrier conditions for launch markets.
- Road axle and route approval rules for all four countries.
- National dangerous-goods variations and competent-authority contacts.
- Public customs-broker verification routes where available.

The platform must return `confirmation required` or `source unavailable` rather than infer missing rules.

## Commercial Boundaries

### Free direction

- Core trade-term review.
- basic cargo and DG pre-screen.
- basic CBM and weight calculations.
- preliminary container and route indicators.

### Paid direction

- Trade Decision Pack.
- detailed professional report.
- multi-option comparison.
- multi-SKU Container Load Plan.
- saved case, visualization, and printable plan.
- advanced compliance brief where verified rules support it.

Pricing amounts, payment gateway, credits, subscriptions, and company plans remain undecided.

## Explicitly Not Started

- Frontend and backend implementation.
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

1. Country-pack schemas and seed packs.
2. Dangerous-goods pre-screen specification.
3. Question-to-rule traceability.
4. carrier-rule schema refinement.
5. calculator test scenarios.
6. open-source solver comparison.
7. source-gap research using official sources.
8. deterministic trade-term rules and representative cases.

Owner approval is required before:

- Pricing values.
- paid provider or data-license commitments.
- production architecture and hosting commitment.
- AI model or provider selection.
- launch-country changes.
- public broker-marketplace launch.
- material changes to free versus paid boundaries.

## Next Implementation Gate

Codex application implementation may begin only when the first selected module has:

- Approved input and output schemas.
- traceable rules or formulas.
- uncertainty and error states.
- representative acceptance tests.
- no unresolved safety-critical assumptions.

## Change Log

### 2026-08-05

- Repository initialized.
- Trade-term review and paid Trade Decision Pack recorded.
- AI deferred.
- Product expanded into modular logistics decision support.
- WP-02 opened.
- Knowledge Architecture, Source Registry, Calculator Specification, Broker Marketplace Specification, Question Architecture, Open-Source Evaluation, and Research Backlog added.
- Governing files aligned with the expanded scope.
