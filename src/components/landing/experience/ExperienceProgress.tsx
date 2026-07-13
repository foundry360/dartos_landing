"use client";

import { cn } from "@/utils";

type ExperienceProgressProps = {
  index: number;
  total: number;
  className?: string;
};

export function ExperienceProgress({
  index,
  total,
  className,
}: ExperienceProgressProps) {
  const current = String(index + 1).padStart(2, "0");
  const of = String(total).padStart(2, "0");

  return (
    <p
      className={cn(
        "font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.2em] text-white/35",
        className,
      )}
      aria-live="polite"
    >
      <span className="text-[#84C126]">{current}</span>
      <span className="mx-2 text-white/20">/</span>
      <span>{of}</span>
    </p>
  );
}
