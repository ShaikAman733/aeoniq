import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const PERKS = [
  "1-on-1 guidance",
  "Progress tracking",
  "Personalized roadmaps",
  "Goal-based recommendations",
];

export function ConciergeHighlight() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-line bg-white p-8 lg:grid-cols-2 lg:p-14">
        <Reveal>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-purple-600">
            Learning Concierge
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Your personal learning concierge
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Every learner is different. Our Learning Concierge helps you create a
            personalized plan, track progress and stay focused on your goals —
            with a mentor who knows your name and your target.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-ink/80">
                <span className="flex size-5 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Check className="size-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/learning-concierge" withArrow>
              Meet your concierge
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-gradient p-6 shadow-[0_40px_80px_-40px_rgba(110,43,255,0.6)]">
            <div className="grain absolute inset-0 opacity-30" />
            {/* mentor + learner conversation mock */}
            <div className="relative flex h-full flex-col justify-between">
              <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white/95 p-3.5 shadow-lg">
                <p className="text-xs font-bold text-ink">Mentor</p>
                <p className="mt-1 text-sm text-ink/70">
                  Let's target Band 8 in speaking — 3 mocks this week. You've got this. ✨
                </p>
              </div>
              <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-ink/90 p-3.5 shadow-lg">
                <p className="text-xs font-bold text-white">You</p>
                <p className="mt-1 text-sm text-white/80">
                  Booked! My streak is at 12 days 🔥
                </p>
              </div>
              <div className="rounded-2xl bg-white/95 p-3.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-ink">Roadmap progress</span>
                  <span className="text-xs font-bold text-purple-600">68%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-purple-100">
                  <div className="h-full w-[68%] rounded-full bg-warm-gradient" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
