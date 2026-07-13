"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { CHART_DATA, STATS } from "@/features/landing/data";
import { cn } from "@/utils";

function CounterDisplay({
  motionValue,
  decimals,
  suffix,
}: {
  motionValue: ReturnType<typeof useSpring>;
  decimals: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest.toFixed(decimals)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [decimals, motionValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function StatCard({
  value,
  suffix,
  label,
  decimals,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const display = useSpring(motionValue, { stiffness: 80, damping: 25 });

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      motionValue.set(value);
      return;
    }

    const duration = 2200;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      motionValue.set(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, motionValue, prefersReducedMotion, value]);

  return (
    <motion.div
      ref={ref}
      className="border-t border-white/8 pt-8"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6rem)] font-extrabold leading-none tracking-[0.03em]">
        <CounterDisplay
          motionValue={display}
          decimals={decimals}
          suffix={suffix}
        />
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/35">
        {label}
      </p>
    </motion.div>
  );
}

export function StatsScene() {
  const prefersReducedMotion = useReducedMotion();
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: "-10%" });
  const maxValue = Math.max(...CHART_DATA);

  return (
    <section
      id="stats"
      className="section-shell section-tone-lift section-wash-soft relative min-h-screen px-6 py-36 sm:px-10 sm:py-40 lg:px-16"
    >
      <div className="relative z-10 mx-auto max-w-[1600px]">
        <motion.p
          className="mb-20 text-sm uppercase tracking-[0.3em] text-white/35"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Performance
        </motion.p>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {STATS.map((stat, index) => (
              <StatCard
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.decimals}
                index={index}
              />
            ))}
          </div>

          <motion.div
            ref={chartRef}
            className="flex flex-col justify-end"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-64 items-end gap-2 sm:h-80 sm:gap-3">
              {CHART_DATA.map((value, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "flex-1 rounded-t-sm",
                    index % 3 === 0 ? "bg-electric/80" : "bg-white/15",
                  )}
                  initial={{ height: 0 }}
                  animate={
                    chartInView
                      ? { height: `${(value / maxValue) * 100}%` }
                      : { height: 0 }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0 : 1.2,
                    delay: prefersReducedMotion ? 0 : index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ))}
            </div>
            <p className="mt-6 text-sm text-white/30">
              Placeholder chart label
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
