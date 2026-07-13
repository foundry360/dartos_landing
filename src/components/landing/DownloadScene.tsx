"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function DownloadScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="download"
      className="relative flex min-h-screen items-center justify-center px-6 py-32 sm:px-10"
    >
      <motion.div
        className="relative text-center"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.a
          href="#"
          className="group inline-flex items-center gap-4 rounded-full border border-white/15 bg-white/[0.03] px-10 py-5 font-[family-name:var(--font-display)] text-xl font-extrabold uppercase tracking-[0.06em] backdrop-blur-sm transition-all duration-500 hover:border-electric/40 hover:bg-electric/5 sm:px-14 sm:py-6 sm:text-2xl"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
        >
          Download
          <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
