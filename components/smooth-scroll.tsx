"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function scrollToElement(el: HTMLElement) {
  if (prefersReducedMotion()) {
    el.scrollIntoView({ behavior: "auto" });
    return;
  }
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset: -88, duration: 1.3 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    });

    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    const onLoad = () => ScrollTrigger.refresh();

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(onRaf);
      lenis.destroy();
      lenisInstance = null;
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) scrollToElement(el);
    }, 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
