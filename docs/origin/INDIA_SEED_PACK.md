# INCO India Origin Seed Pack

**Version:** 0.1  
**Status:** Research seed; not executable compliance advice  
**Last reviewed:** 2026-08-05

## Scope

India as a priority origin market for shipments to the UAE, Saudi Arabia, Egypt, and Oman.

## Authoritative Seed Sources

| Source ID | Authority | Scope | URL | Review Rule |
|---|---|---|---|---|
| IND-CUS-001 | Indian Customs / ICEGATE | National customs trade portal and filing services | https://www.icegate.gov.in/ | Monthly and before transaction use |
| IND-CUS-002 | Central Board of Indirect Taxes and Customs | Customs rules, notifications, and procedures | https://www.cbic.gov.in/ | Quarterly and on notification |
| IND-TRADE-001 | Directorate General of Foreign Trade | Export licensing and trade-policy controls | https://www.dgft.gov.in/ | Monthly and before product-level guidance |

## Confirmed Structural Rules

- Customs filing and status services are routed through ICEGATE and related customs systems.
- Export eligibility may depend on current foreign-trade policy, product controls, licensing, and other government-agency requirements.
- Gateway, customs location, and filing mode must be represented explicitly rather than inferred from country alone.
- Operational notices can change filing methods or system requirements; they require effective-date tracking.

## Required User Inputs

- Exporter legal name and IEC status.
- Product description, HS candidate if supplied by the user, and intended end use.
- DGFT licensing or restriction indicators.
- Origin city and manufacturing location.
- Intended customs location and gateway.
- Transport mode.
- Carrier and service.
- Destination country and gateway.
- Dangerous-goods, temperature-control, food, plant, animal, pharmaceutical, or other-agency indicators.
- Invoice, packing-list, origin-evidence, and shipping-bill preparation status.

## Gateway Seed Candidates

The following are discovery priorities only. Capability and current service availability require official and carrier verification.

### Sea

- Jawaharlal Nehru Port / Nhava Sheva.
- Mundra.
- Chennai.
- Kandla / Deendayal.
- Visakhapatnam.
- Cochin.
- Kolkata / Haldia.

### Air Cargo

- Delhi.
- Mumbai.
- Bengaluru.
- Chennai.
- Hyderabad.
- Kolkata.
- Ahmedabad.

## Output States

- `IEC_OR_EXPORTER_STATUS_REQUIRED`
- `DGFT_POLICY_CONFIRMATION_REQUIRED`
- `OTHER_GOVERNMENT_AGENCY_CONFIRMATION_REQUIRED`
- `CUSTOMS_LOCATION_CONFIRMATION_REQUIRED`
- `CARRIER_ACCEPTANCE_REQUIRED`
- `CURRENT_ICEGATE_NOTICE_RECHECK_REQUIRED`
- `SOURCE_UNAVAILABLE`

## Research Gaps

- Current export filing sequence and message/API requirements by user type.
- Gateway codes and customs-location mapping.
- Product-specific DGFT and other-agency controls.
- Current certificate-of-origin issuance routes.
- Carrier-specific acceptance, dimensional, and dangerous-goods rules by route.
- Service-specific postal and courier restrictions.

## Safety Boundary

This pack must not state that a product is exportable, unrestricted, licensed, non-dangerous, or carrier-accepted without current product-level verification.
