# INCO Neom Static Deployment Runbook v1.0

**Target URL:** `https://mostafagad.net/inco`  
**Hosting:** Neom Cloud cPanel  
**Target directory:** `public_html/inco`  
**Runtime:** static browser application

## Deployment Boundary

The first public release contains only:

- HTML, CSS, and browser JavaScript;
- the deterministic browser engine bundle;
- approved public JSON knowledge packs;
- release provenance metadata.

It requires no Node.js, npm, Docker, process manager, reverse proxy, database, AI provider, Redis, or Qdrant on Neom Cloud.

## Approved Artifact

Use only the GitHub Actions artifact named:

```text
inco-static-public
```

It is generated after:

1. TypeScript build;
2. unit, integration, E2E, UAT, UI-governance, and security tests;
3. static browser bundling;
4. JSON validation;
5. forbidden-content scan.

Expected files:

```text
index.html
styles.css
app.js
engine.js
release.json
knowledge/
  launch-corridors.v0.1.json
  uae.v0.1.json
  ksa.v0.1.json
  egypt.v0.1.json
  oman.v0.1.json
```

## Pre-Deployment Gate

- Domain Core workflow is green for the selected commit.
- CodeQL is green for the selected commit.
- Artifact inspection confirms the expected file list.
- No `INTERNAL-TRADE-001`, private source, licensed text, credential, secret, or password marker exists.
- Canonical and structured-data URL are `https://mostafagad.net/inco`.
- MyGPT link remains disabled until its separate audit passes.
- Manual mobile, desktop, Arabic RTL, English LTR, and accessibility review is complete.

## Upload Procedure

1. Download and extract `inco-static-public`.
2. In cPanel File Manager, create `public_html/inco` when absent.
3. Back up any existing `public_html/inco` directory to a timestamped rollback folder.
4. Upload the artifact contents directly into `public_html/inco`, not into an extra nested directory.
5. Confirm file permissions are normally `644` for files and `755` for directories.
6. Do not upload repository source, `.git`, environment files, test fixtures, internal documents, or build tools.

## Live Validation

Open `https://mostafagad.net/inco` and verify:

- HTTP 200 and valid HTTPS;
- CSS and JavaScript load without 404 errors;
- all five knowledge assets load from the same origin;
- English and Arabic switching works;
- RTL alignment works;
- a China-to-UAE general ocean case returns a controlled result;
- a damaged-battery air case remains blocked or confirmation-controlled;
- an incomplete chemical case does not produce a safe-to-proceed result;
- no network request sends the shipment payload to an external service;
- feedback and result-copy functions remain local;
- MyGPT remains gated until final approval.

## Cache and Updates

For the first release, upload all files from the same artifact together. Do not mix `engine.js` or knowledge files from different releases. After replacement, clear cPanel/server cache where applicable and perform a hard browser refresh.

`release.json` identifies the generated release. Retain the previous complete artifact for rollback.

## Rollback

1. Rename the failed `public_html/inco` directory.
2. Restore the previous known-good directory or artifact.
3. Verify the main URL, engine, and knowledge assets.
4. Record the failed commit, artifact, observed issue, and corrective action.
5. Do not restore public traffic to an unverified mixed release.

## Security and Privacy Controls

- Shipment inputs remain in the visitor’s browser.
- Do not add third-party analytics that capture descriptions or shipment facts.
- Do not add forms that submit the feedback fields until the privacy-safe external form is separately approved.
- No public rule or source reference constitutes live customs, authority, gateway, or carrier acceptance.
- Security headers should be configured at the hosting level where Neom permits, without breaking same-origin JavaScript and JSON loading.

## Future Architecture Trigger

Move away from static hosting only when an approved feature requires private rule execution, document uploads, user accounts, saved cases, server-side AI, live government/carrier integrations, or controlled paid entitlements.
