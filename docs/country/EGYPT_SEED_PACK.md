# INCO Egypt Country Compliance Seed Pack

**Version:** 0.1  
**Date:** 2026-08-05  
**Status:** Research seed; not production-ready

## 1. Supported Transaction Roles

- Origin.
- destination.
- transit where a verified procedure is available.
- domestic movement only for supported cargo and authority rules.

## 2. Current Authority Map

- Egyptian Customs Authority: customs procedures, customs-clearance office registration, official notices, and advance cargo information.
- Egyptian Environmental Affairs Agency: hazardous-waste and hazardous-material activity licensing and current enforcement direction.
- Roads, bridges, traffic, ports, airports, postal, and local authorities: research incomplete for executable rules.

## 3. Verified Rule Candidates

### EGY-CUSTOMS-CLEARANCE-OFFICE-01

**Purpose:** Define the minimum verification evidence for a customs-clearance office registered on the future INCO marketplace.

Required provider data:

- Legal name and commercial registration.
- customs-clearance activity shown in registration.
- tax registration.
- customs-issued license.
- license issue and expiry dates.
- approved representatives or delegates.
- service locations and customs points.

Outputs:

- `VERIFIED`, `VERIFIED_WITH_LIMITATIONS`, `DOCUMENTS_PENDING`, or `EXPIRED`.
- explicit distinction between official evidence and provider-declared coverage.

Status:

- Strong onboarding candidate. A public automated license-status route remains to be verified.

### EGY-ACI-PREPARATION-01

**Purpose:** Identify when the transaction may require current advance cargo information preparation.

Inputs:

- Import/export/transit role.
- transport mode.
- planned shipment date.
- seller/exporter and importer context.
- relevant shipment-document status.

Outputs:

- Current official-process check.
- missing-information checklist.
- `AUTHORITY_CONFIRMATION_REQUIRED` where mode rollout, timing, or current notice is unclear.

Status:

- Candidate workflow rule only. The official portal and current notices must be checked at transaction time.

### EGY-HAZARDOUS-ACTIVITY-01

**Purpose:** Flag cargo or waste activities that may require environmental licensing or authority confirmation.

Inputs:

- Material or waste status.
- hazardous indicator.
- origin and destination activity.
- transport, storage, treatment, disposal, import, or export context.
- carrier or operator license evidence.

Outputs:

- `AUTHORITY_CONFIRMATION_REQUIRED`.
- `SPECIALIST_CONFIRMATION_REQUIRED` where classification is incomplete.
- environmental licensing and current authority-source route.

Status:

- Candidate pre-screen rule. It is not a dangerous-goods classification or universal permit determination.

### EGY-HAZARDOUS-WASTE-TRANSPORT-01

**Purpose:** Identify a high-risk case involving hazardous-waste transport and require current licensed-provider evidence.

Inputs:

- Waste status.
- hazard data.
- transporter identity and license.
- origin, destination, and treatment/disposal facility.
- planned route and dates.

Outputs:

- Critical licensing and specialist-confirmation warning.
- provider-license evidence requirement.
- prohibition on presenting the movement as ready without authority confirmation.

Status:

- Candidate safety workflow based on current environmental authority direction.

## 4. Blocked Rule Areas

The following must not produce definitive outputs until official current sources are verified:

### Roads, Bridges, Tunnels, and Exceptional Loads

Missing:

- Competent authority and application route.
- general legal dimension and weight limits.
- axle-load limits.
- route and bridge review.
- traffic or escort approval.
- port-to-road special movement requirements.

Required system behavior:

- Return `SOURCE_UNAVAILABLE` or `AUTHORITY_CONFIRMATION_REQUIRED`.
- Request dimensions, weights, axles, route, and movement date for later specialist review.
- Do not infer Egyptian limits from another country.

### Egypt Post

Missing:

- Verified official prohibited and restricted item list.
- international parcel and express weight and dimension limits.
- dangerous-goods acceptance policy.
- service and destination variations.

Required system behavior:

- Do not offer Egypt Post acceptance guidance beyond a general instruction to confirm with the provider and destination authority.

### Public Broker License Status

Missing:

- Verified public status endpoint for current customs-clearance license validation.

Required system behavior:

- Support controlled manual verification using official evidence until an authority-supported online route is confirmed.

## 5. Required Egypt Questions

- Is Egypt the origin, destination, transit point, or domestic movement country?
- What transport mode, port, airport, customs point, or location is involved?
- What is the planned shipment date?
- Is the cargo ordinary goods, hazardous material, waste, hazardous waste, chemical, medicine, food, equipment, or another special category?
- Is current technical and safety information available?
- Is an advance cargo information process relevant to the current mode and transaction?
- Is a customs-clearance provider required?
- What official license evidence does the provider hold?
- For road movement, what are the vehicle, axles, dimensions, weight, route, and date?
- Is current authority or specialist confirmation already available?

## 6. Current Gaps

- Official exceptional-load and road/bridge/tunnel requirements.
- official postal prohibitions and service limits.
- current public broker-license verification route.
- dangerous-goods national variations by sea, air, road, courier, and postal mode.
- current carrier, port, airport, and local authority conditions.
- product-specific permits and restrictions beyond the initial environmental seed.

## 7. Production Gate

The Egypt pack may support a narrow initial production slice only after:

- Customs provider verification fields are tested.
- advance cargo information guidance is effective-dated and clearly conditional.
- hazardous-material and waste outputs remain pre-screen and authority-confirmation workflows.
- unsupported road and postal modules are blocked.
- official-source gaps are visible to the user.
