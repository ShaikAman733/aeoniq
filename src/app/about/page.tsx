import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, Heart, Rocket, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AEONIQ is a goal-focused learning platform helping students, professionals and global-mobility aspirants build language skills, test scores and career readiness.",
};

const VALUES = [
  { icon: Compass, title: "Goal-first", desc: "We start from where you want to go, then build the pathway." },
  { icon: Heart, title: "Human + AI", desc: "Expert mentors amplified by always-on AI support." },
  { icon: ShieldCheck, title: "Outcome-driven", desc: "We measure success by your scores and milestones, not features." },
  { icon: Rocket, title: "Future-ready", desc: "Skills and credentials that travel across borders and careers." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AEONIQ"
        title={<>Smarter learning. <span className="text-gradient">Limitless future.</span></>}
        subtitle="AEONIQ Learning is a goal-focused platform helping students, professionals and global-mobility aspirants build language skills, test scores, career readiness and academic pathways through structured learning and personalized guidance."
        primary={{ label: "Book Free Assessment", href: "/book-assessment" }}
      />

      <section className="container-x pb-8">
        <SectionHeading eyebrow="What we stand for" title="Built around your goals" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                  <v.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
