"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PatchIcon,
  PhoneIcon,
  TwitterIcon,
} from "./icons";
import { useAnchorNavigation } from "./navigation";

const LINK_GROUPS = [
  {
    title: "Products",
    links: [
      { label: "Embroidered patches", href: "/#categories" },
      { label: "Woven patches", href: "/#categories" },
      { label: "PVC & rubber patches", href: "/#categories" },
      { label: "Velcro & hook & loop", href: "/#categories" },
      { label: "Custom labels & badges", href: "/#categories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why us", href: "/#features" },
      { label: "Our process", href: "/#process" },
      { label: "Gallery", href: "/gallery" },
      { label: "Get a quote", href: "/#cta" },
      { label: "Support", href: "mailto:hello@patchifycreations.com" },
    ],
  },
];

export default function Footer() {
  const navigate = useAnchorNavigation();

  const handleLinkClick =
    (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith("/")) {
        e.preventDefault();
        navigate(href);
      }
    };

  return (
    <footer className="border-t border-line bg-surface-tint">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="flex items-center gap-2.5 text-ink"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-white">
                <PatchIcon className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                patchify<span className="text-accent">creations</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Custom patch manufacturing for brands, teams, and collectors. Free proofs,
              15-piece minimum, patches built to last.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: InstagramIcon, label: "Instagram", link: "https://www.instagram.com/patchifycreations/" },
                { icon: FacebookIcon, label: "Facebook", link: "https://www.facebook.com/share/1BjRQvNN78/" },
                // { icon: TwitterIcon, label: "Twitter / X" },
              ].map((social) => (
                <Link
                target="_blank"
                  key={social.label}
                  href={social.link || "/"}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-muted transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </Link>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick(link.href)}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:info@patchifycreations.com" className="transition-colors hover:text-accent">
                  info@patchifycreations.com
                </a>
              </li>
              {/* <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+15550142400" className="transition-colors hover:text-accent">
                  +1 (555) 014-2400
                </a>
              </li> */}
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>633 W 5th St, Los Angeles, CA 90071</span>
              </li>
            </ul>
          
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} patchifycreations. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/" className="transition-colors hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
