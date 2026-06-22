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
    a: [
      "A stylist can help thinning hair look fuller. A dermatologist can diagnose and prescribe. A clinical trichologist bridges the two by examining hair-loss patterns, scalp conditions, growth cycles, and contributing factors, then building a personalized multi-therapeutic plan to support the hair and scalp.",
      "Cosmetology focuses on the hair from the scalp outward. Clinical trichology looks from the scalp inward, at the follicle, growth cycle, scalp environment, shedding patterns, health history, and lifestyle factors that may affect hair growth.",
      "At MLK Hair, Megan combines more than seventeen years of salon experience with clinical trichology training, a detailed intake, scalp analysis, and scope imaging. She uses those findings to guide your plan, monitor progress, and adjust recommendations as your hair and scalp respond.",
    ],
  },
  {
    q: "I have already tried shampoos, oils, supplements, minoxidil, or prescription treatment. How is this different?",
    a: [
      "It is frustrating to try treatment after treatment without understanding why your hair is changing or seeing progress. At MLK Hair, care begins by looking more closely at your individual pattern, not just recommending another product.",
      "Megan considers your shedding timeline, scalp condition, health history, lifestyle, current treatments, routine, and goals before building a personalized multi-therapeutic plan.",
    ],
  },
  {
    q: "What happens during a hair-loss consultation?",
    a: [
      "Your consultation begins with a detailed review of your hair history, health, medications, lifestyle, nutrition, stress, routines, and other factors that may affect your hair and scalp.",
      "Megan then evaluates your hair and scalp, reviews visible patterns, takes baseline photographs, and uses scope imaging for a closer look. You will leave with a clearer understanding of what may be contributing and a personalized plan for your next steps.",
    ],
  },
  {
    q: "How soon will I see results?",
    a: [
      "Most clients begin evaluating early progress within 2 to 4 months, but hair growth takes time. That is why Megan recommends a 6-month treatment plan, it gives your hair and scalp enough time to respond while allowing progress to be monitored and recommendations to be adjusted.",
      "Early clinical outcomes may include reduced shedding, improved scalp comfort, and a healthier scalp condition before visible density changes are obvious. As the hair and scalp improve, clients often describe their hair as stronger, easier to style, less limp, and healthier overall. If your plan includes microneedling with exosome support, some clients may notice early signs of response within 4 to 10 weeks.",
    ],
  },
  {
    q: "Is hair loss reversible?",
    a: [
      "Yes, some forms of hair loss can improve significantly when the pattern is recognized early and the contributing factors are addressed. Other types require long-term management, and some are not fully reversible, especially when follicles have been permanently damaged or scarring is present.",
      "Megan evaluates the pattern, scalp condition, shedding history, density changes, and possible contributing factors to help you understand what can improve, what needs ongoing support, what your hair needs now, and how to support it moving forward. She will be clear about what can be supported through trichology care.",
    ],
  },
  {
    q: "Is my appointment private?",
    a: [
      "Yes. Hair loss can feel personal and emotional, and your appointment is private and confidential. Your concerns are treated with care and discretion.",
      "Appointments are designed to give you time to talk openly, ask questions, and understand what may be happening without feeling rushed, dismissed, or pressured into a product.",
    ],
  },
  {
    q: "Do I need to know what type of hair loss I have before booking?",
    a: [
      "No. You do not need to arrive with a diagnosis or know which service you need.",
      "Start by sharing what you have noticed, such as increased shedding, a wider part, reduced density, breakage, itching, flaking, tenderness, or changes in texture. Megan will guide you in the appropriate next step.",
    ],
  },
  {
    q: "Will I need to see a doctor or dermatologist?",
    a: [
      "If your history, symptoms, or scalp findings suggest that lab work, diagnosis, prescription treatment, or another medical evaluation may be needed, Megan will explain what she is seeing and why another provider may need to be involved.",
      "Trichology care can still help you understand your pattern and support your hair and scalp alongside the appropriate medical care.",
    ],
  },
  {
    q: "Do I have to leave my current stylist or barber?",
    a: "No. Megan can manage your hair-loss and scalp care while you continue seeing your stylist or barber. She can also provide guidance or collaborate with them so color, extensions, styling, and chemical services support your overall plan.",
  },
  {
    q: "Do I have to live near Idaho Falls or Rexburg?",
    a: [
      "No. Megan works with clients in Eastern Idaho and offers video consultations for clients who live farther away.",
      "Some parts of the process, including hands-on scalp assessment and scope imaging, require an in-person appointment. For virtual appointments, a scope will be sent to you. Megan can help you determine the best starting point based on your location and concerns.",
    ],
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
