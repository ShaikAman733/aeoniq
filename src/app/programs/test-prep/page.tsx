import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { TEST_PREP } from "@/lib/content";
import { Check, Target, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Test Prep",
  description:
    "Outcome-focused preparation for IELTS, PTE, Duolingo English Test, CELPIP and TOEFL — with study plans, practice tests and clear target scores.",
};

export default function TestPrepPage() {
  return (
    <>
      <PageHero
        eyebrow="Test Prep"
        title={<>Prep built around <span className="text-gradient">outcomes</span>, not features</>}
        subtitle="Every track is engineered toward a target score — with a study plan, practice tests and expert strategy for the exam that fits your goal."
        chips={["IELTS", "PTE", "Duolingo", "CELPIP", "TOEFL"]}
        primary={{ label: "Book Free Assessment", href: "/book-assessment" }}
      />

      <section className="container-x grid gap-4 pb-8 md:grid-cols-2">
        {TEST_PREP.map((t, i) => (
          <Reveal key={t.code} delay={i * 0.05}>
            <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(110,43,255,0.35)]">
              <div className="flex items-center justify-between">
                <span className="rounded-2xl bg-brand-gradient px-4 py-2 font-heading text-lg font-bold text-white shadow-md">
                  {t.code}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1.5 text-sm font-bold text-purple-700">
                  <Target className="size-4" /> {t.outcome}
                </span>
              </div>

              <p className="mt-5 text-sm text-muted">
                <span className="font-semibold text-ink/70">Who it's for: </span>
                {t.who}
              </p>

              <ul className="mt-4 grid gap-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink/80">
                    <Check className="size-4 shrink-0 text-purple-600" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-2 border-t border-line pt-4 text-sm font-semibold text-ink/80">
                <CalendarDays className="size-4 text-purple-600" /> {t.plan}
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBand
        title="Know your test. Hit your score."
        subtitle="Take a free assessment and get a study plan mapped to your target score and timeline."
      />
    </>
  );
}
