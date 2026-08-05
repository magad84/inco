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

interface GatewayConstraint {
  sourceIds: string[];
  reviewBy: string;
}

interface GatewayRecord {
  gatewayId: string;
  status: string;
  sources: string[];
  constraints: GatewayConstraint[];
  review: {
    lastVerifiedAt: string | null;
    nextReviewAt: string;
    reviewOwner: string;
  };
}

interface SourceFile { sources: SourceRecord[] }
interface GatewayFile { gateways: GatewayRecord[] }

const root = resolve(process.cwd(), "../..");
const sourceFile = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/source-records/gateway-uae-china-india.v0.1.json"),
    "utf8",
  ),
) as SourceFile;
const gatewayFile = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/gateways/uae-china-india.v0.1.json"),
    "utf8",
  ),
) as GatewayFile;

const sourceIds = new Set(sourceFile.sources.map((source) => source.sourceId));

function assertIsoDate(value: string, label: string): void {
  assert.match(value, /^\d{4}-\d{2}-\d{2}/, `${label} must be an ISO date`);
}

test("gateway sources are current and scoped", () => {
  assert.ok(sourceFile.sources.length >= 7);
  const seen = new Set<string>();
  for (const source of sourceFile.sources) {
    assert.ok(!seen.has(source.sourceId), `Duplicate source ${source.sourceId}`);
    seen.add(source.sourceId);
    assert.ok(source.gatewayScope.length > 0, `${source.sourceId} needs gateway scope`);
    assert.notEqual(source.verificationStatus, "source_required");
    assertIsoDate(source.lastVerified, `${source.sourceId} lastVerified`);
    assertIsoDate(source.reviewBy, `${source.sourceId} reviewBy`);
  }
});

test("gateway records are traceable and conservative", () => {
  assert.ok(gatewayFile.gateways.length >= 6);
  const seen = new Set<string>();

  for (const gateway of gatewayFile.gateways) {
    assert.ok(gateway.gatewayId.startsWith("GATEWAY-"));
    assert.ok(!seen.has(gateway.gatewayId), `Duplicate gateway ${gateway.gatewayId}`);
    seen.add(gateway.gatewayId);
    assert.notEqual(gateway.status, "research_seed");
    assert.ok(gateway.sources.length > 0, `${gateway.gatewayId} needs sources`);
    assert.ok(gateway.review.reviewOwner.length > 0);
    assertIsoDate(gateway.review.nextReviewAt, `${gateway.gatewayId} nextReviewAt`);

    for (const sourceId of gateway.sources) {
      assert.ok(sourceIds.has(sourceId), `${gateway.gatewayId} missing ${sourceId}`);
    }

    assert.ok(gateway.constraints.length > 0, `${gateway.gatewayId} needs constraints`);
    for (const constraint of gateway.constraints) {
      assert.ok(constraint.sourceIds.length > 0);
      assertIsoDate(constraint.reviewBy, `${gateway.gatewayId} constraint reviewBy`);
      for (const sourceId of constraint.sourceIds) {
        assert.ok(sourceIds.has(sourceId), `${gateway.gatewayId} constraint missing ${sourceId}`);
      }
    }
  }
});
