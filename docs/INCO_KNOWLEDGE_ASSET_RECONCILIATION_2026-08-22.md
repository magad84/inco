# INCO Knowledge Asset Reconciliation — 2026-08-22

## Outcome

The repository already contains the required product knowledge and executable
rules. No new research, replacement dataset or broad schema migration was
needed. `knowledge/asset-manifest.v1.0.json` now records the authoritative reuse
and archive decisions in a testable form.

## Inventory and decision

| Classification | Assets | Decision |
| --- | --- | --- |
| PRODUCTION KNOWLEDGE | Launch corridors plus UAE, KSA, Egypt and Oman destination-rule packs copied by `scripts/build-public.mjs` | REUSE |
| REFERENCE-SOURCE DATA | Carrier services, gateways, product rules, source records, trade-term records, verification ledger and source normalization | REUSE |
| RESEARCH EVIDENCE | Source registry, country/origin seed documentation and traceability matrices | REUSE |
| ARCHIVE/SUPERSEDED | Initial monolithic carrier and gateway research-seed registries | ARCHIVE IN PLACE |

## Runtime reconciliation

- The static public allowlist remains exactly five governed files. No internal
  source record or historical seed was exposed.
- The domain core already consumes the launch corridor and country-rule packs;
  the new manifest test proves that those inputs remain aligned with the build.
- Existing source status, review cadence, uncertainty, stale-source and
  confirmation-required behavior remains unchanged.
- Initial `knowledge/carriers.v0.1.json` and `knowledge/gateways.v0.1.json` files
  have no current runtime or test consumer. They remain in Git for provenance
  instead of being deleted or treated as current.
- No user, shipment, credential, payment or other private data was introduced.

## Promotion rule

Adding another dataset to the public product requires an explicit build
allowlist change, integrity coverage, current-source verification and a release
review. Editing the inventory alone cannot activate data.
