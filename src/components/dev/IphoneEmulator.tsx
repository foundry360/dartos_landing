"use client";

import { useMemo, useState } from "react";
import { cn } from "@/utils";

type DevicePreset = {
  id: string;
  label: string;
  width: number;
  height: number;
};

const DEVICES: DevicePreset[] = [
  { id: "iphone-16", label: "iPhone 16", width: 393, height: 852 },
  { id: "iphone-16-pro", label: "iPhone 16 Pro", width: 402, height: 874 },
  { id: "iphone-se", label: "iPhone SE", width: 375, height: 667 },
  { id: "iphone-14-max", label: "iPhone 14 Plus", width: 428, height: 926 },
];

const SCALE_OPTIONS = [0.55, 0.65, 0.75, 0.85, 1] as const;

const DEFAULT_DEVICE = DEVICES[0]!;

export function IphoneEmulator() {
  const [deviceId, setDeviceId] = useState(DEFAULT_DEVICE.id);
  const [scale, setScale] = useState<(typeof SCALE_OPTIONS)[number]>(0.75);
  const [reloadKey, setReloadKey] = useState(0);

  const device = useMemo(
    () => DEVICES.find((item) => item.id === deviceId) ?? DEFAULT_DEVICE,
    [deviceId],
  );

  const frameWidth = device.width + 24;
  const frameHeight = device.height + 24;

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6">
          <div className="mr-auto">
            <p className="font-[family-name:var(--font-display)] text-sm font-extrabold tracking-[0.04em] uppercase">
              iPhone Emulator
            </p>
            <p className="text-xs text-white/40">
              Preview the mobile landing at real device sizes
            </p>
          </div>

          <label className="flex items-center gap-2 text-xs text-white/50">
            Device
            <select
              value={deviceId}
              onChange={(event) => setDeviceId(event.target.value)}
              className="rounded-lg border border-white/15 bg-black px-2.5 py-1.5 text-sm text-white outline-none focus:border-[#84C126]"
            >
              {DEVICES.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label} ({item.width}×{item.height})
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-center gap-2 text-xs text-white/50">
            Scale
            <select
              value={scale}
              onChange={(event) =>
                setScale(
                  Number(event.target.value) as (typeof SCALE_OPTIONS)[number],
                )
              }
              className="rounded-lg border border-white/15 bg-black px-2.5 py-1.5 text-sm text-white outline-none focus:border-[#84C126]"
            >
              {SCALE_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {Math.round(value * 100)}%
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={() => setReloadKey((key) => key + 1)}
            className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/80 transition-colors hover:border-[#84C126] hover:text-white"
          >
            Reload
          </button>

          <a
            href="/emulator/frame"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[#84C126]/50 px-3 py-1.5 text-sm text-[#84C126] transition-colors hover:bg-[#84C126]/10"
          >
            Open frame
          </a>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center overflow-auto px-4 py-10">
        <div
          className="origin-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: frameWidth,
            height: frameHeight,
            transform: `scale(${scale})`,
          }}
        >
          <div
            className={cn(
              "relative h-full w-full rounded-[3rem] bg-[#1a1a1a] p-3",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_40px_80px_rgba(0,0,0,0.55)]",
            )}
          >
            {/* Side buttons */}
            <div
              aria-hidden
              className="absolute top-28 -left-[3px] h-16 w-[3px] rounded-l-sm bg-[#2a2a2a]"
            />
            <div
              aria-hidden
              className="absolute top-48 -left-[3px] h-10 w-[3px] rounded-l-sm bg-[#2a2a2a]"
            />
            <div
              aria-hidden
              className="absolute top-36 -right-[3px] h-20 w-[3px] rounded-r-sm bg-[#2a2a2a]"
            />

            <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-black">
              {/* Dynamic Island */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-3 left-1/2 z-20 h-7 w-[7.5rem] -translate-x-1/2 rounded-full bg-black"
              />

              <iframe
                key={`${device.id}-${reloadKey}`}
                title={`VectorDarts mobile preview — ${device.label}`}
                src="/emulator/frame"
                width={device.width}
                height={device.height}
                className="block h-full w-full border-0 bg-black"
              />

              {/* Home indicator */}
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-2 left-1/2 z-20 h-1 w-28 -translate-x-1/2 rounded-full bg-white/35"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
