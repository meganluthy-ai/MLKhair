"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Faq } from "@/lib/schema";

// Accordion FAQ block. Pair with faqSchema() in the page to emit FAQPage JSON-LD.
export default function FAQ({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-semibold text-evergreen">
                {item.q}
              </span>
              <span className="shrink-0 text-clay">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-8 text-ink/80">
                <p className="max-w-prose">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
