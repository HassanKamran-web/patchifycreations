"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

const DEFAULT_SLIDES = [
  "/images/pvc/patch-08.png",
  "/images/pvc/patch-16.png",
  "/images/chenille/patch-18.png",
  "/images/chenille/patch-20.png",
  "/images/chenille/patch-22.png",
  "/images/pvc/patch-14.png",
];

export default function PatchSlider({
  slides = DEFAULT_SLIDES,
}: {
  slides?: string[];
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000);
    return () => clearInterval(id);
  }, [reduce, paused, slides.length]);

  return (
    <div
      className="rounded-3xl border border-line bg-white p-3 shadow-card-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-72 w-72 overflow-hidden rounded-2xl sm:h-80 sm:w-80 xl:h-96 xl:w-96">
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="(min-width: 1280px) 384px, (min-width: 640px) 320px, 288px"
            className={`object-contain transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-4 bg-accent" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
