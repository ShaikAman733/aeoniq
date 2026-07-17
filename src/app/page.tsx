import { Hero } from "@/components/home/Hero";
import { GoalGrid } from "@/components/home/GoalGrid";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { BundlesSection } from "@/components/home/BundlesSection";
import { WhySection } from "@/components/home/WhySection";
import { FeaturedPrograms } from "@/components/home/FeaturedPrograms";
import { ResultsSection } from "@/components/home/ResultsSection";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { ConciergeHighlight } from "@/components/home/ConciergeHighlight";
import { AiSection } from "@/components/home/AiSection";
import { ResourcesTeaser } from "@/components/home/ResourcesTeaser";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GoalGrid />
      <ProgramsSection />
      <BundlesSection />
      <WhySection />
      <FeaturedPrograms />
      <ResultsSection />
      <ExperienceTimeline />
      <ConciergeHighlight />
      <AiSection />
      <ResourcesTeaser />
      <FinalCta />
    </>
  );
}
