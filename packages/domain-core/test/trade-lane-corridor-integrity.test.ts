import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

interface GatewayFile {
  gateways: Array<{ gatewayId: string }>;
}

interface ServiceFile {
  services: Array<{ serviceId: string; confirmation?: { requiredBeforeBooking?: boolean } }>;
}

interface Corridor {
  tradeLaneId: string;
  originGatewayId: string | null;
  destinationGatewayId: string | null;
  candidateServiceIds: string[];
  decisionState: string;
  requiredConfirmations: string[];
  riskFlags: string[];
  reviewBy: string;
}

const root = resolve(process.cwd(), "../..");

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(resolve(root, path), "utf8")) as T;
}

const gatewayFiles = [
  readJson<GatewayFile>("knowledge/gateways/uae-china-india.v0.1.json"),
  readJson<GatewayFile>("knowledge/gateways/ksa-egypt-oman.v0.1.json"),
];
const serviceFiles = [
  readJson<ServiceFile>("knowledge/carrier-services/express-ae.v0.1.json"),
  readJson<ServiceFile>("knowledge/carrier-services/ocean-air.v0.1.json"),
];
const corridorFile = readJson<{ corridors: Corridor[] }>(
  "knowledge/trade-lanes/launch-corridors.v0.1.json",
);

const gatewayIds = new Set(
  gatewayFiles.flatMap((file) => file.gateways.map((gateway) => gateway.gatewayId)),
);
const serviceIds = new Set(
  serviceFiles.flatMap((file) => file.services.map((service) => service.serviceId)),
);

function assertIsoDate(value: string, label: string): void {
  assert.match(value, /^\d{4}-\d{2}-\d{2}/, `${label} must be an ISO date`);
}

test("trade-lane corridors reference controlled gateway and service records", () => {
  assert.ok(corridorFile.corridors.length >= 5);
  const ids = new Set<string>();

  for (const corridor of corridorFile.corridors) {
    assert.ok(!ids.has(corridor.tradeLaneId), `Duplicate ${corridor.tradeLaneId}`);
    ids.add(corridor.tradeLaneId);

    if (corridor.originGatewayId) {
      assert.ok(
        gatewayIds.has(corridor.originGatewayId),
        `${corridor.tradeLaneId} missing origin gateway ${corridor.originGatewayId}`,
      );
    }
    if (corridor.destinationGatewayId) {
      assert.ok(
        gatewayIds.has(corridor.destinationGatewayId),
        `${corridor.tradeLaneId} missing destination gateway ${corridor.destinationGatewayId}`,
      );
    }
    for (const serviceId of corridor.candidateServiceIds) {
      assert.ok(serviceIds.has(serviceId), `${corridor.tradeLaneId} missing service ${serviceId}`);
    }

    assert.ok(
      ["confirmation_required", "source_unavailable", "stale_review_required"].includes(
        corridor.decisionState,
      ),
      `${corridor.tradeLaneId} must preserve uncertainty`,
    );
    assert.ok(corridor.requiredConfirmations.length > 0);
    assert.ok(corridor.riskFlags.length > 0);
    assertIsoDate(corridor.reviewBy, `${corridor.tradeLaneId} reviewBy`);
  }
});

test("incomplete corridors do not masquerade as verified routes", () => {
  for (const corridor of corridorFile.corridors) {
    if (!corridor.originGatewayId || !corridor.destinationGatewayId || corridor.candidateServiceIds.length === 0) {
      assert.notEqual(corridor.decisionState, "verified");
      assert.ok(
        corridor.decisionState === "source_unavailable" ||
          corridor.decisionState === "confirmation_required",
      );
    }
  }
});
