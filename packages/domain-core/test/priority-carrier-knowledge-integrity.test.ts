import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

interface SourceRecord {
  sourceId: string;
  url: string;
  verificationStatus: string;
  lastVerified: string;
  reviewBy: string;
}

interface CarrierService {
  carrierId: string;
  serviceId: string;
  status: string;
  sources: string[];
  cargoRules: Array<{
    acceptanceStatus: string;
    sourceIds: string[];
    reviewBy: string;
  }>;
  confirmation: { requiredBeforeBooking: boolean };
  review: { lastVerifiedAt: string; nextReviewAt: string; reviewOwner: string };
}

const root = resolve(process.cwd(), "../..");
const sourceFile = JSON.parse(readFileSync(resolve(root, "knowledge/source-records/carrier-priority-batch.v0.1.json"), "utf8")) as { sources: SourceRecord[] };
const serviceFile = JSON.parse(readFileSync(resolve(root, "knowledge/carrier-services/priority-batch.v0.1.json"), "utf8")) as { services: CarrierService[] };
const sourceIds = new Set(sourceFile.sources.map((source) => source.sourceId));

function assertDate(value: string, label: string): void {
  assert.match(value, /^\d{4}-\d{2}-\d{2}/, `${label} must be ISO dated`);
}

test("priority carrier sources are controlled", () => {
  assert.ok(sourceFile.sources.length >= 5);
  const seen = new Set<string>();
  for (const source of sourceFile.sources) {
    assert.ok(!seen.has(source.sourceId), `Duplicate source ${source.sourceId}`);
    seen.add(source.sourceId);
    assert.doesNotThrow(() => new URL(source.url));
    assertDate(source.lastVerified, `${source.sourceId}.lastVerified`);
    assertDate(source.reviewBy, `${source.sourceId}.reviewBy`);
  }
});

test("priority carrier services preserve shipment confirmation", () => {
  assert.equal(serviceFile.services.length, 5);
  const seen = new Set<string>();
  for (const service of serviceFile.services) {
    assert.ok(!seen.has(service.serviceId), `Duplicate service ${service.serviceId}`);
    seen.add(service.serviceId);
    assert.equal(service.confirmation.requiredBeforeBooking, true);
    assert.ok(service.sources.length > 0);
    assert.ok(service.review.reviewOwner.length > 0);
    assertDate(service.review.nextReviewAt, `${service.serviceId}.nextReviewAt`);
    for (const sourceId of service.sources) {
      assert.ok(sourceIds.has(sourceId), `${service.serviceId} missing source ${sourceId}`);
    }
    for (const rule of service.cargoRules) {
      assert.notEqual(rule.acceptanceStatus, "accepted");
      assertDate(rule.reviewBy, `${service.serviceId}.rule.reviewBy`);
      for (const sourceId of rule.sourceIds) {
        assert.ok(sourceIds.has(sourceId), `${service.serviceId} rule missing source ${sourceId}`);
      }
    }
    if (service.status === "source_unavailable") {
      assert.equal(service.cargoRules[0]?.acceptanceStatus, "source_unavailable");
    }
  }
});
