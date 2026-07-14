"use client";

import { cn } from "@/utils";

type SectionNavigationProps = {
  items: readonly { id: string; label: string }[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
};

export function SectionNavigation({
  items,
  activeId,
  onSelect,
  className,
}: SectionNavigationProps) {
  return (
    <nav
      aria-label="Built around your game"
      className={cn("flex flex-col gap-1", className)}
    >
      {items.map((item, index) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={cn(
              "group flex items-center gap-3 py-2 text-left transition-colors duration-400",
              active ? "text-white" : "text-white/30 hover:text-white/55",
            )}
            aria-current={active ? "true" : undefined}
          >
            <span
              className={cn(
                "font-[family-name:var(--font-display)] text-[10px] tracking-[0.14em] transition-colors",
                active ? "text-[#84C126]" : "text-white/25",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={cn(
                "h-px transition-all duration-500",
                active
                  ? "w-8 bg-[#84C126]"
                  : "w-4 bg-white/15 group-hover:w-6 group-hover:bg-white/30",
              )}
            />
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
