import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OSSD_FAQ } from "@/lib/content";
import { GraduationCap, Users, School, ClipboardList } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Pathways · OSSD",
  description:
    "Earn the Ontario Secondary School Diploma (OSSD) from home — a globally recognized Canadian academic pathway to top universities, with counselling and parent guidance.",
};

const ADMISSIONS = [
  { step: "Consultation", desc: "Understand goals, current grade and university targets." },
  { step: "Placement", desc: "Credit evaluation and course plan mapped to your pathway." },
  { step: "Learn Online", desc: "Study Ontario-curriculum courses from home." },
  { step: "University Applications", desc: "Counsellor-guided applications to global universities." },
];

const PILLARS = [
  { icon: GraduationCap, title: "University opportunities", desc: "Apply directly to top universities in Canada, the US, UK and Australia." },
  { icon: Users, title: "Counselling support", desc: "Dedicated academic counsellors guide credits and applications." },
  { icon: School, title: "Partner school", desc: "Accredited Ontario partner school delivering the official curriculum." },
  { icon: ClipboardList, title: "Parent guidance", desc: "Transparent progress reporting and regular check-ins for parents." },
];

export default function AcademicPathwaysPage() {
  return (
    <>
      <PageHero
        eyebrow="Academic Pathways · OSSD"
        title={<>A Canadian academic pathway <span className="text-gradient">from home</span></>}
        subtitle="Earn the Ontario Secondary School Diploma (OSSD) online — a globally recognized route to top universities, without traditional board-exam pressure."
        primary={{ label: "Book Consultation", href: "/book-assessment" }}
        secondary={{ label: "How it works", href: "#process" }}
      />

      {/* What is OSSD + FAQ-style pillars */}
      <section className="container-x pb-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {OSSD_FAQ.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05} className={i === 0 ? "lg:col-span-2" : ""}>
              <div className="rounded-3xl border border-line bg-white p-7">
                <h3 className="text-xl font-bold text-ink">{f.q}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* pillars */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-purple-50/60" />
        <div className="container-x">
          <SectionHeading
            eyebrow="What you get"
            title="Guided every step of the way"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-6">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-md">
                    <p.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* admissions process */}
      <section id="process" className="container-x scroll-mt-24 py-20">
        <SectionHeading
          eyebrow="Admissions process"
          title="From first call to university offer"
        />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-purple-200 via-violet/40 to-pink/40 lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {ADMISSIONS.map((a, i) => (
              <Reveal as="li" key={a.step} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-brand-gradient text-lg font-bold text-white shadow-lg">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{a.step}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Explore an OSSD pathway for your child"
        subtitle="Book a consultation with our academic counsellors — parents welcome."
        primary={{ label: "Book Consultation", href: "/book-assessment" }}
        secondary={{ label: "Back to programs", href: "/#programs" }}
      />
    </>
  );
}
