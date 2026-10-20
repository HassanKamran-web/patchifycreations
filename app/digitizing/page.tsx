import type { Metadata } from "next";
import Hero from "@/components/hero";
import QuoteForm from "@/components/digitizing/quote-form";
import Products from "@/components/digitizing/products";
import WhyChoose from "@/components/digitizing/why-choose";
import Process from "@/components/process";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "Embroidery Digitizing Services | patchifycreations",
  description:
    "Professional embroidery digitizing services for custom patches. Get machine-ready stitch files in DST, PES, JEF and more with fast turnaround.",
};

export default function DigitizingPage() {
  return (
    <main className="flex-1">
      <Hero />
      <QuoteForm />
      <Products />
      <WhyChoose />
      <Process />
      <Cta />
    </main>
  );
}
