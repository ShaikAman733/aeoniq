"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const GOALS = [
  "Study Abroad",
  "Canada PR",
  "Language Learning",
  "Better English",
  "Job Readiness",
  "Academic Pathway (OSSD)",
];

const PROGRAMS = [
  "IELTS", "PTE", "Duolingo", "CELPIP", "TOEFL",
  "French", "German", "Arabic", "Spoken English", "Career Essentials",
];

const inputBase =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/70 transition-colors focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200";
const labelBase = "mb-1.5 block text-sm font-semibold text-ink/80";

export function AssessmentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    // Front-end demo: simulate a request. Wire to your CRM / API when ready.
    setTimeout(() => setStatus("done"), 1100);
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center rounded-[2rem] border border-line bg-white p-10 text-center shadow-[0_28px_60px_-30px_rgba(110,43,255,0.35)]">
        <span className="flex size-16 items-center justify-center rounded-full bg-brand-gradient text-white">
          <CheckCircle2 className="size-8" />
        </span>
        <h2 className="mt-6 text-2xl font-bold text-ink">Request received!</h2>
        <p className="mt-2 max-w-sm text-muted">
          Thanks for booking a free assessment. Our team will reach out within one
          business day with your personalized pathway.
        </p>
        <div className="mt-6">
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-line bg-white p-6 shadow-[0_28px_60px_-34px_rgba(110,43,255,0.3)] sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelBase}>First name</label>
          <input id="firstName" name="firstName" required autoComplete="given-name" className={inputBase} placeholder="Aisha" />
        </div>
        <div>
          <label htmlFor="lastName" className={labelBase}>Last name</label>
          <input id="lastName" name="lastName" required autoComplete="family-name" className={inputBase} placeholder="Rahman" />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelBase}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputBase} placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelBase}>Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputBase} placeholder="+1 555 000 1234" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="goal" className={labelBase}>Your goal</label>
        <select id="goal" name="goal" required defaultValue="" className={inputBase}>
          <option value="" disabled>Select a goal…</option>
          {GOALS.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      <fieldset className="mt-5">
        <legend className={labelBase}>Interested in</legend>
        <div className="flex flex-wrap gap-2">
          {PROGRAMS.map((p) => (
            <label
              key={p}
              className="cursor-pointer rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-ink/75 transition-colors has-[:checked]:border-purple-400 has-[:checked]:bg-purple-50 has-[:checked]:text-purple-700"
            >
              <input type="checkbox" name="programs" value={p} className="sr-only" />
              {p}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className={labelBase}>Anything we should know? (optional)</label>
        <textarea id="message" name="message" rows={3} className={inputBase} placeholder="Target score, deadline, current level…" />
      </div>

      <Button type="submit" className="mt-6 w-full" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="size-5 animate-spin" /> Submitting…
          </>
        ) : (
          "Book my free assessment"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted">
        By submitting, you agree to be contacted about your assessment. No spam, ever.
      </p>
    </form>
  );
}
