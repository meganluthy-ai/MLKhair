import type { Metadata } from "next";
import { Section, Eyebrow, AnswerSummary, BookButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { faqSchema, jsonLd, type Faq } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Multi-Therapeutic Approach to Hair Loss",
  description:
    "Hair loss is rarely caused by one isolated thing. The MLK Hair Method starts with your pattern, then builds a personalized multi-therapeutic plan around what your hair and scalp need.",
  alternates: { canonical: "/approach" },
};

const method: { n: string; title: string; body: string[] }[] = [
  {
    n: "01",
    title: "Identify the pattern",
    body: [
      "Your care starts with a detailed intake, scalp analysis, and scope imaging. Megan looks at your shedding timeline, scalp condition, density changes, health history, medications, nutrition, stress, family pattern, and how your hair has changed over time.",
      "Hair loss is a sign that something has shifted. This step helps connect what you are seeing with what may be contributing, so your plan is based on your pattern, not guesswork.",
    ],
  },
  {
    n: "02",
    title: "Start with the scalp",
    body: [
      "Healthy hair needs a healthy place to grow. Megan evaluates the scalp for signs of buildup, flaking, irritation, inflammation, oil imbalance, or other visible changes that may affect the follicle environment.",
      "When the scalp needs support, professional in-suite treatments and targeted home care help create a better foundation for growth.",
    ],
  },
  {
    n: "03",
    title: "Support the follicle",
    body: [
      "Once the pattern is clearer, Megan layers in therapies to support the follicle and hair-growth cycle. This may include low-level light therapy, growth-supportive topicals, microneedling support, non-prescription DHT-support options, or other targeted recommendations.",
      "The goal is to choose the right therapies for your pattern, your goals, and the level of support your hair and scalp need, without defaulting every client to the same product, prescription, or protocol.",
    ],
  },
  {
    n: "04",
    title: "Address contributing factors",
    body: [
      "Sometimes hair loss has one clear driver. Other times, the pattern reflects several overlapping factors. The MLK Hair Method is designed to look at both.",
      "Megan considers the scalp, follicle, timing, routine, internal stressors, and changes in the body so your plan can be as simple or as layered as your pattern requires, not built around a preset product line or one-size-fits-all protocol.",
    ],
  },
  {
    n: "05",
    title: "Know when medical care belongs",
    body: [
      "Megan knows when hair and scalp findings point beyond trichology care. Clinical trichology does not replace medical diagnosis, injections, biopsy, or lab work, but it can help you understand your pattern and know when a licensed medical provider should be involved.",
      "Trichology care can still help you support your hair and scalp alongside appropriate medical care.",
    ],
  },
  {
    n: "06",
    title: "Track, measure, adjust",
    body: [
      "Hair growth is best measured over months, not days. The hair you see today often reflects what was happening in the body and scalp 2 to 4 months ago, which is why progress has to be tracked over time.",
      "Megan documents changes with photos, follow-ups, and scope findings so your plan can be adjusted as your hair and scalp respond. You will not be left wondering if anything is changing, progress is monitored with evidence, not memory or guesswork.",
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "What is the multi-therapeutic approach?",
    a: [
      "It is the clinical trichology approach of building support around the pattern Megan sees. Sometimes the plan is simple. Other times, hair loss needs support from more than one angle.",
      "Megan may use structured treatment tools, but the plan is chosen around your hair-loss pattern, scalp environment, history, goals, and response over time, not a one-size-fits-all package.",
    ],
  },
  {
    q: "Why not just use minoxidil or a prescription?",
    a: [
      "Minoxidil or prescription treatment can be helpful when it fits the pattern. Some clients choose those tools. Others prefer to avoid prescription hair-growth medications or want non-prescription DHT-support options when appropriate.",
      "At MLK Hair, the goal is not to reject proven tools or push every client into the same treatment path. The goal is to understand where each option fits inside a complete multi-therapeutic plan.",
    ],
  },
  {
    q: "What kind of results can I expect?",
    a: [
      "When the follicle is still viable and the contributing factors can be supported, the goal is to create the best possible environment for the hair and scalp to respond. That may include reduced shedding, improved scalp comfort, healthier hair quality, stronger-looking hair, or visible regrowth when the hair is capable of responding.",
      "Results still depend on the type of hair loss, how long it has been present, follicle health, consistency, and whether scarring or permanent damage is involved. That is why Megan tracks progress with photos, follow-ups, and plan adjustments over time, so you can see what is changing and understand what comes next.",
    ],
  },
];

export default function Approach() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
      />

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Our Approach</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
            The multi-therapeutic approach
          </h1>
          <div className="mt-7">
            <AnswerSummary>
              Hair loss is rarely caused by one isolated thing, so your plan
              should not be built around one isolated solution. The MLK Hair
              Method starts with your pattern, then builds the plan around what
              your hair and scalp need.
            </AnswerSummary>
          </div>
          <div className="mt-8">
            <BookButton label="Start With a Hair & Scalp Consultation" />
          </div>
        </div>
      </Section>

      <Section alt className="!pt-0 md:!pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {method.map((m, i) => (
            <Reveal key={m.n} delay={(i % 2) * 90}>
              <div
                className={`lift flex h-full gap-5 rounded-md border p-8 ${
                  i % 2 === 0 ? "border-line bg-cream" : "border-gold/40 bg-gold-tint"
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-evergreen font-display text-lg text-cream">
                  {m.n}
                </span>
                <div>
                  <h2 className="font-display text-2xl text-evergreen">
                    {m.title}
                  </h2>
                  <div className="mt-2 space-y-2 text-ink/80">
                    {m.body.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Why it is different</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              Hair loss needs a method, not a guess
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                Many hair-loss solutions start with the treatment: try this
                serum, take this supplement, use this prescription, book this
                service. The MLK Hair Method starts earlier, with the pattern.
              </p>
              <p>
                Megan uses clinical trichology, detailed intake, scalp analysis,
                and scope imaging to understand what your hair and scalp are
                showing before choosing the next step. From there, she builds a
                personalized multi-therapeutic plan designed to support the
                scalp, follicle, contributing factors, and progress over time.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section alt>
        <Reveal>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-display text-3xl text-evergreen md:text-4xl">
            About the method
          </h2>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="olive">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl">
            You do not need to know what type of hair loss you have before
            booking. Start with a Hair & Scalp Consultation, and Megan will help
            you understand your pattern, what may be contributing, and what next
            steps make sense.
          </p>
          <div className="mt-8 flex justify-center">
            <BookButton label="Start Your Hair & Scalp Plan" />
          </div>
        </div>
      </Section>
    </>
  );
}
