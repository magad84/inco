import assert from "node:assert/strict";
import test from "node:test";

import { prescreenCargo } from "../src/dg-prescreen.js";

const baseShipment = {
  originCountry: "CN",
  destinationCountry: "AE",
  mode: "air" as const,
  plannedShipmentDate: "2026-08-05",
};

test("ordinary finished product returns no indicator when identity is complete", () => {
  const result = prescreenCargo({
    product: {
      commercialName: "Metal fastener",
      technicalDescription: "Finished stainless-steel mechanical fastener without battery, fluid, gas, chemical fill, or magnetic function",
      compositionKnown: true,
      physicalState: "article",
      hazardIndicators: [],
      specialCargoIndicators: [],
    },
    package: { packageCount: 4, grossWeightKg: 40 },
    shipment: baseShipment,
  });

  assert.deepEqual(result.statuses, ["NO_INDICATOR_FOUND"]);
  assert.equal(result.confidence, "high");
});

test("unknown chemical mixture blocks reliable pre-screen", () => {
  const result = prescreenCargo({
    product: {
      commercialName: "Industrial cleaner",
      technicalDescription: "Chemical cleaning mixture",
      compositionKnown: false,
      physicalState: "liquid",
      hazardIndicators: ["unknown_chemical_composition"],
      specialCargoIndicators: [],
    },
    shipment: baseShipment,
  });

  assert.ok(result.statuses.includes("INSUFFICIENT_INFORMATION"));
  assert.ok(result.statuses.includes("DANGEROUS_GOODS_DATA_REQUIRED"));
  assert.ok(result.statuses.includes("CARRIER_ACCEPTANCE_REQUIRED"));
  assert.ok(result.missingInformation.includes("composition_or_current_sds"));
});

test("damaged battery triggers critical specialist and carrier confirmation", () => {
  const result = prescreenCargo({
    product: {
      commercialName: "Lithium battery pack",
      technicalDescription: "Rechargeable lithium battery pack",
      compositionKnown: true,
      physicalState: "article",
      hazardIndicators: ["battery"],
      specialCargoIndicators: [],
    },
    battery: {
      present: true,
      chemistry: "lithium-ion",
      configuration: "alone",
      wattHours: 250,
      damagedDefectiveRecalledPrototypeOrWaste: true,
      testSummaryAvailable: false,
    },
    package: { packageCount: 1, grossWeightKg: 18 },
    shipment: baseShipment,
  });

  assert.ok(result.statuses.includes("POSSIBLE_DANGEROUS_GOODS"));
  assert.ok(result.statuses.includes("SPECIALIST_CONFIRMATION_REQUIRED"));
  assert.ok(result.statuses.includes("CARRIER_ACCEPTANCE_REQUIRED"));
  assert.ok(
    result.indicators.some(
      (indicator) =>
        indicator.indicatorId === "DG-BATTERY-ABNORMAL-CONDITION" &&
        indicator.severity === "critical",
    ),
  );
});

test("aerosol and perfume indicators require DG data", () => {
  const result = prescreenCargo({
    product: {
      commercialName: "Body spray",
      technicalDescription: "Pressurized fragranced aerosol product",
      compositionKnown: true,
      physicalState: "aerosol",
      hazardIndicators: ["aerosol", "perfume_cosmetic_alcohol"],
      specialCargoIndicators: [],
    },
    shipment: { ...baseShipment, mode: "courier" },
  });

  assert.ok(result.statuses.includes("POSSIBLE_DANGEROUS_GOODS"));
  assert.ok(result.statuses.includes("DANGEROUS_GOODS_DATA_REQUIRED"));
  assert.ok(result.indicators.some((item) => item.indicatorId === "DG-AEROSOL"));
  assert.ok(
    result.indicators.some((item) => item.indicatorId === "DG-PERFUME-ALCOHOL"),
  );
});

test("oversized machinery stays separate from dangerous-goods status", () => {
  const result = prescreenCargo({
    product: {
      commercialName: "Industrial press",
      technicalDescription: "New industrial press drained of fluids and shipped without batteries or gas",
      compositionKnown: true,
      physicalState: "article",
      hazardIndicators: [],
      specialCargoIndicators: ["oversized", "overweight", "indivisible"],
    },
    package: { packageCount: 1, grossWeightKg: 42000 },
    shipment: { ...baseShipment, mode: "ocean" },
  });

  assert.ok(result.statuses.includes("SPECIAL_CARGO_DATA_REQUIRED"));
  assert.equal(result.statuses.includes("POSSIBLE_DANGEROUS_GOODS"), false);
});
