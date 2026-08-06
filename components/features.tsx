"use client";

import Reveal from "./reveal";
import { ArrowRightIcon, BrushIcon, LayersIcon, ShieldIcon, TruckIcon } from "./icons";

const FEATURES = [
  {
    icon: BrushIcon,
    title: "Free design proof",
    description:
      "Our designers refine your artwork for perfect stitching and send a free digital mockup within 24 hours — no charge, no obligation.",
  },
  {
    icon: LayersIcon,
    title: "No minimum orders",
    description:
      "Order a single sample or 10,000 units. We scale to your size with per-unit pricing that gets better as you grow.",
  },
  {
    icon: TruckIcon,
    title: "8–12 day turnaround",
    description:
      "Streamlined production and express options get quality patches to your door in days, not months.",
  },
  {
    icon: ShieldIcon,
    title: "Built to last",
    description:
      "Heavyweight threads, dense coverage, and reinforced borders — every patch survives washes, weather, and field wear.",
  },
];

const FOCUS_POINTS = [
  "Dedicated production manager per order",
  "Color-matching to your brand palette",
  "Priority reorders in under 48 hours",
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-surface-tint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Why patchifycreations
              </span>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Manufacturing that treats every patch like a flagship product
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                We combine old-school craft with modern production software, so you get
                museum-grade patches at production scale — with proofs, QC, and support
                that feel boutique.
              </p>
              <ul className="mt-8 space-y-3">
                {FOCUS_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-medium text-ink">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <CheckMark />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-on-primary shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-card-lg"
              >
                Get a free quote
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 2) * 0.08}>
                <div className="group h-full rounded-card border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg sm:p-7">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 group-hover:-rotate-6">
                    <feature.icon className="h-6.5 w-6.5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={12}
      height={12}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}
