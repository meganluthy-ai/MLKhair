import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Microscope, Scissors, Sparkles } from "lucide-react";
import { Section, Eyebrow, AnswerSummary, BookButton, QuizButton, TrustRow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
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
    eyebrow: "The root work",
    title: "Hair & Scalp Health",
    body: "Shedding, thinning, a wider part, itching, flaking, or scalp irritation? Start here for care that looks beyond the surface.",
    href: "/hair-loss",
    cta: "Start Your Hair & Scalp Plan",
  },
  {
    icon: Scissors,
    eyebrow: "Behind the chair",
    title: "Salon Services",
    body: "Custom cuts and professional color designed for beautiful shine, lasting coverage, and long-term hair and scalp health.",
    href: "/services",
    cta: "Schedule Your Cut or Color",
  },
  {
    icon: Sparkles,
    eyebrow: "Between visits",
    title: "At-Home Care",
    body: "Simple product guidance for your scalp, hair type, and goals, so your routine supports the work we are doing.",
    href: "/shop",
    cta: "Build Your Home Routine",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
      />

      {/* Layered editorial hero: headline left, photo on an olive panel right */}
      <section className="hero-grain relative overflow-hidden bg-cream">
        {/* soft gold wash in the corner for depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-20 lg:pb-28 lg:pt-28">
          <div>
            <Eyebrow rule>Healthy Hair, Simplified</Eyebrow>
            <h1 className="font-display text-[2.6rem] leading-[1.02] text-evergreen sm:text-5xl md:text-6xl lg:text-7xl">
              The science behind{" "}
              <span className="italic text-gold-dark">why</span> your hair
              is changing
            </h1>
            <div className="mt-7">
              <AnswerSummary>
                Not rosemary oil. Not another product. Not guesswork. Megan Keck
                is an AMCA-certified clinical trichologist serving Eastern Idaho
                who looks beyond thinning hair to connect the patterns, assess
                contributing factors, and build a science-backed plan for
                healthier, fuller hair.
              </AnswerSummary>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton />
              <QuizButton />
            </div>
            <TrustRow
              className="mt-7"
              items={[
                "AMCA-certified trichologist",
                "Experienced cosmetologist + educator",
                "In person or by video",
              ]}
            />
          </div>

          <Reveal>
            <div className="relative mx-auto max-w-sm md:max-w-none">
              {/* olive panel offset behind the photo */}
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-md bg-evergreen md:block"
              />
              {/* gold corner bracket */}
              <div
                aria-hidden
                className="absolute -left-3 -top-3 hidden h-16 w-16 border-l-2 border-t-2 border-gold md:block"
              />
              <div className="relative">
                <Photo
                  src="/images/megan-suite.jpg"
                  alt="Megan Luthy in her private hair studio"
                  ratio="aspect-[4/5]"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animated credentials strip */}
      <section className="bg-cream pb-4">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Stats />
          </Reveal>
        </div>
      </section>

      {/* Three pillars as named editorial blocks, not emoji cards */}
      <Section alt>
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl text-evergreen md:text-4xl">
            One practice. Three ways to support healthier hair.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title}>
              <div
                className="lift flex h-full flex-col rounded-md border border-line bg-cream p-7"
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
            <Photo
              src="/images/trichoscope.jpg"
              alt="The digital trichoscope Megan uses for scalp analysis"
              ratio="aspect-[5/4]"
            />
          </Reveal>
          <Reveal>
            <Eyebrow>Meet Megan</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              When your hair changes, you need someone who knows how to look deeper.
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                After more than seventeen years behind the chair, Megan saw how
                often shedding, thinning, scalp irritation, and texture changes
                were met with surface-level answers.
              </p>
              <p>
                That is why she studied clinical trichology, to better recognize
                hair and scalp patterns, consider contributing factors, and
                guide clients toward appropriate next steps when their hair
                changes.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-gold-dark hover:text-gold-dark"
            >
              Read Megan&rsquo;s Story <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Scientific approach block: olive image band */}
      <Section variant="olive">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <Photo
              src="/images/scalp-analysis.jpg"
              alt="Megan performing a scalp analysis"
              ratio="aspect-[5/4]"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow rule>The Approach</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl">
              Clinical trichology, shaped by years of real hair experience.
            </h2>
            <div className="prose-body mt-5">
              <p>
                Hair loss is rarely addressed well with one product, one serum,
                or one simple answer. Shedding and thinning can be influenced by
                30+ potential causes and contributing factors.
              </p>
              <p>
                At MLK Hair, your care begins with a detailed intake, scalp
                analysis, and scope imaging, going beyond surface-level hair care
                to connect your history, scalp environment, and hair patterns
                with clear, personalized next steps.
              </p>
            </div>
            <Link
              href="/approach"
              className="link-underline mt-6 inline-flex items-center gap-1.5 font-semibold text-gold"
            >
              See the Full Method <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
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
          <p className="mx-auto mt-4 max-w-xl text-cream">
            It is the front door to everything we do. One visit to find the
            cause, in person or by video, and a clear plan for what comes next.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookButton variant="accent" />
            <QuizButton label="Not ready? Take the quiz" onDark />
          </div>
        </div>
      </section>
    </>
  );
}
