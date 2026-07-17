"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin gradient bar at the very top that fills as the page scrolls. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="bg-brand-gradient fixed inset-x-0 top-0 z-[60] h-1 origin-left"
      aria-hidden
    />
  );
}
