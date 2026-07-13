"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { NAV_ITEMS } from "@/features/landing/data";
import { cn } from "@/utils";

type FullscreenMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#090909]/95 backdrop-blur-2xl"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 3rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <div className="relative flex h-full flex-col px-6 py-8 sm:px-12 lg:px-20">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-white/25"
              >
                <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 sm:gap-4">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.15 + index * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,6rem)] font-extrabold uppercase leading-none tracking-[0.04em]",
                      "text-white/80 transition-colors hover:text-electric",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <p className="text-sm text-white/30">
              VectorDarts — Placeholder tagline
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
