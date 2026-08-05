# INCO UAE Country Compliance Seed Pack

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Research seed; not production-ready  
**Coverage:** Federal UAE, Dubai, and initial Abu Dhabi sources

## 1. Supported Transaction Roles

- Origin.
- destination.
- transit.
- domestic road movement where the selected emirate is supported.

## 2. Current Authority Map

### Federal

- Federal customs authority: customs law, procedures, and national customs resources.
- Federal and local customs administrations: customs-broker licensing and operational administration.

### Dubai

- Roads and Transport Authority: special-load permits, truck-road and time restrictions, and operational notices.

### Abu Dhabi

- Abu Dhabi Mobility / Integrated Transport Centre: commercial freight transport permits, Asateel, vehicle tracking requirements, and heavy-vehicle movement restrictions.

### Carrier and Postal

- Emirates Post: dangerous, prohibited, and restricted postal items.
- Etihad Cargo: carrier-specific dangerous-goods acceptance workflow.
- Other carriers require separate provider/service records.

## 3. Verified Rule Candidates

### UAE-DXB-SPECIAL-LOAD-01

**Purpose:** Identify when a Dubai large or special load permit review may be required.

Inputs:

- Loaded gross weight.
- overall length.
- width.
- height from road level.
- vehicle and trailer type.
- origin and destination.
- intended route and movement time.

Output:

- `AUTHORITY_CONFIRMATION_REQUIRED` when the source thresholds or special-load conditions are met.
- permit route and document checklist.
- route, bridge, tunnel, and time-window confirmation.

Status:

- Candidate rule. Threshold data must be transcribed into a controlled rules record and reverified before implementation.

### UAE-DXB-TRUCK-RESTRICTION-01

**Purpose:** Check whether a planned truck movement intersects a restricted road or time window in Dubai.

Inputs:

- Vehicle category.
- route.
- date and time.
- permit status.

Output:

- Restriction indicator.
- permit indicator.
- current operational-notice check.

Status:

- Candidate rule. Temporary notices must override only within their effective period.

### UAE-AD-HEAVY-TIME-01

**Purpose:** Flag current restricted movement hours for heavy vehicles on Abu Dhabi city roads.

Inputs:

- Heavy vehicle indicator.
- route location.
- movement date and time.

Output:

- Time-window restriction indicator.
- effective-date and source note.
- instruction to check for later updates and exemptions.

Current seed source:

- Abu Dhabi Mobility notice effective 27 January 2025.

Status:

- Candidate operational rule. Must be rechecked at transaction time.

### UAE-AD-COMMERCIAL-PERMIT-01

**Purpose:** Identify Abu Dhabi commercial freight operator and vehicle permit requirements.

Inputs:

- Operator jurisdiction.
- freight activity.
- vehicle registration jurisdiction.
- tracking-device status.
- operator, vehicle, and driver permit status.

Output:

- Permit or registration checklist.
- Asateel route.
- `AUTHORITY_CONFIRMATION_REQUIRED` for incomplete permit data.

Status:

- Candidate rule. Exact applicability and exemptions require regulation-level review.

### UAE-POST-CARGO-01

**Purpose:** Pre-screen Emirates Post shipments for prohibited, dangerous, or restricted cargo indicators.

Inputs:

- Product and composition.
- service.
- origin and destination.
- package details.
- dangerous-goods indicators.

Output:

- `CARRIER_CONFIRMATION_REQUIRED` for conditional or unclear items.
- `POSSIBLE_DANGEROUS_GOODS` when triggered.
- prohibition indicator only when the current official provider source clearly applies.

Status:

- Candidate provider rule. Destination-country restrictions remain separate.

### UAE-CUSTOMS-BROKER-01

**Purpose:** Verify that a broker profile is linked to an appropriate customs-clearance license and local administration.

Required provider data:

- Legal entity.
- license number.
- licensing customs administration.
- licensed activity.
- customs-point coverage.
- issue and expiry date.
- approved representatives where applicable.

Output:

- `VERIFIED`, `VERIFIED_WITH_LIMITATIONS`, or a pending/expired status.

Status:

- Framework candidate. Public verification routes by emirate remain a research task.

## 4. Required UAE Questions

- Which emirate controls the origin, destination, or road movement?
- Which port, airport, border, free zone, or city is involved?
- Is the movement domestic, import, export, or transit?
- What is the transport mode?
- What are the loaded vehicle dimensions and weights?
- What route and time are planned?
- Is the operator licensed in the relevant emirate?
- Is a commercial freight, vehicle, driver, special-load, or road-time permit already held?
- Is the shipment postal, courier, air cargo, ocean, or road?
- Are dangerous or restricted cargo indicators present?
- Is a customs-clearance provider required, and for which customs point?

## 5. Current Gaps

- Abu Dhabi abnormal-load thresholds and permit workflow beyond commercial transport and time restrictions.
- Sharjah and other emirate road, abnormal-load, and truck-time rules.
- Public customs-broker license verification by emirate.
- Current airline, ocean-carrier, courier, and local-service conditions across the UAE.
- Federal and emirate dangerous-goods variations by transport mode.
- Detailed axle, bridge, and tunnel restrictions.

No definitive output may be produced for these gaps.

## 6. Production Gate

The UAE pack may support an initial production slice only after:

- Dubai special-load thresholds are encoded and tested.
- Abu Dhabi time rules are effective-dated and tested.
- local jurisdiction selection is mandatory.
- stale operational notices are blocked.
- postal and carrier rules retain provider confirmation.
- the unsupported-emirate state is implemented.
