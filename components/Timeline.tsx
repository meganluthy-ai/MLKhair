import Reveal from "@/components/Reveal";
import PhotoSlot from "@/components/PhotoSlot";
import Image from "next/image";

// Regrowth timeline with a progress photo at each milestone (months 0, 1, 3, 6).
// `image` is optional: drop in Megan's real before/after photos when they arrive;
// until then each milestone shows a captioned placeholder.
type Step = { m: string; label: string; note: string; image?: string };

const steps: Step[] = [
  { m: "0", label: "Baseline", note: "Your starting point, documented with before photos and scope imaging." },
  { m: "1", label: "Early support", note: "The scalp settles and your plan begins to take hold." },
  { m: "3", label: "First changes", note: "Shedding often eases and the groundwork starts to show." },
  { m: "6", label: "Visible progress", note: "Density and comfort improvements captured in your photos." },
];

export default function Timeline() {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal key={s.m} delay={i * 90} as="li">
          <div className="flex flex-col">
            {s.image ? (
              <div className="relative aspect-square w-full overflow-hidden rounded-md border border-line">
                <Image src={s.image} alt={`Month ${s.m} progress`} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
              </div>
            ) : (
              <PhotoSlot caption={`Month ${s.m} before/after photo`} ratio="aspect-square" />
            )}
            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold bg-cream font-display text-sm font-semibold text-gold-dark">
                {s.m}
              </span>
              <p className="font-display text-lg text-evergreen">
                {s.m === "0" ? "Month 0" : `Month ${s.m}`}
              </p>
            </div>
            <p className="mt-2 font-medium text-ink">{s.label}</p>
            <p className="mt-1 text-sm leading-snug text-ink/70">{s.note}</p>
          </div>
        </Reveal>
      ))}
      <li className="sm:col-span-2 lg:col-span-4">
        <p className="text-xs uppercase tracking-[0.18em] text-taupe">
          Tracked with photos at every visit
        </p>
      </li>
    </ol>
  );
}
