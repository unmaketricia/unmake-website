"use client";

import { useEffect, useRef, useState } from "react";

// Horizontal scroll-snap carousel with prev/next + dots.
// `slides` is an array of { src, alt, caption }.
export default function Carousel({ slides }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  const go = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / track.clientWidth) + dir;
    scrollToIndex(i);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      setActive(i);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="carousel">
      <div className="car-track" ref={trackRef}>
        {slides.map((s) => (
          <figure key={s.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.alt} loading="lazy" />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
      <button className="car-btn prev" aria-label="Previous" onClick={() => go(-1)}>
        &#8249;
      </button>
      <button className="car-btn next" aria-label="Next" onClick={() => go(1)}>
        &#8250;
      </button>
      <div className="car-dots" role="tablist">
        {slides.map((s, i) => (
          <button
            key={s.src}
            className={i === active ? "on" : undefined}
            aria-label={`Go to sample ${i + 1}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
