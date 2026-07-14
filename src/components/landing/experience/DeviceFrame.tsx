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
        "relative z-10 mx-auto w-full max-w-[min(100%,340px)] sm:max-w-[440px] lg:max-w-full xl:max-w-[640px] 2xl:max-w-[720px]",
        className,
      )}
    >
      <div className="relative rounded-[1.25rem] border border-white/12 bg-[#0a0a0a] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)] sm:rounded-[1.75rem] sm:p-2.5 lg:rounded-[2.25rem] lg:p-3">
        <div className="absolute top-1/2 left-1.5 z-20 h-2 w-2 -translate-y-1/2 rounded-full bg-[#1a1a1a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] sm:left-2.5 sm:h-3 sm:w-3" />

        <div className="relative aspect-[1024/715] w-full overflow-hidden rounded-[0.95rem] bg-[#0f0f0f] sm:rounded-[1.35rem] lg:rounded-[1.75rem]">
          {children}
        </div>
      </div>
    </div>
  );
}
