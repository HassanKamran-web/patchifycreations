"use client";

import Reveal from "../reveal";
import SectionHeading from "../section-heading";
import TiltCard from "../tilt-card";
import {
  BrushIcon,
  EmbroideredIcon,
  LayersIcon,
  ShieldIcon,
  SparkIcon,
  TruckIcon,
} from "../icons";

const REASONS = [
  {
    icon: EmbroideredIcon,
    title: "Stitch-perfect accuracy",
    text: "Every path is hand-digitized with tuned underlay, density, and direction for a flawless sew-out.",
  },
  {
    icon: LayersIcon,
    title: "Optimized for any fabric",
    text: "From pique polos to caps and fleece, we adjust pull compensation and density per material.",
  },
  {
    icon: TruckIcon,
    title: "Fast turnaround",
    text: "Receive your machine-ready file within 3–4 hours of submitting your artwork, free of charge.",
  },
  {
    icon: ShieldIcon,
    title: "Machine-compatible formats",
    text: "We deliver DST, PES, JEF, EXP, VP3, and more — ready for any commercial or home machine.",
  },
  {
    icon: SparkIcon,
    title: "Unlimited revisions",
    text: "We refine your file until the sew-out matches your vision perfectly — no extra charges.",
  },
  {
    icon: BrushIcon,
    title: "Minimal thread trims",
    text: "Efficient pathing means fewer jumps and trims, faster run times, and cleaner finished patches.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Precision digitizing that drives production"
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
