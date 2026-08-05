# ADR-002: Trade-Lane, Origin-Market, Gateway, and Carrier Knowledge Scope

**Status:** Approved  
**Approved by:** Mostafa Gad  
**Date:** 2026-08-05

## 1. Decision

INCO will model the complete shipment trade lane rather than evaluating only the destination country.

The knowledge and decision model will follow:

```text
Origin Country
→ Origin Gateway
→ Export Requirements
→ Carrier and Service
→ Transit Gateway or Country, when applicable
→ Destination Gateway
→ Destination Country Requirements
→ Inland Transport and Final Delivery
```

## 2. Launch Destination Markets

The initial destination-market scope remains:

1. United Arab Emirates.
2. Saudi Arabia.
3. Egypt.
4. Oman.

These packs focus on import, destination customs, local transport, permits, infrastructure constraints, postal conditions, and verified service-provider discovery.

## 3. Priority Origin Markets

The first origin-market research scope is:

1. China.
2. India.
3. Turkey.
4. Italy.
5. United States.
6. Russia.
7. Australia.

The list is a priority research set, not a permanent ranking of source countries. Future prioritization may use verified trade data, user demand, product categories, and actual shipment cases.

## 4. Origin Country Pack Coverage

Each origin pack should capture, where authoritative sources are available:

- Export declaration and customs processes.
- Export permits, controls, and product restrictions.
- Origin documentation and certificates.
- Dangerous-goods and special-cargo requirements.
- Postal and express-carrier restrictions.
- Main commercial ports, cargo airports, inland depots, and land gateways.
- Current competent authorities and official source links.
- Effective date, review date, and confirmation requirements.

## 5. Transport Gateway Registry

Ports, cargo airports, land borders, inland container depots, dry ports, rail terminals, and relevant free-zone gateways will be represented as independent records.

Gateway records must distinguish:

- Official name and location code.
- Gateway type.
- Country and locality.
- Customs and operating authority.
- Cargo capabilities.
- Equipment or service availability.
- Dangerous-goods and special-cargo indicators.
- Known access, truck, route, weight, dimension, and operating constraints.
- Source, effective date, verification date, and confirmation status.

Location codes may seed identity and matching, but operational capability must be verified from the responsible gateway or authority.

## 6. Carrier and Service Registry

A carrier name alone is not an executable rule. Rules will be stored by:

```text
Provider
× Service
× Origin Market or Gateway
× Destination Market or Gateway
× Cargo Category
× Effective Date
```

Initial express and postal research priority:

- DHL Express.
- FedEx.
- Aramex.
- National postal operators in launch and priority-origin markets.
- UPS when authoritative market and service sources are available.

Initial ocean-carrier research priority:

- Maersk.
- MSC.
- CMA CGM.
- COSCO.
- Hapag-Lloyd.
- ONE.
- Evergreen.

Initial air-cargo research priority:

- Emirates SkyCargo.
- Etihad Cargo.
- Qatar Airways Cargo.
- Saudia Cargo.
- Turkish Cargo.
- EgyptAir Cargo.
- Oman Air Cargo.
- Additional operators based on verified trade lanes and origin-market relevance.

Carrier records may include:

- Service type and coverage.
- Weight and dimension limits.
- Volumetric-weight factor.
- Prohibited, restricted, and conditional cargo.
- Dangerous-goods acceptance process.
- Documentation and pre-approval requirements.
- Equipment options.
- Local and route-specific conditions.
- Effective date, review date, and confirmation requirement.

INCO must not present carrier acceptance as confirmed unless a current authoritative source or direct provider confirmation supports it.

## 7. Russia Enhanced Compliance Pack

Russia-related transactions require an enhanced compliance state rather than ordinary country guidance.

The workflow may trigger checks for:

- Restricted or sanctioned parties.
- Beneficial ownership and counterparties.
- Banks, currencies, and payment routes.
- Product and end-use controls.
- Re-export and transit exposure.
- Carrier, vessel, aircraft, port, and routing restrictions.
- Current legal and specialist confirmation.

A general country record must not produce a simple permitted or prohibited conclusion where transaction-specific screening is required.

## 8. Trade-Lane Output

A future INCO route and carrier result may include:

- Origin and destination country status.
- Candidate gateways.
- Candidate carriers and services.
- Missing cargo evidence.
- Export, transit, import, and inland-transport confirmation points.
- Carrier-specific volumetric and service calculations.
- Dangerous-goods or special-cargo warnings.
- Route and operational risks.
- Required next actions and official confirmation links.

## 9. Commercial Boundary

### Free Direction

- Candidate country and gateway identification.
- Basic carrier and service indicators.
- Basic CBM and volumetric calculations.
- High-level cargo restrictions and missing-information warnings.
- Limited route comparison.

### Paid Direction

A future `INCO Route & Carrier Decision Pack` may include:

- Full origin-to-destination route analysis.
- Multiple gateway and carrier comparison.
- Carrier-specific chargeable-weight calculations.
- Export, transit, import, and local-movement requirements.
- Document and confirmation checklist.
- Risk register and recommended operational route.
- Saved case and professional report.

Pricing and payment implementation remain separate decisions.

## 10. Constraints

- Do not attempt to populate every global port, airport, or carrier at launch.
- Prioritize gateways and services relevant to approved destination and origin markets.
- Do not infer operational capability from a location code alone.
- Do not hard-code volatile carrier conditions without effective and review dates.
- Do not label a carrier, broker, port, or route as best solely because of sponsorship or payment.
- AI remains outside the decision source chain.

## 11. Implementation Consequence

This decision adds the following governed knowledge objects:

- `OriginCountryPack`.
- `TransportGateway`.
- `Carrier`.
- `CarrierService`.
- `TradeLane`.
- `TransitSegment`.
- `RouteRequirement`.
- `EnhancedComplianceStatus`.

The deterministic Cargo Calculator and Trade-Term Review remain valid independent modules and continue under ADR-001.