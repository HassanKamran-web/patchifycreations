"use client";

import Reveal from "../reveal";
import SectionHeading from "../section-heading";
import TiltCard from "../tilt-card";
import {
  BrushIcon,
  LayersIcon,
  MapPinIcon,
  ShieldIcon,
  SparkIcon,
  TruckIcon,
} from "../icons";

const REASONS = [
  {
    icon: BrushIcon,
    title: "Free design proofs",
    text: "Stitch-ready mockups within 24 hours — always free, never an obligation, even for a single patch.",
  },
  {
    icon: LayersIcon,
    title: "No minimum orders",
    text: "Order one sample or 100,000 units. Our tooling scales with you, and unit pricing improves as you grow.",
  },
  {
    icon: TruckIcon,
    title: "Fast turnaround",
    text: "Standard production in 8–12 days with express lanes available when deadlines are tight.",
  },
  {
    icon: ShieldIcon,
    title: "Built to last",
    text: "Heavyweight threads, dense coverage, and reinforced borders that survive washes, weather, and field wear.",
  },
  {
    icon: SparkIcon,
    title: "Dedicated production manager",
    text: "A named expert owns your order end-to-end, replies in hours, and keeps you updated at every stage.",
  },
  {
    icon: MapPinIcon,
    title: "Worldwide shipping",
    text: "DHL-tracked delivery to 38 countries with customs paperwork handled on our side.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-surface-tint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Quality you can measure, service you can feel"
            description="Enterprise reliability without the enterprise friction — backed by half a million patches and a 4.9/5 rating."
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
