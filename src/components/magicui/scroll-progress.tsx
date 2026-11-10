"use client";

import { motion, useScroll, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-linear-to-r from-sky-400 via-indigo-400 to-violet-400",
        className
      )}
      style={{ scaleX }}
    />
  );
}
