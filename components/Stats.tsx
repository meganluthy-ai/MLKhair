"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string; countTo?: number; suffix?: string };

const stats: Stat[] = [
  { value: "17+", label: "Years behind the chair", countTo: 17, suffix: "+" },
  { value: "AMCA", label: "Certified clinical trichologist" },
  { value: "2", label: "Idaho locations, plus remote", countTo: 2 },
  { value: "1·3·6·9·12", label: "Months of tracked progress" },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSeen(true)),
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, seen };
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf = 0;
    const dur = 900;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-cream/15 bg-cream/15 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-evergreen p-6 text-center md:p-8">
          <div className="font-display text-3xl text-gold md:text-4xl">
            {s.countTo ? <Counter to={s.countTo} suffix={s.suffix} /> : s.value}
          </div>
          <p className="mt-2 text-sm leading-snug text-cream/80">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
