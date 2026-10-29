import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "patchifycreations — Custom Patch Manufacturing",
    verification: {
    google: "MQg0UNsLFlMX9p-P64CB-uYiYalI1Bpf7cZCgyHVTZk",
  },
  description:
    "Custom embroidered, woven, PVC and chenille patches for apparel brands, teams and collectors. Free design proofs, 15-piece minimum, fast turnaround.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
