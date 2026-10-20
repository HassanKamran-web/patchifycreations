"use client";

import { useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { CATEGORIES, PATCHES, type PatchCategory } from "./data";
import Filter from "./filter";
import PatchGrid from "./patch-grid";

export default function Gallery() {
  const [category, setCategory] = useState<"All" | PatchCategory>("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? PATCHES
        : PATCHES.filter((patch) => patch.category === category),
    [category],
  );

  const counts = useMemo(() => {
    const result: Record<string, number> = {};
    for (const cat of CATEGORIES) {
      result[cat] =
        cat === "All"
          ? PATCHES.length
          : PATCHES.filter((patch) => patch.category === cat).length;
    }
    return result;
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <section id="gallery" className="scroll-mt-24 bg-surface-tint py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-center gap-5">
            <Filter active={category} counts={counts} onChange={setCategory} />
            <p aria-live="polite" className="text-sm text-muted">
              Showing{" "}
              <span className="font-semibold text-ink">{filtered.length}</span> of{" "}
              {PATCHES.length} patches
            </p>
          </div>

          <div className="mt-10">
            <PatchGrid category={category} patches={filtered} />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
