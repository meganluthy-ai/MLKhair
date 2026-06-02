import type { Metadata } from "next";
import { Section, Eyebrow, BookButton, QuizButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FaqMosaic from "@/components/FaqMosaic";
import Photo from "@/components/Photo";
import { faqSchema, jsonLd, type Faq } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Is a Trichologist? Hair Loss Science Explained",
  description:
    "A trichologist studies the hair and scalp and finds the cause of hair loss instead of guessing. Learn what trichology is, what a scalp analysis involves, and how a trichologist differs from a dermatologist.",
  alternates: { canonical: "/trichology" },
};

// NOTE FOR MEGAN: this ports the question structure from the current Wix
// Trichology page, which is the strongest asset on the old site. Where your
// original wording is better than this draft, paste yours in. The question
// set and FAQ schema are what AI engines and Google extract from.
const faqs: Faq[] = [
  {
    q: "What is trichology?",
    a: "Trichology is the study of the hair and scalp, including how hair grows, why it falls out, and what keeps the scalp healthy. A clinical trichologist is trained to assess the hair and scalp, identify the cause of a problem, and build a treatment plan, working alongside medical providers when a condition calls for it.",
  },
  {
    q: "What is a clinical trichologist, and what makes Megan one?",
    a: "A clinical trichologist has completed specialized training in hair and scalp health. Megan Luthy is certified through the US Trichology Institute and is AMCA-certified, on top of more than seventeen years as a licensed cosmetologist. That combination means she reads hair like a stylist and the scalp like a clinician.",
  },
  {
    q: "What conditions can a trichologist help with?",
    a: "Common ones include androgenetic alopecia (genetic thinning), telogen effluvium (stress and shock shedding), alopecia areata (patchy loss), and a range of scalp disorders like dandruff, seborrheic dermatitis, and chronic irritation. A trichologist also helps with general thinning, excessive shedding, and scalp health, and refers to a physician when something points to a medical cause.",
  },
  {
    q: "What is the multi-therapeutic approach?",
    a: "Rather than relying on one product or one drug, the multi-therapeutic approach finds the root cause of your hair loss and then combines several evidence-based therapies that fit your situation, professional scalp treatments, low-light therapy, growth serums, nutrition, and medical collaboration. Hair loss usually has more than one driver, so it responds best to more than one therapy.",
  },
  {
    q: "What happens during a scalp analysis?",
    a: "Megan examines your scalp and follicles under magnification and takes a full health and lifestyle history. Together those reveal what is actually happening, the condition of your scalp, the health of your follicles, and the likely cause of the change you have noticed. You leave understanding your hair instead of guessing, with a plan for what to do next.",
  },
  {
    q: "How long does it take to see results?",
    a: "Hair grows slowly, so meaningful change usually shows up between three and six months, with more by months nine and twelve. Megan documents progress with photos along the way. Month three is the point where many people feel discouraged even though the plan is taking hold, so she prepares you for it.",
  },
  {
    q: "What is the difference between a trichologist and a dermatologist?",
    a: "A dermatologist is a medical doctor who treats skin, hair, and nail conditions and can prescribe medication and perform procedures. A trichologist specializes specifically in the hair and scalp and focuses on identifying causes and combining therapies, and does not prescribe drugs. The two are not in competition. A good trichologist collaborates with your dermatologist or physician when a medical issue is involved, so you get both the specialized hair focus and the medical care.",
  },
  {
    q: "Do I need a referral, and is it confidential?",
    a: "No referral is needed. You can book a scalp analysis directly. The setting is private and confidential by design, because hair loss is personal and you deserve a calm, judgment-free place to talk about it.",
  },
];

export default function Trichology() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
      />

      {/* Hero: bordered "why I chose trichology" headline + real photo */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Eyebrow rule>Trichology, explained</Eyebrow>
            <div className="rounded-md border border-gold/60 p-7 md:p-8">
              <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
                Why I chose trichology
              </h1>
              <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink/80">
                Behind the chair for seventeen years, Megan kept meeting the same
                quiet heartbreak: clients losing hair, having tried everything,
                with no real answer. Trichology is how she finally got to give
                them one. It is the study of the hair and scalp, and it is the
                science of finding the why.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Photo
              src="/images/scalp-analysis.jpg"
              alt="Megan performing a scalp analysis with a digital trichoscope"
              ratio="aspect-[5/4]"
              priority
            />
          </Reveal>
        </div>
      </Section>

      <Section variant="gold">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>What is a trichologist?</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              A specialist in the science of hair and scalp
            </h2>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/80">
              A trichologist studies the hair and scalp and finds the cause of
              hair loss instead of handing you another product. Megan Luthy is an
              AMCA-certified clinical trichologist in Idaho Falls and Rexburg who
              assesses your scalp under magnification, identifies the root cause,
              and treats it, collaborating with your doctor when a medical issue
              is involved.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow rule>The questions people ask</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl text-evergreen md:text-4xl">
            Everything you wanted to know about trichology
          </h2>
        </Reveal>
        <div className="mt-12">
          <FaqMosaic items={faqs} />
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              The short version
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                If your hair is changing and you are tired of guessing, a scalp
                analysis is where you get a real answer. Not a product. Not a
                guess. An actual look at what is going on and a plan built around
                it.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookButton />
              <QuizButton />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
