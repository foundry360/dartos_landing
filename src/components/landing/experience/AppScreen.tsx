"use client";

import Image from "next/image";
import { cn } from "@/utils";

type AppScreenProps = {
  screenId: string;
  title: string;
  className?: string;
};

type ScreenAsset = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  priority?: boolean;
};

const DEFAULT_SCREEN: ScreenAsset = {
  src: "/experience-home-ipad.png",
  alt: "VectorDarts home dashboard",
  fit: "contain",
  priority: true,
};

const SCREEN_ASSETS: Record<string, ScreenAsset> = {
  home: DEFAULT_SCREEN,
  cricket: {
    src: "/experience-cricket.png",
    alt: "VectorDarts cricket match",
    fit: "contain",
  },
  x01: {
    src: "/experience-x01.png",
    alt: "VectorDarts X01 match",
    fit: "contain",
  },
  practice: {
    src: "/experience-practice.png",
    alt: "VectorDarts practice modes",
  },
  statistics: {
    src: "/experience-statistics.png",
    alt: "VectorDarts match statistics",
  },
  tournaments: {
    src: "/experience-tournaments.png",
    alt: "VectorDarts tournament bracket",
    fit: "contain",
  },
  profile: {
    src: "/experience-profile.png",
    alt: "VectorDarts player profile",
  },
};

function ScreenshotScreen({ asset }: { asset: ScreenAsset }) {
  return (
    <div className="absolute inset-0 bg-[#0a0a0a]">
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        quality={100}
        sizes="(max-width: 1024px) 90vw, 760px"
        className={cn(
          "object-center",
          asset.fit === "contain" ? "object-contain" : "object-cover",
        )}
        priority={asset.priority}
      />
    </div>
  );
}

export function AppScreen({ screenId, title, className }: AppScreenProps) {
  const asset = SCREEN_ASSETS[screenId] ?? DEFAULT_SCREEN;

  return (
    <div className={cn("absolute inset-0 text-white", className)}>
      <ScreenshotScreen asset={asset} />
      <span className="sr-only">{title}</span>
    </div>
  );
}
