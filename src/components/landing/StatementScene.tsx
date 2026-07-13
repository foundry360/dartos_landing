"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { STATEMENT_SUPPORTING_LINE } from "@/features/landing/data";

export function StatementScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-32 sm:px-10 lg:px-16">
      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-12 lg:grid-cols-2 lg:gap-6">
        <div className="relative z-10">
          <SectionTitle size="xl" className="max-w-5xl">
            Darts deserves
            <br />
            <span className="text-[#84C126]">Better Software.</span>
          </SectionTitle>

          <motion.p
            className="mt-12 text-lg leading-relaxed text-white/45 sm:mt-16 sm:text-xl lg:max-w-none lg:whitespace-nowrap lg:text-xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {STATEMENT_SUPPORTING_LINE}
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto h-[min(72vh,760px)] w-full max-w-2xl lg:mx-0 lg:h-[min(92vh,980px)] lg:max-w-none lg:justify-self-stretch"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 origin-bottom scale-[1.06] sm:scale-[1.12] lg:scale-[1.22] xl:scale-[1.28]">
            <Image
              src="/statement-athlete-with-rings.png"
              alt="Professional darts player celebrating a win"
              fill
              quality={100}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-[88%_100%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
