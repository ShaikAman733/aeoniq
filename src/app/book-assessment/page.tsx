import type { Metadata } from "next";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Free Assessment",
  description:
    "Book a free assessment with AEONIQ and get a personalized learning pathway built around your goal — study abroad, Canada PR, a new score or a career move.",
};

const PROMISES = [
  "A personalized pathway for your goal",
  "Honest advice on the right test or language",
  "A clear study plan and timeline",
  "No pressure — just clarity",
];

export default function BookAssessmentPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-purple-300/40 blur-[120px]" />
        <div className="absolute right-1/4 top-10 h-72 w-72 rounded-full bg-pink/20 blur-[120px]" />
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <span className="inline-block rounded-full border border-line bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-purple-700 backdrop-blur">
            Free Assessment
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
            Let&apos;s map your <span className="text-gradient">pathway</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Tell us your goal and we&apos;ll design a free, personalized plan — the
            right program, a realistic timeline and a mentor to guide you.
          </p>

          <ul className="mt-8 grid gap-3">
            {PROMISES.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[0.95rem] font-medium text-ink/80">
                <span className="flex size-6 items-center justify-center rounded-full bg-brand-gradient text-white">
                  <Check className="size-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-3xl border border-line bg-white/70 p-5 backdrop-blur">
            <p className="text-sm leading-relaxed text-muted">
              Prefer to talk first? Email{" "}
              <a href="mailto:hello@aeoniq.learning" className="font-semibold text-purple-700 underline-offset-2 hover:underline">
                hello@aeoniq.learning
              </a>{" "}
              and our team will reach out within one business day.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <AssessmentForm />
        </Reveal>
      </div>
    </section>
  );
}
