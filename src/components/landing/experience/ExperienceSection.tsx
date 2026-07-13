"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { AppScreen } from "@/components/landing/experience/AppScreen";
import { DeviceFrame } from "@/components/landing/experience/DeviceFrame";
import { ExperienceProgress } from "@/components/landing/experience/ExperienceProgress";
import { ScreenNavigator } from "@/components/landing/experience/ScreenNavigator";
import { EXPERIENCE_SHOWCASE } from "@/features/landing/data";
import { cn } from "@/utils";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const screens = EXPERIENCE_SHOWCASE.screens;
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(
      screens.length - 1,
      Math.max(0, Math.floor(latest * screens.length)),
    );
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  const scrollToScreen = useCallback(
    (index: number) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      const scrollable = section.offsetHeight - window.innerHeight;
      const target =
        absoluteTop + (index / Math.max(screens.length - 1, 1)) * scrollable;
      window.scrollTo({
        top: target,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [prefersReducedMotion, screens.length],
  );

  const activeScreen = screens[activeIndex] ?? screens[0];

  return (
    <section
      ref={sectionRef}
      id={EXPERIENCE_SHOWCASE.id}
      className="section-shell section-tone-deep relative"
      style={{ height: `${screens.length * 100}vh` }}
    >
      <div className="section-wash-soft sticky top-0 flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(255,255,255,0.05),transparent_60%),radial-gradient(ellipse_90%_60%_at_50%_50%,rgba(255,255,255,0.025),transparent_72%)]"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)_0.38fr] lg:gap-8 xl:gap-12">
          <ScreenNavigator
            labels={screens.map((screen) => screen.label)}
            activeIndex={activeIndex}
            onSelect={scrollToScreen}
            className="hidden shrink-0 lg:block"
          />

          <div className="relative order-1 flex flex-col items-center gap-6 lg:order-none">
            <div className="flex w-full gap-2 overflow-x-auto pb-1 lg:hidden">
              {screens.map((screen, index) => (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => scrollToScreen(index)}
                  className={cn(
                    "shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors",
                    index === activeIndex
                      ? "border-[#84C126]/50 text-[#84C126]"
                      : "border-white/10 text-white/35",
                  )}
                >
                  {screen.label}
                </button>
              ))}
            </div>

            <motion.div
              className="shrink-0"
              animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: {
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
            >
              <DeviceFrame>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen.id}
                    className="absolute inset-0"
                    initial={
                      prefersReducedMotion
                        ? false
                        : { opacity: 0, y: 28, scale: 0.96 }
                    }
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={
                      prefersReducedMotion
                        ? undefined
                        : { opacity: 0, y: -20, scale: 1.02 }
                    }
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <AppScreen
                      screenId={activeScreen.id}
                      title={activeScreen.title}
                    />
                  </motion.div>
                </AnimatePresence>
              </DeviceFrame>
            </motion.div>
          </div>

          <div className="relative order-2 max-w-xl lg:order-none lg:justify-self-end">
            <ExperienceProgress
              index={activeIndex}
              total={screens.length}
              className="mb-8"
            />

            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.92] tracking-[0.02em]">
              <span className="block whitespace-nowrap">Experience</span>
              <span className="block whitespace-nowrap">
                Every Throw
                <span className="text-[#84C126]">.</span>
              </span>
            </h2>

            <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-white/45 sm:max-w-lg sm:text-lg">
              {EXPERIENCE_SHOWCASE.supporting.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
