"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useCallback } from "react";
import { cn } from "@/utils";

type FloatingPhoneProps = {
  className?: string;
};

export function FloatingPhone({ className }: FloatingPhoneProps) {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / 25;
      const y = (event.clientY - rect.top - rect.height / 2) / 25;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY, prefersReducedMotion],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,102,0.12),transparent_65%)]"
      />

      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : { x: springX, y: springY, rotateX: springY, rotateY: springX }
        }
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -14, 0], rotateZ: [0, 0.5, 0] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="relative w-[min(88vw,320px)] perspective-[1200px] sm:w-[min(42vw,380px)] lg:w-[420px]"
      >
        <div className="glow-electric relative rounded-[3rem] border border-white/10 bg-[#0d0d0d] p-3 shadow-2xl">
          <div className="absolute left-1/2 top-5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.4rem] bg-[#111]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,102,0.18),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(220,20,60,0.14),transparent_40%)]" />

            <div className="relative flex h-full flex-col p-5 pt-12">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                  VectorDarts
                </span>
                <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_12px_#00ff66]" />
              </div>

              <div className="mb-8">
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/35">
                  Current Match
                </p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-[0.02em]">
                  501
                </p>
              </div>

              <div className="relative mx-auto mb-8 aspect-square w-[78%]">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[12%] rounded-full border border-white/8" />
                <div className="absolute inset-[24%] rounded-full border border-white/6" />
                <div className="absolute inset-[36%] rounded-full bg-[#141414]" />
                <div className="absolute left-1/2 top-[8%] h-3 w-3 -translate-x-1/2 rounded-full bg-electric" />
                <div className="absolute right-[18%] top-[22%] h-2.5 w-2.5 rounded-full bg-crimson" />
                <div className="absolute bottom-[28%] left-[24%] h-2 w-2 rounded-full bg-white/80" />
              </div>

              <div className="mt-auto grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/35">
                    You
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    247
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                  <p className="text-[10px] uppercase tracking-wider text-white/35">
                    Opponent
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white/60">
                    198
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
