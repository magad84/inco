# INCO Oman Country Compliance Seed Pack

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Research seed; not production-ready

## 1. Supported Transaction Roles

- Origin.
- destination.
- transit.
- domestic road movement.

## 2. Current Authority Map

- Oman government and transport ministry services: exceptional-load permits and the Naql transport platform.
- Royal Oman Police: permit route for specified exceptional-load movements without police escort and other traffic controls.
- Oman Customs: permits, customs-clearance companies, broker-user registration, and broker authorization processes.
- Oman Post: postal and express conditions, dangerous/prohibited items, and provider guidance.

## 3. Verified Rule Candidates

### OMN-EXCEPTIONAL-LOAD-01

**Purpose:** Identify when an exceptional-load transport permit review is required.

Inputs:

- Vehicle and trailer configuration.
- number of axles.
- unladen vehicle weight.
- cargo weight.
- loaded gross weight.
- length, width, height, and overhang.
- indivisible-load status.
- origin, destination, and route.
- operating-card status.
- requested movement date.

Outputs:

- Permit indicator.
- axle and document checklist.
- possible police escort indicator.
- route and property-liability warning.
- `AUTHORITY_CONFIRMATION_REQUIRED` where thresholds or route conditions are not fully established.

Status:

- Candidate rule. The official service provides a strong permit route, but interaction with police permit categories and detailed road limits requires normalization.

### OMN-NO-ESCORT-PERMIT-01

**Purpose:** Determine whether a load may fall within the official no-police-escort permit route.

Inputs:

- Loaded dimensions and weight.
- vehicle and trailer data.
- route.
- date.

Outputs:

- Potential no-escort permit route when all published conditions are met.
- `AUTHORITY_CONFIRMATION_REQUIRED` before movement.
- escalation to escort or other permit review when outside the published range.

Status:

- Candidate rule. Do not present the no-escort route as unconditional approval.

### OMN-NAQL-01

**Purpose:** Guide transport operators to the official platform used for operating cards and land-transport permit services.

Inputs:

- Operator status.
- vehicle status.
- activity type.
- exceptional-load indicator.

Outputs:

- Account, operating-card, or permit checklist.
- official service route.

Status:

- Candidate workflow rule; no direct integration approved.

### OMN-BROKER-VERIFICATION-01

**Purpose:** Verify customs-clearance provider status and declared customs-point coverage.

Required provider data:

- Legal entity.
- customs-clearance license.
- license validity.
- approved ports, airports, or customs points.
- Bayan user and broker evidence where applicable.
- staff or representative authorization.

Outputs:

- `VERIFIED`, `VERIFIED_WITH_LIMITATIONS`, or pending/expired status.
- customs-point coverage limitations.

Status:

- Strong marketplace seed because Oman Customs publishes clearance-company and licensing information.

### OMN-PERMIT-DISCOVERY-01

**Purpose:** Route a user to the applicable customs permit or government approval category.

Inputs:

- Cargo category.
- import/export/transit role.
- authority or sector indicator.

Outputs:

- Candidate permit categories and official links.
- `AUTHORITY_CONFIRMATION_REQUIRED` when the correct permit depends on product classification or regulated use.

Status:

- Discovery workflow only. The platform must not claim permit applicability from a commercial description alone.

### OMN-POST-ACCEPTANCE-01

**Purpose:** Pre-screen postal and express shipments against Oman Post conditions.

Inputs:

- Product identity and composition.
- postal product or express service.
- customs-declaration requirement.
- packaging quality.
- dangerous/prohibited indicator.
- origin and destination.

Outputs:

- Unacceptable-shipment indicator when a current provider condition clearly applies.
- customs declaration alert.
- packaging alert.
- `CARRIER_CONFIRMATION_REQUIRED` for service or destination uncertainty.

Status:

- Candidate provider rule.

### OMN-POST-PROHIBITED-01

**Purpose:** Flag products listed in the provider's current prohibited-shipment guidance.

Outputs:

- Prohibited or restricted indicator.
- source and review date.
- destination customs warning.

Status:

- Candidate rule. The list and service availability must be reviewed monthly and at shipment time.

## 4. Required Oman Questions

- Is Oman the origin, destination, transit, or domestic movement country?
- Which port, airport, border, city, or customs point is involved?
- What are the vehicle, trailer, axle, cargo, and loaded dimensions/weights?
- Is the load indivisible?
- What route and time are planned?
- Does the operator hold the relevant operating card?
- Is an exceptional-load or police permit already held?
- Is a customs-clearance provider needed, and for which customs point?
- What is the provider license and coverage?
- Is the shipment postal, courier, road, air, ocean, or multimodal?
- Are dangerous, prohibited, chemical, battery, perishable, valuable, or live-item indicators present?

## 5. Current Gaps

- Complete relationship between transport-ministry and police exceptional-load permit routes.
- Official axle-load and general legal dimension tables.
- Route, bridge, tunnel, and escort rules.
- Dangerous-goods national variations and competent-authority contacts by mode.
- Oman Post service-specific exceptions, weights, dimensions, and destination conditions.
- Local airline, ocean-carrier, courier, port, and airport conditions.
- Public automated broker-license status API, if any.

## 6. Production Gate

The Oman pack may support an initial production slice after:

- Permit routes are separated and tested.
- no-escort conditions are encoded with effective dates.
- customs-broker coverage and expiry fields are validated.
- postal rules retain carrier confirmation.
- gaps return uncertainty instead of a definitive result.
