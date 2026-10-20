"use client";

import Image from "next/image";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const ROW_ONE = [
  "/images/embroidery/patch-01.png",
  "/images/leather/patch-02.png",
  "/images/embroidery/patch-03.png",
  "/images/pvc/patch-04.png",
  "/images/leather/patch-05.png",
  "/images/embroidery/patch-06.png",
  "/images/embroidery/patch-07.png",
  "/images/pvc/patch-08.png",
];

const ROW_TWO = [
  "/images/embroidery/patch-09.png",
  "/images/embroidery/patch-10.png",
  "/images/leather/patch-11.png",
  "/images/embroidery/patch-12.png",
  "/images/embroidery/patch-13.png",
  "/images/pvc/patch-14.png",
  "/images/embroidery/patch-15.png",
  "/images/pvc/patch-16.png",
];

export default function RecentDelivered() {
  return (
    <section id="recent-delivered" className="overflow-hidden bg-surface-tint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Fresh off the line"
            title="Recent Delivered"
            description="A look at the latest patches that left our workshop and headed to brands, teams, and collectors around the world."
          />
        </Reveal>
      </div>

      <div className="relative mt-12 space-y-6">
        <Reveal>
          <div className="marquee-pause flex overflow-hidden">
            <div className="marquee-track flex w-max items-center">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center gap-6 pr-6">
                  {ROW_ONE.map((src) => (
                    <PatchCard key={`${copy}-${src}`} src={src} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="marquee-pause flex overflow-hidden">
            <div
              className="marquee-track flex w-max items-center"
              style={{ animationDirection: "reverse" }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center gap-6 pr-6">
                  {ROW_TWO.map((src) => (
                    <PatchCard key={`${copy}-${src}`} src={src} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-1/2 z-20 h-56 w-56 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-1/2 z-20 h-56 w-56 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl"
        />
      </div>
    </section>
  );
}

function PatchCard({ src }: { src: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-2 shadow-card transition-transform duration-300 ease-out hover:scale-110">
      <Image
        src={src}
        alt=""
        width={176}
        height={176}
        className="h-40 w-40 rounded-xl object-cover sm:h-44 sm:w-44"
      />
    </div>
  );
}
