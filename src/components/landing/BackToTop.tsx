"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
          className="fixed right-5 bottom-5 z-[55] flex h-12 w-12 items-center justify-center rounded-full border border-[#84C126]/45 bg-[#0a0a0a]/90 text-[#84C126] shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition-colors hover:border-[#84C126] hover:bg-[#84C126]/10 sm:right-8 sm:bottom-8 sm:h-14 sm:w-14"
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
