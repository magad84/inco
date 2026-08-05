import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

interface SourceRecord {
  sourceId: string;
  providerId: string;
  mode: "ocean" | "air_cargo";
  verificationStatus: string;
  lastVerified: string;
  reviewBy: string;
  url: string;
}

interface SourceFile {
  sources: SourceRecord[];
}

interface Rule {
  sourceIds: string[];
  reviewBy: string;
}

interface Service {
  carrierId: string;
  serviceId: string;
  mode: "ocean" | "air_cargo";
  status: string;
  cargoRules: Rule[];
  sources: string[];
  confirmation?: { requiredBeforeBooking?: boolean };
  review: { nextReviewAt: string; reviewOwner: string };
}

interface ServiceFile {
  services: Service[];
}

const root = resolve(process.cwd(), "../..");
const sourceFile = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/source-records/carrier-ocean-air.v0.1.json"),
    "utf8",
  ),
) as SourceFile;
const serviceFile = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/carrier-services/ocean-air.v0.1.json"),
    "utf8",
  ),
) as ServiceFile;

const sourcesById = new Map(
  sourceFile.sources.map((source) => [source.sourceId, source]),
);

function assertIsoDate(value: string, label: string): void {
  assert.match(value, /^\d{4}-\d{2}-\d{2}/, `${label} must be an ISO date`);
  assert.ok(!Number.isNaN(Date.parse(value)), `${label} must be parseable`);
}

test("ocean and air sources are uniquely identified and review controlled", () => {
  const ids = new Set<string>();
  for (const source of sourceFile.sources) {
    assert.ok(!ids.has(source.sourceId), `Duplicate source ${source.sourceId}`);
    ids.add(source.sourceId);
    assert.ok(source.providerId.length > 0);
    assert.ok(source.url.startsWith("https://"));
    assertIsoDate(source.lastVerified, `${source.sourceId} lastVerified`);
    assertIsoDate(source.reviewBy, `${source.sourceId} reviewBy`);

    if (source.verificationStatus === "volatile_recheck_required") {
      const verified = Date.parse(source.lastVerified);
      const review = Date.parse(source.reviewBy);
      const days = (review - verified) / 86_400_000;
      assert.ok(days <= 14, `${source.sourceId} volatile review window exceeds 14 days`);
    }
  }
});

test("ocean and air services reference valid sources and preserve booking confirmation", () => {
  const serviceIds = new Set<string>();
  for (const service of serviceFile.services) {
    assert.ok(!serviceIds.has(service.serviceId), `Duplicate ${service.serviceId}`);
    serviceIds.add(service.serviceId);
    assert.ok(service.carrierId.startsWith("CARRIER-"));
    assert.ok(service.serviceId.startsWith("SERVICE-"));
    assert.ok(service.mode === "ocean" || service.mode === "air_cargo");
    assert.ok(service.sources.length > 0);
    assert.equal(
      service.confirmation?.requiredBeforeBooking,
      true,
      `${service.serviceId} must require booking confirmation`,
    );
    assert.ok(service.review.reviewOwner.length > 0);
    assertIsoDate(service.review.nextReviewAt, `${service.serviceId} nextReviewAt`);

    for (const sourceId of service.sources) {
      assert.ok(sourcesById.has(sourceId), `${service.serviceId} missing ${sourceId}`);
    }

    for (const rule of service.cargoRules) {
      assert.ok(rule.sourceIds.length > 0, `${service.serviceId} rule needs sources`);
      assertIsoDate(rule.reviewBy, `${service.serviceId} rule reviewBy`);
      for (const sourceId of rule.sourceIds) {
        assert.ok(sourcesById.has(sourceId), `${service.serviceId} rule missing ${sourceId}`);
      }
    }
  }
});
