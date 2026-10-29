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
  title: "Custom Patch Manufacturing | Embroidered, Woven & PVC Patches",
  description: "Patchify Creations turns your artwork into high-quality custom embroidered, woven, and PVC patches. 15-piece minimum, 7-day turnaround, and free digital proofs.",
  verification: {
  google: "MQg0UNsLFlMX9p-P64CB-uYiYalI1Bpf7cZCgyHVTZk",
  },
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
