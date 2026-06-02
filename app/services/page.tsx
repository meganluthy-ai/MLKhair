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

// Real menu and pricing from Megan's service flyer.
type ServiceItem = { name: string; price: string; desc?: string };
const categories: { title: string; note?: string; items: ServiceItem[] }[] = [
  {
    title: "Color & Texture",
    items: [
      { name: "Root Touch-Up", price: "$85" },
      { name: "Root Touch-Up + Refresher", price: "$105" },
      { name: "Highlights (partial or full)", price: "$125+" },
      { name: "Lived-In Color (partial or full)", price: "$176+" },
      { name: "Keratin Smoothing", price: "$125" },
      { name: "Toner", price: "$45" },
    ],
  },
  {
    title: "Cut & Finish",
    note: "Comes with a wash and style.",
    items: [
      { name: "Women's Haircut", price: "$40" },
      { name: "Men's Haircut", price: "$30" },
      { name: "Kids Cut", price: "$25" },
    ],
  },
  {
    title: "Hair & Scalp Solutions",
    items: [
      {
        name: "Hair & Scalp Analysis",
        price: "$75",
        desc: "Identify the causes of hair loss, thinning, or scalp concerns.",
      },
      {
        name: "Express Scalp Treatment",
        price: "$65",
        desc: "Support scalp health and improve the follicle environment.",
      },
      {
        name: "Trichologist-Led Head Spa",
        price: "$145",
        desc: "A deep treatment and real relaxation to support healthy hair growth.",
      },
      {
        name: "Tyrell Deep Conditioning",
        price: "$75",
        desc: "Repair dry, damaged, or frizzy strands.",
      },
    ],
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
        <div className="mx-auto grid max-w-4xl gap-10">
          {categories.map((c) => (
            <Reveal key={c.title}>
              <div className="rounded-md border border-line bg-cream p-8">
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                  <h2 className="font-display text-2xl text-evergreen">
                    {c.title}
                  </h2>
                  {c.note && (
                    <span className="text-xs text-taupe">{c.note}</span>
                  )}
                </div>
                <ul className="mt-5 space-y-4">
                  {c.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-medium text-ink">{item.name}</span>
                        <span className="shrink-0 font-display text-lg text-gold-dark">
                          {item.price}
                        </span>
                      </div>
                      {item.desc && (
                        <p className="mt-1 max-w-prose text-sm text-taupe">
                          {item.desc}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p className="text-sm text-taupe">
              Prices are a starting point. Color and corrective work vary with
              length, density, and what your hair needs, so the final quote is
              confirmed at your appointment.
            </p>
          </Reveal>
        </div>
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
