import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MLK Hair collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function Privacy() {
  return (
    <Section>
      <div className="max-w-prose">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display text-4xl text-evergreen">Privacy Policy</h1>
        <div className="prose-body mt-8 text-ink/80">
          <p>
            MLK Hair respects your privacy. This page explains what we collect
            and how we use it. Hair loss is personal, and we treat your
            information that way.
          </p>
          <h2 className="mt-8 font-display text-2xl text-evergreen">What we collect</h2>
          <p>
            When you fill out the contact form, the Hair & Scalp Quiz, or our
            newsletter signup, we collect the details you choose to share, such
            as your name, email, phone number, and your answers. We use this only
            to respond to you, send what you requested, and provide our services.
          </p>
          <h2 className="mt-8 font-display text-2xl text-evergreen">How we use it</h2>
          <p>
            We use your information to reply to your message, send your quiz
            results, schedule and provide care, and, if you opt in, send
            occasional updates. We do not sell your information.
          </p>
          <h2 className="mt-8 font-display text-2xl text-evergreen">Booking and third parties</h2>
          <p>
            Appointments are scheduled through Acuity, which has its own privacy
            practices. Email is handled by our email provider. These services
            process your information on our behalf to deliver what you asked for.
          </p>
          <h2 className="mt-8 font-display text-2xl text-evergreen">Your choices</h2>
          <p>
            You can unsubscribe from emails at any time, and you can ask us to
            update or delete your information by contacting us through the{" "}
            <a className="text-clay hover:text-clay-dark" href="/contact">
              contact page
            </a>
            .
          </p>
          {/* OPEN: confirm final email/newsletter tool and any required legal
              language before launch (brief §7.7). */}
          <p className="mt-8 text-sm text-taupe">
            Questions about this policy? Reach us at {site.email}.
          </p>
        </div>
      </div>
    </Section>
  );
}
