import { Check, Sparkles } from "lucide-react";
import { BUNDLES } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function BundlesSection() {
  return (
    <section id="bundles" className="container-x scroll-mt-24 py-20 lg:py-28">
      <SectionHeading
        eyebrow="Featured learning bundles"
        title="Goal bundles that go further, together"
        subtitle="Curated program combinations built around a single destination — with a clearer outcome and better value than buying courses one by one."
      />

      <div className="mt-14 space-y-4">
        {BUNDLES.map((b, i) => (
          <Reveal key={b.name} delay={i * 0.04}>
            <article className="group grid gap-6 overflow-hidden rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:border-purple-200 hover:shadow-[0_24px_50px_-28px_rgba(110,43,255,0.35)] md:grid-cols-[1.1fr_1fr_auto] md:items-center md:p-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${b.accent} text-white`}>
                    <Sparkles className="size-5" />
                  </span>
                  <h3 className="text-xl font-bold text-ink">{b.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-ink/70">Who it's for: </span>
                  {b.for}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-ink/70">Outcome: </span>
                  {b.outcome}
                </p>
              </div>

              <ul className="grid gap-2">
                {b.courses.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-ink/80">
                    <Check className="size-4 shrink-0 text-purple-600" />
                    {c}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-start gap-3 md:items-end">
                <span className="rounded-full bg-orange/10 px-3 py-1 text-sm font-bold text-orange">
                  {b.savings}
                </span>
                <Button href="/book-assessment" size="sm" variant="secondary" withArrow>
                  View bundle
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
