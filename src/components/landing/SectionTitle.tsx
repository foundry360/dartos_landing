"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right";
  size?: "lg" | "xl";
};

export function SectionTitle({
  children,
  className,
  align = "left",
  size = "lg",
}: SectionTitleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.h2
      className={cn(
        size === "xl" ? "text-display-xl" : "text-display-lg",
        align === "right" && "text-right",
        className,
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.h2>
  );
}
