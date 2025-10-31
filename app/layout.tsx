import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: "Anish Dahiya — Data Scientist, Creator, Founder",
    template: "%s · Anish Dahiya"
  },
  description:
    "Data scientist, storyteller, and founder of X-Corp. Crafting intelligent systems, content, and companies that move people forward.",
  openGraph: {
    title: "Anish Dahiya",
    description:
      "Data scientist, storyteller, and founder of X-Corp. Crafting intelligent systems, content, and companies that move people forward.",
    url: "https://anishdahiya.in",
    siteName: "Anish Dahiya",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Dahiya",
    description:
      "Data scientist, storyteller, and founder of X-Corp. Crafting intelligent systems, content, and companies that move people forward.",
    creator: "@anishcodes"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.variable, spaceGrotesk.variable, "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans text-slate-900 antialiased dark:from-slate-950 dark:via-slate-900 dark:to-slate-950")}
      >
        <ThemeProvider enableSystem attribute="class">
          <Navbar />
          <main className="mx-auto mt-8 min-h-[70vh] max-w-6xl px-4 pb-16">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
