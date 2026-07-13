"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/utils";

type AnimatedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function AnimatedLink({ href, children, className }: AnimatedLinkProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex"
      whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
    >
      <a
        href={href}
        className={cn(
          "group inline-flex items-center justify-center",
          className,
        )}
      >
        {children}
      </a>
    </motion.div>
  );
}

type AnimatedLinkWithIconProps = AnimatedLinkProps;

export function AnimatedLinkWithIcon({
  href,
  children,
  className,
}: AnimatedLinkWithIconProps) {
  return (
    <AnimatedLink href={href} className={className}>
      {children}
      <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-6 sm:w-6" />
    </AnimatedLink>
  );
}
