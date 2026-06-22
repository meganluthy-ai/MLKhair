"use client";

import { useState, type ReactNode } from "react";
import { Plus, Minus } from "lucide-react";
import type { Faq } from "@/lib/schema";

// icon is a pre-rendered element (server components can't pass icon *functions*
// across the client boundary).
type FaqItem = Faq & { icon?: ReactNode };

// Accordion FAQ block. Pair with faqSchema() in the page to emit FAQPage JSON-LD.
// Optionally shows a small icon per row for visual interest.
export default function FAQ({ items }: { items: FaqItem[] }) {
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
              <span className="flex items-center gap-4">
                {item.icon && (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    {item.icon}
                  </span>
                )}
                <span className="font-display text-lg font-semibold text-evergreen">
                  {item.q}
                </span>
              </span>
              <span className="shrink-0 text-gold-dark">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            {isOpen && (
              <div className={`space-y-3 pb-6 pr-8 text-ink/80 ${item.icon ? "sm:pl-14" : ""}`}>
                {(Array.isArray(item.a) ? item.a : [item.a]).map((para, j) => (
                  <p key={j} className="max-w-prose">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
