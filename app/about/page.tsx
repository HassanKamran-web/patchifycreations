import type { Metadata } from "next";
import AboutHero from "@/components/about/hero";
import Timeline from "@/components/about/timeline";
import WhyChoose from "@/components/about/why-choose";
import Team from "@/components/about/team";
import AboutCta from "@/components/about/cta";

export const metadata: Metadata = {
  title: "About Us | patchifycreations",
  description:
    "The story, process, and people behind patchifycreations — custom patch manufacturing since 2015.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <Timeline />
      <WhyChoose />
      <Team />
      <AboutCta />
    </main>
  );
}
