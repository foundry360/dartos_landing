"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { AnimatedLinkWithIcon } from "@/components/landing/AnimatedLink";
import { HeroVisual } from "@/components/landing/HeroVisual";
import {
  APP_URL,
  HERO_SUPPORTING_LINE,
  HERO_WORDS,
  SIGN_UP_URL,
} from "@/features/landing/data";

export function HeroScene() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 120]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      <HeroVisual className="hidden lg:block" />

      <motion.div
        style={prefersReducedMotion ? undefined : { opacity, scale, y }}
        className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 pt-28 pb-20 sm:px-10 lg:px-16 lg:pt-0 lg:pb-0"
      >
        <div className="relative z-20 flex flex-col justify-center lg:min-h-screen lg:max-w-[58%] lg:py-24">
          <div className="space-y-1 sm:space-y-2">
            {HERO_WORDS.map((word, index) => (
              <motion.p
                key={word}
                className="text-display-hero text-white"
                initial={prefersReducedMotion ? false : { opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word.slice(0, -1)}
                <span className="text-[#84C126]">.</span>
              </motion.p>
            ))}
          </div>

          <motion.p
            className="mt-10 max-w-xl text-lg leading-relaxed text-white/40 sm:mt-14 sm:max-w-2xl sm:text-xl lg:text-2xl"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {HERO_SUPPORTING_LINE}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedLinkWithIcon
              href={APP_URL}
              className="gap-3 rounded-full border border-[#84C126] bg-transparent px-8 py-4 font-[family-name:var(--font-display)] text-base font-extrabold uppercase tracking-[0.06em] transition-all duration-500 hover:border-[#84C126] hover:bg-transparent sm:px-10 sm:py-5 sm:text-lg"
            >
              Play Now
            </AnimatedLinkWithIcon>

            <AnimatedLinkWithIcon
              href={SIGN_UP_URL}
              className="gap-3 rounded-full border border-white/15 bg-transparent px-8 py-4 font-[family-name:var(--font-display)] text-base font-extrabold uppercase tracking-[0.06em] transition-all duration-500 hover:border-white/30 hover:bg-transparent sm:px-10 sm:py-5 sm:text-lg"
            >
              Create Account
            </AnimatedLinkWithIcon>
          </motion.div>
        </div>

        <HeroVisual className="mt-8 lg:hidden" />
      </motion.div>
    </section>
  );
}
