"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { BUILT_FOR_GAME } from "@/features/landing/data";

export function BuiltForGameScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id={BUILT_FOR_GAME.id}
      className="section-shell section-tone-deep section-wash-soft relative min-h-screen overflow-hidden px-6 py-40 sm:px-10 sm:py-44 lg:px-16"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-10">
        <motion.div
          className="relative aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] lg:aspect-auto lg:max-w-none lg:min-h-0 lg:flex-1 lg:self-stretch lg:rounded-[2rem]"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/built-for-game.jpg"
            alt="Player in a VectorOS jersey throwing at the dartboard"
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[42%_center]"
            priority={false}
          />
        </motion.div>

        <div className="relative z-10 w-full lg:flex-1 lg:pl-4">
          <SectionTitle size="xl" className="max-w-5xl">
            Built for
            <br />
            <span className="text-[#84C126]">the Game.</span>
          </SectionTitle>

          <motion.p
            className="mt-12 text-lg leading-relaxed text-white/45 sm:mt-16 sm:text-xl"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {BUILT_FOR_GAME.supporting}
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/40 sm:mt-8 sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {BUILT_FOR_GAME.body}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
