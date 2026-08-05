import assert from "node:assert/strict";
import test from "node:test";
import {
  prescreenCargoEnhanced,
  type DgPrescreenInput,
} from "../src/index.js";

function baseInput(): DgPrescreenInput {
  return {
    product: {
      commercialName: "Industrial cleaner",
      technicalDescription: "Liquid industrial cleaner",
      compositionKnown: true,
      physicalState: "liquid",
      hazardIndicators: [],
      specialCargoIndicators: [],
    },
    technicalData: {
      sdsAvailable: true,
      sdsRevisionDate: "2026-01-01",
    },
    package: {
      packageCount: 1,
      grossWeightKg: 20,
      packagingDescription: "Plastic drum",
    },
    shipment: {
      originCountry: "CN",
      destinationCountry: "AE",
      mode: "ocean",
      plannedShipmentDate: "2026-08-05",
    },
  };
}

test("known composition conflicting with unknown-composition indicator is blocked", () => {
  const input = baseInput();
  input.product.hazardIndicators = ["unknown_chemical_composition"];

  const result = prescreenCargoEnhanced(input, "2026-08-05T18:40:00Z");

  assert.ok(result.statuses.includes("INSUFFICIENT_INFORMATION"));
  assert.ok(result.statuses.includes("SPECIALIST_CONFIRMATION_REQUIRED"));
  assert.ok(result.indicators.some((item) => item.indicatorId === "DG-CONTRADICTORY-COMPOSITION"));
  assert.ok(result.missingInformation.includes("resolve_composition_contradiction"));
  assert.equal(result.confidence, "low");
});

test("regulated transport data without SDS requires supporting evidence", () => {
  const input = baseInput();
  input.technicalData = {
    sdsAvailable: false,
    unNumber: "UN1993",
    properShippingName: "Flammable liquid, n.o.s.",
    classOrDivision: "3",
  };

  const result = prescreenCargoEnhanced(input, "2026-08-05T18:40:00Z");

  assert.ok(result.statuses.includes("DANGEROUS_GOODS_DATA_REQUIRED"));
  assert.ok(result.indicators.some((item) => item.indicatorId === "DG-REGULATED-DATA-WITHOUT-SDS"));
  assert.ok(result.requiredEvidence.some((item) => item.evidenceId === "current_sds_or_equivalent_verified_document"));
});

test("SDS older than internal review threshold is treated as stale evidence", () => {
  const input = baseInput();
  input.technicalData = {
    sdsAvailable: true,
    sdsRevisionDate: "2020-01-01",
  };

  const result = prescreenCargoEnhanced(input, "2026-08-05T18:40:00Z");

  assert.ok(result.statuses.includes("SPECIALIST_CONFIRMATION_REQUIRED"));
  assert.ok(result.indicators.some((item) => item.indicatorId === "DG-SDS-STALE-REVIEW"));
  assert.ok(result.requiredEvidence.some((item) => item.status === "EXPIRED_OR_STALE"));
  assert.ok(result.missingInformation.includes("current_sds_verification"));
});

test("available SDS without revision date is not accepted as current", () => {
  const input = baseInput();
  input.technicalData = { sdsAvailable: true };

  const result = prescreenCargoEnhanced(input, "2026-08-05T18:40:00Z");

  assert.ok(result.statuses.includes("DANGEROUS_GOODS_DATA_REQUIRED"));
  assert.ok(result.missingInformation.includes("technicalData.sdsRevisionDate"));
  assert.ok(result.requiredEvidence.some((item) => item.evidenceId === "sds_revision_date"));
});

test("future SDS revision date is rejected", () => {
  const input = baseInput();
  input.technicalData = {
    sdsAvailable: true,
    sdsRevisionDate: "2027-01-01",
  };

  const result = prescreenCargoEnhanced(input, "2026-08-05T18:40:00Z");

  assert.ok(result.statuses.includes("INSUFFICIENT_INFORMATION"));
  assert.ok(result.indicators.some((item) => item.indicatorId === "DG-SDS-FUTURE-DATE"));
  assert.ok(result.missingInformation.includes("correct_sds_revision_date"));
});
