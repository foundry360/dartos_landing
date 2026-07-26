"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedLinkWithIcon } from "@/components/landing/AnimatedLink";
import { CLOSING_CTA, getSignUpUrl } from "@/features/landing/data";

export function MobileClosingCta() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id={CLOSING_CTA.id}
      className="section-shell section-tone-deep relative overflow-hidden px-5 pt-16 pb-[max(3rem,env(safe-area-inset-bottom))]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(132,193,38,0.16),transparent_58%)]"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h2
          className="font-[family-name:var(--font-display)] text-[clamp(2rem,9vw,2.75rem)] font-extrabold leading-[0.95] tracking-[0.02em]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {CLOSING_CTA.headline.replace(/\?$/, "")}
          <span className="text-[#84C126]">?</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-base leading-relaxed text-white/45"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          {CLOSING_CTA.body}
        </motion.p>

        <motion.div
          className="mt-8 flex w-full flex-col gap-3"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.14 }}
        >
          <AnimatedLinkWithIcon
            href={getSignUpUrl(CLOSING_CTA.primary.plan)}
            className="w-full gap-3 rounded-full border border-[#84C126] px-8 py-4 font-[family-name:var(--font-display)] text-sm font-extrabold tracking-[0.06em] uppercase"
          >
            {CLOSING_CTA.primary.label}
          </AnimatedLinkWithIcon>

          <AnimatedLinkWithIcon
            href={getSignUpUrl(CLOSING_CTA.secondary.plan)}
            className="w-full gap-3 rounded-full border border-white/15 px-8 py-4 font-[family-name:var(--font-display)] text-sm font-extrabold tracking-[0.06em] uppercase"
          >
            {CLOSING_CTA.secondary.label}
          </AnimatedLinkWithIcon>
        </motion.div>
      </div>
    </section>
  );
}
