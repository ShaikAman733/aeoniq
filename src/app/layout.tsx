import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeoniq.learning"),
  title: {
    default: "AEONIQ — Learn Languages. Achieve Scores. Unlock Opportunities.",
    template: "%s · AEONIQ Learning",
  },
  description:
    "Goal-focused online learning for IELTS, PTE, CELPIP, TOEFL, Duolingo, French, German, Arabic and future-ready skills. Live classes, AI support and a personal Learning Concierge.",
  keywords: [
    "IELTS", "PTE", "CELPIP", "TOEFL", "Duolingo English Test",
    "French", "German", "Arabic", "study abroad", "Canada PR", "OSSD",
  ],
  openGraph: {
    title: "AEONIQ — Smarter Learning. Limitless Future.",
    description:
      "A goal-focused learning platform for language skills, test scores, career readiness and academic pathways.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
