# INCO Saudi Arabia Country Compliance Seed Pack

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Research seed; not production-ready

## 1. Supported Transaction Roles

- Origin.
- destination.
- transit.
- domestic heavy-goods movement.

## 2. Current Authority Map

- Transport General Authority: heavy-goods transport activity, operator obligations, safety, securing, dimensions, weights, and exceptional-load indicators.
- ZATCA: customs-clearance licensing, broker status, broker authorization, customs procedures, and customs-consulting distinction.
- Saudi government service platform: dangerous-goods declaration service discovery.
- Saudi Post / SPL: destination prohibitions and postal dangerous/prohibited item categories.

## 3. Verified Rule Candidates

### KSA-HEAVY-GOODS-01

**Purpose:** Check whether a planned heavy-goods transport activity requires licensed operator, vehicle, driver, and safety evidence.

Inputs:

- Transport is commercial or own-account.
- operator license status.
- vehicle and trailer type.
- driver and vehicle permits.
- cargo type.
- dimensions and weights.
- securing and distribution plan.

Outputs:

- Required operator/vehicle/driver evidence.
- safety and securing warning.
- `AUTHORITY_CONFIRMATION_REQUIRED` when the user cannot establish compliance.

Status:

- Candidate rule based on the current heavy-goods transport regulation. Detailed article-level normalization remains required.

### KSA-EXCEPTIONAL-LOAD-01

**Purpose:** Identify a likely indivisible exceptional-load case.

Trigger indicators:

- Vehicle and load exceed legal dimensions or weights.
- The transported object cannot reasonably be divided or dismantled.
- An exceptional transport permit is absent or unknown.

Outputs:

- `AUTHORITY_CONFIRMATION_REQUIRED`.
- request for actual dimensions, weights, axles, route, and indivisibility evidence.
- warning that movement may be stopped when the load exceeds legal limits or lacks the required permit.

Status:

- High-priority candidate. Complete current permit process and threshold source remain a research gap.

### KSA-BROKER-LICENSE-01

**Purpose:** Verify a customs-clearance provider through official licensing and status services.

Required fields:

- Provider legal name.
- customs-clearance license number.
- license status.
- issue and expiry date.
- declared service scope.
- Fasah-related authorization data where relevant.

Outputs:

- Verification status.
- expiry warning.
- distinction between customs-clearance and customs-consulting activities.

Status:

- Strong marketplace verification candidate because official issue and status routes are available.

### KSA-BROKER-AUTHORIZATION-01

**Purpose:** Guide an importer or exporter to authorize a selected customs broker.

Inputs:

- Importer/exporter account context.
- selected broker license number.
- required customs activity.

Output:

- Official authorization route.
- missing-account or broker-license warning.

Status:

- Candidate workflow rule; integration is not approved.

### KSA-POST-PROHIBITED-01

**Purpose:** Pre-screen postal shipments against SPL prohibited destination categories.

Inputs:

- Product identity and composition.
- destination.
- package and quantity.
- perishable, live, chemical, cultural, controlled, or harmful-content indicators.

Outputs:

- Prohibited-item indicator when directly supported.
- `CARRIER_CONFIRMATION_REQUIRED` for ambiguous or service-dependent cargo.
- customs and destination-law warning.

Status:

- Candidate postal rule.

### KSA-POST-DG-01

**Purpose:** Pre-screen postal cargo for SPL dangerous/prohibited categories.

Indicator groups include:

- Toxic or infectious material.
- flammable liquids.
- corrosive or incendiary material.
- radioactive or flammable solid material.
- compressed gases.
- explosives.
- oxidizers and peroxides.
- magnetic goods.
- engines.
- dry ice.
- lithium batteries.

Outputs:

- `POSSIBLE_DANGEROUS_GOODS`.
- `CARRIER_CONFIRMATION_REQUIRED`.
- specialist confirmation when technical data are incomplete.

Status:

- Candidate rule. Do not infer postal acceptance for an item absent from the examples.

## 4. Required Saudi Questions

- Is Saudi Arabia the origin, destination, transit point, or domestic movement country?
- Is transport commercial or own-account?
- What is the vehicle, trailer, and axle configuration?
- What are loaded dimensions and weights?
- Is the load indivisible?
- Is an exceptional-load permit held?
- What route and movement time are planned?
- Is the operator licensed for the activity and cargo type?
- Is the selected provider a customs-clearance broker or customs consultant?
- What is the official license number and status?
- Is the shipment postal, courier, road, air, ocean, or multimodal?
- Are chemical, battery, dangerous, prohibited, perishable, live, or controlled indicators present?

## 5. Current Gaps

- Complete active exceptional-load permit service and threshold data.
- Road, bridge, tunnel, axle, route-study, and escort rules.
- Dangerous-goods national variations by mode and competent-authority contacts.
- Current local conditions for airports, ports, airlines, ocean carriers, couriers, and domestic road providers.
- Postal service-specific dimensions, weights, and conditional exceptions.

## 6. Production Gate

The Saudi pack may support an initial production slice after:

- Heavy-goods regulation rules are normalized and tested.
- exceptional-load uncertainty is blocked from definitive output.
- official broker verification routes are tested.
- postal prohibited/DG categories are mapped to explainable pre-screen triggers.
- every volatile rule has a review date.
