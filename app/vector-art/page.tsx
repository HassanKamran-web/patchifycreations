import type { Metadata } from "next";
import Hero from "@/components/hero";
import QuoteForm from "@/components/vector-art/quote-form";
import Products from "@/components/vector-art/products";
import WhyChoose from "@/components/vector-art/why-choose";
import Process from "@/components/process";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "Vector Art Services | patchifycreations",
  description:
    "Professional vector art services for custom embroidered, woven, and PVC patches. Get stitch-ready artwork with fast turnaround.",
};

export default function VectorArtPage() {
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
