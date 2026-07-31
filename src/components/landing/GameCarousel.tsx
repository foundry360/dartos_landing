"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  EXPERIENCE_SECTION,
  EXPERIENCE_TIERS,
  getSignUpUrl,
} from "@/features/landing/data";
import { cn } from "@/utils";

type ExperienceCardProps = {
  tier: (typeof EXPERIENCE_TIERS)[number];
  index: number;
};

function ExperienceCard({ tier, index }: ExperienceCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isFeatured = tier.id === "league_pro" || tier.id === "elite";

  return (
    <motion.article
      className={cn(
        "group relative flex min-h-[min(88vh,920px)] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/8 bg-[#090909] p-8 sm:p-10 lg:p-10 xl:p-12",
        "transition-colors duration-700 hover:border-white/14",
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
          isFeatured
            ? "bg-[radial-gradient(circle_at_80%_0%,rgba(132,193,38,0.08),transparent_55%)]"
            : "bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.05),transparent_55%)]",
        )}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white/[0.015] opacity-0 backdrop-blur-[1px] transition-opacity duration-700 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <h3 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4.2vw,3.75rem)] font-extrabold leading-[0.9] tracking-[0.03em] whitespace-nowrap xl:text-[clamp(2.5rem,3.8vw,4.25rem)]">
          {tier.title}
        </h3>

        <p className="mt-4 flex items-baseline gap-1.5">
          <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-[0.02em] text-white sm:text-4xl">
            {tier.price}
          </span>
          <span className="text-base text-white/40 sm:text-lg">
            {tier.priceInterval}
          </span>
        </p>

        <p className="mt-2 text-sm tracking-[0.04em] text-[#84C126]/80 sm:text-base">
          {EXPERIENCE_SECTION.trialNote}
        </p>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/55 sm:text-xl">
          {tier.message}
        </p>

        <div className="mt-8 max-w-md">
          <p className="text-sm leading-relaxed text-white/40 sm:text-base">
            {tier.theme}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/30 sm:text-base">
            {tier.hoverDetail}
          </p>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              Includes:
            </p>
            <ul className="mt-4 space-y-2.5">
              {tier.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-white/45"
                >
                  <span className="text-[#84C126]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10">
        <motion.a
          href={getSignUpUrl(tier.id)}
          className={cn(
            "inline-flex items-center gap-3 rounded-full border border-[#84C126] bg-transparent px-8 py-4 font-[family-name:var(--font-display)] text-sm font-extrabold uppercase tracking-[0.08em] transition-all duration-500 hover:border-[#84C126] sm:px-10 sm:py-5 sm:text-base",
          )}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        >
          {tier.cta}
          <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>
      </div>
    </motion.article>
  );
}

export function GameCarousel() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="modes"
      className="section-shell section-tone-panel section-wash-mist relative min-h-screen px-6 py-36 sm:px-10 sm:py-40 lg:px-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <div className="mb-12 max-w-4xl lg:mb-16">
          <motion.h2
            className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[0.02em]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {EXPERIENCE_SECTION.title.map((line) => (
              <span key={line} className="block leading-none">
                {line.slice(0, -1)}
                <span className="text-[#84C126]">.</span>
              </span>
            ))}
          </motion.h2>

          <motion.p
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/45 sm:mt-6 sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {EXPERIENCE_SECTION.subtitle}
          </motion.p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {EXPERIENCE_TIERS.map((tier, index) => (
            <ExperienceCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
