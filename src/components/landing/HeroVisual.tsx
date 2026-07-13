"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/utils";

type HeroVisualProps = {
  className?: string;
};

export function HeroVisual({ className }: HeroVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none relative mx-auto h-[min(92vh,960px)] w-full",
        "lg:absolute lg:inset-y-0 lg:right-[-8vw] lg:mx-0 lg:h-full lg:w-[62vw] lg:max-w-[1000px]",
        className,
      )}
    >
      <motion.div
        className="absolute inset-0 origin-bottom-right scale-[1.04] sm:scale-[1.06] lg:scale-[1.18] xl:scale-[1.22]"
        style={prefersReducedMotion ? undefined : { y: imageY }}
        initial={prefersReducedMotion ? false : { opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/hero-athlete-clean.png"
          alt="Professional darts player in mid-throw"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 62vw"
          className="object-contain object-bottom lg:object-[right_bottom]"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent lg:h-32"
        />
      </motion.div>
    </div>
  );
}
