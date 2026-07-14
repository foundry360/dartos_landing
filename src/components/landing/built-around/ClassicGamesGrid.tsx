"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils";

export type ClassicGame = {
  id: string;
  name: string;
  blurb: string;
  image: string;
};

type ClassicGamesGridProps = {
  games: readonly ClassicGame[];
  className?: string;
};

export function ClassicGamesGrid({ games, className }: ClassicGamesGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:rounded-[1.75rem] lg:rounded-[2rem]",
        className,
      )}
    >
      {/* Match the landscape screenshot footprint */}
      <div className="grid aspect-[1024/715] grid-cols-2 grid-rows-2 gap-px bg-white/8">
        {games.map((game, index) => (
          <motion.article
            key={game.id}
            className="group relative min-h-0 overflow-hidden bg-[#0c0c0c]"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 0.65,
              delay: 0.06 + index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(132,193,38,0.12),transparent_55%)] opacity-60"
            />

            {/* Athlete cutout */}
            <div className="absolute inset-x-0 bottom-0 top-[12%] sm:top-[8%]">
              <Image
                src={game.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 45vw, 280px"
                className={cn(
                  "object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.04]",
                  index % 2 === 0 ? "object-[58%_100%]" : "object-[42%_100%]",
                )}
                priority={index < 2}
                aria-hidden
              />
            </div>

            {/* Gradient scrub for text readability */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/70 to-transparent"
            />

            <div className="relative z-10 flex h-full flex-col justify-between p-3.5 sm:p-4 lg:p-5">
              <div className="flex items-start justify-between">
                <span className="font-[family-name:var(--font-display)] text-[9px] tracking-[0.22em] text-[#84C126]/85 uppercase sm:text-[10px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="max-w-[92%]">
                <h4 className="font-[family-name:var(--font-display)] text-base font-extrabold leading-tight tracking-[0.02em] sm:text-lg lg:text-xl">
                  {game.name}
                </h4>
                <p className="mt-1 text-[11px] leading-snug text-white/45 sm:mt-1.5 sm:text-xs lg:text-sm">
                  {game.blurb}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
