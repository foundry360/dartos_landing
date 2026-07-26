"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { BUILT_FOR_GAME } from "@/features/landing/data";

export function MobileBuiltForGame() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id={BUILT_FOR_GAME.id}
      className="section-shell section-tone-deep section-wash-soft relative overflow-hidden px-5 py-16"
    >
      <div className="relative z-10">
        <motion.div
          className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/built-for-game.jpg"
            alt="Player in a VectorOS jersey throwing at the dartboard"
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-[42%_center]"
          />
        </motion.div>

        <motion.h2
          className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,10vw,3.25rem)] font-extrabold leading-[0.95] tracking-[0.02em]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Built for
          <br />
          <span className="text-[#84C126]">the Game.</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-base leading-relaxed text-white/45"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          {BUILT_FOR_GAME.supporting}
        </motion.p>

        <motion.p
          className="mt-4 text-base leading-relaxed text-white/40"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.14 }}
        >
          {BUILT_FOR_GAME.body}
        </motion.p>
      </div>
    </section>
  );
}
