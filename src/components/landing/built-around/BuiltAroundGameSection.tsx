"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ExperienceScene } from "@/components/landing/built-around/ExperienceScene";
import { SectionNavigation } from "@/components/landing/built-around/SectionNavigation";
import { BUILT_AROUND_GAME } from "@/features/landing/data";

export function BuiltAroundGameSection() {
  const prefersReducedMotion = useReducedMotion();
  const experiences = BUILT_AROUND_GAME.experiences;
  const experiencesRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>(
    experiences[0]?.id ?? "training",
  );
  const [navFixed, setNavFixed] = useState(false);
  const [navBox, setNavBox] = useState({ left: 0, width: 192 });

  useEffect(() => {
    const nodes = experiences
      .map((experience) => document.getElementById(experience.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0]?.target.id;
        if (top) setActiveId(top);
      },
      {
        rootMargin: "-28% 0px -40% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [experiences]);

  useEffect(() => {
    const root = experiencesRef.current;
    if (!root) return;

    const update = () => {
      const rect = root.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.55 && rect.bottom > 140;
      setNavFixed(inView);

      const rail = root.querySelector<HTMLElement>("[data-nav-rail]");
      if (rail) {
        const railRect = rail.getBoundingClientRect();
        setNavBox({ left: railRect.left, width: railRect.width });
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToExperience = useCallback(
    (id: string) => {
      const node = document.getElementById(id);
      if (!node) return;
      node.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "center",
      });
    },
    [prefersReducedMotion],
  );

  const navItems = experiences.map((experience) => ({
    id: experience.id,
    label: experience.title,
  }));

  return (
    <section
      id={BUILT_AROUND_GAME.id}
      className="section-shell section-tone-lift relative"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(255,255,255,0.045),transparent_65%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pt-36 pb-10 sm:px-10 sm:pt-44 sm:pb-12 lg:px-16">
        <div className="max-w-3xl">
          <motion.p
            className="mb-8 text-sm uppercase tracking-[0.3em] text-white/35"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Launch experiences
          </motion.p>

          <motion.h2
            className="flex w-fit flex-col font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.9] tracking-[0.02em]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block whitespace-nowrap">
              {BUILT_AROUND_GAME.title[0]}
            </span>
            <span className="block whitespace-nowrap">
              {BUILT_AROUND_GAME.title[1].slice(0, -1)}
              <span className="text-[#84C126]">.</span>
            </span>
          </motion.h2>

          <motion.p
            className="mt-10 max-w-xl text-base leading-relaxed text-white/50 sm:mt-12 sm:text-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {BUILT_AROUND_GAME.supporting}
          </motion.p>
        </div>
      </div>

      <div
        ref={experiencesRef}
        className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16"
      >
        <div className="mb-8 flex gap-6 overflow-x-auto xl:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToExperience(item.id)}
              className={
                item.id === activeId
                  ? "shrink-0 border-b border-[#84C126] pb-2 text-[11px] tracking-[0.16em] text-white uppercase"
                  : "shrink-0 border-b border-transparent pb-2 text-[11px] tracking-[0.16em] text-white/35 uppercase"
              }
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="xl:grid xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-10 2xl:grid-cols-[13rem_minmax(0,1fr)] 2xl:gap-14">
          <div
            data-nav-rail
            aria-hidden
            className="pointer-events-none hidden xl:block"
          />

          {navFixed ? (
            <div
              className="fixed top-1/2 z-30 hidden -translate-y-1/2 xl:block"
              style={{ left: navBox.left, width: navBox.width }}
            >
              <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
                <SectionNavigation
                  items={navItems}
                  activeId={activeId}
                  onSelect={scrollToExperience}
                />
              </div>
            </div>
          ) : null}

          <div className="min-w-0">
            {experiences.map((experience, index) => (
              <ExperienceScene
                key={experience.id}
                experience={experience}
                index={index}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
