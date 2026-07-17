"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV_GROUPS, NAV_SINGLE } from "@/lib/content";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const panelV: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.045,
      delayChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.98,
    transition: { duration: 0.14 },
  },
};

const itemV: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile drawer
  const [openGroup, setOpenGroup] = useState<string | null>(null); // desktop dropdown
  const [hovered, setHovered] = useState<string | null>(null); // hover pill
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenGroup(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isGroupActive = (labels: string[]) =>
    NAV_GROUPS.find((g) => g.label === labels[0])?.items.some((i) => pathname === i.href) ??
    false;

  const enterGroup = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHovered(label);
    setOpenGroup(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 120);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <nav
        className={cn(
          "container-x glass flex items-center justify-between rounded-full border transition-all duration-300",
          scrolled
            ? "border-line py-2.5 shadow-[0_8px_30px_-12px_rgba(11,11,18,0.18)]"
            : "border-line/60 py-3 shadow-[0_4px_20px_-16px_rgba(11,11,18,0.2)]",
        )}
        aria-label="Primary"
      >
        <Link href="/" aria-label="AEONIQ home" className="shrink-0">
          <Logo />
        </Link>

        {/* desktop grouped nav */}
        <ul
          className="relative hidden items-center gap-0.5 xl:flex"
          onMouseLeave={() => {
            setHovered(null);
            scheduleClose();
          }}
        >
          {NAV_GROUPS.map((group) => {
            const active = isGroupActive([group.label]);
            const isOpen = openGroup === group.label;
            return (
              <li
                key={group.label}
                className="relative"
                onMouseEnter={() => enterGroup(group.label)}
              >
                <button
                  className={cn(
                    "relative flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer",
                    active || isOpen ? "text-purple-700" : "text-ink/75 hover:text-purple-700",
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenGroup((o) => (o === group.label ? null : group.label))}
                >
                  {hovered === group.label && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 -z-10 rounded-full bg-purple-50"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  {group.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={panelV}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="absolute left-0 top-full pt-3"
                      onMouseEnter={() => enterGroup(group.label)}
                    >
                      <div className="w-72 overflow-hidden rounded-3xl border border-line bg-white p-2 shadow-[0_28px_60px_-24px_rgba(11,11,18,0.28)]">
                        {group.items.map((item) => {
                          const itemActive = pathname === item.href;
                          return (
                            <motion.div key={item.href} variants={itemV}>
                              <Link
                                href={item.href}
                                className={cn(
                                  "group/item flex items-start gap-3 rounded-2xl p-3 transition-colors duration-200",
                                  itemActive ? "bg-purple-50" : "hover:bg-purple-50",
                                )}
                              >
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 transition-colors duration-200 group-hover/item:bg-brand-gradient group-hover/item:text-white">
                                  <item.icon className="size-5" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-semibold text-ink">
                                    {item.label}
                                  </span>
                                  <span className="block text-xs text-muted">{item.desc}</span>
                                </span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}

          {NAV_SINGLE.map((link) => {
            const active = pathname === link.href;
            return (
              <li
                key={link.href}
                onMouseEnter={() => {
                  setHovered(link.label);
                  scheduleClose();
                }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                    active ? "text-purple-700" : "text-ink/75 hover:text-purple-700",
                  )}
                >
                  {hovered === link.label && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 -z-10 rounded-full bg-purple-50"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 xl:flex">
          <Button href="/book-assessment" size="sm" withArrow>
            Book Free Assessment
          </Button>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-full text-ink xl:hidden cursor-pointer hover:bg-purple-50"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* mobile accordion drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-x mt-2 xl:hidden"
          >
            <div className="glass max-h-[75vh] overflow-y-auto rounded-3xl border border-line p-3 shadow-xl">
              {NAV_GROUPS.map((group) => {
                const expanded = mobileGroup === group.label;
                return (
                  <div key={group.label} className="border-b border-line/60 last:border-b-0">
                    <button
                      className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-[0.95rem] font-semibold text-ink cursor-pointer"
                      onClick={() =>
                        setMobileGroup((g) => (g === group.label ? null : group.label))
                      }
                      aria-expanded={expanded}
                    >
                      {group.label}
                      <ChevronDown
                        className={cn("size-4 transition-transform duration-200", expanded && "rotate-180")}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-3 rounded-2xl px-4 py-2.5 pl-6 text-sm font-medium text-ink/80 hover:bg-purple-50 hover:text-purple-700"
                              >
                                <item.icon className="size-4 text-purple-600" />
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {NAV_SINGLE.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-[0.95rem] font-semibold text-ink hover:bg-purple-50 hover:text-purple-700"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 px-1">
                <Button href="/book-assessment" className="w-full" withArrow>
                  Book Free Assessment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
