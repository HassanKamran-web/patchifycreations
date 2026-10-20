"use client";

import Image from "next/image";
import Reveal from "../reveal";
import SectionHeading from "../section-heading";
import TiltCard from "../tilt-card";
import { ArrowUpRightIcon } from "../icons";

const PRODUCTS = [
  {
    title: "Embroidered Patches",
    description: "Classic raised-stitch patches with rich color and a premium textile feel.",
    image: "/images/embroidery/patch-01.png",
  },
  {
    title: "Woven Patches",
    description: "Fine detail and sharp edges at small sizes for intricate logos and text.",
    image: "/images/woven/patch-woven01.jpeg",
  },
  {
    title: "PVC & Rubber Patches",
    description: "Durable, weatherproof 3D rubber patches built for outdoor and tactical gear.",
    image: "/images/pvc/patch-04.png",
  },
  {
    title: "Leather Patches",
    description: "Premium top-grain leather with laser-etched and hand-finished edges.",
    image: "/images/leather/patch-02.png",
  },
  {
    title: "Chenille Patches",
    description: "Plush varsity-style patches with a classic soft, textured finish.",
    image: "/images/chenille/patch-18.png",
  },
  {
    title: "Sublimation Patches",
    description: "Full-colour dye-sublimation prints with photo-real detail and vibrant gradients.",
    image: "/images/sublimation/patch-sublimation01.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="scroll-mt-24 bg-surface-tint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our products"
            title="Every patch style your brand needs"
            description="From heritage embroidery to rugged PVC, we manufacture any patch type with custom shapes, sizes, and backings."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.title} delay={(i % 3) * 0.08}>
              <TiltCard className="rounded-card">
                <article className="flex h-full flex-col rounded-card border border-line bg-surface-tint p-6 transition-shadow duration-300 group-hover:shadow-card-lg sm:p-7">
                  <div className="relative h-40 overflow-hidden rounded-2xl bg-canvas sm:h-44">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">
                    {product.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {product.description}
                  </p>
                  <a
                    href="#quote"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
                  >
                    Get a quote
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
