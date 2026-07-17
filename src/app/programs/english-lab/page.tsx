import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ENGLISH_LAB_COURSES } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "English Lab",
  description:
    "Master English for life, work and global opportunities — spoken confidence, professional communication, interviews, academic English and IELTS/PTE foundation.",
};

export default function EnglishLabPage() {
  return (
    <>
      <PageHero
        eyebrow="English Lab"
        title={<>Master English for life, work &amp; <span className="text-gradient">global opportunities</span></>}
        subtitle="Build real confidence in communication — from everyday conversations to interviews, presentations and university-ready academic English."
        primary={{ label: "Book Free Assessment", href: "/book-assessment" }}
        secondary={{ label: "See all programs", href: "/#programs" }}
      />

      <section className="container-x pb-8">
        <SectionHeading
          eyebrow="Programs"
          title="Choose your English focus"
          subtitle="Each track is structured, mentor-led and built around measurable progress."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {ENGLISH_LAB_COURSES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05} className={i === 0 ? "md:col-span-2" : ""}>
              <div className="group flex h-full items-start gap-5 rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(110,43,255,0.35)]">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <c.icon className="size-6" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-ink">{c.title}</h3>
                    <ArrowUpRight className="size-5 text-muted transition-colors group-hover:text-purple-600" />
                  </div>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Speak with confidence — start this week"
        subtitle="Book a free assessment and we'll place you in the right English track for your goal."
      />
    </>
  );
}
