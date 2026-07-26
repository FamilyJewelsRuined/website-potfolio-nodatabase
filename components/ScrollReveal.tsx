"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

// ── Preset animation variants ──────────────────────────────
const presets = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
} satisfies Record<string, Variants>;

type Preset = keyof typeof presets;

// ── Props ──────────────────────────────────────────────────
interface ScrollRevealProps {
  children: ReactNode;
  /** Choose a built-in animation preset */
  preset?: Preset;
  /** Supply custom variants to override a preset */
  variants?: Variants;
  /** 0–1 fraction of element visible before triggering */
  threshold?: number;
  /** Extra delay in seconds (useful for staggering siblings) */
  delay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** If true, animate only on first entry (default: true) */
  once?: boolean;
  /** Semantic HTML tag to render */
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "span";
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  preset = "fadeUp",
  variants,
  threshold = 0.15,
  delay = 0,
  duration = 0.6,
  once = true,
  as = "div",
  className,
  style,
}: ScrollRevealProps) {
  const MotionTag = motion[as];
  const chosen = variants ?? presets[preset];

  return (
    <MotionTag
      variants={chosen}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
