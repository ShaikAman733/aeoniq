import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-bold uppercase tracking-[0.18em] mb-3",
            light ? "text-purple-200" : "text-purple-600",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-[2.75rem] font-bold",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            light ? "text-purple-100/80" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
