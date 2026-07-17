import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { LANGUAGES } from "@/lib/content";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Languages",
  description:
    "Learn French, German and Arabic for study, work and global mobility — TEF/TCF for Canada PR, German university and job-seeker pathways, and practical Arabic.",
};

export default function LanguagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Languages"
        title={<>Learn languages. <span className="text-gradient">Expand opportunities.</span></>}
        subtitle="Practical, career-focused language learning for study abroad, immigration and global careers — French, German and Arabic."
        chips={["French · TEF / TCF", "German · A1–B1", "Arabic · Conversational"]}
        primary={{ label: "Book Free Assessment", href: "/book-assessment" }}
      />

      <section className="container-x space-y-4 pb-8">
        {LANGUAGES.map((lang, i) => (
          <Reveal key={lang.name} delay={i * 0.05}>
            <article className="grid gap-6 overflow-hidden rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:border-purple-200 hover:shadow-[0_28px_60px_-30px_rgba(110,43,255,0.35)] md:grid-cols-[1fr_1fr] md:p-9">
              <div>
                <span className="font-heading text-2xl font-bold text-gradient">
                  {lang.greeting}
                </span>
                <h2 className="mt-2 text-3xl font-bold text-ink">{lang.name}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {lang.tagline}
                </p>
              </div>
              <div className="flex flex-col justify-center rounded-2xl bg-purple-50/70 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-700">
                  Highlights
                </p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {lang.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm font-medium text-ink/80">
                      <span className="flex size-5 items-center justify-center rounded-full bg-white text-purple-600 shadow-sm">
                        <Check className="size-3" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
        <p className="pt-2 text-center text-sm text-muted">
          Native-language greetings appear as accents — all instruction is delivered in clear English.
        </p>
      </section>

      <CtaBand
        title="Pick a language. Open a new door."
        subtitle="Not sure where to start? A free assessment maps the fastest route to your goal."
      />
    </>
  );
}
