import type { Metadata } from "next";
import { Section, Eyebrow, AnswerSummary, BookButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { faqSchema, jsonLd, type Faq } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hair Salon in Rexburg & Idaho Falls",
  description:
    "Cut, color, smoothing and keratin treatments, and head-spa scalp treatments with Megan Luthy in Rexburg and Idaho Falls. The same trained eye that reads a scalp gives a clean, healthy cut and color.",
  alternates: { canonical: "/services" },
};

const categories = [
  {
    title: "Cuts & Styling",
    body: "Precision cuts for every length and texture, finished with a style that works on day one and on the days you do it yourself. Seventeen years of practice behind every pass.",
    items: ["Women's cut and style", "Men's cut", "Children's cut", "Bang and neck trims"],
  },
  {
    title: "Color",
    body: "Color that respects the health of your hair, from full coverage to dimensional highlights and balayage. Healthy hair holds color better, and Megan builds the plan around keeping it strong.",
    items: ["All-over color", "Highlights and balayage", "Root touch-up", "Gloss and toner", "Color correction by consultation"],
  },
  {
    title: "Smoothing & Keratin",
    body: "Smoothing and keratin treatments that calm frizz, cut down drying time, and make day-to-day styling easier, matched to your hair type rather than applied the same to everyone.",
    items: ["Keratin smoothing treatment", "Express smoothing"],
  },
  {
    title: "Scalp Treatments & Head Spa",
    body: "Professional scalp treatments and a relaxing head-spa experience that cleanse, calm, and reset the scalp. A healthy scalp is where healthy hair starts, so this is good for your hair and it feels wonderful.",
    items: ["Head-spa scalp treatment", "Deep cleanse and exfoliation", "Scalp health add-on to any service"],
  },
];

const faqs: Faq[] = [
  {
    q: "Where is the salon?",
    a: "Megan works from a private suite in Idaho Falls and a chair in Rexburg, Idaho. You can book either location online through Acuity.",
  },
  {
    q: "I came in for color. Can Megan also look at my thinning?",
    a: "Yes, and many clients do exactly that. Because Megan is a clinical trichologist as well as a stylist, she can talk through what she is seeing at the scalp during a salon visit and point you toward a scalp analysis if it would help. There is no pressure, just the option.",
  },
  {
    q: "How do I book?",
    a: "All booking is done online. Use the booking button to see real-time availability and reserve your spot.",
  },
];

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
      />

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Salon Services</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
            A salon run by someone who understands your hair down to the scalp
          </h1>
          <div className="mt-7">
            <AnswerSummary>
              Cut, color, smoothing and keratin treatments, and head-spa scalp
              care in Rexburg and Idaho Falls. The same trained eye that reads a
              scalp under a microscope gives you a clean, healthy cut and color,
              and will tell you the truth about your hair&rsquo;s health while
              she is at it.
            </AnswerSummary>
          </div>
          <div className="mt-8">
            <BookButton label="Book a Salon Appointment" variant="primary" />
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((c) => (
            <Reveal key={c.title}>
              <div className="h-full rounded-md border border-line bg-cream p-8">
                <h2 className="font-display text-2xl text-evergreen">{c.title}</h2>
                <p className="mt-3 text-ink/80">{c.body}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="text-ink/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* OPEN ITEM (brief §7.3): confirm service list + whether to publish prices */}
        <Reveal>
          <p className="mt-10 max-w-prose rounded-md border border-dashed border-clay/50 bg-soft-white p-5 text-sm text-taupe">
            Pricing and the final service list are confirmed during booking.
            Decide with Megan whether to publish prices, show &ldquo;starting
            at&rdquo; rates, or keep them to consultation, then this section
            updates in one place.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="font-display text-3xl text-evergreen md:text-4xl">
            Before you book
          </h2>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-line py-5">
              <h3 className="font-display text-lg text-evergreen">{f.q}</h3>
              <p className="mt-2 max-w-prose text-ink/80">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
