"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedLinkWithIcon } from "@/components/landing/AnimatedLink";
import { CLOSING_CTA, getSignUpUrl } from "@/features/landing/data";

export function ClosingCtaScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id={CLOSING_CTA.id}
      className="section-shell section-tone-deep relative overflow-hidden px-6 py-32 sm:px-10 sm:py-40 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(132,193,38,0.14),transparent_58%),radial-gradient(ellipse_55%_45%_at_15%_100%,rgba(255,255,255,0.04),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_80%,rgba(132,193,38,0.06),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#84C126]/35 to-transparent"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <motion.h2
          className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,6vw,4.25rem)] font-extrabold leading-[0.95] tracking-[0.02em]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {CLOSING_CTA.headline.replace(/\?$/, "")}
          <span className="text-[#84C126]">?</span>
        </motion.h2>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/45 sm:mt-8 sm:text-lg"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {CLOSING_CTA.body}
        </motion.p>

        <motion.div
          className="mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:mt-12 sm:w-auto sm:flex-row sm:items-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedLinkWithIcon
            href={getSignUpUrl(CLOSING_CTA.primary.plan)}
            className="gap-3 rounded-full border border-[#84C126] bg-transparent px-8 py-4 font-[family-name:var(--font-display)] text-base font-extrabold tracking-[0.06em] uppercase transition-all duration-500 hover:border-[#84C126] sm:px-10 sm:py-5 sm:text-lg"
          >
            {CLOSING_CTA.primary.label}
          </AnimatedLinkWithIcon>

          <AnimatedLinkWithIcon
            href={getSignUpUrl(CLOSING_CTA.secondary.plan)}
            className="gap-3 rounded-full border border-white/15 bg-transparent px-8 py-4 font-[family-name:var(--font-display)] text-base font-extrabold tracking-[0.06em] uppercase transition-all duration-500 hover:border-white/30 sm:px-10 sm:py-5 sm:text-lg"
          >
            {CLOSING_CTA.secondary.label}
          </AnimatedLinkWithIcon>
        </motion.div>
      </div>
    </section>
  );
}
