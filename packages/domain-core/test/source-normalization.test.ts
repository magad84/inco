import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const root = resolve(process.cwd(), "../..");
const register = JSON.parse(readFileSync(resolve(root, "knowledge/source-normalization.v1.0.json"), "utf8")) as {
  countryMarkets: Array<{ countryCode: string; ruleFile: string; status: string; reviewCadenceDays: number; requiredLiveConfirmations: string[] }>;
  carrierDatasets: Array<{ path: string; status: string; reviewCadenceDays: number }>;
  mandatoryCarrierConfirmations: string[];
  fallbackStates: Record<string, string>;
  nextReviewAt: string;
};

test("all launch destination markets are included in the normalization register", () => {
  assert.deepEqual(register.countryMarkets.map((item) => item.countryCode).sort(), ["AE", "EG", "OM", "SA"]);
  for (const market of register.countryMarkets) {
    assert.equal(market.status, "verified_partial");
    assert.ok(market.reviewCadenceDays > 0 && market.reviewCadenceDays <= 30);
    assert.ok(existsSync(resolve(root, market.ruleFile)));
    assert.ok(market.requiredLiveConfirmations.length >= 4);
  }
});

test("carrier source datasets remain review-controlled and non-live", () => {
  assert.equal(register.carrierDatasets.length, 3);
  for (const dataset of register.carrierDatasets) {
    assert.equal(dataset.status, "verified_partial");
    assert.ok(dataset.reviewCadenceDays > 0 && dataset.reviewCadenceDays <= 30);
    assert.ok(existsSync(resolve(root, dataset.path)));
  }
  for (const required of ["current_route", "schedule", "capacity", "cutoff", "cargo_acceptance", "booking_confirmation", "rate_if_requested"]) {
    assert.ok(register.mandatoryCarrierConfirmations.includes(required));
  }
});

test("normalization register preserves conservative fallback states", () => {
  assert.equal(register.fallbackStates.missingOfficialSource, "source_unavailable");
  assert.equal(register.fallbackStates.expiredReview, "stale_review_required");
  assert.equal(register.fallbackStates.currentSourceWithoutLiveOperationalData, "confirmation_required");
  assert.ok(new Date(register.nextReviewAt).getTime() > 0);
});
