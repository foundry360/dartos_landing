"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { AppScreen } from "@/components/landing/experience/AppScreen";
import { EXPERIENCE_SHOWCASE } from "@/features/landing/data";
import { cn } from "@/utils";

export function MobileShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const screens = EXPERIENCE_SHOWCASE.screens;
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % screens.length) + screens.length) % screens.length;
      setActiveIndex(next);
    },
    [screens.length],
  );

  const active = screens[activeIndex] ?? screens[0];

  if (!active) {
    return null;
  }

  return (
    <section
      id={EXPERIENCE_SHOWCASE.id}
      className="section-shell section-tone-deep section-wash-depth relative px-5 py-16"
    >
      <div className="relative z-10">
        <motion.h2
          className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,10vw,3.25rem)] font-extrabold leading-[0.95] tracking-[0.02em]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {EXPERIENCE_SHOWCASE.headline[0]}
          <br />
          {EXPERIENCE_SHOWCASE.headline[1].slice(0, -1)}
          <span className="text-[#84C126]">.</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-base leading-relaxed text-white/45"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          {EXPERIENCE_SHOWCASE.supporting[0]}
        </motion.p>

        <motion.div
          className="relative mt-10"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            const start = touchStartX.current;
            const end = event.changedTouches[0]?.clientX;
            touchStartX.current = null;
            if (start == null || end == null) return;
            const delta = end - start;
            if (Math.abs(delta) < 40) return;
            goTo(activeIndex + (delta < 0 ? 1 : -1));
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[-8%] rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(132,193,38,0.12),transparent_62%)]"
          />

          {/* Landscape frame — screenshots are tablet-width UI, not portrait phone */}
          <div className="relative mx-auto w-full">
            <div className="relative rounded-[1.25rem] border border-white/12 bg-[#0a0a0a] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[1024/715] w-full overflow-hidden rounded-[0.95rem] bg-[#0f0f0f]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active.id}
                    className="absolute inset-0"
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, x: 28 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    exit={
                      prefersReducedMotion ? undefined : { opacity: 0, x: -28 }
                    }
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <AppScreen screenId={active.id} title={active.title} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-5 text-center text-sm text-white/40">{active.label}</p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {screens.map((screen, index) => (
            <button
              key={screen.id}
              type="button"
              aria-label={`Show ${screen.label}`}
              aria-current={index === activeIndex}
              onClick={() => goTo(index)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium tracking-[0.04em] transition-colors duration-300",
                index === activeIndex
                  ? "bg-[#84C126] text-black"
                  : "bg-white/5 text-white/50",
              )}
            >
              {screen.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-white/25">
          Swipe or tap to browse screens
        </p>
      </div>
    </section>
  );
}
