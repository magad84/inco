# Security Policy

## Supported Scope

INCO is currently an internal-functional-testing and open-core showcase project. No public production service, user account system, payment system, or live carrier/government integration is represented as supported production infrastructure.

Security reports are still welcome for:

- exposed secrets or credentials;
- unsafe repository content;
- dependency or build-chain vulnerabilities;
- cross-origin, request-handling, or local console weaknesses;
- rule-engine behavior that could create unsupported definitive output;
- accidental exposure of protected source material or personal data.

## Reporting

Do not publish an exploitable issue, secret, personal data, or protected source content in a public issue.

Use GitHub's private security advisory mechanism for this repository when available. Include:

- affected file or component;
- reproduction steps;
- expected and actual behavior;
- potential impact;
- suggested mitigation, when known.

## Current Boundaries

The browser console is for internal functional testing. It does not provide a production security boundary and must not be exposed publicly with sensitive data without completing the production-readiness controls documented in:

`docs/PRODUCTION_READINESS_ARCHITECTURE_SECURITY_GAP_ANALYSIS_v1.0.md`

## Secrets and Data

Never commit:

- API keys, tokens, passwords, private certificates, or connection strings;
- customer shipment, identity, payment, or counterparty data;
- protected or licensed source files;
- private company rule packs;
- production logs containing personal or commercial information.
