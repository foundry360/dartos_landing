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

const RING_SIZES = ["68%", "82%", "96%", "110%"] as const;
const RING_OPACITIES = [
  "border-white/12",
  "border-white/[0.09]",
  "border-white/[0.06]",
  "border-white/[0.04]",
] as const;

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
        {/* Rings — separate layer, never composited into the PNG */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 flex items-center justify-end pr-[6%] lg:pr-[2%]"
        >
          <div className="relative aspect-square h-[88%] max-h-full w-auto">
            {RING_SIZES.map((size, index) => (
              <div
                key={size}
                className={cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border",
                  RING_OPACITIES[index],
                )}
                style={{ width: size, height: size }}
              />
            ))}
          </div>
        </div>

        {/* Clean athlete image — untouched source asset */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/hero-athlete-clean.png"
            alt="Professional darts player in mid-throw"
            fill
            priority
            quality={100}
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-contain object-bottom lg:object-[right_bottom]"
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black/70 to-transparent lg:h-32"
        />
      </motion.div>
    </div>
  );
}
