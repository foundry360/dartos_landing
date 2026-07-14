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

type ExperienceScreenshotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

export function ExperienceScreenshot({
  src,
  alt,
  className,
  priority,
  fit = "cover",
}: ExperienceScreenshotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [48, -48],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [1, 1, 1] : [0.96, 1, 0.98],
  );

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      <motion.div
        style={prefersReducedMotion ? undefined : { y, scale }}
        className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[1.75rem] lg:rounded-[2rem]"
      >
        <div className="relative aspect-[1024/715] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            quality={95}
            sizes="(max-width: 1024px) 92vw, (max-width: 1536px) 50vw, 760px"
            className={cn(
              "object-center",
              fit === "contain" ? "object-contain" : "object-cover",
            )}
            priority={priority}
          />
        </div>
      </motion.div>
    </div>
  );
}
