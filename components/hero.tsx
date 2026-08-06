"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightIcon, SparkIcon, StarIcon } from "./icons";
import { prefersReducedMotion } from "./smooth-scroll";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = ["Custom patches,", "crafted to your", "exact design."];

const MARQUEE_ITEMS = [
  "Apparel brands",
  "Military & tactical",
  "Sports teams",
  "Motorcycle clubs",
  "Corporate swag",
  "Event & merch",
  "Scout troops",
  "Cosplay & fan art",
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
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".hero-line");
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
        ".hero-fade",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.7 },
      );

      if (sectionRef.current) {
        const pin = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=75%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        pin.to(
          contentRef.current,
          {
            opacity: 0.2,
            scale: 0.94,
            y: -90,
            duration: 1,
            ease: "none",
          },
          0,
        );

        const decors = decorRef.current?.querySelectorAll<HTMLElement>("[data-speed]");
        decors?.forEach((el) => {
          const speed = Number(el.dataset.speed ?? "1");
          pin.to(el, { y: -170 * speed, duration: 1, ease: "none" }, 0);
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col items-center overflow-hidden bg-canvas"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent-soft blur-3xl sm:h-[34rem] sm:w-[34rem]" />
        <div className="absolute bottom-[-20%] left-[-12%] h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl sm:h-[30rem] sm:w-[30rem]" />
      </div>

      <div
        ref={decorRef}
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
      >
        <div data-speed="1.4" className="absolute left-[6%] top-[20%] -rotate-12">
          <Float duration={6} delay={0.4}>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-card-lg">
              <div className="grid h-16 w-16 place-items-center rounded-xl bg-accent-soft">
                <SparkIcon className="h-8 w-8 text-accent" />
              </div>
            </div>
          </Float>
        </div>
        <div data-speed="0.8" className="absolute right-[8%] top-[16%] rotate-6">
          <Float duration={7} delay={1.2}>
            <div className="rounded-2xl border border-line bg-white p-4 shadow-card-lg">
              <div className="flex items-center gap-3 rounded-xl bg-surface-tint px-4 py-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white">
                  <StarIcon className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-ink">4.9/5</p>
                  <p className="text-muted">2,400+ reviews</p>
                </div>
              </div>
            </div>
          </Float>
        </div>
        <div data-speed="1.9" className="absolute bottom-[24%] right-[22%] -rotate-6">
          <Float duration={5.5} delay={0}>
            <div className="rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-accent shadow-card-lg">
              Free design proof
            </div>
          </Float>
        </div>
        <div data-speed="1.1" className="absolute bottom-[18%] left-[16%] rotate-3">
          <Float duration={6.5} delay={0.8}>
            <div className="rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-accent shadow-card-lg">
              No minimums
            </div>
          </Float>
        </div>
      </div>

      <div className="relative z-10 my-auto mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:py-32">
        <div ref={contentRef}>
          <div className="hero-fade inline-flex max-w-full items-center gap-2 rounded-full border border-accent/20 bg-white/70 px-4 py-2 text-xs font-medium text-accent shadow-card backdrop-blur sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span className="truncate">Custom patch manufacturing · Embroidered · Woven · PVC</span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {HEADLINE.map((line) => (
              <span key={line} className="block overflow-hidden pb-1">
                <span className="hero-line inline-block will-change-transform">
                  {line === HEADLINE[1] ? (
                    <>
                      crafted to <span className="relative text-accent">your</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <div className="hero-fade mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            <p>
              patchifycreations turns your artwork into production-ready embroidered,
              woven, and PVC patches for brands, teams, and collectors. Upload a design
              and get a free digital proof within 24 hours.
            </p>
          </div>

          <div className="hero-fade mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-on-primary shadow-card-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Start your patch design
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-8 py-4 text-base font-semibold text-ink transition-colors hover:bg-surface-tint"
            >
              View the gallery
            </a>
          </div>

          <dl className="hero-fade mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-14 sm:flex sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-6">
            {[
              { value: "24hr", label: "Free digital proof" },
              { value: "0", label: "Minimum order size" },
              { value: "8–12", label: "Day turnaround" },
              { value: "500k+", label: "Patches delivered" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[5.5rem] left-1/2 z-10 hidden -translate-x-1/2 md:flex">
        <div className="flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">
          <span>Scroll</span>
          <span className="h-10 w-px animate-pulse bg-accent/60" aria-hidden="true" />
        </div>
      </div>

      <div
        className="marquee relative z-10 mt-auto w-full border-y border-line bg-white/80 py-4 backdrop-blur sm:py-5"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-10 pr-10 sm:gap-12 sm:pr-12">
              {MARQUEE_ITEMS.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.16em] text-muted sm:gap-12 sm:text-sm"
                >
                  {item}
                  <SparkIcon className="h-3 w-3 text-accent sm:h-3.5 sm:w-3.5" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
