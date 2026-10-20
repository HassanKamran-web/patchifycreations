"use client";

import Image from "next/image";
import Reveal from "../reveal";
import SectionHeading from "../section-heading";
import TiltCard from "../tilt-card";
import { ArrowUpRightIcon } from "../icons";

const PRODUCTS = [
  {
    title: "Left Chest Digitizing",
    description: "Clean, compact files sized for polos, shirts, and uniform logos.",
    image: "/images/embroidery/patch-01.png",
  },
  {
    title: "Cap & Hat Digitizing",
    description: "Curvature-compensated designs that sew perfectly on structured caps.",
    image: "/images/embroidery/patch-03.png",
  },
  {
    title: "3D Puff Digitizing",
    description: "Raised foam-ready stitch files built for bold hats and streetwear.",
    image: "/images/embroidery/patch-06.png",
  },
  {
    title: "Jacket Back Digitizing",
    description: "Large-format designs with balanced coverage and minimal distortion.",
    image: "/images/embroidery/patch-09.png",
  },
  {
    title: "Appliqué Digitizing",
    description: "Precision placement and tackdown sequences for fabric appliqué patches.",
    image: "/images/woven/patch-woven03.jpeg",
  },
  {
    title: "Sequin Digitizing",
    description: "Machine-sequenced files that drive flawless sequin drop patterns.",
    image: "/images/sublimation/patch-sublimation01.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="scroll-mt-24 bg-surface-tint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our services"
            title="Digitizing for every placement and style"
            description="From left chest logos to jacket backs, we digitize any design for any fabric, machine, and patch type."
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
