"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FullscreenMenu } from "@/components/landing/FullscreenMenu";
import { Logo } from "@/components/landing/Logo";
import { cn } from "@/utils";

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-8 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo priority href="/" />
        </motion.div>

        <motion.button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="group relative flex h-12 w-12 flex-col items-center justify-center gap-1.5"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className={cn(
              "h-px w-7 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              menuOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-7 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-px w-7 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              menuOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </motion.button>
      </header>

      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
