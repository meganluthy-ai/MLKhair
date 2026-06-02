import Reveal from "@/components/Reveal";

// Horizontal regrowth timeline (the months 1/3/6/9/12 cadence Megan tracks).
// Works on cream/soft backgrounds. Stacks vertically on mobile.
const steps = [
  { m: "1", label: "Baseline", note: "Cause found, photos taken, plan set." },
  { m: "3", label: "The quiet middle", note: "Feels slow. The groundwork is taking hold." },
  { m: "6", label: "Visible change", note: "New growth and more density show up." },
  { m: "9", label: "Filling in", note: "The plan compounds, week over week." },
  { m: "12", label: "Full results", note: "What the slow middle was building toward." },
];

export default function Timeline() {
  return (
    <div className="relative">
      {/* connecting line */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block"
      />
      <ol className="grid gap-8 md:grid-cols-5 md:gap-4">
        {steps.map((s, i) => (
          <Reveal key={s.m} delay={i * 90} as="li">
            <div className="relative flex items-start gap-4 md:block">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-cream font-display text-sm font-semibold text-gold-dark">
                {s.m}
              </div>
              <div className="md:mt-4">
                <p className="font-display text-lg text-evergreen">{s.label}</p>
                <p className="mt-1 text-sm leading-snug text-ink/70">{s.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
      <p className="mt-8 text-xs uppercase tracking-[0.18em] text-taupe">
        Month-by-month, tracked with photos
      </p>
    </div>
  );
}
