"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils";

type FeatureHighlightProps = {
  items: readonly string[];
  className?: string;
};

export function FeatureHighlight({ items, className }: FeatureHighlightProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ul className={cn("flex flex-wrap gap-x-8 gap-y-3", className)}>
      {items.map((item, index) => (
        <motion.li
          key={item}
          className="text-[11px] font-medium tracking-[0.18em] text-white/40 uppercase sm:text-xs"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{
            duration: 0.6,
            delay: 0.15 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="mr-2.5 inline-block h-1 w-1 rounded-full bg-[#84C126] align-middle" />
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
