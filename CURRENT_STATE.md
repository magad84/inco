# INCO Current State

**Date:** 2026-08-05  
**Phase:** Product foundation  
**Implementation status:** Not started

## Approved

- INCO is an independent product and repository.
- The core product reviews a proposed trade term for a specific transaction.
- The review covers suitability, named place, delivery point, responsibilities, risk transfer, cost allocation, operational risks, advantages, disadvantages, missing information, and alternatives.
- The product is rules-first and must work without generative AI.
- The AI module is intentionally pending.
- A free review and a paid professional decision pack are approved as the commercial direction.
- Initial monetization direction is pay per report.
- Users should see the free result before registration.
- Google sign-in is planned for saving, resuming, purchasing, and report access.
- Authentication and payment processing remain separate.
- Credit bundles, subscriptions, company accounts, and AI are later-stage options.

## Current Repository State

Foundation documents only:

- `README.md`
- `PROJECT_CONTEXT.md`
- `CURRENT_STATE.md`
- `AGENTS.md`
- `.gitignore`

No application framework, runtime, database, authentication provider, payment gateway, hosting architecture, or AI model has been selected.

## Active Work Package

**WP-01: MVP Decision Logic Definition**

The next work must define:

1. The minimum transaction questionnaire.
2. The trade-term rule schema.
3. Responsibility categories.
4. Risk categories and severity logic.
5. Suitability scoring or rating logic.
6. Named-place validation rules.
7. Alternative-comparison rules.
8. Free-result boundaries.
9. Paid-report structure.
10. Acceptance tests and representative scenarios.

## Required Deliverables Before Coding

- Approved input schema.
- Approved output schema.
- Rules matrix for the supported trade terms.
- Risk and advantage taxonomy.
- Decision logic specification.
- Free versus paid output matrix.
- Initial test-case set.
- Product disclaimer and uncertainty rules.

## Explicitly Not Started

- Frontend.
- Backend.
- Database.
- Google authentication.
- Payment integration.
- PDF generation.
- AI model evaluation.
- Deployment.

## Next Decision Gate

Codex implementation should begin only after WP-01 provides enough deterministic rules and acceptance criteria to avoid embedding assumptions directly in code.

## Change Log

### 2026-08-05

- Repository initialized.
- Product purpose narrowed to trade-term review and decision support.
- AI module deferred.
- Free review, Google sign-in direction, and paid Trade Decision Pack recorded.
