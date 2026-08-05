import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

interface SourceRecord {
  sourceId: string;
  gatewayScope: string[];
  verificationStatus: string;
  lastVerified: string;
  reviewBy: string;
}

interface GatewayRecord {
  gatewayId: string;
  countryCode: string;
  status: string;
  sources: string[];
  constraints: Array<{
    status: string;
    sourceIds: string[];
    reviewBy: string;
  }>;
  review: {
    lastVerifiedAt: string | null;
    nextReviewAt: string;
    reviewOwner: string;
  };
}

const root = resolve(process.cwd(), "../..");
const sourceData = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/source-records/gateway-us-australia-russia.v0.1.json"),
    "utf8",
  ),
) as { sources: SourceRecord[] };
const gatewayData = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/gateways/us-australia-russia.v0.1.json"),
    "utf8",
  ),
) as { gateways: GatewayRecord[] };

function assertIso(value: string, label: string): void {
  assert.match(value, /^\d{4}-\d{2}-\d{2}/, `${label} must be ISO dated`);
}

test("US, Australia and Russia gateway sources are controlled", () => {
  assert.equal(sourceData.sources.length, 6);
  const ids = new Set<string>();
  for (const source of sourceData.sources) {
    assert.ok(!ids.has(source.sourceId), `Duplicate source ${source.sourceId}`);
    ids.add(source.sourceId);
    assert.ok(source.gatewayScope.length > 0);
    assert.equal(source.verificationStatus, "verified_partial");
    assertIso(source.lastVerified, `${source.sourceId}.lastVerified`);
    assertIso(source.reviewBy, `${source.sourceId}.reviewBy`);
  }
});

test("US and Australia records remain conditional and Russia is enhanced-compliance only", () => {
  assert.equal(gatewayData.gateways.length, 6);
  const sourceIds = new Set(sourceData.sources.map((source) => source.sourceId));
  const gatewayIds = new Set<string>();

  for (const gateway of gatewayData.gateways) {
    assert.ok(!gatewayIds.has(gateway.gatewayId), `Duplicate gateway ${gateway.gatewayId}`);
    gatewayIds.add(gateway.gatewayId);
    assert.equal(gateway.status, "verified_partial");
    assert.ok(gateway.sources.length > 0);
    assert.ok(gateway.constraints.length > 0);
    assert.ok(gateway.review.reviewOwner.length > 0);
    assertIso(gateway.review.nextReviewAt, `${gateway.gatewayId}.nextReviewAt`);

    for (const sourceId of gateway.sources) {
      assert.ok(sourceIds.has(sourceId), `${gateway.gatewayId} missing source ${sourceId}`);
    }

    for (const constraint of gateway.constraints) {
      assertIso(constraint.reviewBy, `${gateway.gatewayId}.constraint.reviewBy`);
      assert.ok(constraint.sourceIds.length > 0);
      for (const sourceId of constraint.sourceIds) {
        assert.ok(sourceIds.has(sourceId));
      }
    }

    if (gateway.countryCode === "RU") {
      assert.ok(
        gateway.constraints.some((constraint) => constraint.status === "enhanced_compliance_required"),
        `${gateway.gatewayId} must require enhanced compliance`,
      );
    } else {
      assert.ok(
        gateway.constraints.some((constraint) => constraint.status === "confirmation_required"),
        `${gateway.gatewayId} must preserve shipment confirmation`,
      );
    }
  }
});
