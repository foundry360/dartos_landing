"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ClassicGamesGrid } from "@/components/landing/built-around/ClassicGamesGrid";
import { ExperienceScreenshot } from "@/components/landing/built-around/ExperienceScreenshot";
import { FeatureHighlight } from "@/components/landing/built-around/FeatureHighlight";
import { cn } from "@/utils";

export type ExperienceSceneData = {
  id: string;
  number: string;
  title: string;
  theme: string;
  description: string;
  highlights: readonly string[];
  image?: string;
  imageAlt?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  games?: readonly {
    id: string;
    name: string;
    blurb: string;
    image: string;
  }[];
};

type ExperienceSceneProps = {
  experience: ExperienceSceneData;
  index: number;
  reversed?: boolean;
};

function ThemeLine({ theme }: { theme: string }) {
  const endsWithPeriod = theme.endsWith(".");
  const body = endsWithPeriod ? theme.slice(0, -1) : theme;

  return (
    <p className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[0.02em] text-white/70 sm:text-2xl lg:text-[1.65rem]">
      {body}
      {endsWithPeriod && <span className="text-[#84C126]">.</span>}
    </p>
  );
}

export function ExperienceScene({
  experience,
  index,
  reversed = false,
}: ExperienceSceneProps) {
  const prefersReducedMotion = useReducedMotion();
  const hasGames = Boolean(experience.games?.length);

  const copy = (
    <motion.div
      className="min-w-0"
      initial={
        prefersReducedMotion ? false : { opacity: 0, x: reversed ? 40 : -40 }
      }
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.28em] text-[#84C126]/80 uppercase">
        Experience {experience.number}
      </p>

      <h3 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.92] tracking-[0.02em]">
        {experience.title}
      </h3>

      <ThemeLine theme={experience.theme} />

      <p className="mt-8 max-w-md text-base leading-relaxed text-white/50 sm:text-lg">
        {experience.description}
      </p>

      {!hasGames ? (
        <FeatureHighlight items={experience.highlights} className="mt-10" />
      ) : null}
    </motion.div>
  );

  const media = (
    <motion.div
      className="relative min-w-0"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 1,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {hasGames && experience.games ? (
        <ClassicGamesGrid games={experience.games} />
      ) : experience.image ? (
        experience.secondaryImage ? (
          <div className="relative">
            <ExperienceScreenshot
              src={experience.image}
              alt={experience.imageAlt ?? ""}
              className="relative z-10 w-[92%] sm:w-[90%]"
              priority={index === 0}
            />
            <div className="pointer-events-none absolute top-[16%] right-0 z-0 w-[70%] opacity-55 sm:w-[66%]">
              <ExperienceScreenshot
                src={experience.secondaryImage}
                alt={experience.secondaryImageAlt ?? ""}
              />
            </div>
          </div>
        ) : (
          <ExperienceScreenshot
            src={experience.image}
            alt={experience.imageAlt ?? ""}
            className="w-full"
            priority={index === 0}
          />
        )
      ) : null}
    </motion.div>
  );

  return (
    <section
      id={experience.id}
      data-experience-id={experience.id}
      className="relative flex items-center py-14 sm:py-16 lg:py-20 xl:py-24"
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          index % 2 === 0
            ? "bg-[radial-gradient(ellipse_70%_50%_at_85%_40%,rgba(255,255,255,0.03),transparent_60%)]"
            : "bg-[radial-gradient(ellipse_70%_50%_at_15%_45%,rgba(255,255,255,0.03),transparent_60%)]",
        )}
      />

      <div
        className={cn(
          "relative z-10 grid w-full items-center gap-10 lg:gap-12 xl:gap-14",
          reversed
            ? "lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.86fr)]"
            : "lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.28fr)]",
        )}
      >
        {reversed ? (
          <>
            {media}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {media}
          </>
        )}
      </div>
    </section>
  );
}
