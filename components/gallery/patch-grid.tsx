"use client";

import { useLayoutEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Patch, PatchCategory } from "./data";
import { prefersReducedMotion } from "../smooth-scroll";
import PatchCard from "./patch-card";

gsap.registerPlugin(ScrollTrigger);

type PatchGridProps = {
  category: "All" | PatchCategory;
  patches: Patch[];
  onSelect: (patch: Patch) => void;
};

export default function PatchGrid({ category, patches, onSelect }: PatchGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-card",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 84%",
            once: true,
          },
        },
      );
    }, gridRef);

    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 420);

    return () => {
      window.clearTimeout(timer);
      ctx.revert();
    };
  }, [category, patches]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={category}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <div ref={gridRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {patches.map((patch) => (
            <PatchCard key={patch.id} patch={patch} onSelect={onSelect} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
