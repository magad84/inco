# ADR-001: Deterministic Core Architecture

**Status:** Proposed for owner approval  
**Date:** 2026-08-05  
**Decision owner:** Mostafa Gad  
**Scope:** First implementation slice and long-term domain boundary

## 1. Context

INCO now has implementation-neutral specifications for:

- Cargo calculations.
- trade-term review.
- cargo and dangerous-goods pre-screening.
- country and carrier rules.
- future container optimization.

The first implementation slice should validate deterministic formulas and rules without prematurely selecting:

- Production database.
- authentication.
- payment provider.
- hosting topology.
- AI provider.
- external optimization service.

The architecture must support a bilingual web product while preserving the option to add a computational optimization engine later.

## 2. Decision Drivers

1. Keep the first implementation small and testable.
2. Avoid unnecessary service boundaries.
3. Share domain types between web application and rule engine where practical.
4. Preserve exact decimal arithmetic.
5. Keep business rules independent from UI, database, authentication, and payment.
6. Permit future Python-based optimization without rewriting the core product.
7. Support JSON Schema validation and machine-readable rule data.
8. Support Arabic and English message keys without duplicating logic.
9. Keep external carrier, government, payment, and AI providers replaceable.
10. Apply DRY and YAGNI.

## 3. Options Considered

## Option A: TypeScript Deterministic Core

Build the initial domain package in TypeScript.

### Advantages

- Natural fit for a modern web application.
- Shared types between domain core, API layer, and frontend.
- Strong schema and validation ecosystem.
- Simple unit-test and package workflow.
- Avoids a separate service for basic calculations and rules.
- Easier deployment for the first self-hosted application.

### Risks

- Native JavaScript numbers are binary floating point.
- Exact decimal behavior requires an approved decimal library or controlled integer/decimal strategy.
- Advanced optimization libraries are stronger in Python and operations-research ecosystems.

### Mitigation

- Use a small, reviewed decimal-arithmetic dependency for measurements and commercial calculations.
- Keep all optimization behind a later service interface.

## Option B: Python Domain Core

Build calculators and rules in Python from the start.

### Advantages

- Built-in `decimal` support.
- Strong scientific, optimization, and data ecosystem.
- Natural path to future load-planning algorithms.

### Risks

- Adds a separate backend/service stack before it is required.
- Web types and validation may be duplicated between TypeScript frontend and Python backend.
- More operational complexity for a simple first calculator.
- Increases early deployment and testing surface.

## Option C: Full Hybrid from Day One

Use TypeScript for web/API and Python for calculations and rules immediately.

### Advantages

- Separates UI/API from computation.
- Future optimizer can reuse the Python service.

### Risks

- Premature distributed architecture.
- Two runtimes, two dependency sets, two deployment units, and cross-service contracts before business value is proven.
- More failure modes and observability requirements.
- Violates YAGNI for current deterministic formulas.

## 4. Proposed Decision

Adopt **Option A with a deferred optimization boundary**.

### First implementation

Create a TypeScript workspace containing an independent deterministic domain package:

```text
packages/
  domain-core/
    src/
      calculators/
      validation/
      rules/
      messages/
      types/
    tests/
```

The first package must not depend on:

- Web framework.
- database.
- authentication.
- payment.
- PDF rendering.
- AI.
- network calls.

### Future application

A web/API application may consume `domain-core` after its tests pass.

### Future optimizer

If the paid Container Load Planner requires Python, add it later behind a versioned interface:

```text
LoadPlannerEngine.solve(input, objective, constraints)
```

The TypeScript application owns:

- Accounts.
- cases.
- rule configuration.
- payments.
- reports.
- UX.
- audit records.

The optional Python optimizer owns only:

- Computational placement proposal.
- solver metadata.
- optimization metrics.
- unallocated-item reasons.

It must not own commercial rules, user accounts, payments, or source governance.

## 5. Proposed Technology Constraints for the Core

- TypeScript with strict mode.
- Current supported Node.js LTS selected at implementation time.
- Package manager and monorepo tooling kept minimal.
- JSON Schema remains the external contract.
- A reviewed decimal library is required; native floating-point equality is prohibited for authoritative result comparison.
- Unit tests generated from repository fixtures.
- No external network access in unit tests.
- No secrets or environment variables required for domain tests.
- Message keys returned by the core; localized wording remains outside formula and rule logic.

## 6. Core Package Responsibilities

### Included

- Unit conversion.
- CBM, gross-weight, volumetric-weight, and chargeable-weight calculation.
- Schema validation adapters.
- Deterministic warning and error codes.
- Rule-version and source-version metadata handling.
- Trade-term rule evaluation after structured data is approved.
- Cargo/DG pre-screen rules after structured data is approved.

### Excluded

- Authentication.
- persistence.
- payment.
- PDF generation.
- external source retrieval.
- live carrier confirmation.
- government integration.
- provider marketplace.
- AI.
- container optimization in the first slice.

## 7. Proposed Repository Structure

```text
README.md
PROJECT_CONTEXT.md
CURRENT_STATE.md
AGENTS.md
docs/
schemas/
fixtures/
packages/
  domain-core/
```

Do not create application folders until the domain package is implemented and tested.

## 8. Quality Gates

Before a web application consumes the core:

- All JSON fixtures pass.
- Schema validation is automated.
- Decimal and rounding tests pass.
- Unsupported and stale carrier-rule behavior passes.
- Error codes are stable and documented.
- Arabic and English message keys exist for all user-facing errors and warnings.
- Package API is documented.
- No infrastructure dependency exists.

## 9. Security and Privacy Impact

The first package processes in-memory calculation data only.

It stores no accounts, cases, documents, or payment data.

This reduces the initial security and privacy surface while domain behavior is validated.

## 10. Consequences

### Positive

- Fastest path to a tested working core.
- No premature microservices.
- Shared web-compatible types.
- Future Python optimizer remains possible.
- AI remains fully independent.

### Negative

- A decimal dependency must be selected and reviewed.
- A later Python optimizer introduces a second runtime when justified.
- Rules and schemas require disciplined version management.

## 11. Owner Approval Required

Approval authorizes:

- TypeScript as the deterministic domain-core implementation language.
- creation of `packages/domain-core`.
- selection of one small decimal-arithmetic dependency after technical review.
- implementation of the free Cargo Calculator tests and functions only.

Approval does not authorize:

- Production web architecture.
- database.
- authentication.
- payment.
- deployment.
- AI.
- paid load-planner implementation.

## 12. Recommended Decision

**Approve ADR-001.**

It provides the smallest architecture that delivers tested product value now while preserving the future optimization and application boundaries.
