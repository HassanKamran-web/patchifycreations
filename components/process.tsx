"use client";

import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const STEPS = [
  {
    step: "01",
    title: "Upload your artwork",
    description:
      "Send a JPEG, PNG, SVG, or even a rough sketch. Include size and color notes — we handle the rest.",
  },
  {
    step: "02",
    title: "Get a free digital proof",
    description:
      "A specialist digitizes your design into stitch-ready artwork and sends a free mockup within 24 hours.",
  },
  {
    step: "03",
    title: "Approve & manufacture",
    description:
      "Confirm colors, size, and backing. Your order enters production the same day with photo updates.",
  },
  {
    step: "04",
    title: "Receive & reorder",
    description:
      "Every patch passes a 10-point QC check before shipping. Reorders keep your exact spec on file.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From artwork to apparel in four steps"
            description="A hands-on process designed to remove guesswork and get your patches to market fast."
          />
        </Reveal>

        <div className="relative mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="group relative">
                <div className="relative z-10 flex items-center gap-4 lg:block">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-accent bg-white text-lg font-extrabold text-accent shadow-card transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    {step.step}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted lg:hidden">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
