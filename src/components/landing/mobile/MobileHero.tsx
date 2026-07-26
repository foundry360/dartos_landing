"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { AnimatedLinkWithIcon } from "@/components/landing/AnimatedLink";
import {
  APP_URL,
  HERO_SUPPORTING_LINE,
  HERO_WORDS,
  SIGN_UP_URL,
} from "@/features/landing/data";

export function MobileHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="section-shell section-tone-deep relative flex min-h-[100dvh] flex-col overflow-hidden pt-[max(5.5rem,calc(env(safe-area-inset-top)+4.5rem))]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(132,193,38,0.16),transparent_55%),radial-gradient(ellipse_70%_45%_at_80%_60%,rgba(255,255,255,0.04),transparent_50%)]"
      />

      <div className="relative z-10 flex flex-1 flex-col px-5 pb-8">
        <div className="space-y-0.5">
          {HERO_WORDS.map((word, index) => (
            <motion.p
              key={word}
              className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,14vw,4.25rem)] font-extrabold leading-[0.9] tracking-[0.04em] uppercase text-white"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.2 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word.slice(0, -1)}
              <span className="text-[#84C126]">.</span>
            </motion.p>
          ))}
        </div>

        <motion.p
          className="mt-6 max-w-sm text-base leading-relaxed text-white/45"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {HERO_SUPPORTING_LINE}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedLinkWithIcon
            href={APP_URL}
            className="w-full gap-3 rounded-full border border-[#84C126] bg-transparent px-8 py-4 font-[family-name:var(--font-display)] text-sm font-extrabold tracking-[0.06em] uppercase"
          >
            Play Now
          </AnimatedLinkWithIcon>

          <AnimatedLinkWithIcon
            href={SIGN_UP_URL}
            className="w-full gap-3 rounded-full border border-white/15 bg-transparent px-8 py-4 font-[family-name:var(--font-display)] text-sm font-extrabold tracking-[0.06em] uppercase"
          >
            Create Account
          </AnimatedLinkWithIcon>
        </motion.div>

        <motion.div
          className="relative mt-auto min-h-[42vw] flex-1 pt-8"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-x-[-8%] bottom-0 top-4">
            <Image
              src="/hero-athlete-clean.png"
              alt=""
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-contain object-bottom"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
