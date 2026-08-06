import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/gallery/gallery";
import { ArrowRightIcon, SparkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Patch Gallery | patchifycreations",
  description:
    "Browse embroidered, woven, PVC, leather, chenille and military patch designs — with border style, backing options and full specs on every piece.",
};

export default function GalleryPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-canvas pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pt-44">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-24 right-[-8%] h-[26rem] w-[26rem] rounded-full bg-accent-soft blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            <SparkIcon className="h-3.5 w-3.5" />
            The gallery
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl lg:leading-[1.08]">
            Patches that speak before you do
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            A proof-approved design library across five manufacturing styles. Tap any
            patch for full specs — border, backing, and size — then make it yours.
          </p>
        </div>
      </section>

      <Gallery />

      <section className="scroll-mt-24 bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-accent px-6 py-16 text-center shadow-card-lg sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-ink/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Free quote · Free digital proof
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                Seen one you like? Make it yours.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Reproduce any design in the gallery, or send your artwork and we’ll
                digitize something entirely new — free mockup within 24 hours.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/#cta"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-accent shadow-card-lg transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
                >
                  Get a free quote
                  <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  Meet the studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
