"use client";

import { useEffect, useRef, useState } from "react";

const words = ["busywork.", "guesswork.", "panic-posting."];

// The signature move: cross out "busywork / guesswork / panic-posting"
// one word at a time when the block scrolls into view. Acts as the hero
// headline, so it renders as an <h1>.
export default function StrikeBlock() {
  const ref = useRef(null);
  const [struckCount, setStruckCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timers = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          words.forEach((_, i) => {
            timers.push(
              setTimeout(() => setStruckCount((c) => Math.max(c, i + 1)), 400 + i * 500)
            );
          });
          io.unobserve(e.target);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <h1
      ref={ref}
      className="strike-block"
      aria-label="Crossed out: busywork, guesswork, panic-posting. Kept: your voice, your strategy, your judgment."
    >
      {words.map((w, i) => (
        <span key={w} className={`strike${i < struckCount ? " struck" : ""}`}>
          {w}
        </span>
      ))}
      <span className="keep">
        Keep your voice.
        <br />
        Your strategy. Your judgment.
      </span>
    </h1>
  );
}
