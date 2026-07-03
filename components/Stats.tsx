"use client";

import { useEffect, useRef, useState } from "react";
import { Scissors, Award, Sparkles, Compass, type LucideIcon } from "lucide-react";

type Stat = { value: string; label: string; icon: LucideIcon; countTo?: number; suffix?: string };

const stats: Stat[] = [
  { icon: Scissors, value: "17+ years", label: "Hair expertise", countTo: 17, suffix: "+ years" },
  { icon: Award, value: "USTI + AMCA", label: "Clinical Trichologist" },
  { icon: Sparkles, value: "Beauty + Science", label: "Continued education" },
  { icon: Compass, value: "Guided Support", label: "Clear next steps" },
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
          <s.icon className="mx-auto mb-3 text-gold" size={26} strokeWidth={1.5} />
          <div className="font-display text-xl text-gold md:text-2xl">
            {s.countTo ? <Counter to={s.countTo} suffix={s.suffix} /> : s.value}
          </div>
          <p className="mt-2 text-sm leading-snug text-cream">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
