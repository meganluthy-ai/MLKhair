import type { Metadata } from "next";
import { Section, Eyebrow, AnswerSummary, BookButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { faqSchema, jsonLd, type Faq } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The Multi-Therapeutic Approach to Hair Loss",
  description:
    "Most hair loss has more than one cause, so it needs more than one therapy. The multi-therapeutic approach finds the root cause, then combines evidence-based treatments instead of relying on a single product or drug.",
  alternates: { canonical: "/approach" },
};

const method = [
  {
    n: "01",
    title: "Find the root cause",
    body: "Everything starts with a comprehensive scalp analysis. We examine your scalp and follicles under magnification and take a full health and lifestyle history, hormones, stress, medications, nutrition, family pattern, and how your hair has changed over time. Hair loss is a symptom. This step finds what it is a symptom of.",
  },
  {
    n: "02",
    title: "Treat the scalp first",
    body: "Healthy hair grows from a healthy scalp, so we address inflammation, buildup, flaking, and irritation before anything else. Professional in-suite scalp treatments reset the environment the follicle has to grow in. Shampoo was always made for your scalp, not just your hair, and we make sure yours is doing its job.",
  },
  {
    n: "03",
    title: "Support the follicle",
    body: "Depending on what the analysis shows, we layer in evidence-based therapies that stimulate and protect the follicle, such as low-light laser therapy and targeted growth serums. These are chosen for your cause, not applied to everyone the same way.",
  },
  {
    n: "04",
    title: "Address the inside",
    body: "Hair is one of the first places the body shows a deficiency or imbalance. Where it is relevant, we look at nutrition and the lifestyle factors that feed or starve hair growth, so the plan works from the inside as well as the outside.",
  },
  {
    n: "05",
    title: "Collaborate with medicine",
    body: "A trichologist is not a replacement for a doctor. When your analysis points to a medical cause, Megan coordinates with your physician or dermatologist so the medical and the trichological sides of your care line up instead of working in the dark.",
  },
  {
    n: "06",
    title: "Track, measure, adjust",
    body: "We document progress with photos at months one, three, six, nine, and twelve, and adjust the plan as your hair and scalp respond. Hair is slow, so we measure it over months, not days, and let the photos tell the truth.",
  },
];

const faqs: Faq[] = [
  {
    q: "What is the multi-therapeutic approach?",
    a: "It is the practice of finding the root cause of hair loss through scalp analysis and health history, then treating it with several evidence-based therapies at once, professional scalp treatments, low-light therapy, growth serums, nutrition, and medical collaboration, rather than relying on a single product or a single drug. Hair loss usually has more than one driver, so it responds best to more than one therapy.",
  },
  {
    q: "Why not just use minoxidil or a prescription?",
    a: "A single drug treats a single mechanism. It can be part of a plan, but on its own it ignores everything else that may be driving your loss, like a scalp condition, a nutritional gap, or a stress trigger. The multi-therapeutic approach uses the right combination for your cause, which is why it can do more than any one product alone.",
  },
  {
    q: "Does this approach actually work?",
    a: "When the follicle is still viable and the cause is treatable, combining therapies that each support hair growth tends to outperform any single one of them. The honest part is that results depend on your specific cause, and the scalp analysis is what tells us how realistic regrowth versus stabilization is for you. Progress is measured with photos over months so the results are visible, not assumed.",
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
              Most hair loss has more than one cause, so it needs more than one
              therapy. The multi-therapeutic approach finds the root cause
              through scalp analysis and health history, then combines
              evidence-based treatments, scalp care, low-light therapy, growth
              serums, nutrition, and medical collaboration, instead of relying on
              a single product or drug.
            </AnswerSummary>
          </div>
        </div>
      </Section>

      <Section alt className="!pt-0 md:!pt-0">
        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
          {method.map((m) => (
            <Reveal key={m.n} className="bg-soft-white">
              <div className="h-full p-8">
                <span className="font-display text-3xl text-clay">{m.n}</span>
                <h2 className="mt-3 font-display text-2xl text-evergreen">
                  {m.title}
                </h2>
                <p className="mt-3 text-ink/80">{m.body}</p>
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
              One product treats one thing. Your hair is not one thing.
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                The reason so many people feel like they have tried everything is
                that they have tried everything one at a time. A shampoo here, an
                oil there, a drug from a quick visit somewhere else. Each one
                aimed at a single piece of a problem that has several pieces.
              </p>
              <p>
                The multi-therapeutic approach is simply the decision to stop
                doing that. Find the cause, treat the whole picture, and measure
                it honestly. That is the science, and it is the part nobody
                selling you a quick fix wants to slow down for.
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
        <Reveal>
          <div className="mt-12">
            <BookButton />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
