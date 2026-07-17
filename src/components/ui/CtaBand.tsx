import { Button } from "./Button";
import { Reveal } from "./Reveal";

type Props = {
  title?: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CtaBand({
  title = "Ready to begin your global learning journey?",
  subtitle = "Book a free assessment and get a personalized pathway built around your goal.",
  primary = { label: "Book Free Assessment", href: "/book-assessment" },
  secondary = { label: "Explore Programs", href: "/#programs" },
}: Props) {
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-6 py-14 text-center text-white shadow-[0_50px_100px_-40px_rgba(110,43,255,0.6)] sm:px-12">
          <div className="grain absolute inset-0 opacity-25" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-pink/40 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/85">{subtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={primary.href} size="lg" variant="secondary" withArrow>
                {primary.label}
              </Button>
              <Button href={secondary.href} size="lg" variant="light">
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
