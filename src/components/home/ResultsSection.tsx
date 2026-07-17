import { Quote, Star } from "lucide-react";
import { RESULTS, RESULT_TAGS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const STORIES = [
  { name: "Aisha R.", note: "IELTS 8.0 · Study Abroad", quote: "The speaking mocks and concierge feedback took me from a 6.5 to 8.0 in seven weeks." },
  { name: "Karan M.", note: "PTE 84 · Canada PR", quote: "Templates plus AI practice made the exam feel routine. Cleared PR points comfortably." },
  { name: "Lena F.", note: "TEF B2 · France", quote: "Started French from zero. The structured path and speaking club changed everything." },
];

export function ResultsSection() {
  return (
    <section id="results" className="container-x scroll-mt-24 py-20 lg:py-28">
      <SectionHeading
        eyebrow="Real results"
        title="Scores achieved. Opportunities unlocked."
        subtitle="Success across tests, languages and academic pathways — the outcomes our learners care about most."
      />

      {/* animated counters */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {RESULTS.map((r, i) => (
          <Reveal key={r.label} delay={i * 0.06}>
            <div className="rounded-3xl border border-line bg-white p-7 text-center">
              <div className="text-4xl font-bold text-gradient sm:text-5xl">
                <Counter
                  value={r.value}
                  suffix={r.suffix}
                  decimals={r.value % 1 !== 0 ? 1 : 0}
                />
              </div>
              <p className="mt-2 text-sm font-medium text-muted">{r.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* result tags */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {RESULT_TAGS.map((t) => (
          <span
            key={t}
            className="rounded-full border border-purple-100 bg-purple-50 px-4 py-1.5 text-sm font-semibold text-purple-700"
          >
            {t}
          </span>
        ))}
      </div>

      {/* testimonials */}
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {STORIES.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.06}>
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-6">
              <Quote className="size-7 text-purple-300" />
              <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink/80">
                “{s.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {s.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{s.name}</p>
                  <p className="text-xs text-muted">{s.note}</p>
                </div>
                <div className="ml-auto flex gap-0.5 text-orange">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
