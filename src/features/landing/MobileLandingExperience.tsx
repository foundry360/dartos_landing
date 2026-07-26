"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Footer, SiteNav } from "@/components/landing";
import {
  MobileBuiltForGame,
  MobileClosingCta,
  MobileHero,
  MobilePlans,
  MobileShowcase,
  MobileStatement,
  MobileVectorOs,
  MobileYourGame,
} from "@/components/landing/mobile";

export function MobileLandingExperience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="page-gradient text-foreground">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-[max(1rem,env(safe-area-inset-top))] focus:left-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      {/* Keep fixed nav outside motion wrappers — opacity/transform break position:fixed */}
      <SiteNav />

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <main>
          <MobileHero />
          <MobileVectorOs />
          <MobileStatement />
          <MobilePlans />
          <MobileShowcase />
          <MobileYourGame />
          <MobileBuiltForGame />
          <MobileClosingCta />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}
