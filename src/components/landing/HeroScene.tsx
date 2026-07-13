"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { HeroVisual } from "@/components/landing/HeroVisual";
import { HERO_WORDS } from "@/features/landing/data";

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
      <HeroVisual className="z-0 hidden lg:block" />

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
                <span
                  className={
                    index === 2
                      ? "bg-gradient-to-r from-electric to-white bg-clip-text text-transparent"
                      : undefined
                  }
                >
                  {word}
                </span>
              </motion.p>
            ))}
          </div>

          <motion.p
            className="mt-10 max-w-xs text-sm leading-relaxed text-white/40 sm:mt-14 sm:text-base"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Placeholder supporting line for the hero scene.
          </motion.p>
        </div>

        <HeroVisual className="z-0 mt-8 lg:hidden" />
      </motion.div>
    </section>
  );
}
