import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

const COLS = [
  {
    title: "Programs",
    links: [
      { label: "English Lab", href: "/programs/english-lab" },
      { label: "Languages", href: "/programs/languages" },
      { label: "Test Prep", href: "/programs/test-prep" },
      { label: "Skill Studio", href: "/programs/skill-studio" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Learning Concierge", href: "/learning-concierge" },
      { label: "Academic Pathways (OSSD)", href: "/academic-pathways" },
      { label: "Bundles", href: "/bundles" },
      { label: "Resources & Insights", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Success Stories", href: "/#results" },
      { label: "Book Assessment", href: "/book-assessment" },
      { label: "Contact Us", href: "/book-assessment" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-purple-500/25 blur-[120px]" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo light tagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              A goal-focused learning platform helping students, professionals
              and global-mobility aspirants build language skills, test scores
              and career readiness.
            </p>
            <div className="mt-6">
              <Button href="/book-assessment" size="sm" withArrow>
                Book Free Assessment
              </Button>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AEONIQ Learning. Smarter Learning. Limitless Future.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white">Privacy</Link>
            <Link href="/about" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
