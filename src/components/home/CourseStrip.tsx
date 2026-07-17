import { Briefcase } from "lucide-react";

/* Flags rendered as tiny trademark-free SVGs. */
function FlagDE() {
  return (
    <svg viewBox="0 0 30 20" className="size-6 rounded-full" aria-hidden>
      <rect width="30" height="20" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
      <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
    </svg>
  );
}
function FlagFR() {
  return (
    <svg viewBox="0 0 30 20" className="size-6 rounded-full" aria-hidden>
      <rect width="30" height="20" fill="#fff" />
      <rect width="10" height="20" fill="#0055A4" />
      <rect x="20" width="10" height="20" fill="#EF4135" />
    </svg>
  );
}

type Item = {
  label: string;
  node: React.ReactNode;
  upcoming?: boolean;
};

const wm = (text: string, color: string) => (
  <span className="font-heading text-lg font-extrabold tracking-tight" style={{ color }}>
    {text}
  </span>
);

const COURSES: Item[] = [
  { label: "IELTS", node: wm("IELTS", "#E01A4F") },
  { label: "PTE", node: wm("PTE", "#0FB5AE") },
  {
    label: "Duolingo English Test",
    node: (
      <span className="flex items-center gap-1">
        <span className="flex size-6 items-center justify-center rounded-md bg-[#58CC02] text-xs font-black text-white">
          D
        </span>
        {wm("Duolingo", "#58CC02")}
      </span>
    ),
  },
  { label: "TOEFL", node: wm("TOEFL", "#0B3D91") },
  { label: "CELPIP", node: wm("CELPIP", "#6E2BFF") },
  { label: "German", node: <FlagDE /> },
  { label: "French", node: <FlagFR /> },
  {
    label: "Career Essentials",
    node: (
      <span className="flex size-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
        <Briefcase className="size-5" />
      </span>
    ),
  },
  {
    label: "Arabic",
    upcoming: true,
    node: <span className="font-heading text-2xl font-bold text-purple-600">ع</span>,
  },
];

export function CourseStrip() {
  return (
    <div className="container-x mt-10">
      <div className="card-surface grid grid-cols-3 gap-y-6 rounded-3xl px-4 py-6 sm:grid-cols-5 lg:flex lg:items-stretch lg:justify-between lg:gap-0 lg:px-2">
        {COURSES.map((c, i) => (
          <div
            key={c.label}
            className={`relative flex flex-col items-center justify-center gap-2 px-3 text-center lg:flex-1 ${
              i !== 0 ? "lg:border-l lg:border-line" : ""
            }`}
          >
            {c.upcoming && (
              <span className="absolute -top-3 rounded-full bg-orange px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-white shadow">
                Upcoming
              </span>
            )}
            <span className="flex h-8 items-center">{c.node}</span>
            <span className="text-xs font-medium text-muted">
              {c.label === "Duolingo English Test" ? (
                <>
                  Duolingo
                  <br className="hidden sm:block" /> English Test
                </>
              ) : c.upcoming ? (
                <>{c.label} (Learning Soon)</>
              ) : (
                c.label
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
