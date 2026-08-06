"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EmbroideredIcon, SparkIcon, StarIcon, WovenIcon } from "../icons";
import { prefersReducedMotion } from "../smooth-scroll";
import Counter from "./counter";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = ["Stitched with", "purpose, worn", "with pride."];

const STATS = [
  { to: 10, suffix: "+", label: "Years in production" },
  { to: 1800, suffix: "+", label: "Brands served" },
  { to: 38, suffix: "", label: "Countries shipped" },
  { to: 500, suffix: "k+", label: "Patches manufactured" },
];

function Float({
  duration,
  delay,
  children,
}: {
  duration: number;
  delay: number;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -12, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".about-line");
      gsap.fromTo(
        lines,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.15,
        },
      );

      gsap.fromTo(
        ".about-fade",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.7 },
      );

      if (sectionRef.current) {
        gsap.to(".about-parallax", {
          y: -90,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-hero"
      ref={sectionRef}
      className="relative overflow-hidden bg-canvas"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 right-[-8%] h-[30rem] w-[30rem] rounded-full bg-accent-soft blur-3xl" />
        <div className="absolute bottom-[-16%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-44">
        <div ref={contentRef}>
          <div className="about-fade inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/70 px-4 py-2 text-xs font-medium text-accent shadow-card backdrop-blur sm:text-sm">
            <SparkIcon className="h-3.5 w-3.5" />
            Our story · Since 2015
          </div>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl xl:text-[4.75rem]">
            {HEADLINE.map((line) => (
              <span key={line} className="block overflow-hidden pb-1">
                <span className="about-line inline-block will-change-transform">
                  {line === HEADLINE[1] ? (
                    <>
                      purpose, <span className="relative text-accent">worn</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <div className="about-fade mt-7 max-w-xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              patchifycreations started in 2015 behind a single industrial embroidery
              machine in Manchester. What began as a weekend service for local motorbike
              clubs grew into a full production house trusted by brands, military units,
              and sports teams across 38 countries.
            </p>
            <p>
              We still believe the hard part isn&apos;t stitching — it&apos;s listening. Our
              production managers work directly with you on every order, refining
              artwork, matching Pantone colors, and testing backings until the sample
              feels exactly right.
            </p>
          </div>

          <dl className="about-fade mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  <Counter to={stat.to} suffix={stat.suffix} />
                </dd>
                <dd className="mt-1.5 text-xs text-muted sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about-parallax relative hidden lg:block" aria-hidden="true">
          <div className="relative mx-auto h-[32rem] w-[30rem] max-w-full">
            <Float duration={6.5} delay={0.3}>
              <div className="absolute left-0 top-10 w-64 rotate-[-6deg] rounded-3xl border border-line bg-white p-6 shadow-card-lg">
                <div className="grid aspect-square place-items-center rounded-2xl bg-surface-tint">
                  <EmbroideredIcon className="h-16 w-16 text-accent" />
                </div>
                <p className="mt-4 text-sm font-bold text-ink">Embroidered collection</p>
                <p className="text-xs text-muted">Thread by thread, by hand in Manchester</p>
              </div>
            </Float>

            <Float duration={7.5} delay={1}>
              <div className="absolute right-0 top-0 w-56 rotate-[5deg] rounded-3xl border border-line bg-white p-5 shadow-card-lg">
                <div className="grid aspect-square place-items-center rounded-2xl bg-accent text-white">
                  <WovenIcon className="h-12 w-12" />
                </div>
                <p className="mt-3 text-sm font-bold text-ink">Woven precision</p>
              </div>
            </Float>

            <Float duration={6} delay={0.6}>
              <div className="absolute bottom-4 left-8 flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-card-lg">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-soft text-accent">
                  <StarIcon className="h-5 w-5" />
                </span>
                <div className="text-sm">
                  <p className="font-bold text-ink">4.9/5 rated</p>
                  <p className="text-muted">by 2,400+ clients</p>
                </div>
              </div>
            </Float>
          </div>
        </div>
      </div>
    </section>
  );
}
