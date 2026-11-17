"use client";

import { motion } from "framer-motion";

// Keep server-rendered content visible to visitors and scanners before JavaScript.
export default function Reveal({ children, className, delay = 0, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
