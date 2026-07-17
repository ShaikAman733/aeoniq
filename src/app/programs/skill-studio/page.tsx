import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { SKILL_STUDIO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Skill Studio",
  description:
    "Build future-ready workplace and career skills — Career Essentials, Google Suite Hub, Bizz Tech and Skill Catalyst.",
};

export default function SkillStudioPage() {
  return (
    <>
      <PageHero
        eyebrow="Skill Studio"
        title={<>Build skills for <span className="text-gradient">tomorrow&apos;s opportunities</span></>}
        subtitle="Practical, career-focused programs that make you workplace-ready — communication, productivity, business technology and real project skills."
        primary={{ label: "Book Free Assessment", href: "/book-assessment" }}
      />

      <section className="container-x grid gap-4 pb-8 sm:grid-cols-2">
        {SKILL_STUDIO.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(110,43,255,0.35)]">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <CtaBand
        title="Level up your career readiness"
        subtitle="Book a free assessment and we'll recommend the skill track that moves your career forward."
      />
    </>
  );
}
