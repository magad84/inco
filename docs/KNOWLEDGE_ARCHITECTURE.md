# INCO Logistics Knowledge Architecture

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Working architecture for WP-02  
**Owner:** Mostafa Gad

## 1. Purpose

This document defines how INCO will organize, verify, version, and use trade and logistics knowledge before implementation.

The product is expanding from a trade-term review tool into a modular professional decision-support platform. Trade-term review remains the core. New modules must be independent, source-backed, and activated only when relevant to the transaction.

The AI module remains intentionally undecided and is not required for any core decision flow.

## 2. Product Knowledge Domains

### 2.1 Trade-Term Decision Support

Purpose:

- Review the selected trade term against the transaction.
- Separate delivery, risk transfer, cost allocation, and operational control.
- Detect transport-mode and named-place issues.
- Compare practical alternatives.

Primary objects:

- Trade term.
- delivery event.
- named place or point.
- seller responsibility.
- buyer responsibility.
- transport-mode compatibility.
- cost item.
- risk-transfer event.
- clarification trigger.
- alternative rule.

### 2.2 Cargo Nature and Dangerous-Goods Pre-Screening

Purpose:

- Identify indicators that cargo may be dangerous, restricted, temperature-sensitive, fragile, high-value, perishable, live, oversized, overweight, or otherwise special.
- Determine what information and specialist evidence are required before transport planning continues.

This module is a pre-screen only. It must not declare cargo legally safe, non-dangerous, accepted by a carrier, or transportable from a product name alone.

Approved output states:

- `NO_INDICATOR_FOUND`
- `POSSIBLE_DANGEROUS_GOODS`
- `DANGEROUS_GOODS_DATA_REQUIRED`
- `SPECIAL_CARGO_DATA_REQUIRED`
- `CARRIER_ACCEPTANCE_REQUIRED`
- `AUTHORITY_CONFIRMATION_REQUIRED`
- `SPECIALIST_CONFIRMATION_REQUIRED`
- `INSUFFICIENT_INFORMATION`

Core data fields:

- Commercial product name.
- technical description.
- composition or ingredients.
- physical state.
- intended use.
- battery presence and chemistry.
- liquid, aerosol, gas, powder, chemical, biological, magnetic, radioactive, or temperature-control indicators.
- safety data sheet availability.
- UN number if known.
- proper shipping name if known.
- class/division if known.
- packing group if known.
- flash point where relevant.
- package type and quantity.
- transport mode.
- origin, transit, and destination.
- carrier or service.

### 2.3 Country Compliance Packs

Initial countries:

1. United Arab Emirates.
2. Saudi Arabia.
3. Egypt.
4. Oman.

A country pack is not a single flat page. It is a versioned collection of rules and source links indexed by:

- Country.
- emirate, province, governorate, city, port, airport, or local authority where relevant.
- origin, destination, or transit role.
- transport mode.
- cargo category.
- vehicle or equipment type.
- route and infrastructure.
- government authority.
- effective date.
- review date.

Country-pack knowledge may include:

- Import, export, and transit preparation indicators.
- government approvals and permits.
- dangerous-goods or hazardous-material triggers.
- abnormal-load permits.
- truck road and time restrictions.
- customs-broker licensing and verification.
- postal and public-carrier prohibitions.
- authoritative portals for current confirmation.

### 2.4 Carrier Rules Registry

Carrier categories:

- Ocean carriers.
- air cargo operators.
- express couriers.
- national postal operators.
- road carriers.
- specialist heavy-haul providers.

Carrier rules are volatile and may differ by:

- Provider.
- service.
- origin and destination.
- route.
- equipment.
- cargo type.
- customer contract.
- effective date.
- temporary operational notice.

Each carrier rule must record:

- Carrier ID.
- service ID.
- rule category.
- jurisdiction or trade lane.
- cargo scope.
- requirement, restriction, or formula.
- conditions and exceptions.
- source ID.
- effective date.
- expiry date where known.
- last verified date.
- next review date.
- confidence and verification status.
- whether direct carrier confirmation is mandatory.

The application must not hard-code one universal volumetric divisor or acceptance rule.

### 2.5 Cargo Calculators

Core calculators:

- CBM per package.
- total CBM.
- gross weight.
- volumetric weight.
- chargeable weight.
- pallet footprint and estimated pallet count.
- container nominal-capacity comparison.
- preliminary container count.
- utilization by volume and by payload.

Calculated values must distinguish:

- Pure mathematics.
- reference equipment data.
- carrier-specific commercial calculation.
- operational estimate.
- verified booking data.

### 2.6 Container Load Planner

Purpose:

Optimize the placement of multiple package types inside a selected cargo transport unit while respecting physical and operational constraints.

This is planned as a paid professional module.

Inputs:

- Actual internal container dimensions.
- door opening.
- payload and gross limits.
- carton dimensions, quantity, and weight.
- permitted orientations.
- stackability.
- maximum supported load.
- fragile or heavy status.
- floor-only restriction.
- separation or incompatibility rules.
- loading and unloading sequence.
- pallets and dunnage.
- safety clearances.

Outputs:

- Proposed placement coordinates.
- loaded and unallocated items.
- volume utilization.
- payload utilization.
- weight-distribution indicators.
- center-of-mass estimate.
- loading sequence.
- warnings and unresolved constraints.
- 2D/3D visualization.
- printable loading plan.

A mathematical fit is not automatically a safe or carrier-acceptable load. The module must keep optimization, equipment limits, securing, dangerous-goods segregation, road limits, and final operational approval separate.

### 2.7 Road, Bridge, Tunnel, and Abnormal-Load Compliance

This module activates when dimensions, gross weight, axle weight, cargo nature, or route indicate potential restrictions.

Knowledge objects:

- Authority.
- route segment.
- road class.
- bridge or tunnel restriction.
- prohibited time window.
- vehicle category.
- dimensional threshold.
- weight threshold.
- axle threshold.
- escort requirement.
- permit type.
- document requirement.
- validity.
- fee where officially published.
- source and review date.

The product may flag a likely permit or confirmation requirement. It must not claim route approval or infrastructure clearance without current authority or specialist confirmation.

### 2.8 Customs-Broker Marketplace

Purpose:

Allow users to discover and contact registered customs-clearance providers that match the transaction.

The platform must distinguish:

- Platform registration.
- document verification.
- government-license verification.
- service coverage.
- user feedback.
- sponsored visibility.

A paid listing must never be represented as the best operational match solely because of payment.

Provider verification statuses:

- `APPLIED`
- `DOCUMENTS_PENDING`
- `VERIFICATION_IN_PROGRESS`
- `VERIFIED`
- `VERIFIED_WITH_LIMITATIONS`
- `EXPIRING`
- `EXPIRED`
- `SUSPENDED`
- `REJECTED`

## 3. Knowledge Source Hierarchy

Use the strongest current source available:

1. Applicable law, regulation, or official government service page.
2. Official international safety or transport standard source.
3. Official carrier rule, tariff, equipment guide, or operational notice.
4. Official customs, postal, port, airport, road, or transport authority guidance.
5. Approved technical publication with clear licensing and current applicability.
6. Reputable professional secondary material for discovery only.
7. User or provider declaration, clearly marked and never treated as authority verification.

Secondary content must not override authoritative sources.

## 4. Verification Status

Every rule or source-linked statement uses one of:

- `VERIFIED_CURRENT`
- `VERIFIED_WITH_LIMITATIONS`
- `OFFICIAL_SOURCE_REQUIRES_INTERPRETATION`
- `CARRIER_CONFIRMATION_REQUIRED`
- `AUTHORITY_CONFIRMATION_REQUIRED`
- `SPECIALIST_CONFIRMATION_REQUIRED`
- `STALE_REVIEW_REQUIRED`
- `UNVERIFIED`
- `SUPERSEDED`
- `RETIRED`

## 5. Volatility Classes

- `V0_STABLE_FORMULA`: mathematics such as volume calculation; annual review.
- `V1_STANDARD`: international standard overview; review each edition or amendment.
- `V2_REGULATORY`: laws, permits, government procedures; review every 3 months and after alerts.
- `V3_CARRIER`: carrier formulas, acceptance, surcharges, service limits; review monthly or before use.
- `V4_OPERATIONAL`: temporary route, port, airport, or carrier notices; review daily or at transaction time.

## 6. Rule Object Schema

Each executable rule should contain:

```yaml
rule_id: string
module: string
jurisdiction: string | null
authority_or_carrier: string | null
transport_mode: string[]
cargo_scope: string[]
trigger:
  fields: string[]
  expression: string
outcome:
  status: string
  severity: string
  message_key: string
  required_actions: string[]
  required_evidence: string[]
  specialist_confirmation: boolean
sources: string[]
effective_from: date | null
effective_to: date | null
last_verified: date
next_review: date
verification_status: string
notes: string
```

Rules must be explainable and testable. Do not embed professional assumptions only in UI text or application code.

## 7. Source Object Schema

```yaml
source_id: string
title: string
publisher: string
publisher_type: government | international_body | carrier | postal_operator | technical | repository
jurisdiction: string[]
transport_mode: string[]
source_type: regulation | service_page | standard | carrier_rule | equipment_guide | operational_notice | software
url: string
language: string[]
effective_date: date | null
published_or_updated: date | null
last_checked: date
next_review: date
volatility: string
access: public | restricted | paid | licensed
usage: link_and_summary | internal_reference_only | implementation_candidate
verification_status: string
notes: string
```

## 8. User-Facing Certainty Rules

INCO must always distinguish:

- Mathematical result.
- rule-based indicator.
- current official requirement.
- carrier-specific requirement.
- preliminary recommendation.
- specialist confirmation.
- booking or permit confirmation.

Prohibited outputs include:

- "This material is not dangerous" when evidence is incomplete.
- "This carrier will accept the cargo" without current carrier confirmation.
- "No road permit is needed" without applicable thresholds and route checks.
- "The cargo fits safely" based on CBM alone.
- "This broker is the best" based on sponsorship or incomplete verification.

## 9. Privacy and Data Boundaries

The research repository stores schemas, rules, public-source metadata, test data, and approved examples.

It must not store:

- customer shipment documents.
- safety data sheets belonging to customers.
- commercial invoices or contracts.
- personal identity documents.
- broker license files intended for platform verification.
- payment data.

These require separate production storage, access controls, retention, and deletion policies.

## 10. Implementation Sequence

1. Build Source Registry.
2. Build knowledge schemas.
3. Seed four country packs.
4. Define cargo and DG pre-screen logic.
5. Define calculator formulas and carrier-dependent factors.
6. Define container-data and load-planner constraints.
7. Derive questionnaire fields from rules.
8. Create representative test scenarios.
9. Implement free deterministic calculators and trade-term review.
10. Implement paid reports and load planning only after validation.
11. Implement broker marketplace after verification and privacy workflows.
12. Evaluate AI only after the deterministic platform is reliable.

## Governing Principle

**Verified rules before questions. Questions before code. Calculation before optimization. Optimization before automation. Confirmation before commitment.**
