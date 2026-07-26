"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EcosystemVisualization } from "@/components/landing/EcosystemVisualization";
import { INTERFACE_SECTION } from "@/features/landing/data";

export function MobileVectorOs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="section-shell section-tone-lift section-wash-mist relative px-5 py-16"
    >
      <div className="relative z-10">
        <motion.p
          className="mb-5 text-xs uppercase tracking-[0.3em] text-white/35"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {INTERFACE_SECTION.eyebrow}
        </motion.p>

        <motion.h2
          className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,10vw,3.25rem)] font-extrabold leading-[0.95] tracking-[0.02em]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {INTERFACE_SECTION.heading[0]}
          <br />
          {INTERFACE_SECTION.heading[1].slice(0, -1)}
          <span className="text-[#84C126]">.</span>
        </motion.h2>

        <motion.p
          className="mt-6 text-base leading-relaxed text-white/50"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {INTERFACE_SECTION.supporting}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <EcosystemVisualization compact />
        </motion.div>
      </div>
    </section>
  );
}
