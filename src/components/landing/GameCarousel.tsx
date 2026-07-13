"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GAME_MODES } from "@/features/landing/data";
import { cn } from "@/utils";

export function GameCarousel() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="modes" className="relative min-h-screen py-32">
      <div className="mb-16 px-6 sm:px-10 lg:px-16">
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-white/35"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Game modes
        </motion.p>
        <motion.h2
          className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,5rem)] font-extrabold tracking-[0.03em]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Pick your format.
        </motion.h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div className="flex gap-5 overflow-x-auto px-6 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 sm:px-10 lg:px-16 [&::-webkit-scrollbar]:hidden">
          {GAME_MODES.map((mode, index) => (
            <motion.article
              key={mode.id}
              className={cn(
                "group relative h-[min(70vw,420px)] w-[min(72vw,300px)] shrink-0 overflow-hidden rounded-[2rem] border border-white/8 bg-surface",
                "transition-colors duration-500 hover:border-white/15",
              )}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-b",
                  mode.gradient,
                )}
              />

              <div className="relative flex h-full flex-col justify-between p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                  <span className="font-[family-name:var(--font-display)] text-lg font-bold">
                    {mode.id.slice(0, 2).toUpperCase()}
                  </span>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-[0.03em]">
                    {mode.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/40">{mode.subtitle}</p>
                </div>
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,255,102,0.08),transparent_60%)]" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
