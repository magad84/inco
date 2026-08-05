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
  constraints: Array<{ sourceIds: string[]; reviewBy: string; status: string }>;
  review: { nextReviewAt: string; reviewOwner: string };
}

const root = resolve(process.cwd(), "../..");
const sources = JSON.parse(
  readFileSync(resolve(root, "knowledge/source-records/gateway-turkey-italy.v0.1.json"), "utf8"),
) as { sources: SourceRecord[] };
const gateways = JSON.parse(
  readFileSync(resolve(root, "knowledge/gateways/turkey-italy.v0.1.json"), "utf8"),
) as { gateways: GatewayRecord[] };

const sourceIds = new Set(sources.sources.map((source) => source.sourceId));

function iso(value: string, label: string): void {
  assert.match(value, /^\d{4}-\d{2}-\d{2}/, `${label} must be ISO date`);
}

test("Turkey and Italy gateway sources are controlled", () => {
  assert.equal(sources.sources.length, 4);
  for (const source of sources.sources) {
    assert.ok(source.gatewayScope.length > 0);
    assert.notEqual(source.verificationStatus, "source_required");
    iso(source.lastVerified, `${source.sourceId}.lastVerified`);
    iso(source.reviewBy, `${source.sourceId}.reviewBy`);
  }
});

test("Turkey and Italy gateways preserve shipment-specific confirmation", () => {
  assert.equal(gateways.gateways.length, 4);
  const expectedCountries = new Set(["TR", "IT"]);
  const seen = new Set<string>();

  for (const gateway of gateways.gateways) {
    assert.ok(gateway.gatewayId.startsWith("GATEWAY-"));
    assert.ok(!seen.has(gateway.gatewayId), `duplicate ${gateway.gatewayId}`);
    seen.add(gateway.gatewayId);
    assert.ok(expectedCountries.has(gateway.countryCode));
    assert.equal(gateway.status, "verified_partial");
    assert.ok(gateway.sources.length > 0);
    assert.ok(gateway.constraints.length > 0);
    assert.ok(gateway.review.reviewOwner.length > 0);
    iso(gateway.review.nextReviewAt, `${gateway.gatewayId}.nextReviewAt`);

    for (const sourceId of gateway.sources) {
      assert.ok(sourceIds.has(sourceId), `${gateway.gatewayId} missing source ${sourceId}`);
    }
    for (const constraint of gateway.constraints) {
      assert.equal(constraint.status, "confirmation_required");
      iso(constraint.reviewBy, `${gateway.gatewayId}.constraint.reviewBy`);
      for (const sourceId of constraint.sourceIds) {
        assert.ok(sourceIds.has(sourceId), `${gateway.gatewayId} constraint missing ${sourceId}`);
      }
    }
  }
});
