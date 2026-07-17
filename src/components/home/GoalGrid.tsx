import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GOALS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function GoalGrid() {
  return (
    <section id="goals" className="container-x scroll-mt-24 py-20 lg:py-28">
      <SectionHeading
        eyebrow="What is your goal?"
        title={<>Start with a goal. We build the pathway.</>}
        subtitle="Tell us where you want to go — study abroad, a new score, a language, a career move — and AEONIQ maps the route."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GOALS.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <Link
              href={g.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-[0_24px_50px_-24px_rgba(110,43,255,0.35)]"
            >
              <div
                className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${g.accent} text-white shadow-md`}
              >
                <g.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{g.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {g.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600">
                See pathways
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-purple-50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
