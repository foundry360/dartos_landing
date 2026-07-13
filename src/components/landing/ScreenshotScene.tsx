"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { EcosystemVisualization } from "@/components/landing/EcosystemVisualization";
import { INTERFACE_SECTION } from "@/features/landing/data";

export function ScreenshotScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="section-shell section-tone-lift section-wash-mist relative py-36 sm:py-40"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <div className="min-w-0">
            <motion.p
              className="mb-8 text-sm uppercase tracking-[0.3em] text-white/35"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {INTERFACE_SECTION.eyebrow}
            </motion.p>

            <motion.h2
              className="flex w-fit flex-col gap-0 font-[family-name:var(--font-display)] text-[clamp(3rem,6.5vw,5.75rem)] font-extrabold leading-[0.9] tracking-[0.02em]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block whitespace-nowrap">
                {INTERFACE_SECTION.heading[0]}
              </span>
              <span className="block whitespace-nowrap">
                {INTERFACE_SECTION.heading[1].slice(0, -1)}
                <span className="text-[#84C126]">.</span>
              </span>
            </motion.h2>

            <motion.div
              className="mt-10 sm:mt-12"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/vectoros-logo.png"
                alt={INTERFACE_SECTION.logoAlt}
                width={640}
                height={120}
                className="h-auto w-full max-w-md"
              />
            </motion.div>

            <motion.p
              className="mt-8 max-w-lg text-base leading-relaxed text-white/50 sm:mt-10 sm:text-lg"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {INTERFACE_SECTION.supporting}
            </motion.p>
          </div>

          <motion.div
            className="overflow-visible"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <EcosystemVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
