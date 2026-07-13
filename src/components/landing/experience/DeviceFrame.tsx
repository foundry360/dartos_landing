"use client";

import type { ReactNode } from "react";
import { cn } from "@/utils";

type DeviceFrameProps = {
  children: ReactNode;
  className?: string;
};

export function DeviceFrame({ children, className }: DeviceFrameProps) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto w-[min(92vw,560px)] sm:w-[min(80vw,620px)] lg:w-[min(58vw,720px)] xl:w-[760px]",
        className,
      )}
    >
      <div className="relative rounded-[1.75rem] border border-white/12 bg-[#0a0a0a] p-2.5 shadow-[0_40px_120px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)] sm:rounded-[2rem] sm:p-3 lg:rounded-[2.25rem]">
        <div className="absolute top-1/2 left-2 z-20 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#1a1a1a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] sm:left-2.5 sm:h-3 sm:w-3" />

        <div className="relative aspect-[1024/715] overflow-hidden rounded-[1.35rem] bg-[#0f0f0f] sm:rounded-[1.55rem] lg:rounded-[1.75rem]">
          {children}
        </div>
      </div>
    </div>
  );
}
