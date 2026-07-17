import { AI_FEATURES } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkles } from "lucide-react";

export function AiSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-purple-500/30 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink/20 blur-[130px]" />
        <div className="absolute inset-0 grain opacity-40" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="AI-powered learning"
          title={<>Your always-on <span className="text-gradient">learning co-pilot</span></>}
          subtitle="Practice, plan and track — guided by AI that adapts to your goal, your level and your pace."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AI_FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg">
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {f.desc}
                </p>
                <Sparkles className="absolute right-5 top-5 size-4 text-white/20 transition-colors group-hover:text-purple-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
