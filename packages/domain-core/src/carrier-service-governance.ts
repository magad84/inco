export type CarrierServiceAvailability =
  | "candidate"
  | "confirmation_required"
  | "source_unavailable"
  | "stale_review_required";

export interface CarrierServiceGovernanceRecord {
  carrierId: string;
  serviceId: string;
  status: string;
  sources: string[];
  confirmation: {
    requiredBeforeBooking: boolean;
    contactChannel: string;
    reason: { en: string; ar: string };
  };
  review: {
    lastVerifiedAt: string | null;
    nextReviewAt: string;
    reviewOwner: string;
    notes?: string;
  };
}

export interface CarrierServiceGovernanceResult {
  carrierId: string;
  serviceId: string;
  availability: CarrierServiceAvailability;
  stale: boolean;
  bookingConfirmationRequired: boolean;
  reasons: string[];
  requiredActions: string[];
  sourceIds: string[];
}

function parseDate(value: string, label: string): Date {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`${label} must be a valid ISO date`);
  }
  return parsed;
}

export function evaluateCarrierServiceGovernance(
  record: CarrierServiceGovernanceRecord,
  transactionDate: string,
): CarrierServiceGovernanceResult {
  const tx = parseDate(transactionDate, "transactionDate");
  const nextReview = parseDate(record.review.nextReviewAt, `${record.serviceId}.nextReviewAt`);
  const stale = tx > nextReview;
  const reasons: string[] = [];
  const requiredActions = new Set<string>();

  if (!record.carrierId || !record.serviceId) {
    throw new Error("carrierId and serviceId are required");
  }
  if (!record.confirmation.contactChannel) {
    throw new Error(`${record.serviceId}.confirmation.contactChannel is required`);
  }

  let availability: CarrierServiceAvailability = "candidate";

  if (record.sources.length === 0 || record.status === "source_unavailable") {
    availability = "source_unavailable";
    reasons.push("No normalized official service source supports a current candidate result.");
    requiredActions.add("normalize_official_service_source");
  } else if (stale || record.review.lastVerifiedAt === null) {
    availability = "stale_review_required";
    reasons.push("The service record is past its review date or has never been verified.");
    requiredActions.add("refresh_official_service_source");
  } else if (
    record.confirmation.requiredBeforeBooking ||
    record.status === "volatile_confirmation_required" ||
    record.status === "verified_partial"
  ) {
    availability = "confirmation_required";
    reasons.push("The record supports candidate selection only; current booking confirmation remains mandatory.");
  }

  if (record.confirmation.requiredBeforeBooking) {
    requiredActions.add(record.confirmation.contactChannel);
  }
  requiredActions.add("confirm_current_route_capacity_cutoff_and_acceptance");

  return {
    carrierId: record.carrierId,
    serviceId: record.serviceId,
    availability,
    stale,
    bookingConfirmationRequired: true,
    reasons,
    requiredActions: [...requiredActions],
    sourceIds: [...record.sources],
  };
}
