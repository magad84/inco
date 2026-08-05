# ADR-003 — Free and Official Source First

**Status:** Approved  
**Date:** 2026-08-05  
**Owner:** Mostafa Gad

## Decision

INCO will continue the current research, knowledge-engineering, rules, testing, and deterministic implementation stages using only free-access sources, free/open-source software, and official public guidance currently available.

No paid database, paid API, paid data feed, paid software license, paid content license, or commercial research subscription is approved at this stage.

## Operating Rules

1. Prefer official government, customs, regulator, port, airport, postal, carrier, and transport-provider sources that are publicly accessible.
2. Use open standards and open-source libraries where suitable and legally compatible.
3. Use reputable free secondary sources only for discovery; executable rules must still be traced to an authoritative source or remain conditional.
4. Do not weaken uncertainty controls to compensate for missing paid data.
5. Where a live schedule, rate, capacity, tariff, acceptance decision, or restricted dataset is unavailable for free, return one of:
   - `confirmation_required`
   - `source_unavailable`
   - `stale_review_required`
   - `enhanced_compliance_required`
6. Do not scrape, reproduce, or redistribute protected content in breach of access terms or licensing restrictions.
7. Record source URL, source type, verification date, review date, supported rule scope, and limitations.
8. Any proposal involving paid access must be escalated to the owner before commitment.

## Product Impact

The platform may provide professional candidate guidance, calculations, risk identification, missing-information checks, and next-action recommendations without paid data.

It must not present the following as confirmed where no free current authoritative source exists:

- Live freight rates.
- Live capacity or schedules.
- Final carrier acceptance.
- Government approval.
- Final dangerous-goods classification.
- Transaction-specific legal or sanctions clearance.

## Architecture Impact

- Deterministic domain logic remains independent of paid services.
- Source adapters must be replaceable.
- Paid integrations, if approved later, must enhance coverage rather than become mandatory for the core product.
- The MVP must remain operable using versioned local knowledge records and controlled confirmation states.

## Escalation Trigger

Return to the owner only when a material requirement cannot be delivered responsibly without paid access, or when a paid source would materially change scope, accuracy, licensing exposure, or commercial design.
