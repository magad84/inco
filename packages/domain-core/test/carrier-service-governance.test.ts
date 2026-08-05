import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import {
  evaluateCarrierServiceGovernance,
  type CarrierServiceGovernanceRecord,
} from "../src/index.js";

const root = resolve(process.cwd(), "../..");
const dataset = JSON.parse(
  readFileSync(
    resolve(root, "knowledge/carrier-services/priority-batch.v0.1.json"),
    "utf8",
  ),
) as { services: CarrierServiceGovernanceRecord[] };

test("all priority carrier records remain confirmation-controlled", () => {
  for (const service of dataset.services) {
    const result = evaluateCarrierServiceGovernance(service, "2026-08-05");
    assert.equal(result.bookingConfirmationRequired, true);
    assert.ok(
      ["confirmation_required", "source_unavailable"].includes(result.availability),
    );
    assert.ok(
      result.requiredActions.includes(
        "confirm_current_route_capacity_cutoff_and_acceptance",
      ),
    );
  }
});

test("stale carrier records cannot remain current candidates", () => {
  const service = dataset.services[0];
  assert.ok(service);
  const result = evaluateCarrierServiceGovernance(service, "2026-09-01");
  assert.equal(result.availability, "stale_review_required");
  assert.equal(result.stale, true);
  assert.ok(result.requiredActions.includes("refresh_official_service_source"));
});

test("source-unavailable carrier records remain blocked from recommendation", () => {
  const service = dataset.services.find(
    (item) => item.status === "source_unavailable",
  );
  assert.ok(service);
  const result = evaluateCarrierServiceGovernance(service, "2026-08-05");
  assert.equal(result.availability, "source_unavailable");
  assert.ok(result.requiredActions.includes("normalize_official_service_source"));
});
