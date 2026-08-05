# INCO

**International Commerce & Logistics Assistant**

INCO is a bilingual, structured decision-support platform for international commerce, freight, cargo preparation, and logistics execution.

It is designed for working professionals who need to review trade terms, understand cargo and transport risks, calculate shipment requirements, compare practical options, and identify when carrier, authority, or specialist confirmation is required.

## Current Product Direction

INCO is an independent product with its own repository, identity, architecture, data boundaries, and deployment model.

The platform is rules-first, source-backed, and workflow-driven. Its core decision logic must work without generative AI.

The AI module remains intentionally pending. No model, provider, local runtime, or paid API has been approved.

## Product Modules

### 1. Trade-Term Review

- Review whether a selected term fits the transaction.
- Separate delivery, risk transfer, cost allocation, and operational control.
- Check transport-mode compatibility and named-place clarity.
- Compare seller and buyer responsibilities.
- Identify advantages, disadvantages, missing information, and practical alternatives.

### 2. Cargo Nature and Dangerous-Goods Pre-Screen

- Detect indicators that cargo may be dangerous, restricted, temperature-sensitive, fragile, high-value, oversized, overweight, perishable, or otherwise special.
- Request the evidence needed for transport planning.
- Identify when carrier, authority, or specialist confirmation is required.

This module is a pre-screen. It must never certify cargo as safe, non-dangerous, legally permitted, or carrier-accepted from a product name alone.

### 3. Country Compliance Packs

Initial countries:

- United Arab Emirates.
- Saudi Arabia.
- Egypt.
- Oman.

Country knowledge is organized by jurisdiction, transport mode, cargo type, authority, route, effective date, and review date.

### 4. Carrier Rules Registry

Planned carrier categories:

- Ocean carriers.
- air cargo operators.
- express couriers.
- national postal operators.
- road carriers.
- specialist heavy-haul providers.

Carrier formulas, restrictions, acceptance conditions, and operational notices must be effective-dated and reviewed because they vary by provider, service, route, market, and cargo.

### 5. Cargo Calculators

Free deterministic tools are planned for:

- CBM.
- total gross weight.
- volumetric weight.
- chargeable weight.
- preliminary pallet and container requirements.

### 6. Container Load Planner

A future paid professional module is planned for:

- Multi-SKU carton loading.
- container selection.
- orientation and stackability constraints.
- fragile and heavy item controls.
- payload and utilization.
- weight-balance indicators.
- loading and unloading sequence.
- 2D/3D visualization.
- printable professional report.

A mathematical fit is not a safety certificate, dangerous-goods approval, carrier acceptance, securing plan, or road permit.

### 7. Road and Abnormal-Load Indicators

The platform may identify likely requirements related to:

- Exceptional dimensions or gross weight.
- axle limits.
- truck movement restrictions.
- route, bridge, and tunnel constraints.
- escort and permit indicators.

Final route and permit approval remains with the competent authority and qualified operators.

### 8. Verified Customs-Broker Marketplace

A future marketplace may allow users to find and contact registered customs-clearance providers matched by country, customs point, cargo type, transport mode, language, and verified service coverage.

Paid visibility must remain separate from operational matching and verification status.

## Commercial Direction

### Free

- INCO Free Review.
- Basic cargo and risk pre-screen.
- Basic CBM and volumetric calculations.
- Preliminary shipment and container indicators.

### Paid

- INCO Trade Decision Pack.
- Multi-option professional comparison.
- Detailed report and saved case.
- Multi-SKU Container Load Plan.
- Advanced logistics and compliance brief.

The initial payment direction is pay per report or paid output. Credit bundles and business workspaces remain later-stage options.

## Account Direction

A visitor should be able to use the free tools before registration.

Google sign-in is planned when the user wants to:

- Save a case.
- resume later.
- purchase a report.
- access paid results.
- manage account data.

Authentication and payment processing remain separate capabilities.

## Current Phase

The project is in **knowledge architecture, source verification, question design, and deterministic rules definition**.

Production application development must not begin until the minimum rules, data schemas, source registry, uncertainty states, and acceptance tests are sufficiently defined.

## Professional Boundary

INCO provides professional decision support. It does not replace current carrier acceptance, authority approval, legal review, customs determination, dangerous-goods classification, insurance advice, route approval, or competent operational verification where those are required.

## Governance

- Product Owner: Mostafa Gad.
- Strategic product and architecture governance: ChatGPT.
- Engineering execution: Codex.
- Source control: GitHub.
- Repository: `magad84/inco`.

Read these files before implementation:

1. `PROJECT_CONTEXT.md`
2. `CURRENT_STATE.md`
3. `AGENTS.md`
4. `docs/KNOWLEDGE_ARCHITECTURE.md`
5. `docs/SOURCE_REGISTRY.md`
6. `docs/QUESTION_ARCHITECTURE.md`
