"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedLinkWithIcon } from "@/components/landing/AnimatedLink";

export function DownloadScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="download"
      className="section-shell section-tone-panel section-wash-depth relative flex min-h-screen items-center justify-center px-6 py-40 sm:px-10 sm:py-48"
    >
      <motion.div
        className="relative z-10 text-center"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatedLinkWithIcon
          href="#download"
          className="gap-4 rounded-full border border-white/15 bg-white/[0.03] px-10 py-5 font-[family-name:var(--font-display)] text-xl font-extrabold uppercase tracking-[0.06em] backdrop-blur-sm transition-all duration-500 hover:border-electric/40 hover:bg-electric/5 sm:px-14 sm:py-6 sm:text-2xl [&_svg]:h-6 [&_svg]:w-6"
        >
          Download
        </AnimatedLinkWithIcon>
      </motion.div>
    </section>
  );
}
