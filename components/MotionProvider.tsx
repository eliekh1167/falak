"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * Wraps the app so every Framer Motion animation (FadeIn, etc.) automatically
 * respects the user's OS-level "reduce motion" preference. Without this,
 * the prefers-reduced-motion rule in globals.css only mutes native CSS
 * transitions — Framer Motion's whileInView/animate props are JS-driven and
 * ignore plain CSS media queries entirely, so this wrapper is required for
 * the reduced-motion floor to actually hold across the whole site.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
