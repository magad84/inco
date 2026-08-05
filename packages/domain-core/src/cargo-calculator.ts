import { Decimal } from "decimal.js";

export type DimensionUnit = "mm" | "cm" | "m" | "in";
export type WeightUnit = "kg" | "g" | "lb";
export type VerificationStatus =
  | "VERIFIED_CURRENT"
  | "USER_SUPPLIED_UNVERIFIED"
  | "STALE_REVIEW_REQUIRED";

export interface PackageInput {
  package_type_id: string;
  description?: string;
  length: number;
  width: number;
  height: number;
  dimension_unit: DimensionUnit;
  quantity: number;
  gross_weight_per_package: number;
  weight_unit: WeightUnit;
}

export interface CarrierRuleInput {
  provider: string;
  service: string;
  market_or_route: string;
  divisor_cm3_per_kg: number;
  calculation_basis: "per_piece" | "shipment_total";
  higher_of_actual_and_volumetric: boolean;
  rounding_increment_kg?: number | null;
  minimum_chargeable_weight_kg?: number | null;
  source_id?: string;
  effective_from?: string;
  effective_to?: string | null;
  last_verified?: string;
  verification_status: VerificationStatus;
}

export interface CargoCalculatorInput {
  calculation_id: string;
  locale?: "ar" | "en";
  packages: PackageInput[];
  carrier_rule?: CarrierRuleInput | null;
  requested_outputs?: string[];
}

export interface PackageCalculation {
  package_type_id: string;
  quantity: number;
  normalized_dimensions_mm: {
    length: number;
    width: number;
    height: number;
  };
  gross_weight_per_package_kg: number;
  cbm_per_package: number;
  total_cbm: number;
  volumetric_weight_per_package_kg: number | null;
  total_volumetric_weight_kg: number | null;
  chargeable_weight_per_package_kg: number | null;
  total_chargeable_weight_kg: number | null;
}

export interface CargoCalculatorOutput {
  calculation_id: string;
  status: "SUCCESS";
  calculator_version: "0.1.1";
  package_count: number;
  package_type_count: number;
  total_cbm: number;
  total_gross_weight_kg: number;
  total_volumetric_weight_kg: number | null;
  total_chargeable_weight_kg: number | null;
  packages: PackageCalculation[];
  audit: {
    arithmetic: "decimal.js";
    carrier_rule_source_id: string | null;
    carrier_rule_verification_status: VerificationStatus | null;
    calculation_basis: "per_piece" | "shipment_total" | null;
  };
  warnings: string[];
}

export class CargoCalculatorError extends Error {
  constructor(
    public readonly code: string,
    public readonly field_path: string,
    message: string,
  ) {
    super(message);
    this.name = "CargoCalculatorError";
  }
}

const DIMENSION_UNITS = new Set<DimensionUnit>(["mm", "cm", "m", "in"]);
const WEIGHT_UNITS = new Set<WeightUnit>(["kg", "g", "lb"]);

const MM_PER_UNIT: Record<DimensionUnit, Decimal> = {
  mm: new Decimal(1),
  cm: new Decimal(10),
  m: new Decimal(1000),
  in: new Decimal("25.4"),
};

const KG_PER_UNIT: Record<WeightUnit, Decimal> = {
  kg: new Decimal(1),
  g: new Decimal("0.001"),
  lb: new Decimal("0.45359237"),
};

function required(value: unknown, path: string): void {
  if (value === undefined || value === null || value === "") {
    throw new CargoCalculatorError(
      "VALIDATION_REQUIRED_FIELD",
      path,
      `${path} is required`,
    );
  }
}

function positiveNumber(value: number, path: string): void {
  if (!Number.isFinite(value) || value <= 0) {
    throw new CargoCalculatorError(
      "VALIDATION_POSITIVE_NUMBER_REQUIRED",
      path,
      `${path} must be a positive finite number`,
    );
  }
}

function positiveInteger(value: number, path: string): void {
  if (!Number.isInteger(value) || value <= 0) {
    throw new CargoCalculatorError(
      "VALIDATION_POSITIVE_INTEGER_REQUIRED",
      path,
      `${path} must be a positive integer`,
    );
  }
}

function enumValue<T extends string>(
  value: T,
  allowed: ReadonlySet<T>,
  path: string,
): void {
  if (!allowed.has(value)) {
    throw new CargoCalculatorError(
      "VALIDATION_UNSUPPORTED_VALUE",
      path,
      `${path} contains an unsupported value`,
    );
  }
}

function toNumber(value: Decimal): number {
  return Number(value.toSignificantDigits(15).toString());
}

function roundUp(value: Decimal, increment?: number | null): Decimal {
  if (increment === undefined || increment === null) return value;
  positiveNumber(increment, "carrier_rule.rounding_increment_kg");
  const step = new Decimal(increment);
  return value.div(step).ceil().mul(step);
}

function applyShipmentMinimum(
  value: Decimal,
  minimum?: number | null,
): Decimal {
  if (minimum === undefined || minimum === null) return value;
  positiveNumber(minimum, "carrier_rule.minimum_chargeable_weight_kg");
  return Decimal.max(value, new Decimal(minimum));
}

function validate(input: CargoCalculatorInput): void {
  required(input.calculation_id, "calculation_id");
  required(input.packages, "packages");
  if (!Array.isArray(input.packages) || input.packages.length === 0) {
    throw new CargoCalculatorError(
      "VALIDATION_REQUIRED_FIELD",
      "packages",
      "At least one package type is required",
    );
  }

  input.packages.forEach((pkg, index) => {
    const base = `packages[${index}]`;
    required(pkg.package_type_id, `${base}.package_type_id`);
    required(pkg.dimension_unit, `${base}.dimension_unit`);
    required(pkg.weight_unit, `${base}.weight_unit`);
    enumValue(pkg.dimension_unit, DIMENSION_UNITS, `${base}.dimension_unit`);
    enumValue(pkg.weight_unit, WEIGHT_UNITS, `${base}.weight_unit`);
    positiveNumber(pkg.length, `${base}.length`);
    positiveNumber(pkg.width, `${base}.width`);
    positiveNumber(pkg.height, `${base}.height`);
    positiveInteger(pkg.quantity, `${base}.quantity`);
    positiveNumber(pkg.gross_weight_per_package, `${base}.gross_weight_per_package`);
  });

  const rule = input.carrier_rule;
  if (rule?.verification_status === "STALE_REVIEW_REQUIRED") {
    throw new CargoCalculatorError(
      "STALE_CARRIER_RULE_BLOCKED",
      "carrier_rule.verification_status",
      "A stale carrier rule cannot produce a definitive commercial result",
    );
  }
  if (rule) {
    positiveNumber(rule.divisor_cm3_per_kg, "carrier_rule.divisor_cm3_per_kg");
    if (rule.calculation_basis !== "per_piece" && rule.calculation_basis !== "shipment_total") {
      throw new CargoCalculatorError(
        "VALIDATION_UNSUPPORTED_VALUE",
        "carrier_rule.calculation_basis",
        "Unsupported carrier calculation basis",
      );
    }
  }
}

export function calculateCargo(input: CargoCalculatorInput): CargoCalculatorOutput {
  validate(input);
  const rule = input.carrier_rule ?? null;

  const packageResults = input.packages.map((pkg): PackageCalculation => {
    const lengthMm = new Decimal(pkg.length).mul(MM_PER_UNIT[pkg.dimension_unit]);
    const widthMm = new Decimal(pkg.width).mul(MM_PER_UNIT[pkg.dimension_unit]);
    const heightMm = new Decimal(pkg.height).mul(MM_PER_UNIT[pkg.dimension_unit]);
    const quantity = new Decimal(pkg.quantity);
    const grossKg = new Decimal(pkg.gross_weight_per_package).mul(KG_PER_UNIT[pkg.weight_unit]);

    const volumeMm3 = lengthMm.mul(widthMm).mul(heightMm);
    const cbmPerPackage = volumeMm3.div("1000000000");
    const totalCbm = cbmPerPackage.mul(quantity);

    let volumetricPerPackage: Decimal | null = null;
    let totalVolumetric: Decimal | null = null;
    let chargeablePerPackage: Decimal | null = null;
    let totalChargeable: Decimal | null = null;

    if (rule) {
      const volumeCm3 = volumeMm3.div(1000);
      volumetricPerPackage = volumeCm3.div(rule.divisor_cm3_per_kg);
      totalVolumetric = volumetricPerPackage.mul(quantity);

      if (rule.calculation_basis === "per_piece") {
        let pieceChargeable = rule.higher_of_actual_and_volumetric
          ? Decimal.max(grossKg, volumetricPerPackage)
          : volumetricPerPackage;
        pieceChargeable = roundUp(pieceChargeable, rule.rounding_increment_kg);
        chargeablePerPackage = pieceChargeable;
        totalChargeable = pieceChargeable.mul(quantity);
      }
    }

    return {
      package_type_id: pkg.package_type_id,
      quantity: pkg.quantity,
      normalized_dimensions_mm: {
        length: toNumber(lengthMm),
        width: toNumber(widthMm),
        height: toNumber(heightMm),
      },
      gross_weight_per_package_kg: toNumber(grossKg),
      cbm_per_package: toNumber(cbmPerPackage),
      total_cbm: toNumber(totalCbm),
      volumetric_weight_per_package_kg: volumetricPerPackage ? toNumber(volumetricPerPackage) : null,
      total_volumetric_weight_kg: totalVolumetric ? toNumber(totalVolumetric) : null,
      chargeable_weight_per_package_kg: chargeablePerPackage ? toNumber(chargeablePerPackage) : null,
      total_chargeable_weight_kg: totalChargeable ? toNumber(totalChargeable) : null,
    };
  });

  const totalCbm = packageResults.reduce(
    (sum, row) => sum.plus(row.total_cbm),
    new Decimal(0),
  );
  const totalGross = input.packages.reduce((sum, pkg) => {
    const kg = new Decimal(pkg.gross_weight_per_package).mul(KG_PER_UNIT[pkg.weight_unit]);
    return sum.plus(kg.mul(pkg.quantity));
  }, new Decimal(0));
  const totalVolumetric = rule
    ? packageResults.reduce(
        (sum, row) => sum.plus(row.total_volumetric_weight_kg ?? 0),
        new Decimal(0),
      )
    : null;

  let totalChargeable: Decimal | null = null;
  if (rule && totalVolumetric) {
    if (rule.calculation_basis === "shipment_total") {
      totalChargeable = rule.higher_of_actual_and_volumetric
        ? Decimal.max(totalGross, totalVolumetric)
        : totalVolumetric;
      totalChargeable = roundUp(totalChargeable, rule.rounding_increment_kg);
    } else {
      totalChargeable = packageResults.reduce(
        (sum, row) => sum.plus(row.total_chargeable_weight_kg ?? 0),
        new Decimal(0),
      );
    }
    totalChargeable = applyShipmentMinimum(
      totalChargeable,
      rule.minimum_chargeable_weight_kg,
    );
  }

  const warnings: string[] = [];
  if (rule?.verification_status === "USER_SUPPLIED_UNVERIFIED") {
    warnings.push("CARRIER_RULE_USER_SUPPLIED_UNVERIFIED");
  }

  return {
    calculation_id: input.calculation_id,
    status: "SUCCESS",
    calculator_version: "0.1.1",
    package_count: input.packages.reduce((sum, pkg) => sum + pkg.quantity, 0),
    package_type_count: input.packages.length,
    total_cbm: toNumber(totalCbm),
    total_gross_weight_kg: toNumber(totalGross),
    total_volumetric_weight_kg: totalVolumetric ? toNumber(totalVolumetric) : null,
    total_chargeable_weight_kg: totalChargeable ? toNumber(totalChargeable) : null,
    packages: packageResults,
    audit: {
      arithmetic: "decimal.js",
      carrier_rule_source_id: rule?.source_id ?? null,
      carrier_rule_verification_status: rule?.verification_status ?? null,
      calculation_basis: rule?.calculation_basis ?? null,
    },
    warnings,
  };
}
