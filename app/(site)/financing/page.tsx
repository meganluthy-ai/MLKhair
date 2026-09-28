import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui";
import CherryWidget from "@/components/CherryWidget";

export const metadata: Metadata = {
  title: "Payment Plans with Cherry",
  description:
    "Spread the cost of hair loss treatment and salon services with Cherry payment plans at MLK Hair. Check your options in seconds without affecting your credit score.",
  alternates: { canonical: "/financing" },
};

export default function Financing() {
  return (
    <>
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Financing</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
            Payment plans with Cherry
          </h1>
          <p className="mt-5 max-w-prose text-lg text-ink/80">
            MLK Hair partners with Cherry so you can split the cost of your care
            into monthly payments. Use the calculator below to see what a plan
            could look like, then apply in a few minutes.
          </p>
        </div>
      </Section>
      <section className="bg-white">
        <CherryWidget />
      </section>
    </>
  );
}
