"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * FadeIn — the site's one motion primitive. A single restrained
 * fade-up-on-scroll, ESA-style easing, no bounce, no stagger tricks.
 * Used consistently rather than a different animation per section.
 */
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
