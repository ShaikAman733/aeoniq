import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="container-x py-20 lg:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-6 py-16 text-center text-white shadow-[0_50px_100px_-40px_rgba(110,43,255,0.7)] sm:px-12 lg:py-24">
          <div className="grain absolute inset-0 opacity-25" />
          <div className="pointer-events-none absolute -left-10 top-0 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-pink/40 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-5xl">
              Ready to unlock your next opportunity?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/85 sm:text-lg">
              Book a free assessment and get a personalized learning pathway built
              around your goal — no pressure, just clarity.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/book-assessment" size="lg" variant="secondary" withArrow>
                Book Free Assessment
              </Button>
              <Button href="/#programs" size="lg" variant="light">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
