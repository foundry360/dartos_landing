"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BuiltAroundGameSection,
  BuiltForGameScene,
  ClosingCtaScene,
  ExperienceSection,
  Footer,
  GameCarousel,
  HeroScene,
  ScreenshotScene,
  SiteNav,
  StatementScene,
} from "@/components/landing";

export function LandingExperience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="page-gradient text-foreground">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      {/* Keep fixed nav outside motion wrappers — opacity/transform break position:fixed */}
      <SiteNav />

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <main>
          <HeroScene />
          <ScreenshotScene />
          <StatementScene />
          <GameCarousel />
          <ExperienceSection />
          <BuiltAroundGameSection />
          <BuiltForGameScene />
          <ClosingCtaScene />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}
