import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export type MosaicItem = { q: string; a: string; icon?: LucideIcon };

// Uniform Q&A tiles with an icon above each question.
export default function FaqMosaic({ items }: { items: MosaicItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Reveal key={i} delay={(i % 3) * 80}>
            <div className="lift flex h-full flex-col rounded-md border border-gold/40 bg-gold-tint p-7">
              {Icon && (
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-evergreen">
                  <Icon size={22} strokeWidth={1.5} className="text-cream" />
                </span>
              )}
              <h3 className="font-display text-xl leading-snug text-evergreen">
                {item.q}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80">
                {item.a}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
