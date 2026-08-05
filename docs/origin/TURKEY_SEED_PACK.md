# Turkey Origin Country Seed Pack

**Version:** 0.1  
**Status:** Research seed; not production-ready

## Scope

Covers export-origin questions for shipments moving from Türkiye to the approved destination markets: UAE, Saudi Arabia, Egypt, and Oman.

## Core Authorities and Evidence Areas

- Customs and export declaration authority.
- Trade ministry export controls and restricted goods.
- Certificate-of-origin and preferential-origin evidence.
- Product-specific export licensing.
- Dangerous-goods transport evidence by mode.
- Postal and express-carrier restrictions.
- Port, airport, free-zone, and inland terminal capability.

## Required Transaction Inputs

- Exporter legal name and tax/customs identity.
- Product description and HS candidate.
- Origin status and certificate requirement.
- Export-control or permit indicators.
- Dangerous-goods or special-cargo indicators.
- Selected origin gateway.
- Selected carrier and service.
- Destination country and gateway.
- Transit countries and transfer points.

## Initial Gateway Candidates

### Maritime

- Ambarlı / Istanbul area.
- Mersin.
- İzmir / Aliağa.
- Gemlik.
- İskenderun.

### Air Cargo

- Istanbul Airport.
- Istanbul Sabiha Gökçen.
- Ankara Esenboğa.
- İzmir Adnan Menderes.

Gateway inclusion is not proof of cargo capability. Each gateway requires an independent verified record.

## Rule States

- `verified_current`
- `confirmation_required`
- `source_unavailable`
- `stale_review_required`
- `permit_or_license_required`
- `carrier_acceptance_required`

## Priority Research Backlog

1. Official export declaration workflow.
2. Restricted and licensed export categories.
3. Dangerous-goods competent-authority references by mode.
4. Official postal prohibited and restricted item rules.
5. Gateway operator sources and cargo-capability evidence.
6. Carrier service availability to the four launch markets.
7. Certificate-of-origin and preferential-treatment evidence.

## Safety Boundary

INCO must not state that a Turkish export is permitted, carrier-accepted, or customs-ready without verified product, exporter, route, and current authority evidence.
