import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import {
  calculateCargo,
  CargoCalculatorError,
  type CargoCalculatorInput,
} from "../src/index.js";

interface ValidFixture {
  case_id: string;
  input: CargoCalculatorInput;
  expected: Record<string, unknown>;
  tolerance?: number;
}

interface InvalidFixture {
  case_id: string;
  input: CargoCalculatorInput;
  expected_error: {
    code: string;
    field_path: string;
  };
}

interface FixtureFile {
  valid_cases: ValidFixture[];
  invalid_cases: InvalidFixture[];
}

const fixturePath = resolve(
  process.cwd(),
  "../../fixtures/cargo-calculator/cases.json",
);
const fixtures = JSON.parse(readFileSync(fixturePath, "utf8")) as FixtureFile;

function assertApprox(actual: number, expected: number, tolerance = 1e-12): void {
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `Expected ${actual} to be within ${tolerance} of ${expected}`,
  );
}

for (const fixture of fixtures.valid_cases) {
  test(fixture.case_id, () => {
    const output = calculateCargo(fixture.input);
    const expected = fixture.expected;
    const tolerance = fixture.tolerance ?? 1e-12;

    assert.equal(output.status, expected.status);
    if (typeof expected.package_count === "number") {
      assert.equal(output.package_count, expected.package_count);
    }
    if (typeof expected.package_type_count === "number") {
      assert.equal(output.package_type_count, expected.package_type_count);
    }
    if (typeof expected.total_cbm === "number") {
      assertApprox(output.total_cbm, expected.total_cbm, tolerance);
    }
    if (typeof expected.total_gross_weight_kg === "number") {
      assertApprox(output.total_gross_weight_kg, expected.total_gross_weight_kg, tolerance);
    }
    if (typeof expected.total_volumetric_weight_kg === "number") {
      assertApprox(
        output.total_volumetric_weight_kg as number,
        expected.total_volumetric_weight_kg,
        tolerance,
      );
    } else if (expected.total_volumetric_weight_kg === null) {
      assert.equal(output.total_volumetric_weight_kg, null);
    }
    if (typeof expected.total_chargeable_weight_kg === "number") {
      assertApprox(
        output.total_chargeable_weight_kg as number,
        expected.total_chargeable_weight_kg,
        tolerance,
      );
    } else if (expected.total_chargeable_weight_kg === null) {
      assert.equal(output.total_chargeable_weight_kg, null);
    }

    const first = output.packages[0];
    assert.ok(first);
    if (typeof expected.cbm_per_package === "number") {
      assertApprox(first.cbm_per_package, expected.cbm_per_package, tolerance);
    }
    if (typeof expected.volumetric_weight_per_package_kg === "number") {
      assertApprox(
        first.volumetric_weight_per_package_kg as number,
        expected.volumetric_weight_per_package_kg,
        tolerance,
      );
    }
    if (typeof expected.gross_weight_per_package_kg === "number") {
      assertApprox(
        first.gross_weight_per_package_kg,
        expected.gross_weight_per_package_kg,
        tolerance,
      );
    }
    if (expected.normalized_dimensions_mm) {
      assert.deepEqual(first.normalized_dimensions_mm, expected.normalized_dimensions_mm);
    }
  });
}

for (const fixture of fixtures.invalid_cases) {
  test(fixture.case_id, () => {
    assert.throws(
      () => calculateCargo(fixture.input),
      (error: unknown) => {
        assert.ok(error instanceof CargoCalculatorError);
        assert.equal(error.code, fixture.expected_error.code);
        assert.equal(error.field_path, fixture.expected_error.field_path);
        return true;
      },
    );
  });
}
