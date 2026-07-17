import { Clock, MonitorPlay, SignalHigh } from "lucide-react";
import { FEATURED_PROGRAMS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FeaturedPrograms() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Featured programs"
        title="Popular pathways, ready when you are"
        subtitle="Structured programs with expert mentors, live sessions and clear outcomes — pick one and start this week."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROGRAMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(110,43,255,0.4)]">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                <p.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
              <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4 text-center">
                <Meta icon={<Clock className="size-4" />} label="Duration" value={p.duration} />
                <Meta icon={<MonitorPlay className="size-4" />} label="Mode" value={p.mode} />
                <Meta icon={<SignalHigh className="size-4" />} label="Level" value={p.level} />
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button href="/programs/test-prep" variant="ghost" withArrow>
          See all programs
        </Button>
      </div>
    </section>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-purple-600">{icon}</span>
      <dt className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted">{label}</dt>
      <dd className="text-xs font-semibold leading-tight text-ink">{value}</dd>
    </div>
  );
}
