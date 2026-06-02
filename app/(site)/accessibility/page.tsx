import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "MLK Hair is committed to making this website accessible to everyone.",
  alternates: { canonical: "/accessibility" },
  robots: { index: false },
};

export default function Accessibility() {
  return (
    <Section>
      <div className="max-w-prose">
        <Eyebrow>Accessibility</Eyebrow>
        <h1 className="font-display text-4xl text-evergreen">
          Accessibility Statement
        </h1>
        <div className="prose-body mt-8 text-ink/80">
          <p>
            MLK Hair is committed to making this website usable for everyone,
            including people who use assistive technology. We aim to meet the
            Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.
          </p>
          <h2 className="mt-8 font-display text-2xl text-evergreen">What we do</h2>
          <p>
            We build for clear color contrast, keyboard navigation, descriptive
            text on images, and a structure that works with screen readers. We
            review the site regularly as we add to it.
          </p>
          <h2 className="mt-8 font-display text-2xl text-evergreen">Tell us if something is hard to use</h2>
          <p>
            If you run into a barrier on this site, please let us know through the{" "}
            <a className="text-evergreen underline hover:text-gold-dark" href="/contact">
              contact page
            </a>{" "}
            or at {site.email}. We will do our best to fix it and to help you get
            what you need in the meantime.
          </p>
        </div>
      </div>
    </Section>
  );
}
