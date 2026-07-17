import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { BundlesSection } from "@/components/home/BundlesSection";

export const metadata: Metadata = {
  title: "Bundles",
  description:
    "Goal-based learning bundles — Canada PR, France PR, Germany Job Seeker, USA Graduate School and Global Career — combining programs for a clearer outcome and better value.",
};

export default function BundlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Learning Bundles"
        title={<>One goal. One <span className="text-gradient">bundle</span>. Real momentum.</>}
        subtitle="Curated program combinations built around a single destination — with a clearer outcome and better value than buying courses one by one."
        primary={{ label: "Book Free Assessment", href: "/book-assessment" }}
      />
      <BundlesSection />
      <CtaBand
        title="Find the bundle that fits your goal"
        subtitle="Not sure which one? A free assessment points you to the right bundle."
      />
    </>
  );
}
