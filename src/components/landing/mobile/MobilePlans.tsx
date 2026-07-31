"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  EXPERIENCE_SECTION,
  EXPERIENCE_TIERS,
  getSignUpUrl,
} from "@/features/landing/data";
import { cn } from "@/utils";

export function MobilePlans() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="modes"
      className="section-shell section-tone-panel section-wash-mist relative px-5 py-16"
    >
      <div className="relative z-10">
        <motion.h2
          className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,10vw,3.25rem)] font-extrabold leading-[0.95] tracking-[0.02em]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {EXPERIENCE_SECTION.title[0]}
          <br />
          {EXPERIENCE_SECTION.title[1]}
        </motion.h2>

        <motion.p
          className="mt-4 text-base text-white/45"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          {EXPERIENCE_SECTION.subtitle}
        </motion.p>

        <div className="mt-10 flex flex-col gap-5">
          {EXPERIENCE_TIERS.map((tier, index) => {
            const isFeatured = tier.id === "league_pro" || tier.id === "elite";

            return (
              <motion.article
                key={tier.id}
                className={cn(
                  "flex w-full flex-col rounded-[1.75rem] border border-white/10 bg-[#090909] p-6",
                  isFeatured && "border-[#84C126]/35",
                )}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-[0.03em]">
                  {tier.title}
                </h3>

                <p className="mt-3 flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold">
                    {tier.price}
                  </span>
                  <span className="text-sm text-white/40">
                    {tier.priceInterval}
                  </span>
                </p>

                <p className="mt-1.5 text-sm tracking-[0.04em] text-[#84C126]/80">
                  {EXPERIENCE_SECTION.trialNote}
                </p>

                <p className="mt-4 text-base leading-relaxed text-white/55">
                  {tier.message}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/35">
                  {tier.theme}
                </p>

                <ul className="mt-5 space-y-2">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-white/45"
                    >
                      <span className="text-[#84C126]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getSignUpUrl(tier.id)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#84C126] px-6 py-3.5 font-[family-name:var(--font-display)] text-sm font-extrabold tracking-[0.08em] uppercase"
                >
                  {tier.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
