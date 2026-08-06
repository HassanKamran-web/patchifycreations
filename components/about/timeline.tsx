"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../smooth-scroll";
import Reveal from "../reveal";
import SectionHeading from "../section-heading";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    step: "01",
    title: "Design consultation",
    text: "We review your artwork, colors, sizes, and backings, then recommend the best manufacturing route for your patch — before a single thread is chosen.",
  },
  {
    step: "02",
    title: "Digitizing",
    text: "A specialist turns your artwork into a stitch-ready file, mapping every thread direction, density, and color stop with surgical precision.",
  },
  {
    step: "03",
    title: "Sample & proof",
    text: "A physical sample is stitched and photographed against the mockup, so you approve the exact look before production ever begins.",
  },
  {
    step: "04",
    title: "Production & QC",
    text: "Full runs pass a 10-point inspection — edge density, color, backing, stitch tension. Every patch checked, every batch photographed.",
  },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      if (lineRef.current && sectionRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 68%",
              end: "bottom 72%",
              scrub: true,
            },
          },
        );
      }

      gsap.utils.toArray<HTMLElement>(".timeline-step").forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.35, scale: 0.97 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: step,
              start: "top 84%",
              end: "top 30%",
              scrub: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our process"
            title="From rough sketch to finished patch"
            description="A disciplined, four-stage workflow refined over ten years and half a million patches."
          />
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute bottom-2 left-6 top-2 w-px bg-line lg:left-1/2 lg:-ml-px"
            aria-hidden="true"
          />
          <div
            ref={lineRef}
            className="absolute bottom-2 left-6 top-2 w-px origin-top bg-accent lg:left-1/2 lg:-ml-px"
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12">
            {STEPS.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={step.step}
                  className="timeline-step relative lg:grid lg:grid-cols-2 lg:gap-16"
                >
                  <span
                    className="absolute left-6 top-1 z-10 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full border-2 border-accent bg-white shadow-card lg:left-1/2"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>

                  <div
                    className={`ml-14 lg:ml-0 ${
                      left ? "lg:col-start-1 lg:pr-6" : "lg:col-start-2 lg:pl-6"
                    }`}
                  >
                    <article className="rounded-card border border-line bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-lg sm:p-8">
                      <span className="text-sm font-extrabold tracking-[0.2em] text-accent">
                        STEP {step.step}
                      </span>
                      <h3 className="mt-3 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">
                        {step.text}
                      </p>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
