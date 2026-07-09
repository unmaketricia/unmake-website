"use client";

import { motion } from "framer-motion";

// Minimal scroll reveal: fade + gentle rise, once, respecting reduced motion.
export default function Reveal({ children, className, delay = 0, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
