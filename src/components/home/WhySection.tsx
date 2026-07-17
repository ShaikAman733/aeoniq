import { WHY } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhySection() {
  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-purple-50/60" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Why learn with AEONIQ"
          title="Learning designed around you"
          subtitle="Expert instruction, structured practice and personalized guidance combine to help every learner progress with confidence."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group flex h-full items-start gap-4 rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(110,43,255,0.3)]">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                  <f.icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {f.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
