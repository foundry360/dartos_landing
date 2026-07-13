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

const CENTER = { x: 50, y: 50 };
const NODE_RADIUS = 42;

type NodePosition = {
  x: number;
  y: number;
};

type TooltipPlacement = "top" | "bottom" | "left" | "right";

function getNodePosition(index: number, total: number): NodePosition {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;

  return {
    x: CENTER.x + NODE_RADIUS * Math.cos(angle),
    y: CENTER.y + NODE_RADIUS * Math.sin(angle),
  };
}

function getTooltipPlacement(position: NodePosition): TooltipPlacement {
  const dx = position.x - CENTER.x;
  const dy = position.y - CENTER.y;

  if (Math.abs(dy) >= Math.abs(dx)) {
    return dy < 0 ? "top" : "bottom";
  }

  return dx < 0 ? "left" : "right";
}

const TOOLTIP_PLACEMENT_CLASSES: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 mb-3 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-3 -translate-x-1/2",
  left: "top-1/2 right-full mr-3 -translate-y-1/2",
  right: "top-1/2 left-full ml-3 -translate-y-1/2",
};

type EcosystemNodeProps = {
  id: string;
  label: string;
  description: string;
  position: NodePosition;
  index: number;
  isActive: boolean;
  isDimmed: boolean;
  onActivate: (id: string | null) => void;
};

function EcosystemNode({
  id,
  label,
  description,
  position,
  index,
  isActive,
  isDimmed,
  onActivate,
}: EcosystemNodeProps) {
  const prefersReducedMotion = useReducedMotion();
  const placement = getTooltipPlacement(position);

  return (
    <div
      className={cn(
        "absolute -translate-x-1/2 -translate-y-1/2",
        isActive ? "z-30" : "z-10",
        isDimmed && "opacity-35",
      )}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <motion.button
        type="button"
        className="relative flex max-w-[6.5rem] flex-col items-center gap-2.5 border-0 bg-transparent p-0 text-center sm:max-w-[7.5rem]"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        onPointerEnter={() => onActivate(id)}
        onPointerLeave={() => onActivate(null)}
        onFocus={() => onActivate(id)}
        onBlur={() => onActivate(null)}
        onClick={() => onActivate(isActive ? null : id)}
        aria-describedby={isActive ? `${id}-tooltip` : undefined}
        aria-pressed={isActive}
      >
        <span
          className={cn(
            "relative flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-all duration-500 sm:h-4 sm:w-4",
            isActive
              ? "border-[#84C126] bg-[#84C126] shadow-[0_0_20px_rgba(132,193,38,0.55)]"
              : "border-white/25 bg-[#141414]",
          )}
        >
          {isActive && (
            <span className="absolute inset-0 rounded-full bg-[#84C126]/30 blur-sm" />
          )}
        </span>

        <span
          className={cn(
            "text-[10px] leading-tight font-medium tracking-[0.08em] uppercase transition-colors duration-500 sm:text-xs",
            isActive ? "text-white" : "text-white/45",
          )}
        >
          {label}
        </span>
      </motion.button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            id={`${id}-tooltip`}
            role="tooltip"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, scale: 0.96, y: placement === "top" ? 6 : -6 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, scale: 0.96, y: placement === "top" ? 6 : -6 }
            }
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "pointer-events-none absolute z-40 w-44 rounded-xl border border-white/12 bg-[#0a0a0a]/96 px-3.5 py-3 text-left shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md sm:w-52",
              TOOLTIP_PLACEMENT_CLASSES[placement],
            )}
          >
            <p className="text-[10px] font-medium tracking-[0.15em] text-[#84C126] uppercase">
              {label}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:text-sm">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function EcosystemVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);

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
      <div className="relative aspect-square w-full max-w-[40rem] overflow-visible lg:max-w-[38rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[10%] rounded-full border border-white/[0.06]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-[20%] rounded-full border border-dashed border-white/[0.04]"
        />

        {!prefersReducedMotion && (
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ scale: hubScale }}
            aria-hidden
          >
            <div className="h-36 w-36 rounded-full bg-[#84C126]/10 blur-2xl sm:h-44 sm:w-44" />
          </motion.div>
        )}

        <motion.div
          className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a]/90 px-6 py-5 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-8 sm:py-6"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={prefersReducedMotion ? undefined : { scale: hubScale }}
        >
          {!prefersReducedMotion && (
            <span className="ecosystem-hub-pulse absolute inset-0 rounded-full border border-[#84C126]/20" />
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
            position={getNodePosition(index, VECTOROS_MODULES.length)}
            index={index}
            isActive={activeId === module.id}
            isDimmed={activeId !== null && activeId !== module.id}
            onActivate={setActiveId}
          />
        ))}
      </div>
    </div>
  );
}
