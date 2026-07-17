"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WorldMap } from "./WorldMap";
import { CourseStrip } from "./CourseStrip";
import { FEATURE_CARDS } from "@/lib/content";
import {
  CalendarDays,
  ShieldCheck,
  Radio,
  Users,
  Globe2,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

/** Drop your cut-out student photo (transparent PNG) into public/ and set the
 *  path here — it then appears front-right over the map. Leave null to show the
 *  map + badges only (keeps dev logs clean; no 404 for a missing image). */
const HERO_PHOTO: string | null = null; // e.g. "/hero-student.png"

const BOTTOM_STRIP = [
  { icon: Users, label: "Learn from Anywhere" },
  { icon: Globe2, label: "Global Community" },
  { icon: ShieldCheck, label: "Learn. Practice. Succeed." },
  { icon: GraduationCap, label: "Your Future. Our Mission." },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [hasPhoto, setHasPhoto] = useState(true);

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="relative overflow-hidden pb-10 pt-28 sm:pt-32">
      {/* ambient blooms */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-[6%] h-72 w-72 rounded-full bg-purple-300/40 blur-[130px]" />
        <div className="absolute right-[4%] top-16 h-80 w-80 rounded-full bg-pink/20 blur-[130px]" />
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        {/* ---------- copy ---------- */}
        <div>
          <motion.h1
            {...fade(0)}
            className="text-[2.7rem] font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            Learn <span className="text-gradient">Languages.</span>
            <br />
            Achieve <span className="text-gradient">Scores.</span>
            <br />
            Unlock{" "}
            <span className="bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent">
              Opportunities.
            </span>
          </motion.h1>

          <motion.p {...fade(0.08)} className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Interactive online learning for IELTS, PTE, CELPIP, TOEFL, French,
            German, Spoken English and future-ready skills.
          </motion.p>

          {/* feature tiles */}
          <motion.ul {...fade(0.16)} className="mt-8 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
            {FEATURE_CARDS.map((f, i) => (
              <li
                key={f.label}
                className="relative flex flex-col items-center gap-2.5 rounded-2xl border border-line bg-white/70 p-3.5 text-center backdrop-blur transition-colors duration-200 hover:border-purple-200"
              >
                {i === 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex items-center gap-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[0.55rem] font-bold uppercase text-white shadow">
                    <Radio className="size-2.5" /> Live
                  </span>
                )}
                <span className="flex size-11 items-center justify-center rounded-xl border border-purple-100 bg-purple-50 text-purple-600">
                  <f.icon className="size-5" />
                </span>
                <span className="text-[0.7rem] font-semibold leading-tight text-ink/80">
                  {f.label}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/book-assessment" size="lg" withArrow>
              Start Learning Today
            </Button>
            <Button href="/#programs" size="lg" variant="secondary">
              <CalendarDays className="size-4" /> Explore Courses
            </Button>
          </motion.div>

          <motion.p
            {...fade(0.3)}
            className="mt-6 flex items-center gap-2 text-sm font-medium text-muted"
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-purple-50 text-purple-600">
              <ShieldCheck className="size-3.5" />
            </span>
            Trusted by learners worldwide
          </motion.p>
        </div>

        {/* ---------- interactive map + student ---------- */}
        <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[560px]">
          {/* map backdrop with soft edge mask */}
          <div
            className="absolute inset-0"
            style={{
              maskImage:
                "radial-gradient(120% 100% at 60% 45%, #000 55%, transparent 92%)",
              WebkitMaskImage:
                "radial-gradient(120% 100% at 60% 45%, #000 55%, transparent 92%)",
            }}
          >
            <WorldMap className="h-full w-full" />
          </div>

          {/* floating badges */}
          <motion.div
            {...fade(0.35)}
            className="absolute left-[2%] top-[18%] animate-float rounded-2xl border border-line bg-white/95 px-3.5 py-2 shadow-xl backdrop-blur"
          >
            <span className="block bg-gradient-to-r from-purple-500 to-violet bg-clip-text text-sm font-bold text-transparent">
              IELTS 8.0
            </span>
            <span className="text-[0.6rem] font-medium uppercase tracking-wide text-muted">
              Band achieved
            </span>
          </motion.div>

          <motion.div
            {...fade(0.45)}
            style={{ animationDelay: "0.8s" }}
            className="absolute right-[3%] top-[10%] animate-float rounded-2xl border border-line bg-white/95 px-3.5 py-2 shadow-xl backdrop-blur"
          >
            <span className="block bg-gradient-to-r from-violet to-pink bg-clip-text text-sm font-bold text-transparent">
              PTE 79+
            </span>
            <span className="text-[0.6rem] font-medium uppercase tracking-wide text-muted">
              Superior score
            </span>
          </motion.div>

          <motion.div
            {...fade(0.5)}
            className="absolute bottom-[8%] left-[4%] w-44 rounded-2xl border border-line bg-white/95 p-3.5 shadow-xl backdrop-blur"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4 text-purple-600" />
              <span className="text-xs font-bold text-ink">Progress</span>
              <span className="ml-auto text-xs font-bold text-purple-600">82%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-purple-100">
              <motion.div
                initial={reduce ? false : { width: 0 }}
                animate={{ width: "82%" }}
                transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-warm-gradient"
              />
            </div>
            <span className="mt-2 block text-[0.6rem] font-medium text-muted">
              On track to Band 8.0
            </span>
          </motion.div>

          {/* student photo — set HERO_PHOTO above to enable */}
          {HERO_PHOTO && hasPhoto && (
            <Image
              src={HERO_PHOTO}
              alt="AEONIQ learner studying online"
              width={620}
              height={720}
              priority
              onError={() => setHasPhoto(false)}
              className="pointer-events-none absolute bottom-0 right-0 z-10 h-[92%] w-auto max-w-[78%] object-contain object-bottom drop-shadow-2xl"
            />
          )}
        </div>
      </div>

      {/* course logos strip */}
      <CourseStrip />

      {/* bottom purple trust strip */}
      <div className="mt-8">
        <div className="bg-brand-gradient relative overflow-hidden">
          <div className="grain absolute inset-0 opacity-20" />
          <div className="container-x relative grid grid-cols-2 gap-4 py-4 text-white sm:grid-cols-4">
            {BOTTOM_STRIP.map((t) => (
              <div key={t.label} className="flex items-center justify-center gap-2.5">
                <t.icon className="size-5 shrink-0 text-white/90" />
                <span className="text-sm font-semibold">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
