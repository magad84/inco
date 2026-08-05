# INCO Current State

**Date:** 2026-08-05  
**Phase:** Deterministic core validated; trade-lane knowledge expansion active  
**Implementation status:** First executable domain-core slice approved and passing CI

## Approved Product Direction

- INCO is an independent bilingual international-commerce and logistics decision-support platform.
- Trade-term review remains the core product.
- The platform models the shipment from origin country and gateway through carrier and transit to destination gateway, destination country, and inland delivery.
- The product is rules-first and must operate without generative AI.
- AI remains pending.
- Free professional diagnostics and paid execution/report outputs remain approved.
- Google sign-in, payment, production application architecture, and deployment require later decisions.

## Geographic Scope

### Launch Destination Markets

- United Arab Emirates.
- Saudi Arabia.
- Egypt.
- Oman.

### Priority Origin Markets

- China.
- India.
- Turkey.
- Italy.
- United States.
- Russia with enhanced compliance controls.
- Australia.

## Architecture Decisions

### ADR-001: Deterministic Core

**Status:** Approved and implemented for the first Cargo Calculator slice.

- Strict TypeScript domain core.
- JSON Schemas as external contracts.
- `decimal.js` for controlled decimal arithmetic.
- No web framework, database, authentication, payment, PDF, AI, or network calls in the package.
- Optional Python optimization remains deferred to the paid load-planner benchmark stage.

### ADR-002: Trade-Lane Knowledge Scope

**Status:** Approved.

- Origin Country Packs.
- Transport Gateway Registry.
- Carrier and Carrier Service Registry.
- Trade Lane and Transit Segment model.
- Russia enhanced-compliance controls.
- Future Route & Carrier Decision Pack.

## Work Packages

### WP-01: Trade-Term Decision Logic

**Status:** In progress.

Completed:

- Eleven-term operational rule matrix.
- Machine-readable term dataset and schemas.
- Responsibility, risk, cost, alternative, and suitability structures.
- Seven representative fixtures.
- Controlled bilingual terminology.

Remaining:

- Controlled source review.
- Final rule/source verification dates.
- Additional fixtures and executable message keys.

### WP-02: Logistics Knowledge Architecture

**Status:** Active; foundation established.

Completed:

- Knowledge architecture and source hierarchy.
- Destination-country schema and four seed packs.
- DG pre-screen specification.
- Calculator and load-planner specifications.
- Broker marketplace specification.
- Question-to-rule traceability and acceptance scenarios.
- Open-source solver evaluation.

Remaining:

- Normalize country and carrier rules.
- Fill P0 official-source gaps.
- Create machine-readable DG and destination fixtures.

### WP-03: Origins, Gateways, Carriers, and Trade Lanes

**Status:** Active. GitHub Issue #4.

Completed:

- Origin Country Pack schema.
- Transport Gateway schema.
- Carrier Service schema.
- Trade Lane schema.
- China origin seed pack.
- India origin seed pack.

Next:

1. Turkey, Italy, United States, Russia, and Australia origin seed packs.
2. Initial gateway dataset for origin and destination markets.
3. Initial carrier/service records.
4. Russia enhanced-compliance fixtures.
5. Route, transit, carrier, and stale-rule tests.

## Approved Executable Result

### `@inco/domain-core` version `0.1.1`

Implemented:

- Unit normalization for mm, cm, m, inches, kg, g, and lb.
- CBM per package and total CBM.
- Gross weight.
- Volumetric weight.
- Chargeable weight.
- Per-piece and shipment-total calculation bases.
- Rounding increments.
- Shipment minimum chargeable weight.
- Runtime validation of units and positive values.
- Blocking stale carrier rules.
- Warning for user-supplied unverified carrier rules.
- Audit metadata.

Quality controls:

- Core fixtures executed.
- Advanced regression fixtures added.
- A shipment-total aggregation defect was detected and corrected before approval.
- GitHub Actions build and test job completed successfully on run `31025604772`.

Files:

- `packages/domain-core/src/cargo-calculator.ts`
- `packages/domain-core/test/cargo-calculator.test.ts`
- `fixtures/cargo-calculator/cases.json`
- `fixtures/cargo-calculator/advanced-cases.json`
- `.github/workflows/domain-core.yml`

## Safety Boundaries

- No carrier acceptance claim without current evidence or provider confirmation.
- No gateway capability inferred from a location code alone.
- No volatile carrier rule without effective and review dates.
- No DG pre-screen presented as final classification.
- No route or abnormal-load indicator presented as approval.
- Missing or stale rules return confirmation or source-status states rather than guessed conclusions.

## Commercial Boundaries

### Free direction

- Trade-term review.
- Basic DG pre-screen.
- CBM, gross, volumetric, and chargeable-weight calculations.
- Candidate gateway and carrier indicators.
- Critical risks and missing-information guidance.

### Paid direction

- Trade Decision Pack.
- Route & Carrier Decision Pack.
- Detailed comparisons and compliance brief.
- Multi-SKU Container Load Plan.
- Saved cases, visualization, and professional reports.

Pricing, payment provider, credits, subscriptions, and company plans remain undecided.

## Decisions Still Requiring Owner Approval

- Pricing values.
- Paid data or software licenses.
- Final production web architecture and hosting commitment.
- Google authentication implementation.
- Payment provider selection.
- AI model or provider selection.
- Live booking or rate APIs.
- Public broker marketplace launch.
- Material changes to free versus paid boundaries.

## Change Log

### 2026-08-05

- ADR-001 approved and deterministic Cargo Calculator implemented.
- Domain core corrected to calculate shipment-total chargeable weight across the whole shipment.
- Advanced regression fixtures added.
- GitHub Actions build and tests passed.
- Domain core `0.1.1` approved.
- ADR-002 and WP-03 activated.
- China and India origin seed packs added.
