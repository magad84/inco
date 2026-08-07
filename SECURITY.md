# Security Policy

## Supported Scope

INCO V1 is being prepared as a real, free, anonymous static browser service with a deterministic decision engine and governed public knowledge assets. It is not an account-based SaaS platform and does not include production payments, saved shipment cases, document uploads, live carrier/government integrations, or persistent customer case storage.

The public V1 browser architecture is designed so shipment-case values are evaluated locally in the browser and are not intentionally sent to a remote INCO evaluation API or persisted in a customer database.

Security reports are welcome for:

- exposed secrets or credentials;
- unsafe repository content;
- dependency or build-chain vulnerabilities;
- cross-origin or browser-runtime weaknesses;
- rule-engine behavior that could create unsupported definitive output;
- accidental shipment-data persistence or transmission;
- accidental exposure of protected source material or personal data;
- public-build leakage of internal, licensed, private, credential, or secret material;
- unsafe MyGPT link behavior or unexpected data transfer.

## Reporting

Do not publish an exploitable issue, secret, personal data, shipment data, confidential commercial information, or protected source content in a public issue.

Use GitHub's private security advisory mechanism for this repository when available. Include:

- affected file or component;
- reproduction steps;
- expected and actual behavior;
- potential impact;
- suggested mitigation, when known.

## Current V1 Boundary

The approved first public release is limited to:

- static HTML, CSS, JavaScript, the deterministic browser bundle, and governed same-origin JSON knowledge assets;
- no registration or authentication;
- no payments;
- no saved cases;
- no uploads;
- no live booking, rate, capacity, schedule, cut-off, carrier-acceptance, customs, or authority integration;
- no AI dependency for the deterministic result.

Development/internal HTTP endpoints and local testing utilities are not part of the approved public runtime and must not be exposed as production case-processing services.

## Secrets and Data

Never commit:

- API keys, tokens, passwords, private certificates, or connection strings;
- customer shipment, identity, payment, or counterparty data;
- protected or licensed source files;
- private company rule packs;
- production logs containing personal or commercial information.

The public build must continue to exclude internal/private/licensed/credential content and protected source text.

## Browser Data Controls

Before release, verify that shipment and result values are not written to:

- `localStorage`;
- `sessionStorage`;
- IndexedDB;
- cookies;
- URL query strings or fragments;
- analytics or tracking payloads;
- third-party scripts or widgets.

Clipboard actions must occur only after explicit user interaction.

The MyGPT link must use the approved fixed URL only and must not encode shipment facts, result content, personal data, confidential data, or browser-storage values.

## Hosting and Privacy

The absence of persistent INCO case storage does not imply that ordinary web hosting processes no technical request metadata. Production launch review must confirm the actual Neom Cloud / parent-site server-log, security-log, analytics, retention, and access configuration and reconcile it with the public Privacy Notice.

See:

- `docs/INCO_PRIVACY_NOTICE_DRAFT_v1.0.md`
- `docs/INCO_TERMS_OF_USE_DRAFT_v1.0.md`
- `docs/INCO_PRE_CODEX_REVIEW_DEFECT_AND_IMPROVEMENT_REGISTER_v1.0.md`
- `docs/PRODUCTION_READINESS_ARCHITECTURE_SECURITY_GAP_ANALYSIS_v1.0.md`
