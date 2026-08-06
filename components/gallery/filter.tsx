"use client";

import { motion } from "framer-motion";
import { CATEGORIES, type PatchCategory } from "./data";

type FilterProps = {
  active: "All" | PatchCategory;
  counts: Record<string, number>;
  onChange: (category: "All" | PatchCategory) => void;
};

export default function Filter({ active, counts, onChange }: FilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter patches by category"
      className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
    >
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <motion.button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className="relative rounded-full px-4 py-2.5 text-sm font-semibold sm:px-5"
          >
            {isActive ? (
              <motion.span
                layoutId="gallery-active-pill"
                className="absolute inset-0 rounded-full bg-accent shadow-card"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span
              className={`relative z-10 transition-colors ${
                isActive ? "text-white" : "text-muted hover:text-accent"
              }`}
            >
              {category}
              <span className={`ml-1.5 ${isActive ? "text-white/70" : "text-muted/60"}`}>
                {counts[category] ?? 0}
              </span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
