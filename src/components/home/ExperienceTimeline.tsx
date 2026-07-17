import { EXPERIENCE } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceTimeline() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-purple-50/60" />
      <div className="container-x">
        <SectionHeading
          eyebrow="The AEONIQ learning experience"
          title="From first step to final achievement"
          subtitle="A clear, five-stage journey that keeps every learner moving toward their target score, proficiency or milestone."
        />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-purple-200 via-violet/40 to-pink/40 lg:block" />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {EXPERIENCE.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg">
                    <s.icon className="size-6" />
                    <span className="absolute -right-1.5 -top-1.5 flex size-6 items-center justify-center rounded-full bg-white text-xs font-bold text-purple-600 shadow">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
