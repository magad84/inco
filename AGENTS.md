# AGENTS.md

This file governs Codex and other engineering agents working in `magad84/inco`.

## 1. Read Order

Before making changes, read:

1. `PROJECT_CONTEXT.md`
2. `CURRENT_STATE.md`
3. `README.md`
4. This file

If requirements conflict, follow the latest explicit owner approval recorded in the repository. Do not infer approvals from old code, external repositories, or unrelated conversations.

## 2. Roles

- **Mostafa Gad:** Product Owner and final decision maker.
- **ChatGPT:** Strategic product, architecture, requirements, and governance layer.
- **Codex:** Technical implementation and verification layer.

Codex implements approved scope. It must not invent product strategy, commercial rules, legal positions, visual identity, data sources, or future integrations.

## 3. Current Implementation Gate

The project is currently in product-definition phase.

Do not scaffold an application or select a technology stack until the active work package in `CURRENT_STATE.md` has produced sufficiently clear inputs, outputs, rules, and acceptance criteria.

## 4. Scope Rules

The approved core is a structured trade-term review and decision-support workflow.

Do not add or imply:

- Generative AI.
- Chatbot functionality.
- A specific AI model or provider.
- HS classification.
- Tariff, duty, or tax calculation.
- Government integrations.
- Legal-document automation.
- ERP integrations.
- Subscription billing.
- Team workspaces.
- Public APIs.

These capabilities require explicit owner approval.

## 5. Decision Logic

The product must be rules-first.

- Keep business rules separate from UI components.
- Keep risk, responsibility, and comparison logic testable.
- Do not hard-code unexplained professional assumptions.
- Separate cost allocation from risk transfer.
- Preserve uncertainty and missing-information states.
- Do not manufacture a recommendation when required inputs are absent.
- Make rule versions traceable.

## 6. Data and Privacy

- Collect only data required for the transaction review.
- Treat transaction and account data as private.
- Do not log sensitive user inputs without an approved logging policy.
- Do not place credentials, API keys, secrets, or production data in the repository.
- Google sign-in must request minimum identity scopes only.
- Authentication and payment must remain separate modules.
- Users must not gain access to another user's cases or reports.

## 7. Commercial Boundary

The intended progression is:

1. Free on-screen review.
2. Optional Google sign-in for saving and purchasing.
3. Paid Trade Decision Pack on a pay-per-report basis.
4. Later credit bundles or business accounts only after approval.

Do not implement pricing amounts, payment providers, subscriptions, credits, taxes, or invoices before a specific decision record approves them.

## 8. AI Boundary

AI is intentionally undecided.

The core application must not depend on an LLM. Any future AI integration must be replaceable and isolated behind a defined interface. Model output must never become the sole source for responsibility, risk, or recommendation logic.

## 9. Brand and Public Copy

- Use only approved INCO visual assets and project-specific colors.
- Do not reuse another project's palette or design system.
- Do not invent logos, slogans, endorsements, certifications, or affiliations.
- Keep public wording professional and evidence-based.
- Avoid unsupported legal, customs, regulatory, or contractual certainty.

## 10. Engineering Standards

Apply DRY and YAGNI.

- Prefer the smallest architecture that satisfies approved requirements.
- Add dependencies only when justified.
- Keep modules cohesive and boundaries explicit.
- Add tests for business rules before or with implementation.
- Validate inputs at system boundaries.
- Use accessible, bilingual-ready UI patterns when frontend work begins.
- Preserve RTL and LTR requirements in architecture and testing.
- Document material architectural decisions.

## 11. Change Control

Owner approval is required before changes to:

- Product purpose or scope.
- Free versus paid boundaries.
- Authentication or payment approach.
- AI usage.
- Data retention or privacy behavior.
- Public claims or disclaimers.
- Product identity.
- Deployment or infrastructure commitments.
- Integrations.

Low-risk implementation details may be selected when consistent with approved requirements and documented in the relevant pull request or decision record.

## 12. Completion Standard

A task is not complete unless:

- It matches approved scope.
- Acceptance criteria are met.
- Tests cover material decision logic.
- Error and uncertainty states are handled.
- Security and privacy boundaries are preserved.
- Documentation is updated without duplication.
