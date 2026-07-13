"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { SCREENSHOTS } from "@/features/landing/data";
import { cn } from "@/utils";

function ScreenshotPanel({
  label,
  accent,
  index,
}: {
  label: string;
  accent: "electric" | "crimson";
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.4],
  );

  return (
    <motion.div
      ref={ref}
      style={prefersReducedMotion ? undefined : { y, scale, opacity }}
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/8",
        index % 2 === 0 ? "lg:mt-24" : "lg:-mt-12",
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          accent === "electric"
            ? "bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,102,0.15),transparent_50%),linear-gradient(160deg,#121212,#090909)]"
            : "bg-[radial-gradient(circle_at_70%_30%,rgba(220,20,60,0.18),transparent_50%),linear-gradient(160deg,#141010,#090909)]",
        )}
      />

      <div className="relative flex h-full flex-col justify-between p-8 sm:p-12">
        <span className="text-xs uppercase tracking-[0.25em] text-white/30">
          {label}
        </span>

        <div className="space-y-4">
          <div className="h-px w-16 bg-white/20" />
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl border border-white/6 bg-white/[0.03]"
              />
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full blur-3xl",
          accent === "electric" ? "bg-electric/10" : "bg-crimson/10",
        )}
      />
    </motion.div>
  );
}

export function ScreenshotScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative min-h-screen px-6 py-32 sm:px-10 lg:px-16"
    >
      <motion.p
        className="mb-16 max-w-md text-sm uppercase tracking-[0.3em] text-white/35"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        The interface
      </motion.p>

      <div className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-2 lg:gap-12">
        {SCREENSHOTS.map((shot, index) => (
          <ScreenshotPanel
            key={shot.id}
            label={shot.label}
            accent={shot.accent}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
