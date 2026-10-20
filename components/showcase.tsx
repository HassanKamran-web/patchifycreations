"use client";

import Link from "next/link";
import Reveal from "./reveal";
import { ArrowRightIcon, StarIcon } from "./icons";

const REVIEWS = [
  {
    initials: "AM",
    name: "Alex M.",
    role: "Brand owner",
    quote:
      "The proof was free, arrived within hours, and the patches looked even better in hand than the mockup. We have reordered twice already.",
  },
  {
    initials: "SR",
    name: "Sara R.",
    role: "Event organiser",
    quote:
      "Ordered 250 patches for our festival volunteers. The small minimum made sampling easy, and the final quality blew everyone away.",
  },
  {
    initials: "DK",
    name: "Dan K.",
    role: "Club treasurer",
    quote:
      "Our club patches look sharper than our old supplier's at half the cost. The turnaround hit the 7-day promise exactly.",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="scroll-mt-24 bg-surface-tint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-linear-to-br from-ink via-ink to-accent-strong shadow-card-lg">
            <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                  Showcase
                </span>
                <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
                  Worn by teams, brands, and collectors everywhere
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
                  From garage patches to unit insignia and boutique apparel labels, we
                  have produced over 100,000 patches for brands, teams, and collectors.
                  Here is what they say about working with us.
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
                        Jordan T.
                      </span>
                      <span className="block text-white/60">Club founder</span>
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="flex flex-col gap-4">
                {REVIEWS.map((review) => (
                  <figure
                    key={review.name}
                    className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
                  >
                    <div className="flex gap-1 text-amber-300" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4" />
                      ))}
                    </div>
                    <blockquote className="mt-3 text-sm leading-relaxed text-white/85">
                      “{review.quote}”
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-xs font-bold text-white">
                        {review.initials}
                      </span>
                      <span className="text-sm">
                        <span className="block font-semibold text-white">
                          {review.name}
                        </span>
                        <span className="block text-white/60">{review.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="grid divide-y divide-white/10 border-t border-white/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {[
                { value: "100k+", label: "Patches manufactured" },
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
