# ADR-007: Static Browser Deployment on Neom Cloud

**Status:** Approved for first public release  
**Date:** 2026-08-06

## Context

The active Neom Cloud account is a cPanel-managed VPS hosting plan. Terminal and SSH access are available, but the account environment currently does not provide Node.js or npm. Python 3.6.8 and PHP 8.1.33 are available.

The approved first public INCO service is:

- free and limited;
- anonymous;
- without accounts, payments, uploads, saved cases, or generative AI;
- based on a deterministic rules-first engine;
- intended to live as a page inside MostafaGad.net.

The public repository is open source, and the first-release knowledge pack is intentionally limited to public/sample governed data. Therefore, server-side secrecy is not required for the first-release deterministic logic.

## Decision

The first public INCO release will be deployed as a static browser application under:

```text
https://mostafagad.net/inco
```

The TypeScript deterministic engine will be bundled during the GitHub build process and executed in the visitor's browser. Neom Cloud will serve the generated static HTML, CSS, JavaScript, and approved public data files.

No Node.js runtime, long-running server process, Docker container, database, AI provider, Redis, Qdrant, or external application server is required for the first release.

The optional subdomain `inco.mostafagad.net` remains reserved and is not the primary public entry point. It may later be used for an API, redirect, isolated application runtime, or future advanced service.

## Rationale

This decision:

- keeps INCO inside MostafaGad.net and strengthens the main site's traffic and authority;
- works with the confirmed Neom Cloud environment;
- avoids consuming Hostinger or AI resources for a free service;
- removes server-runtime and process-management complexity;
- provides immediate user-side privacy because shipment inputs do not need to leave the browser;
- preserves the deterministic engine as the source of truth;
- supports low-cost hosting and simple rollback through static file replacement.

## Required Controls

- Bundle only approved public rules and source references.
- Do not include licensed, private, customer, credential, or protected knowledge files.
- Do not send shipment inputs to analytics, external APIs, MyGPT, or third parties.
- Keep the professional boundary and uncertainty states visible.
- Keep MyGPT as an optional external conversational companion only; no automatic data transfer.
- Use a privacy-respecting feedback form that does not capture shipment details.
- Generate production assets through CI and retain release provenance.
- Add browser compatibility, accessibility, and static-build smoke tests.

## Consequences

### Benefits

- No application server cost.
- No Node.js requirement on Neom Cloud.
- No database or authentication burden.
- Faster page response and simpler deployment.
- Direct integration into the main website.

### Limitations

- Public rules and logic delivered to the browser are inspectable.
- Heavy datasets must remain small and curated.
- Live integrations, protected knowledge, server-side AI, accounts, saved cases, and paid services require a future server architecture.
- Health and readiness endpoints from the internal Node server are not part of the static first release; deployment validation will use HTTP and asset smoke checks instead.

## Future Trigger for Reassessment

Reassess this decision only when one or more of the following becomes approved and necessary:

- private or licensed rule execution;
- user accounts or saved cases;
- document uploads;
- server-side AI;
- live carrier or government integrations;
- paid professional services requiring controlled entitlements;
- usage volume that requires a dedicated API tier.
