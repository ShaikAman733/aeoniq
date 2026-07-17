import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full cursor-pointer transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-6 py-3",
  lg: "text-base px-7 py-3.5",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white btn-glow hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-white text-ink border border-line hover:border-purple-300 hover:-translate-y-0.5 shadow-sm",
  ghost:
    "bg-purple-50 text-purple-700 hover:bg-purple-100",
  light:
    "bg-white/12 text-white border border-white/25 backdrop-blur hover:bg-white/20",
};

type Props = {
  href?: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"button">, "className">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  children,
  className,
  ...rest
}: Props) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const inner = (
    <>
      {children}
      {withArrow && <ArrowRight className="size-4" aria-hidden />}
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}
