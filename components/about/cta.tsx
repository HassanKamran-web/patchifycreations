"use client";

import Link from "next/link";
import Reveal from "../reveal";
import { ArrowRightIcon, MailIcon } from "../icons";

export default function AboutCta() {
  return (
    <section id="about-cta" className="scroll-mt-24 bg-surface-tint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-accent px-6 py-16 text-center shadow-card-lg sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-ink/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Free quote · Free digital proof
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                Let’s stitch your next chapter
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Talk to a production manager today and get a free, stitch-ready mockup
                within 24 hours — no commitment, no design fees, no minimums.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/#cta"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-accent shadow-card-lg transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                >
                  Get a free quote
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:hello@patchifycreations.com"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  <MailIcon className="h-5 w-5" />
                  Email us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
