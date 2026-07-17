import type { Metadata } from "next";
import { CtaBand } from "@/components/ui/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CONCIERGE_PACKS } from "@/lib/content";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Concierge",
  description:
    "Premium, personalized coaching — Self Prep + Live Practice, IELTS Writing Correction, Speaking Practice Club and Vocabulary Bootcamp, with a dedicated mentor.",
};

const PERKS = [
  "1-on-1 guidance",
  "Progress tracking",
  "Personalized roadmaps",
  "Goal-based recommendations",
];

export default function ConciergePage() {
  return (
    <>
      {/* premium dark hero */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-32 text-white sm:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-purple-500/30 blur-[130px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink/20 blur-[130px]" />
          <div className="absolute inset-0 grain opacity-40" />
        </div>
        <div className="container-x relative max-w-3xl text-center">
          <Reveal>
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-purple-200 backdrop-blur">
              Learning Concierge
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Premium coaching. <span className="text-gradient">A personal mentor.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              Every learner is different. Your concierge builds a plan around your
              goal, corrects your work, runs your practice and keeps you on track —
              all the way to achievement.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/book-assessment" size="lg" withArrow>
                Book Free Assessment
              </Button>
              <Button href="#packs" size="lg" variant="light">
                See the packs
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {PERKS.map((p) => (
                <li
                  key={p}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-brand-gradient">
                    <Check className="size-4" />
                  </span>
                  <span className="text-center text-xs font-semibold text-white/80">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* packs */}
      <section id="packs" className="container-x scroll-mt-24 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-purple-600">
            Concierge packs
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Focused support, exactly where you need it
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {CONCIERGE_PACKS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="group flex h-full items-start gap-5 rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(110,43,255,0.35)]">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <p.icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Your goal deserves a guide"
        subtitle="Book a free assessment and meet the concierge who'll get you there."
      />
    </>
  );
}
