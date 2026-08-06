import Hero from "@/components/hero";
import Categories from "@/components/categories";
import Features from "@/components/features";
import Showcase from "@/components/showcase";
import Process from "@/components/process";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Categories />
      <Features />
      <Showcase />
      <Process />
      <Cta />
    </main>
  );
}
