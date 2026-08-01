"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SIGN_UP_URL, TRIAL_MODAL } from "@/features/landing/data";
import { cn } from "@/utils";

export function TrialSignupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsOpen(true);
    }, TRIAL_MODAL.openDelayMs);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="trial-modal-title"
          className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
        >
          <button
            type="button"
            aria-label="Dismiss trial offer"
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            className="relative grid w-full max-w-lg overflow-hidden rounded-2xl border border-white/12 bg-[#0c0c0c] md:max-w-4xl md:grid-cols-2"
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 32, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, y: 18, scale: 0.98 }
            }
            transition={{
              duration: prefersReducedMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="group absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-sm transition-colors hover:border-[#84C126]/50 hover:text-[#84C126]"
            >
              <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
            </button>

            <div className="relative h-52 w-full overflow-hidden md:h-auto md:min-h-[480px]">
              <motion.div
                className="absolute inset-0"
                initial={prefersReducedMotion ? false : { scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={TRIAL_MODAL.image.src}
                  alt={TRIAL_MODAL.image.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover object-[center_18%] md:object-[center_30%]"
                />
              </motion.div>

              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,12,12,0.92)_0%,rgba(12,12,12,0.25)_45%,transparent_70%),linear-gradient(to_right,transparent_55%,rgba(12,12,12,0.55)_100%)] md:bg-[linear-gradient(to_right,transparent_35%,rgba(12,12,12,0.55)_78%,rgba(12,12,12,0.95)_100%),linear-gradient(to_top,rgba(12,12,12,0.55),transparent_50%)]"
              />

              <motion.div
                className="absolute inset-x-0 bottom-0 p-5 md:inset-auto md:top-8 md:left-8 md:bottom-auto md:p-0"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: prefersReducedMotion ? 0 : 0.2,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="inline-flex items-center rounded-full border border-[#84C126]/45 bg-[#84C126]/15 px-3.5 py-1.5 font-[family-name:var(--font-display)] text-xs font-extrabold tracking-[0.16em] text-[#84C126] uppercase backdrop-blur-sm sm:text-sm">
                  {TRIAL_MODAL.image.badge}
                </p>
              </motion.div>
            </div>

            <div className="relative flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-9 md:px-10 md:py-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_80%_0%,rgba(132,193,38,0.16),transparent_60%)]"
              />

              <div className="relative flex flex-col">
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.12,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src="/vectoros-logo.png"
                    alt="VectorOS"
                    width={220}
                    height={48}
                    className="h-7 w-auto sm:h-8"
                  />
                </motion.div>

                <motion.p
                  className="mt-4 font-[family-name:var(--font-display)] text-xs font-extrabold tracking-[0.16em] text-[#84C126] uppercase"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.18,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {TRIAL_MODAL.eyebrow}
                </motion.p>

                <motion.h2
                  id="trial-modal-title"
                  className="mt-2 font-[family-name:var(--font-display)] text-[clamp(2.1rem,4.5vw,2.85rem)] font-extrabold leading-[0.95] tracking-[0.015em]"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.24,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {TRIAL_MODAL.headline[0]}
                  <br />
                  {TRIAL_MODAL.headline[1]}
                  <span className="text-[#84C126]">.</span>
                </motion.h2>

                <motion.p
                  className="mt-4 max-w-sm text-base leading-relaxed text-white/55"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.3,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {TRIAL_MODAL.body}
                </motion.p>

                <motion.ul
                  className="mt-6 space-y-3"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.36,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {TRIAL_MODAL.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm leading-snug text-white/70 sm:text-[0.95rem]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#84C126]/15 text-[#84C126]">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  className="mt-8 flex w-full flex-col"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.42,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.a
                    href={SIGN_UP_URL}
                    className={cn(
                      "group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#84C126] px-8 py-4",
                      "font-[family-name:var(--font-display)] text-base font-extrabold tracking-[0.06em] text-black uppercase",
                      "transition-colors duration-300 hover:bg-[#96d43a]",
                    )}
                    whileHover={
                      prefersReducedMotion ? undefined : { scale: 1.02 }
                    }
                    whileTap={
                      prefersReducedMotion ? undefined : { scale: 0.98 }
                    }
                  >
                    {TRIAL_MODAL.cta}
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>

                  <p className="mt-3 text-center text-xs tracking-[0.04em] text-white/35 md:text-left">
                    {TRIAL_MODAL.footnote}
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 text-sm tracking-[0.04em] text-white/30 transition-colors hover:text-white/55"
                  >
                    {TRIAL_MODAL.dismiss}
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
