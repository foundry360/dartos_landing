"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionTitle } from "@/components/landing/SectionTitle";

export function StatementScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center px-6 py-32 sm:px-10 lg:px-16">
      <div className="relative mx-auto w-full max-w-[1600px]">
        <SectionTitle size="xl" className="max-w-5xl">
          Darts deserves
          <br />
          <span className="text-[#84C126]">Better Software.</span>
        </SectionTitle>

        <motion.p
          className="mt-12 max-w-lg text-base leading-relaxed text-white/45 sm:mt-16 sm:text-lg lg:ml-[12%]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Placeholder sentence describing the product philosophy in a single,
          understated line.
        </motion.p>
      </div>
    </section>
  );
}
