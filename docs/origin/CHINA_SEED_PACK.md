# INCO China Origin Seed Pack

**Version:** 0.1  
**Status:** Research seed; not executable compliance advice  
**Last reviewed:** 2026-08-05

## Scope

China as a priority origin market for shipments to the UAE, Saudi Arabia, Egypt, and Oman.

## Authoritative Seed Sources

| Source ID | Authority | Scope | URL | Review Rule |
|---|---|---|---|---|
| CHN-CUS-001 | General Administration of Customs of China | Customs law and export declaration obligations | https://english.customs.gov.cn/statics/644dcaee-ca91-483a-86f4-bdc23695e3c3.html | Quarterly and on amendment |
| CHN-CUS-002 | General Administration of Customs of China | Declaration-form data and customs port identification | https://english.customs.gov.cn/statics/7d65e215-13ed-4a3e-baa1-797f01e5e902.html | Treat as structural seed; verify current electronic process before use |

## Confirmed Structural Rules

- Export goods remain under customs control from declaration until departure.
- Export declarations require accurate transaction and cargo information plus applicable licensing documents.
- The actual customs port or exit location must be represented explicitly in the shipment record.
- A historic public rule indicates declaration after arrival at the customs-supervision zone and before loading; the current operational timing must be reconfirmed before producing a transaction-specific instruction.

## Required User Inputs

- Exporter legal name and registration jurisdiction.
- Product description and intended end use.
- Export-control or licensing indicators.
- Origin city or factory.
- Intended customs district and gateway.
- Transport mode.
- Carrier and service.
- Destination country and gateway.
- Dangerous-goods or special-cargo indicators.
- Commercial invoice, packing-list, and origin-evidence status.

## Gateway Seed Candidates

The following are discovery priorities only. Capability is not inferred from the name:

### Sea

- Shanghai.
- Ningbo-Zhoushan.
- Shenzhen/Yantian.
- Qingdao.
- Guangzhou/Nansha.
- Tianjin.
- Xiamen.

### Air Cargo

- Shanghai Pudong.
- Guangzhou Baiyun.
- Shenzhen Bao'an.
- Beijing Capital / Beijing Daxing as applicable.
- Zhengzhou Xinzheng.
- Hong Kong is a separate customs jurisdiction and must not be merged into the China mainland origin pack.

## Output States

- `EXPORT_DECLARATION_DATA_REQUIRED`
- `EXPORT_LICENSE_CONFIRMATION_REQUIRED`
- `CUSTOMS_PORT_CONFIRMATION_REQUIRED`
- `CARRIER_ACCEPTANCE_REQUIRED`
- `CURRENT_OPERATIONAL_RULE_RECHECK_REQUIRED`
- `SOURCE_UNAVAILABLE`

## Research Gaps

- Current single-window/export declaration workflow.
- Product-specific export-control lists and competent authorities.
- Current gateway codes and customs-district mapping.
- Carrier-specific acceptance and dimensional rules by route.
- Dangerous-goods national variations by mode.
- Current certificate-of-origin issuing routes by transaction type.

## Safety Boundary

This pack must not state that a product is exportable, unrestricted, non-dangerous, or carrier-accepted without product-level and current-source verification.
