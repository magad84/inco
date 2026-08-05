import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

interface SourceRecord {
  sourceId: string;
  gatewayId: string;
  verificationStatus: string;
  lastVerified: string;
  reviewBy: string;
}

interface GatewayConstraint {
  sourceIds: string[];
  reviewBy: string;
  status: string;
}

interface GatewayRecord {
  gatewayId: string;
  countryCode: string;
  status: string;
  sources: string[];
  constraints: GatewayConstraint[];
  review: {
    lastVerifiedAt: string | null;
    nextReviewAt: string;
    reviewOwner: string;
  };
}

const root = resolve(process.cwd(), "../..");
const sourceFile = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/source-records/gateway-ksa-egypt-oman.v0.1.json"),
    "utf8",
  ),
) as { sources: SourceRecord[] };
const gatewayFile = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/gateways/ksa-egypt-oman.v0.1.json"),
    "utf8",
  ),
) as { gateways: GatewayRecord[] };

const sourceIds = new Set(sourceFile.sources.map((source) => source.sourceId));

function assertIsoDate(value: string, label: string): void {
  assert.match(value, /^\d{4}-\d{2}-\d{2}/, `${label} must be an ISO date`);
}

test("KSA Egypt Oman gateway sources are review controlled", () => {
  assert.ok(sourceFile.sources.length >= 6);
  for (const source of sourceFile.sources) {
    assert.ok(source.sourceId.length > 0);
    assert.ok(source.gatewayId.startsWith("GATEWAY-"));
    assert.notEqual(source.verificationStatus, "source_required");
    assertIsoDate(source.lastVerified, `${source.sourceId} lastVerified`);
    assertIsoDate(source.reviewBy, `${source.sourceId} reviewBy`);
  }
});

test("KSA Egypt Oman gateways are traceable and conditional", () => {
  assert.ok(gatewayFile.gateways.length >= 5);
  const gatewayIds = new Set<string>();
  const countries = new Set<string>();

  for (const gateway of gatewayFile.gateways) {
    assert.ok(!gatewayIds.has(gateway.gatewayId), `Duplicate ${gateway.gatewayId}`);
    gatewayIds.add(gateway.gatewayId);
    countries.add(gateway.countryCode);
    assert.ok(["SA", "EG", "OM"].includes(gateway.countryCode));
    assert.notEqual(gateway.status, "research_seed");
    assert.ok(gateway.sources.length > 0);
    assert.ok(gateway.constraints.length > 0);
    assert.ok(gateway.review.reviewOwner.length > 0);
    assertIsoDate(gateway.review.nextReviewAt, `${gateway.gatewayId} nextReviewAt`);

    for (const sourceId of gateway.sources) {
      assert.ok(sourceIds.has(sourceId), `${gateway.gatewayId} missing source ${sourceId}`);
    }

    for (const constraint of gateway.constraints) {
      assert.ok(constraint.sourceIds.length > 0);
      assert.ok(
        ["confirmation_required", "conditional_guidance", "confirmed_rule", "source_unavailable"].includes(
          constraint.status,
        ),
      );
      assertIsoDate(constraint.reviewBy, `${gateway.gatewayId} constraint reviewBy`);
      for (const sourceId of constraint.sourceIds) {
        assert.ok(sourceIds.has(sourceId), `${gateway.gatewayId} constraint missing ${sourceId}`);
      }
    }
  }

  assert.deepEqual([...countries].sort(), ["EG", "OM", "SA"]);
});
