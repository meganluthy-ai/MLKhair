import type { Faq } from "@/lib/schema";
import Reveal from "@/components/Reveal";

// Color-blocked Q&A mosaic (the warm, "fun" look from Megan's live Trichology
// page). Tiles alternate olive / gold / soft for a brand-colored grid.
type Tone = "olive" | "gold" | "soft";
const pattern: Tone[] = ["olive", "gold", "soft", "gold", "soft", "olive", "soft", "olive", "gold"];

const toneClasses: Record<Tone, { card: string; eyebrow: string; q: string; a: string }> = {
  olive: {
    card: "bg-evergreen border-evergreen",
    eyebrow: "text-gold",
    q: "text-cream",
    a: "text-cream/85",
  },
  gold: {
    card: "bg-gold border-gold",
    eyebrow: "text-evergreen-dark",
    q: "text-ink",
    a: "text-ink/80",
  },
  soft: {
    card: "bg-soft-white border-line",
    eyebrow: "text-gold-dark",
    q: "text-evergreen",
    a: "text-ink/80",
  },
};

export default function FaqMosaic({ items }: { items: Faq[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const t = toneClasses[pattern[i % pattern.length]];
        return (
          <Reveal key={i} delay={(i % 3) * 80}>
            <div className={`lift flex h-full flex-col rounded-md border p-7 ${t.card}`}>
              <span className={`eyebrow mb-3 ${t.eyebrow}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={`font-display text-xl leading-snug ${t.q}`}>{item.q}</h3>
              <p className={`mt-3 text-[0.95rem] leading-relaxed ${t.a}`}>{item.a}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
