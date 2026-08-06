"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon, MenuIcon, PatchIcon } from "./icons";
import { useAnchorNavigation } from "./navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const navigate = useAnchorNavigation();

  const handleNavigate = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);

      if (e.key === "Tab") {
        const nodes = drawerRef.current?.querySelectorAll<HTMLElement>(
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
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-[4.5rem]"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-ink"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("/");
          }}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent text-white shadow-card transition-transform duration-300 group-hover:-rotate-6">
            <PatchIcon className="h-5 w-5" />
          </span>
          <span className="text-base font-bold tracking-tight sm:text-lg">
            patchify<span className="text-accent">creations</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(link.href);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-accent-soft hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate("/#cta");
            }}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-primary shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-card-lg md:inline-flex"
          >
            Start Your Design
          </Link>
          <button
            ref={openButtonRef}
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-accent-soft md:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col border-l border-line bg-white shadow-card-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <div className="flex items-center justify-between border-b border-line px-6 py-5">
                <span className="flex min-w-0 items-center gap-2 font-bold text-ink">
                  <PatchIcon className="h-5 w-5 shrink-0 text-accent" />
                  <span className="truncate">patchifycreations</span>
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-accent-soft"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1 overflow-y-auto px-6 py-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(link.href);
                    }}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.05 }}
                    className="rounded-xl px-4 py-3.5 text-lg font-semibold text-ink transition-colors hover:bg-accent-soft hover:text-accent"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto border-t border-line px-6 py-6">
                <Link
                  href="/#cta"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate("/#cta");
                  }}
                  className="flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-on-primary transition-colors hover:bg-accent-strong"
                >
                  Start Your Design
                </Link>
                <p className="mt-4 text-center text-sm text-muted">
                  Free design proofs · No minimums
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
