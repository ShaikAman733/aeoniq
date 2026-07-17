import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROGRAMS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProgramsSection() {
  return (
    <section id="programs" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-purple-50/60" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Explore programs"
          title="Choose your learning journey"
          subtitle="Whether you're preparing for an exam, mastering a new language or building future-ready skills, there's a pathway designed for your goals."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.05}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <Link
                href={p.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(110,43,255,0.4)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-md">
                    <p.icon className="size-6" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
