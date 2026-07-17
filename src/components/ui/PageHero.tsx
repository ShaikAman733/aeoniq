import { Reveal } from "./Reveal";
import { Button } from "./Button";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  chips?: string[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, subtitle, chips, primary, secondary }: Props) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-purple-300/40 blur-[120px]" />
        <div className="absolute right-1/4 top-10 h-72 w-72 rounded-full bg-pink/20 blur-[120px]" />
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      <div className="container-x max-w-3xl text-center">
        <Reveal>
          <span className="inline-block rounded-full border border-line bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-purple-700 backdrop-blur">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {subtitle}
            </p>
          </Reveal>
        )}

        {chips && chips.length > 0 && (
          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-sm font-medium text-ink/75 backdrop-blur"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        {(primary || secondary) && (
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {primary && (
                <Button href={primary.href} size="lg" withArrow>
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button href={secondary.href} size="lg" variant="secondary">
                  {secondary.label}
                </Button>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
