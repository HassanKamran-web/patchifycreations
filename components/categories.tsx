"use client";

import Image from "next/image";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import TiltCard from "./tilt-card";
import { ArrowUpRightIcon, EmbroideredIcon, LayersIcon, ScissorsIcon, ShieldIcon, WovenIcon } from "./icons";

const CATEGORIES = [
  {
    icon: EmbroideredIcon,
    title: "Embroidered Patches",
    description:
      "Classic raised-stitch patches with rich color and a premium textile feel. Perfect for apparel and uniforms.",
    tag: "Most popular",
    image: "/images/embroidery/patch-01.png",
  },
  {
    icon: WovenIcon,
    title: "Woven Patches",
    description:
      "Fine detail and sharp edges at small sizes. Ideal for intricate logos, text, and complex artwork.",
    tag: "Fine detail",
    image: "/images/pvc/patch-04.png",
  },
  {
    icon: LayersIcon,
    title: "PVC & Rubber Patches",
    description:
      "Durable, weatherproof 3D rubber patches with bold dimension. Built for outdoor and tactical gear.",
    tag: "Weatherproof",
    image: "/images/pvc/patch-08.png",
  },
  {
    icon: ShieldIcon,
    title: "Velcro & Hook & Loop",
    description:
      "Add a hook-and-loop backing to any patch for quick attachment to bags, vests, and tactical kits.",
    tag: "Easy attach",
    image: "/images/embroidery/patch-10.png",
  },
  {
    icon: ScissorsIcon,
    title: "Custom Labels & Badges",
    description:
      "Garment labels, woven tags, and award badges produced in small batches without brand compromise.",
    tag: "15-piece minimum",
    image: "/images/chenille/patch-18.png",
  },
  {
    icon: ShieldIcon,
    title: "Leather Patches",
    description:
      "Premium top-grain leather with laser-etched and hand-finished edges for a vintage, worn-in look.",
    tag: "Premium",
    image: "/images/leather/patch-02.png",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Categories"
            title="Every patch style your brand needs"
            description="From heritage embroidery to rugged PVC, we manufacture any patch type in custom shapes, sizes, and backings."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 0.08}>
              <TiltCard className="rounded-card">
                <article className="flex h-full flex-col rounded-card border border-line bg-surface-tint p-6 transition-shadow duration-300 group-hover:shadow-card-lg sm:p-7">
                  <div className="relative h-40 overflow-hidden rounded-2xl  sm:h-44">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-accent shadow-card transition-transform duration-300 group-hover:-rotate-6">
                      <category.icon className="h-7 w-7" />
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent shadow-card">
                      {category.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">
                    {category.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {category.description}
                  </p>
                  <a
                    href="#cta"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
                  >
                    Shop this style
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
