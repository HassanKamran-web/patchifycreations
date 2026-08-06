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
  description:
    "Custom embroidered, woven, PVC and velcro patches for apparel brands, military and sports teams. Free design proofs, no minimums, fast turnaround.",
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
