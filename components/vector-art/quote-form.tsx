"use client";

import { useState, type FormEvent } from "react";
import Reveal from "../reveal";
import SectionHeading from "../section-heading";
import { ArrowRightIcon } from "../icons";

const FORMAT_OPTIONS = [
  { value: "cnd", label: "CND" },
  { value: "dst", label: "DST" },
  { value: "pxf", label: "PXF" },
];

export default function QuoteForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Get a free quote"
                title="Transform your embroidery designs with our expert vector art services"
                description="This is the place where colorful patches are made from vector art! Our vector art services provide accurate and scalable graphics for your bespoke patches."
                align="left"
              />
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                This is the foundation of creativity. We realize your concept with
                painstaking attention to detail, making sure that every seam is
                flawless. Our vector art creates the foundation for remarkable patches
                that stand out, whether they are bold symbols or complex designs.
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                Count on patchifycreations to enhance your brand with impeccable
                vector graphics that are customized to your precise requirements.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-card border border-line bg-surface-tint p-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <path d="M4.5 12.5l5 5 10-11" />
                  </svg>
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">Quote request sent!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  We&apos;ll review your details and send a free digital proof within 3–4
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-primary shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong"
                >
                  Submit another request
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-card border border-line bg-white p-6 shadow-card sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="va-name" className="mb-1.5 block text-sm font-medium text-ink">
                      Full Name
                    </label>
                    <input
                      id="va-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="va-email" className="mb-1.5 block text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id="va-email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="va-phone" className="mb-1.5 block text-sm font-medium text-ink">
                      Phone
                    </label>
                    <input
                      id="va-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="va-width" className="mb-1.5 block text-sm font-medium text-ink">
                      Width (inches)
                    </label>
                    <input
                      id="va-width"
                      type="number"
                      step="0.25"
                      min="0.5"
                      required
                      placeholder="3.5"
                      className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="va-height" className="mb-1.5 block text-sm font-medium text-ink">
                      Height (inches)
                    </label>
                    <input
                      id="va-height"
                      type="number"
                      step="0.25"
                      min="0.5"
                      required
                      placeholder="3"
                      className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="va-format" className="mb-1.5 block text-sm font-medium text-ink">
                      Output Format
                    </label>
                    <select
                      id="va-format"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/15"
                    >
                      <option value="" disabled>
                        Select format
                      </option>
                      {FORMAT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="va-file" className="mb-1.5 block text-sm font-medium text-ink">
                      Upload Artwork
                    </label>
                    <label
                      htmlFor="va-file"
                      className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-line bg-canvas px-4 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <span className="truncate">{fileName || "Choose file"}</span>
                    </label>
                    <input
                      id="va-file"
                      type="file"
                      accept=".png,.jpg,.jpeg,.svg,.pdf,.ai,.eps"
                      className="sr-only"
                      onChange={(e) =>
                        setFileName(e.target.files?.[0]?.name ?? null)
                      }
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-on-primary shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-card-lg sm:w-auto"
                >
                  Get Free Quote
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
