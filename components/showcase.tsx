"use client";

import Link from "next/link";
import Reveal from "./reveal";
import { ArrowRightIcon, StarIcon } from "./icons";

const PATCH_MOTIFS = [
  {
    motif: "rings",
    label: "Olympic-style rings",
    colors: ["#37486e", "#5a6b7d", "#e3e9f0", "#37486e", "#c9d4e3"],
  },
  { motif: "star", label: "Scout star patch", colors: ["#37486e"] },
  { motif: "shield", label: "Tactical unit shield", colors: ["#37486e", "#0d1b2a"] },
  { motif: "anchor", label: "Sailing club anchor", colors: ["#5a6b7d"] },
  { motif: "cross", label: "First responder cross", colors: ["#2b3856"] },
  { motif: "wings", label: "Aviation wings", colors: ["#37486e"] },
  { motif: "bolt", label: "Energy bolt", colors: ["#0d1b2a"] },
  { motif: "wheel", label: "Motorcycle club wheel", colors: ["#37486e", "#0d1b2a"] },
];

export default function Showcase() {
  return (
    <section id="showcase" className="scroll-mt-24 bg-surface-tint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-ink to-accent-strong shadow-card-lg">
            <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                  Showcase
                </span>
                <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
                  Worn by teams, brands, and collectors everywhere
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
                  From race-track garage patches to unit insignia and boutique apparel
                  labels, we have produced over 500,000 patches for names you would
                  recognize — and thousands you have not heard of yet.
                </p>

                <figure className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                  <div className="flex gap-1 text-amber-300" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-white/85">
                    “The proof was free, arrived the same day, and the patches looked
                    even better in hand than the mockup. Our club now reorders every
                    season without a second thought.”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-sm font-bold text-white">
                      JT
                    </span>
                    <span className="text-sm">
                      <span className="block font-semibold text-white">
                        Jordan T., Founder
                      </span>
                      <span className="block text-white/60">Northline Apparel</span>
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="grid grid-cols-2 gap-4 self-center sm:grid-cols-4 lg:grid-cols-4">
                {PATCH_MOTIFS.map((patch, i) => (
                  <PatchTile key={patch.motif} {...patch} delay={i * 0.06} />
                ))}
              </div>
            </div>

            <div className="grid divide-y divide-white/10 border-t border-white/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {[
                { value: "500k+", label: "Patches manufactured" },
                { value: "38", label: "Countries shipped" },
                { value: "2,400+", label: "Verified reviews" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-7 text-center">
                  <span className="text-3xl font-extrabold tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="text-sm text-white/60">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-card-lg"
            >
              Start a project like these
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-white px-7 py-3.5 text-sm font-semibold text-accent transition-all duration-300 hover:border-accent hover:bg-accent-soft"
            >
              Browse the full gallery
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PatchTile({
  motif,
  colors,
  delay,
}: {
  motif: string;
  colors: string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div
        className="group flex aspect-square items-center justify-center rounded-full border-4 border-white/15 bg-white/10 p-3 transition-transform duration-300 hover:scale-105"
        aria-label={`Sample ${motif} patch`}
        role="img"
      >
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill={colors[0]} />
          <circle
            cx="32"
            cy="32"
            r="24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.7"
          />
          {motif === "rings" && (
            <>
              <circle cx="20" cy="28" r="5" fill="none" stroke="#fff" strokeWidth="2" />
              <circle cx="28" cy="32" r="5" fill="none" stroke="#fff" strokeWidth="2" />
              <circle cx="36" cy="28" r="5" fill="none" stroke="#fff" strokeWidth="2" />
              <circle cx="44" cy="32" r="5" fill="none" stroke="#fff" strokeWidth="2" />
              <circle cx="24" cy="38" r="5" fill="none" stroke="#fff" strokeWidth="2" />
              <circle cx="40" cy="38" r="5" fill="none" stroke="#fff" strokeWidth="2" />
            </>
          )}
          {motif === "star" && (
            <path
              d="M32 14l4.6 9.4 10.4 1.5-7.5 7.3 1.8 10.3L32 37.5l-9.3 4.9 1.8-10.3-7.5-7.3 10.4-1.5z"
              fill="#fff"
            />
          )}
          {motif === "shield" && (
            <path d="M32 14l12 5v9c0 9-5 15-12 19-7-4-12-10-12-19v-9z" fill="#0d1b2a" />
          )}
          {motif === "anchor" && (
            <g stroke="#fff" strokeWidth="2.5" fill="none">
              <circle cx="32" cy="20" r="3" />
              <path d="M32 23v16" />
              <path d="M20 36h24" />
              <path d="M32 39a10 10 0 0 1-10-10" />
            </g>
          )}
          {motif === "cross" && (
            <path d="M26 18h12v8h8v12h-8v8H26v-8h-8V26h8z" fill="#fff" />
          )}
          {motif === "wings" && (
            <g stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round">
              <path d="M18 40c0-8 6-14 14-14s14 6 14 14" />
              <path d="M12 40c3-5 6-9 10-11M52 40c-3-5-6-9-10-11" />
            </g>
          )}
          {motif === "bolt" && (
            <path d="M36 14L22 36h9l-3 14 14-22h-9z" fill="#fff" />
          )}
          {motif === "wheel" && (
            <g stroke="#fff" strokeWidth="2.5" fill="none">
              <circle cx="32" cy="32" r="12" />
              <circle cx="32" cy="32" r="3" fill="#fff" stroke="none" />
              <path d="M32 20v24M20 32h24" />
            </g>
          )}
        </svg>
      </div>
    </Reveal>
  );
}
