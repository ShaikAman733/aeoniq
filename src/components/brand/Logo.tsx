import { cn } from "@/lib/utils";

/**
 * AEONIQ mark — a stylized "AQ" monogram: the peak/triangle "A" with an open
 * book at its base, paired with the "Q" ring. Rendered as inline SVG so it
 * stays crisp and inherits the brand gradient.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("size-9", className)}
      role="img"
      aria-label="AEONIQ"
    >
      <defs>
        <linearGradient id="aq-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b3dff" />
          <stop offset="55%" stopColor="#6e2bff" />
          <stop offset="100%" stopColor="#4718a8" />
        </linearGradient>
      </defs>
      {/* A — triangle */}
      <path
        d="M4 54 L22 10 L40 54 L31 54 L22 30 L13 54 Z"
        fill="url(#aq-grad)"
      />
      {/* open book at the base of the A */}
      <path
        d="M14.5 47 C18 44.5 21 44.8 22 46 C23 44.8 26 44.5 29.5 47 L29.5 51 C26 48.8 23 49 22 50.4 C21 49 18 48.8 14.5 51 Z"
        fill="#cbb4ff"
      />
      {/* Q — ring */}
      <path
        d="M46 14 a17 17 0 1 0 6 32 l6 8 l-6.5 0 l-4.2 -5.6 A17 17 0 0 0 46 14 Z M46 24 a7 7 0 1 1 0 20 a7 7 0 0 1 0 -20 Z"
        fill="url(#aq-grad)"
      />
    </svg>
  );
}

export function Logo({
  className,
  tagline = false,
  light = false,
}: {
  className?: string;
  tagline?: boolean;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading font-bold tracking-tight text-[1.35rem]",
            light ? "text-white" : "text-ink",
          )}
        >
          AEON<span className="text-gradient">IQ</span>
        </span>
        {tagline && (
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted mt-0.5">
            Smarter Learning
          </span>
        )}
      </span>
    </span>
  );
}
