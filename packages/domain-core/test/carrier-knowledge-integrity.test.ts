import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

interface SourceRecord {
  sourceId: string;
  status: string;
  lastVerifiedAt: string;
  nextReviewAt: string;
}

interface SourceFile {
  sources: SourceRecord[];
}

interface CarrierRule {
  sourceIds: string[];
  reviewBy: string;
}

interface CarrierService {
  carrierId: string;
  serviceId: string;
  status: string;
  cargoRules: CarrierRule[];
  commercialRules: {
    volumetricWeight?: CarrierRule | null;
    limits?: CarrierRule[];
  };
  sources: string[];
  review: {
    lastVerifiedAt: string | null;
    nextReviewAt: string;
    reviewOwner: string;
  };
}

interface ServiceFile {
  services: CarrierService[];
}

const root = resolve(process.cwd(), "../..");
const sourceFile = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/source-records/carrier-express.v0.1.json"),
    "utf8",
  ),
) as SourceFile;
const serviceFile = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/carrier-services/express-ae.v0.1.json"),
    "utf8",
  ),
) as ServiceFile;

const sourceIds = new Set(sourceFile.sources.map((source) => source.sourceId));

function assertIsoDate(value: string, label: string): void {
  assert.match(value, /^\d{4}-\d{2}-\d{2}/, `${label} must be an ISO date`);
}

function assertRuleSources(
  rules: CarrierRule[],
  carrierId: string,
  section: string,
): void {
  for (const rule of rules) {
    assert.ok(rule.sourceIds.length > 0, `${carrierId} ${section} rule needs a source`);
    assertIsoDate(rule.reviewBy, `${carrierId} ${section} reviewBy`);
    for (const sourceId of rule.sourceIds) {
      assert.ok(
        sourceIds.has(sourceId),
        `${carrierId} ${section} references missing source ${sourceId}`,
      );
    }
  }
}

test("express carrier sources have review controls", () => {
  assert.ok(sourceFile.sources.length >= 4);
  for (const source of sourceFile.sources) {
    assert.ok(source.sourceId.length > 0);
    assert.ok(source.status.length > 0);
    assertIsoDate(source.lastVerifiedAt, `${source.sourceId} lastVerifiedAt`);
    assertIsoDate(source.nextReviewAt, `${source.sourceId} nextReviewAt`);
  }
});

test("express carrier services are fully traceable", () => {
  assert.ok(serviceFile.services.length >= 4);
  const serviceIds = new Set<string>();

  for (const service of serviceFile.services) {
    assert.ok(!serviceIds.has(service.serviceId), `Duplicate ${service.serviceId}`);
    serviceIds.add(service.serviceId);
    assert.ok(service.carrierId.startsWith("CARRIER-"));
    assert.ok(service.serviceId.startsWith("SERVICE-"));
    assert.notEqual(service.status, "research_seed");
    assert.ok(service.sources.length > 0);
    assert.ok(service.review.reviewOwner.length > 0);
    assertIsoDate(service.review.nextReviewAt, `${service.serviceId} nextReviewAt`);

    for (const sourceId of service.sources) {
      assert.ok(sourceIds.has(sourceId), `${service.serviceId} missing ${sourceId}`);
    }

    assertRuleSources(service.cargoRules, service.carrierId, "cargoRules");

    const volumetric = service.commercialRules.volumetricWeight;
    if (volumetric) {
      assertRuleSources([volumetric], service.carrierId, "volumetricWeight");
    }
    assertRuleSources(
      service.commercialRules.limits ?? [],
      service.carrierId,
      "limits",
    );
  }
});
