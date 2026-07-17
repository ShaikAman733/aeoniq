import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RESOURCES } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ResourcesTeaser() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-purple-50/60" />
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Resources & insights"
            title="Guides to keep you moving"
            subtitle="Practical tips and strategies for tests, languages and study-abroad journeys."
          />
          <div className="hidden sm:block">
            <Button href="/resources" variant="secondary" size="sm" withArrow>
              View all
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.slice(0, 6).map((r, i) => (
            <Reveal key={r.title} delay={i * 0.04}>
              <Link
                href="/resources"
                className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(110,43,255,0.3)]"
              >
                <span className="w-fit rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                  {r.tag}
                </span>
                <h3 className="mt-4 flex-1 text-lg font-bold leading-snug text-ink">
                  {r.title}
                </h3>
                <div className="mt-4 flex items-center justify-between text-sm text-muted">
                  <span>{r.read}</span>
                  <ArrowUpRight className="size-4 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
