"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { INTERFACE_SECTION, VECTOROS_MODULES } from "@/features/landing/data";
import { cn } from "@/utils";

/** Shared geometry: orbit ring + dots share ORBIT_R; labels sit further out. */
const ORBIT_R = 36;
const LABEL_R = 47;
const CENTER = 50;
const VIEW = 100;
const BRAND = "#84C126";

type TooltipPlacement = "top" | "bottom" | "left" | "right";

function getAngle(index: number, total: number) {
  return (index / total) * Math.PI * 2 - Math.PI / 2;
}

function pointOnOrbit(angle: number, radius: number) {
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

/** 0° = right, 90° = bottom, 180° = left, 270° = top — place tooltip outward. */
function getTooltipPlacement(angle: number): TooltipPlacement {
  const deg = ((angle * 180) / Math.PI + 360) % 360;
  if (deg >= 315 || deg < 45) return "right";
  if (deg >= 45 && deg < 135) return "bottom";
  if (deg >= 135 && deg < 225) return "left";
  return "top";
}

function getLabelAlign(angle: number) {
  const deg = ((angle * 180) / Math.PI + 360) % 360;
  if (deg >= 315 || deg < 45) return "left";
  if (deg >= 45 && deg < 135) return "center";
  if (deg >= 135 && deg < 225) return "right";
  return "center";
}

const TOOLTIP_CLASSES: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 mb-3 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-3 -translate-x-1/2",
  left: "top-1/2 right-full mr-3 -translate-y-1/2",
  right: "top-1/2 left-full ml-3 -translate-y-1/2",
};

type EcosystemNodeProps = {
  id: string;
  label: string;
  description: string;
  index: number;
  total: number;
  isActive: boolean;
  isDimmed: boolean;
  onActivate: (id: string | null) => void;
};

function EcosystemNode({
  id,
  label,
  description,
  index,
  total,
  isActive,
  isDimmed,
  onActivate,
}: EcosystemNodeProps) {
  const prefersReducedMotion = useReducedMotion();
  const angle = getAngle(index, total);
  const dot = pointOnOrbit(angle, ORBIT_R);
  const labelPos = pointOnOrbit(angle, LABEL_R);
  const tooltipPlacement = getTooltipPlacement(angle);
  const align = getLabelAlign(angle);

  const handlers = {
    onPointerEnter: () => onActivate(id),
    onPointerLeave: () => onActivate(null),
    onFocus: () => onActivate(id),
    onBlur: () => onActivate(null),
    onClick: () => onActivate(isActive ? null : id),
  };

  return (
    <>
      {/* Dot on the green ring */}
      <motion.button
        type="button"
        className={cn(
          "absolute z-10 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0 sm:h-5 sm:w-5",
          isActive && "z-30",
          isDimmed && "opacity-35",
        )}
        style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-describedby={isActive ? `${id}-tooltip` : undefined}
        aria-pressed={isActive}
        aria-label={label}
        {...handlers}
      >
        <span
          className={cn(
            "relative flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-all duration-500 sm:h-4 sm:w-4",
            isActive
              ? "border-[#84C126] bg-[#84C126] shadow-[0_0_20px_rgba(132,193,38,0.55)]"
              : "border-[#84C126]/70 bg-[#141414]",
          )}
        >
          {isActive && (
            <span className="absolute inset-0 rounded-full bg-[#84C126]/30 blur-sm" />
          )}
        </span>
      </motion.button>

      {/* Label outside the ring (further along the same ray); tooltip anchors here */}
      <motion.button
        type="button"
        className={cn(
          "absolute z-10 -translate-x-1/2 -translate-y-1/2 border-0 bg-transparent p-0",
          isActive && "z-30",
          isDimmed && "opacity-35",
        )}
        style={{ left: `${labelPos.x}%`, top: `${labelPos.y}%` }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{
          duration: 0.55,
          delay: 0.25 + index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        tabIndex={-1}
        aria-hidden
        {...handlers}
      >
        <span className="relative block">
          <span
            className={cn(
              "block whitespace-nowrap text-[10px] leading-none font-medium tracking-[0.06em] uppercase transition-colors duration-500 sm:text-[11px]",
              align === "left" && "text-left",
              align === "right" && "text-right",
              align === "center" && "text-center",
              isActive ? "text-white" : "text-white/60",
            )}
          >
            {label}
          </span>

          <AnimatePresence>
            {isActive && (
              <motion.div
                id={`${id}-tooltip`}
                role="tooltip"
                initial={
                  prefersReducedMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.96,
                        y: tooltipPlacement === "top" ? 6 : -6,
                      }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: 0,
                        scale: 0.96,
                        y: tooltipPlacement === "top" ? 6 : -6,
                      }
                }
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "pointer-events-none absolute z-40 w-44 whitespace-normal rounded-xl border border-white/12 bg-[#0a0a0a]/96 px-3.5 py-3 text-left shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:w-52",
                  TOOLTIP_CLASSES[tooltipPlacement],
                )}
              >
                <p className="text-[10px] font-medium tracking-[0.15em] text-[#84C126] uppercase">
                  {label}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed wrap-break-word text-white/70 sm:text-sm">
                  {description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </span>
      </motion.button>
    </>
  );
}

export function EcosystemVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);
  const total = VECTOROS_MODULES.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const hubScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.98]);

  return (
    <div
      ref={containerRef}
      className="flex w-full justify-center lg:justify-end"
    >
      <div className="relative aspect-square w-full max-w-[42rem] overflow-visible lg:max-w-[40rem]">
        <svg
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden
        >
          <circle
            cx={CENTER}
            cy={CENTER}
            r={ORBIT_R}
            fill="none"
            stroke={BRAND}
            strokeOpacity={0.55}
            strokeWidth="0.4"
            strokeDasharray="36 2.5"
            strokeLinecap="round"
            className={
              prefersReducedMotion ? undefined : "ecosystem-solid-spin"
            }
            style={{ transformOrigin: "center", transformBox: "fill-box" }}
          />
          <circle
            cx={CENTER}
            cy={CENTER}
            r={ORBIT_R * 0.7}
            fill="none"
            stroke={BRAND}
            strokeOpacity={0.22}
            strokeWidth="0.3"
            strokeDasharray="1.2 1.6"
            className={
              prefersReducedMotion ? undefined : "ecosystem-dashed-spin"
            }
            style={{ transformOrigin: "center", transformBox: "fill-box" }}
          />
        </svg>

        {!prefersReducedMotion && (
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ scale: hubScale }}
            aria-hidden
          >
            <div className="h-36 w-36 rounded-full bg-[#84C126]/16 blur-2xl sm:h-44 sm:w-44" />
          </motion.div>
        )}

        <motion.div
          className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0a0a0a]/90 px-6 py-5 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-8 sm:py-6"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={prefersReducedMotion ? undefined : { scale: hubScale }}
        >
          {!prefersReducedMotion && (
            <span className="ecosystem-hub-pulse absolute inset-0 rounded-full border border-[#84C126]/55" />
          )}

          <Image
            src="/vectoros-logo.png"
            alt={INTERFACE_SECTION.logoAlt}
            width={220}
            height={42}
            className="relative h-auto w-[8.5rem] sm:w-[10rem]"
          />
        </motion.div>

        {VECTOROS_MODULES.map((module, index) => (
          <EcosystemNode
            key={module.id}
            id={module.id}
            label={module.label}
            description={module.description}
            index={index}
            total={total}
            isActive={activeId === module.id}
            isDimmed={activeId !== null && activeId !== module.id}
            onActivate={setActiveId}
          />
        ))}
      </div>
    </div>
  );
}
