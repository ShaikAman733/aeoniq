import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { RESOURCES } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Guides and strategies for IELTS, PTE, French, German, careers and study abroad — practical tips to keep your learning journey moving.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources & Insights"
        title={<>Guides to keep you <span className="text-gradient">moving forward</span></>}
        subtitle="Practical tips and proven strategies for tests, languages and study-abroad journeys — written by the mentors who teach them."
      />

      <section className="container-x grid gap-4 pb-8 md:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r, i) => (
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
      </section>

      <CtaBand />
    </>
  );
}
