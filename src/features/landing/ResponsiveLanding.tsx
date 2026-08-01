"use client";

import { TrialSignupModal } from "@/components/landing";
import { LandingExperience } from "@/features/landing/LandingExperience";
import { MobileLandingExperience } from "@/features/landing/MobileLandingExperience";
import { useMediaQuery } from "@/hooks";

/** Tailwind `md` = 768px. Mobile experience mounts below that. */
const MOBILE_QUERY = "(max-width: 767px)";

export function ResponsiveLanding() {
  const isMobile = useMediaQuery(MOBILE_QUERY, false);

  return (
    <>
      <TrialSignupModal />
      {isMobile ? <MobileLandingExperience /> : <LandingExperience />}
    </>
  );
}
