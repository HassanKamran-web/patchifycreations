"use client";

import { motion } from "framer-motion";
import type { Patch } from "./data";
import PatchArt from "./patch-art";
import { ArrowUpRightIcon } from "../icons";

type PatchCardProps = {
  patch: Patch;
  onSelect: (patch: Patch) => void;
};

export default function PatchCard({ patch, onSelect }: PatchCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(patch)}
      aria-label={`View ${patch.name}, ${patch.category} patch`}
      className="gallery-card group relative flex h-full flex-col rounded-card border border-line bg-surface-tint p-4 text-left shadow-card transition-shadow duration-300 hover:shadow-card-lg sm:p-5"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      <span className="sr-only">
        {patch.name}, {patch.category} patch, {patch.size}, {patch.border} border,
        backing options: {patch.backings.join(", ")}. {patch.description}
      </span>

      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-canvas">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <PatchArt patch={patch} className="h-full w-full" />
        </motion.div>
        <div className="absolute inset-0 grid place-items-center rounded-2xl bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/25 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-ink shadow-card-lg">
            View details
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-base font-bold tracking-tight text-ink">{patch.name}</h3>
        <p className="mt-0.5 text-xs font-semibold text-accent">{patch.category}</p>
        <p className="mt-1 text-xs text-muted">
          {patch.border} border · {patch.size}
        </p>
      </div>
    </motion.button>
  );
}
