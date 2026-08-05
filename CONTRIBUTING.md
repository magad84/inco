# Contributing to INCO

INCO welcomes contributions that improve deterministic trade and logistics decision support while preserving traceability, uncertainty controls, and professional boundaries.

## Contribution Types

Useful contributions include:

- bug fixes and test coverage;
- schema improvements;
- bilingual terminology improvements;
- representative sample rules and fixtures;
- source-governance improvements;
- accessibility improvements;
- documentation and onboarding;
- conservative handling of missing, stale, or conflicting information.

## Source Rules

Every factual rule contribution must identify:

- authority or provider;
- official source URL where publicly available;
- country and scope;
- what the source supports;
- what the source does not support;
- verification date;
- review date;
- expected fallback when the source is unavailable or stale.

Do not submit scraped commercial databases, copied protected tables, extended source passages, customer documents, or content without clear usage rights.

## Decision-Safety Rules

A contribution must not:

- claim carrier acceptance without current shipment-specific evidence;
- claim customs or authority approval;
- present DG pre-screening as final classification;
- infer gateway capability from a code or name alone;
- convert a volatile source into permanent acceptance;
- hide missing information;
- weaken enhanced-compliance controls;
- expose protected source content or personal/commercial data.

## Code and Test Expectations

- Keep the deterministic core independent from presentation frameworks.
- Use strict TypeScript.
- Add tests for positive, negative, missing-data, stale-source, and contradiction behavior.
- Preserve bilingual output where the affected module supports it.
- Keep public sample data clearly separated from protected operational knowledge.
- Ensure CI passes before requesting review.

## Licensing Note

The repository is public, but the final open-source license decision remains pending owner approval. Contributions should not assume that public visibility alone grants unrestricted reuse rights.
