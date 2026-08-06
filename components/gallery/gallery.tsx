"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { CATEGORIES, PATCHES, type Patch, type PatchCategory } from "./data";
import Filter from "./filter";
import PatchGrid from "./patch-grid";
import Lightbox from "./lightbox";

export default function Gallery() {
  const [category, setCategory] = useState<"All" | PatchCategory>("All");
  const [selected, setSelected] = useState<Patch | null>(null);

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

  const selectedIndex = selected
    ? filtered.findIndex((patch) => patch.id === selected.id)
    : -1;

  const handlePrev = () => {
    if (selectedIndex <= 0) return;
    setSelected(filtered[selectedIndex - 1]);
  };

  const handleNext = () => {
    if (selectedIndex < 0 || selectedIndex >= filtered.length - 1) return;
    setSelected(filtered[selectedIndex + 1]);
  };

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
            <PatchGrid category={category} patches={filtered} onSelect={setSelected} />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected ? (
          <Lightbox
            key={selected.id}
            patch={selected}
            onClose={() => setSelected(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={selectedIndex > 0}
            hasNext={selectedIndex < filtered.length - 1}
          />
        ) : null}
      </AnimatePresence>
    </MotionConfig>
  );
}
