# INCO Public Service Deployment Runbook v1.0

**Target URL:** `https://inco.mostafagad.net`  
**Runtime target:** existing Hostinger VPS  
**Main website:** MostafaGad.net remains on Neom Cloud  
**Service model:** free, anonymous, limited professional service

## Approved Launch Boundary

The first public release has:

- no registration or authentication;
- no payment;
- no saved shipment cases;
- no document upload;
- no persistent customer database requirement;
- no AI dependency at launch;
- deterministic bilingual results only;
- public sample and controlled knowledge only.

The optional OpenRouter and Ollama explanation adapter remains disabled through `AI_ENABLED=false` until actual usage justifies the resource and privacy cost.

## Runtime Topology

```text
Internet
  -> DNS: inco.mostafagad.net
  -> Caddy HTTPS reverse proxy on Hostinger VPS
  -> INCO Node service on a private container/network port
  -> deterministic domain core and file-based public knowledge
```

Ollama, PostgreSQL, Redis, and Qdrant are not required by the initial public service and must not be exposed or attached without a documented need.

## Required Environment

```text
NODE_ENV=production
HOST=0.0.0.0
PORT=4173
AI_ENABLED=false
```

Secrets must not be committed to GitHub. The initial release requires no API key.

## DNS

Create an `A` record:

```text
Host: inco
Value: <Hostinger VPS public IPv4>
TTL: provider default or 300 during cutover
```

Do not change the main `mostafagad.net` hosting records on Neom Cloud.

## Caddy Boundary

Representative configuration:

```caddy
inco.mostafagad.net {
  encode zstd gzip
  reverse_proxy inco-app:4173

  header {
    Strict-Transport-Security "max-age=31536000; includeSubDomains"
    X-Content-Type-Options "nosniff"
    Referrer-Policy "strict-origin-when-cross-origin"
  }

  log {
    output file /var/log/caddy/inco-access.log
    format json
  }
}
```

Access logs must not include request bodies. Retention should be short and operationally justified.

## Container Controls

- run as a non-root user;
- use a read-only filesystem where practical;
- mount only required public knowledge and application files;
- set memory and CPU limits;
- restart only on failure;
- expose the application only to the reverse-proxy network;
- do not publish Ollama, PostgreSQL, Redis, or Qdrant ports publicly.

## Pre-Release Checks

1. Domain-core CI and CodeQL are green.
2. `GET /healthz` returns HTTP 200.
3. `GET /readyz` returns HTTP 200 and expected destination packs.
4. Arabic RTL and English LTR interfaces work on mobile and desktop.
5. No request data is persisted.
6. Rate limiting and body-size limits work.
7. Professional boundary and privacy notice are visible.
8. Links to MostafaGad.net and GitHub resolve.
9. DNS and TLS certificate are valid.
10. Rollback image or previous container is available.

## Smoke Scenarios

- China to UAE, general solid cargo, ocean.
- India to Saudi Arabia, food indicator.
- Turkey to Egypt, chemical data incomplete.
- Italy to Oman, air cargo with battery indicator.
- Unsupported destination-country code.
- Request larger than the accepted body limit.

No smoke result may be interpreted as a live carrier, customs, permit, or authority approval.

## Rollback

1. Stop routing traffic to the new container.
2. Restore the previous known-good image or maintenance page.
3. Preserve only privacy-safe operational logs needed for diagnosis.
4. Record the failure, affected version, and corrective action.
5. Do not re-enable traffic until health, readiness, and regression checks pass.

## Post-Launch Measurement

Measure only what supports the brand and service objective:

- visits to the INCO service;
- completed anonymous checks;
- language selection;
- destination and mode categories in aggregated form only;
- clicks to MostafaGad.net, research, articles, videos, and GitHub;
- errors and availability.

Do not store free-text cargo descriptions or reconstruct identifiable shipment cases for analytics.
