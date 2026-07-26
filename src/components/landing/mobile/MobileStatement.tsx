"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { STATEMENT_SUPPORTING_LINE } from "@/features/landing/data";

export function MobileStatement() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-shell section-tone-deep section-wash-soft relative overflow-hidden px-5 py-16">
      <div className="relative z-10">
        <motion.h2
          className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,10vw,3.25rem)] font-extrabold leading-[0.95] tracking-[0.02em]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Darts deserves
          <br />
          <span className="text-[#84C126]">Better Software.</span>
        </motion.h2>

        <motion.p
          className="mt-6 text-base leading-relaxed text-white/45"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {STATEMENT_SUPPORTING_LINE}
        </motion.p>

        <motion.div
          className="relative mt-2 w-full"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/statement-athlete-with-rings.png"
            alt="Professional darts player celebrating a win"
            width={900}
            height={1125}
            quality={90}
            sizes="100vw"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
