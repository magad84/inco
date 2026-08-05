# AGENTS.md

This file governs Codex and other engineering agents working in `magad84/inco`.

## 1. Read Order

Before making changes, read:

1. `PROJECT_CONTEXT.md`
2. `CURRENT_STATE.md`
3. `README.md`
4. `docs/KNOWLEDGE_ARCHITECTURE.md`
5. `docs/SOURCE_REGISTRY.md`
6. `docs/QUESTION_ARCHITECTURE.md`
7. The specification for the affected module.
8. This file.

If requirements conflict, follow the latest explicit owner approval recorded in the repository. Do not infer approvals from old code, external repositories, or unrelated conversations.

## 2. Roles

- **Mostafa Gad:** Product Owner and final decision maker.
- **ChatGPT:** Strategic product, knowledge architecture, requirements, and governance layer.
- **Codex:** Technical implementation and verification layer.

Codex implements approved scope. It must not invent product strategy, logistics rules, commercial terms, legal positions, visual identity, data sources, or future integrations.

## 3. Current Implementation Gate

The project is currently in knowledge architecture and deterministic specification.

Do not scaffold the production application or select the final technology stack until the first implementation module has:

- Approved input and output schemas.
- traceable rules or formulas.
- uncertainty and error states.
- representative acceptance tests.
- no unresolved safety-critical assumptions.

Low-risk prototypes or isolated algorithm benchmarks require an explicit work package and must not be presented as production implementation.

## 4. Approved Scope

The approved modular direction includes:

- Trade-term review and decision support.
- cargo-nature and dangerous-goods pre-screening.
- country packs for UAE, Saudi Arabia, Egypt, and Oman.
- carrier rules for ocean, air cargo, courier, postal, road, and specialist transport.
- deterministic cargo calculators.
- a future paid multi-SKU container load planner.
- road, bridge, tunnel, truck-restriction, and abnormal-load indicators.
- a future verified customs-broker marketplace.

Each module must remain separable and source-backed.

## 5. Explicitly Unapproved or Deferred

Do not add or imply without explicit approval:

- Generative AI or chatbot functionality.
- A specific AI model or provider.
- HS classification.
- binding tariff, duty, or tax calculation.
- live government integrations.
- automatic legal-document amendment.
- live carrier booking or rate APIs.
- ERP integrations.
- subscription billing.
- team workspaces.
- public APIs.
- final production broker marketplace launch.
- pricing amounts or payment-provider selection.

## 6. Knowledge and Source Rules

- Use only approved sources in `docs/SOURCE_REGISTRY.md` or sources added through the same verification process.
- Prefer official government, international, carrier, postal, port, airport, road, or customs sources.
- Secondary material may support discovery but must not drive executable rules.
- Do not copy protected standards, manuals, carrier publications, or licensed tables into the repository.
- Store source metadata, paraphrased rule logic, and traceability.
- Record effective date, expiry where known, last verified date, next review date, and verification status.
- A source URL is not itself an executable rule.
- Never use AI output as a source of truth.

## 7. Decision and Rule Logic

The product must be rules-first.

- Keep rules separate from UI components.
- Keep business logic testable and versioned.
- Do not hard-code unexplained professional assumptions.
- Separate mathematical calculations from carrier-specific commercial rules.
- Separate cost allocation from risk transfer.
- Preserve uncertainty and missing-information states.
- Do not manufacture a recommendation when required inputs are absent.
- Map every material user-facing warning to a rule ID and source ID.
- Store the applicable rule version with saved results.

## 8. Dangerous-Goods and Special-Cargo Boundary

The cargo module is a pre-screen only.

Do not output unsupported statements such as:

- Cargo is not dangerous.
- Cargo is legally permitted.
- A carrier will accept the shipment.
- A government permit is unnecessary.

When evidence is incomplete, return the approved status and next action, such as:

- Dangerous-goods data required.
- carrier acceptance required.
- authority confirmation required.
- specialist confirmation required.
- insufficient information.

## 9. Carrier and Regulatory Volatility

- Do not assume one universal volumetric divisor.
- Do not assume a carrier rule applies across services, countries, routes, or dates.
- Do not present temporary operational notices as permanent rules.
- Rules that are stale or outside their jurisdiction must not produce definitive output.
- The application must expose source date and confirmation requirements for volatile rules.

## 10. Cargo Calculators

- Normalize units before calculation.
- Validate dimensions, weight, quantity, and unit.
- Preserve package-level data where commercial rules operate per piece.
- Distinguish exact arithmetic from estimates and configurable assumptions.
- A preliminary container estimate must consider both volume and payload.
- Do not equate nominal container volume with usable packing capacity.

## 11. Container Load Planner

- Keep solver implementation behind an internal replaceable interface.
- Do not import an open-source solver before license, dependency, security, and test review.
- Respect dimensions, door opening, permitted rotations, payload, quantity, stackability, and approved physical constraints.
- Expose unallocated items and reasons.
- Expose assumptions, solver version, and warnings.
- A geometric result must not be called a safe loading certificate, securing plan, dangerous-goods approval, carrier acceptance, or route approval.

## 12. Customs-Broker Marketplace

- Distinguish self-declared data from verified data.
- Track license scope, authority, issue date, expiry, coverage, and verification date.
- Do not rank providers as best based only on payment or sponsorship.
- Sponsored visibility must be labeled and separate from operational matching.
- Obtain user consent before sharing case data.
- Share only the minimum selected fields.
- Provider documents require secure production storage and must not be committed to GitHub.

## 13. Data and Privacy

- Collect only data required for the selected workflow.
- Treat transaction, account, provider, and uploaded-document data as private.
- Do not log sensitive inputs without an approved logging policy.
- Do not place credentials, API keys, secrets, customer documents, broker licenses, or production data in the repository.
- Google sign-in must request minimum identity scopes only.
- Authentication and payment must remain separate modules.
- Users must not access another user's cases, reports, provider documents, or payment records.

## 14. Commercial Boundary

The intended progression is:

1. Useful free deterministic review and calculators.
2. Optional Google sign-in for saving and purchasing.
3. Paid professional reports and Container Load Plans.
4. Later credit bundles, business accounts, and provider commercial tools only after approval.

Do not implement pricing amounts, payment providers, subscriptions, credits, taxes, invoices, or marketplace fees before a specific decision approves them.

Critical safety, compliance, and risk warnings must not be hidden to force payment.

## 15. AI Boundary

AI is intentionally undecided.

The core platform must not depend on an LLM. Any future AI integration must be replaceable and isolated behind a defined interface. Model output must never become the sole source for classification, safety, responsibility, compliance, carrier acceptance, or recommendation logic.

## 16. Brand and Public Copy

- Use only approved INCO visual assets, project-specific colors, and identity rules.
- Do not reuse another project's palette or design system.
- Do not invent logos, slogans, certifications, affiliations, endorsements, or authority relationships.
- Avoid unsupported legal, customs, regulatory, safety, carrier, or contractual certainty.
- Public copy must distinguish platform verification from government endorsement.

## 17. Engineering Standards

Apply DRY and YAGNI.

- Prefer the smallest architecture that satisfies the approved module.
- Add dependencies only when justified and reviewed.
- Keep modules cohesive and boundaries explicit.
- Add tests for formulas and rules before or with implementation.
- Validate inputs at system boundaries.
- Use accessible, bilingual-ready UI patterns when frontend work begins.
- Preserve RTL and LTR requirements in architecture and testing.
- Document material architectural decisions.
- Keep external providers behind replaceable adapters.

## 18. Change Control

Owner approval is required before changes to:

- Product purpose or material scope.
- launch countries.
- free versus paid boundaries.
- authentication or payment approach.
- AI usage.
- data retention or privacy behavior.
- public claims or disclaimers.
- product identity.
- paid software or data-license commitments.
- production deployment or infrastructure commitments.
- live integrations.
- public broker-marketplace launch.

Low-risk research, rule normalization, schema refinement, test creation, and implementation details may proceed when consistent with approved requirements and documented.

## 19. Completion Standard

A task is not complete unless:

- It matches approved scope.
- acceptance criteria are met.
- formulas and material rules are tested.
- sources and rule versions are traceable.
- error, stale-source, and uncertainty states are handled.
- security and privacy boundaries are preserved.
- documentation is updated without duplication.
- no unsafe or unsupported certainty is introduced.
