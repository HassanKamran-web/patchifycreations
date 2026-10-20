"use client";

import Reveal from "../reveal";
import SectionHeading from "../section-heading";
import TiltCard from "../tilt-card";
import {
  BrushIcon,
  LayersIcon,
  ShieldIcon,
  SparkIcon,
  TruckIcon,
} from "../icons";

const REASONS = [
  {
    icon: BrushIcon,
    title: "Pixel-perfect accuracy",
    text: "Every vector is hand-traced and quality-checked to ensure clean stitch paths and crisp edges.",
  },
  {
    icon: LayersIcon,
    title: "Scalable to any size",
    text: "Vector files scale infinitely without quality loss — perfect for patches from 1 inch to 12 inches.",
  },
  {
    icon: TruckIcon,
    title: "Fast turnaround",
    text: "Receive your stitch-ready file within 3–4 hours of submitting your artwork, free of charge.",
  },
  {
    icon: ShieldIcon,
    title: "Machine-compatible formats",
    text: "We deliver in CND, DST, PXF, and other industry-standard formats for any embroidery machine.",
  },
  {
    icon: SparkIcon,
    title: "Unlimited revisions",
    text: "We refine your vector until it matches your vision perfectly — no extra charges, no limits.",
  },
  {
    icon: BrushIcon,
    title: "Brand-true colour matching",
    text: "Pantone-matched threads and colour palettes keep your brand identity consistent across every patch.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Precision vector art that drives production"
            description="Enterprise-grade accuracy without the enterprise friction — backed by 100k+ patches and a 4.9/5 client rating."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 0.08}>
              <TiltCard className="rounded-card">
                <article className="flex h-full flex-col rounded-card border border-line bg-surface-tint p-7 transition-shadow duration-300 group-hover:shadow-card-lg">
                  <span className="grid h-13 w-13 place-items-center rounded-2xl bg-white text-accent shadow-card transition-transform duration-300 group-hover:-rotate-6">
                    <reason.icon className="h-6.5 w-6.5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{reason.text}</p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
