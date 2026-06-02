import type { Metadata } from "next";
import { Section, Eyebrow, BookButton, QuizButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "At-Home Hair & Scalp Care",
  description:
    "Curated at-home product kits by hair type, chosen by a clinical trichologist. The right products for your actual hair, not whatever is trending.",
  alternates: { canonical: "/shop" },
};

// P1 page (build brief). Launches with what exists; affiliate kits by hair type
// and a password-protected hair-loss product line come later.
export default function Shop() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>At-Home Care</Eyebrow>
        <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
          The right products for your actual hair
        </h1>
        <p className="mt-5 max-w-prose text-lg text-ink/80">
          Not whatever is trending. Megan is putting together at-home kits by
          hair type, fine, curly, color-treated, and more, so you can care for
          your hair and scalp well between visits. Shampoo was always made for
          your scalp, and using the right one matters.
        </p>
        <p className="mt-4 max-w-prose text-ink/80">
          The shop is on the way. In the meantime, the best place to start is by
          finding out what your hair actually needs.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <QuizButton />
          <BookButton />
        </div>
      </div>
    </Section>
  );
}
