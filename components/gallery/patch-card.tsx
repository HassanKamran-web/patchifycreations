"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Patch } from "./data";

type PatchCardProps = {
  patch: Patch;
};

export default function PatchCard({ patch }: PatchCardProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <motion.article
      className="gallery-card group relative flex h-full flex-col rounded-card border border-line bg-surface-tint p-4 shadow-card transition-shadow duration-300 hover:shadow-card-lg sm:p-5"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#F7F7F7]">
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {!loaded ? (
            <div className="gallery-skeleton absolute inset-0" aria-hidden="true" />
          ) : null}
          <Image
            ref={imgRef}
            src={patch.image}
            alt={`Custom ${patch.name || 'embroidered'} patch by Patchify Creations`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className={`object-contain transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        </motion.div>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-base font-bold tracking-tight text-ink">{patch.name}</h3>
        <p className="mt-0.5 text-xs font-semibold text-accent">{patch.category}</p>
        <p className="mt-1 text-xs text-muted">{patch.size}</p>
      </div>
    </motion.article>
  );
}
