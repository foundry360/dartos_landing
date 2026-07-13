"use client";

import { cn } from "@/utils";

type ScreenNavigatorProps = {
  labels: readonly string[];
  activeIndex: number;
  onSelect?: (index: number) => void;
  className?: string;
};

export function ScreenNavigator({
  labels,
  activeIndex,
  onSelect,
  className,
}: ScreenNavigatorProps) {
  return (
    <nav aria-label="App screens" className={cn("space-y-1", className)}>
      {labels.map((label, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={label}
            type="button"
            onClick={() => onSelect?.(index)}
            className={cn(
              "group flex w-full items-center gap-4 py-2 text-left transition-colors duration-500",
              isActive ? "text-white" : "text-white/30 hover:text-white/55",
            )}
          >
            <span
              className={cn(
                "h-px w-5 transition-all duration-500",
                isActive
                  ? "w-8 bg-[#84C126]"
                  : "bg-white/20 group-hover:bg-white/35",
              )}
            />
            <span
              className={cn(
                "font-[family-name:var(--font-display)] text-sm font-extrabold uppercase tracking-[0.14em] transition-colors duration-500 sm:text-base",
                isActive && "text-[#84C126]",
              )}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
