"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1400;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

// Animates the numeric part of a stat string (e.g. "300+", "#86", "3×", "2021"),
// preserving any prefix/suffix. Starts when the element scrolls into view.
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^([^\d]*)(\d[\d,]*)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!match || !ref.current) return;
    const [, prefix, digits, suffix] = match;
    const target = parseInt(digits.replace(/,/g, ""), 10);
    const useCommas = digits.includes(",");
    const el = ref.current;
    let raf = 0;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / DURATION, 1);
        const cur = Math.round(easeOut(p) * target);
        setDisplay(`${prefix}${useCommas ? cur.toLocaleString("en-IN") : cur}${suffix}`);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { run(); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
