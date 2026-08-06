"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Patch } from "./data";
import PatchArt from "./patch-art";
import { getLenis, prefersReducedMotion } from "../smooth-scroll";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "../icons";

type LightboxProps = {
  patch: Patch;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

export default function Lightbox({
  patch,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: LightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "ArrowLeft" && hasPrev) {
        e.preventDefault();
        onPrev();
      }
      if (e.key === "ArrowRight" && hasNext) {
        e.preventDefault();
        onNext();
      }
      if (e.key === "Tab") {
        const nodes = panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!nodes || nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
      lenis?.start();
      previouslyFocused?.focus();
    };
  }, [hasPrev, hasNext, onClose, onPrev, onNext]);

  const reduce = prefersReducedMotion();

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <motion.div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${patch.name} patch details`}
        className="relative w-full max-w-3xl overflow-hidden rounded-t-[2rem] bg-white shadow-card-lg sm:rounded-[2rem]"
        initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid max-h-[88vh] overflow-y-auto md:max-h-[80vh] md:grid-cols-[0.95fr_1.05fr] md:overflow-hidden">
          <div className="grid place-items-center bg-surface-tint p-8 sm:p-10">
            <PatchArt patch={patch} className="max-h-72 w-full max-w-xs sm:max-h-80" />
          </div>

          <div className="relative flex flex-col p-6 sm:p-8 md:max-h-[80vh] md:overflow-y-auto">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close patch details"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-accent-soft"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent md:mt-0">
              {patch.category}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {patch.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {patch.description}
            </p>

            <dl className="mt-7 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-line bg-surface-tint p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Patch type
                </dt>
                <dd className="mt-1 font-bold text-ink">{patch.category}</dd>
              </div>
              <div className="rounded-2xl border border-line bg-surface-tint p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Border style
                </dt>
                <dd className="mt-1 font-bold text-ink">{patch.border}</dd>
              </div>
              <div className="rounded-2xl border border-line bg-surface-tint p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Size
                </dt>
                <dd className="mt-1 font-bold text-ink">{patch.size}</dd>
              </div>
              <div className="rounded-2xl border border-line bg-surface-tint p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  SKU
                </dt>
                <dd className="mt-1 font-mono font-bold text-ink">{patch.id}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <h3 className="text-sm font-bold text-ink">Backing options</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {patch.backings.map((backing) => (
                  <li
                    key={backing}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink"
                  >
                    <CheckIcon className="h-3.5 w-3.5 text-accent" />
                    {backing}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onPrev}
                  disabled={!hasPrev}
                  aria-label="View previous patch"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  disabled={!hasNext}
                  aria-label="View next patch"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>

              <Link
                href="/#cta"
                onClick={onClose}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-on-primary shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-card-lg"
              >
                Get this patch
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
