import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Microscope, Scissors, Sparkles } from "lucide-react";
import { Section, Eyebrow, AnswerSummary, BookButton, QuizButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import PhotoSlot from "@/components/PhotoSlot";
import { site } from "@/lib/site";
import { faqSchema, jsonLd, type Faq } from "@/lib/schema";

export const metadata: Metadata = {
  title: "MLK Hair | Trichologist in Idaho Falls",
  description:
    "Megan Luthy is an AMCA-certified clinical trichologist in Idaho Falls and Rexburg. Find the real cause of thinning hair with a comprehensive scalp analysis, then a science-based plan to treat it.",
  alternates: { canonical: "/" },
};

const faqs: Faq[] = [
  {
    q: "What does a trichologist do that a regular stylist or doctor does not?",
    a: "A trichologist studies the hair and scalp specifically. Megan looks at your scalp under magnification, takes a full health and lifestyle history, and finds the cause of the shedding or thinning instead of handing you one more product to try. When a medical issue is involved, she works alongside your doctor or dermatologist rather than replacing them.",
  },
  {
    q: "I have already tried shampoos, oils, and minoxidil. Why would this be different?",
    a: "Those are products. They are not a diagnosis. Most hair loss has a root cause, hormones, stress, nutrition, a scalp condition, or genetics, and the right plan depends on which one it is. The scalp analysis is where we find that out, so you stop guessing and start treating the actual problem.",
  },
  {
    q: "Do I have to live near Idaho Falls or Rexburg?",
    a: "No. Megan sees local clients in her private Idaho Falls suite and at her Rexburg chair, and she also consults remotely by Zoom or FaceTime, so you can work with her from anywhere.",
  },
  {
    q: "Is this private?",
    a: "Yes. Hair loss is hard to talk about, and the suite is private and confidential by design. There is no waiting room full of people and no judgment, just a calm place to figure out what is going on.",
  },
  {
    q: "How soon will I see results?",
    a: "Real regrowth takes time. Most people start to see meaningful change around the three to six month mark, which is why Megan documents progress with photos at months one, three, six, nine, and twelve. Month three can feel like nothing is happening even when it is, and she will walk you through what to expect so you do not give up early.",
  },
];

const pillars = [
  {
    icon: Microscope,
    eyebrow: "The hero work",
    title: "Hair & Scalp Health",
    body: "Thinning, shedding, a widening part, or a receding line. We find the cause under the microscope, then build a multi-therapeutic plan to treat it.",
    href: "/hair-loss",
    cta: "Explore hair loss care",
  },
  {
    icon: Scissors,
    eyebrow: "Behind the chair",
    title: "Salon Services",
    body: "Seventeen years of cut, color, and smoothing work. The same trained eye that reads a scalp also gives a clean, healthy haircut and color.",
    href: "/services",
    cta: "See salon services",
  },
  {
    icon: Sparkles,
    eyebrow: "Between visits",
    title: "At-Home Care",
    body: "The right products for your actual hair type, not whatever is trending. Shampoo was always made for your scalp. We help you use it well.",
    href: "/shop",
    cta: "Shop by hair type",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
      />

      {/* Asymmetric editorial hero: headline left, real photo right */}
      <section className="hero-grain bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <Eyebrow>Healthy Hair, Simplified</Eyebrow>
            <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-6xl">
              Science-based hair loss and scalp care in Idaho Falls
            </h1>
            <div className="mt-7">
              <AnswerSummary>
                Megan Luthy is an AMCA-certified clinical trichologist serving
                Idaho Falls, Rexburg, and clients anywhere by video. She finds
                the real cause of thinning hair with a comprehensive scalp
                analysis, then builds a science-based plan to treat it. Not
                rosemary oil. Not one more product. The actual reason.
              </AnswerSummary>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton />
              <QuizButton />
            </div>
            <p className="mt-5 text-sm text-taupe">
              Private and confidential. In person or by Zoom and FaceTime.
            </p>
          </div>

          <Reveal>
            <PhotoSlot
              caption="Megan in her private suite, candid and warm-graded"
              ratio="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>

      {/* Three pillars as named editorial blocks, not emoji cards */}
      <Section alt>
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl text-evergreen md:text-4xl">
            One practice, three ways to help your hair
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title}>
              <div
                className="flex h-full flex-col rounded-md border border-line bg-cream p-7"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p.icon className="text-gold-dark" size={28} strokeWidth={1.5} />
                <p className="eyebrow mt-5">{p.eyebrow}</p>
                <h3 className="mt-2 font-display text-2xl text-evergreen">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-ink/80">{p.body}</p>
                <Link
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-gold-dark"
                >
                  {p.cta} <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Meet Megan strip */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <PhotoSlot
              caption="Megan at the microscope reviewing a scalp analysis"
              ratio="aspect-[5/4]"
              tone="gold"
            />
          </Reveal>
          <Reveal>
            <Eyebrow>Meet Megan</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              Seventeen years behind the chair, now trained to read what the chair could not
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                Megan spent more than seventeen years as a licensed
                cosmetologist before she got tired of watching clients lose
                hair and having nothing real to offer them. So she went and
                studied the science. She is now an AMCA-certified clinical
                trichologist through the US Trichology Institute.
              </p>
              <p>
                That mix is the whole point. She understands hair the way a
                stylist does and the scalp the way a clinician does, and she
                refuses to hand you guesswork dressed up as a cure.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-gold-dark hover:text-gold-dark"
            >
              Read Megan&rsquo;s story <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Scientific approach block */}
      <Section alt>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>The approach</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              We find the why, then we treat it from more than one angle
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                Most hair advice online is marketing noise. One miracle serum,
                one viral oil, one drug. Real hair loss rarely has one cause, so
                it rarely has a single fix. Megan calls it the multi-therapeutic
                approach. She identifies the root cause through scalp analysis
                and your health history, then combines evidence-based therapies
                that fit your situation: professional scalp treatments, low-light
                therapy, growth serums, nutrition, and medical collaboration when
                it is called for.
              </p>
            </div>
            <Link
              href="/approach"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-gold-dark hover:text-gold-dark"
            >
              See the full method <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* FAQ + schema */}
      <Section>
        <Reveal>
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="font-display text-3xl text-evergreen md:text-4xl">
            What people ask before they book
          </h2>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="bg-evergreen">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <h2 className="font-display text-3xl text-cream md:text-4xl">
            Stop guessing. Start with a scalp analysis.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            It is the front door to everything we do. One visit to find the
            cause, in person or by video, and a clear plan for what comes next.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookButton variant="accent" />
            <QuizButton label="Not ready? Take the quiz" />
          </div>
        </div>
      </section>
    </>
  );
}
