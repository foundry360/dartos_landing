"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { BUILT_AROUND_GAME } from "@/features/landing/data";

export function MobileYourGame() {
  const prefersReducedMotion = useReducedMotion();
  const experiences = BUILT_AROUND_GAME.experiences;

  return (
    <section
      id={BUILT_AROUND_GAME.id}
      className="section-shell section-tone-lift relative px-5 py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(255,255,255,0.045),transparent_65%)]"
      />

      <div className="relative z-10">
        <motion.p
          className="mb-5 text-xs uppercase tracking-[0.3em] text-white/35"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Your game
        </motion.p>

        <motion.h2
          className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,10vw,3.25rem)] font-extrabold leading-[0.95] tracking-[0.02em]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {BUILT_AROUND_GAME.title[0]}
          <br />
          {BUILT_AROUND_GAME.title[1].slice(0, -1)}
          <span className="text-[#84C126]">.</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-base leading-relaxed text-white/45"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          {BUILT_AROUND_GAME.supporting}
        </motion.p>

        <div className="mt-10 space-y-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              id={experience.id}
              className="scroll-mt-24"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.8,
                delay: Math.min(index * 0.06, 0.24),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[#84C126]/80">
                {experience.number}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-[0.02em]">
                {experience.title}
              </h3>
              <p className="mt-2 text-sm text-white/40">{experience.theme}</p>
              <p className="mt-3 text-base leading-relaxed text-white/50">
                {experience.description}
              </p>

              {"image" in experience ? (
                <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-2xl border border-white/8">
                  <Image
                    src={experience.image}
                    alt={experience.imageAlt}
                    fill
                    quality={90}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}

              {"games" in experience && Array.isArray(experience.games) ? (
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {experience.games.map((game) => (
                    <div
                      key={game.id}
                      className="overflow-hidden rounded-xl border border-white/8 bg-black/40"
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={game.image}
                          alt={game.name}
                          fill
                          quality={85}
                          sizes="45vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-semibold text-white">
                          {game.name}
                        </p>
                        <p className="mt-1 text-xs leading-snug text-white/40">
                          {game.blurb}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              <ul className="mt-4 flex flex-wrap gap-2">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
