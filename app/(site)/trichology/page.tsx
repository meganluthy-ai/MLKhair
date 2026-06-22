import type { Metadata } from "next";
import {
  Microscope,
  Award,
  Stethoscope,
  Layers,
  ScanSearch,
  Clock,
  Scale,
  Users,
  Lock,
} from "lucide-react";
import { Section, Eyebrow, BookButton, QuizButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import Photo from "@/components/Photo";
import { faqSchema, jsonLd, type Faq } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Is a Trichologist? Hair & Scalp Science Explained",
  description:
    "Trichology is the study of the hair and scalp. Learn what a clinical trichologist does, what happens in a scalp analysis, and how trichology helps you understand hair changes and clear next steps.",
  alternates: { canonical: "/trichology" },
};

const faqItems: (Faq & { icon: JSX.Element })[] = [
  {
    icon: <Microscope size={18} strokeWidth={1.75} className="text-gold-dark" />,
    q: "What is trichology?",
    a: [
      "Trichology is the study of the hair and scalp, including how hair grows, why shedding happens, how the scalp environment affects the follicle, and what factors may contribute to hair changes.",
      "Clinical trichology helps connect the hair, scalp, history, routine, and contributing factors so the next step is based on a clearer picture, not guesswork.",
    ],
  },
  {
    icon: <Award size={18} strokeWidth={1.75} className="text-gold-dark" />,
    q: "What makes Megan's perspective different?",
    a: [
      "Megan combines more than seventeen years as a licensed cosmetologist with clinical trichology training and AMCA certification.",
      "That combination matters. She understands how hair behaves behind the chair, color history, texture changes, breakage, styling, density, and scalp concerns, while also using trichology tools like detailed intake, scalp analysis, and scope imaging to look deeper.",
    ],
  },
  {
    icon: <Stethoscope size={18} strokeWidth={1.75} className="text-gold-dark" />,
    q: "What concerns can trichology support?",
    a: [
      "Trichology can support concerns such as excessive shedding, gradual thinning, a wider part, loss of style options due to hair changes, reduced density, scalp irritation, flaking, itching, buildup, breakage, and changes in hair quality.",
      "Common patterns may include androgenetic alopecia, telogen effluvium, alopecia areata, traction-related loss, scalp conditions, and other forms of hair and scalp changes. When something appears medical or outside trichology care, Megan will recommend involving a licensed medical provider.",
    ],
  },
  {
    icon: <Layers size={18} strokeWidth={1.75} className="text-gold-dark" />,
    q: "Why does trichology look at more than one factor?",
    a: [
      "Hair loss is not always caused by one isolated issue. Sometimes there is one clear driver, and other times the pattern reflects several overlapping factors.",
      "Trichology looks at the scalp, follicle, shedding timeline, health history, routine, and contributing factors so support can be as simple or as layered as the pattern requires.",
    ],
  },
  {
    icon: <ScanSearch size={18} strokeWidth={1.75} className="text-gold-dark" />,
    q: "What happens during a scalp analysis?",
    a: [
      "Megan reviews your hair history, shedding timeline, health and lifestyle factors, medications, routine, and goals. She then evaluates your hair and scalp, uses scope imaging for a closer look, and documents baseline findings.",
      "You leave with a clearer understanding of what may be contributing and what next steps make sense.",
    ],
  },
  {
    icon: <Clock size={18} strokeWidth={1.75} className="text-gold-dark" />,
    q: "How long does it take to see results?",
    a: [
      "Hair growth takes time. Many clients begin evaluating early progress within 2 to 4 months, but visible changes often take longer depending on the type of hair loss, how long it has been present, follicle health, consistency, and whether scarring or permanent damage is involved.",
      "Megan tracks progress with photos, follow-ups, and scope findings so changes can be measured over time.",
    ],
  },
  {
    icon: <Scale size={18} strokeWidth={1.75} className="text-gold-dark" />,
    q: "Trichologist or dermatologist, what is the difference?",
    a: [
      "A dermatologist is a medical doctor who can diagnose, prescribe medication, perform biopsies, and treat medical skin conditions.",
      "A clinical trichologist focuses specifically on hair and scalp concerns, looking at hair-loss patterns, scalp health, growth cycles, history, routine, and contributing factors. Megan does not replace medical care. When diagnosis, prescription treatment, lab work, biopsy, or injections are needed, she will recommend involving the appropriate licensed provider.",
    ],
  },
  {
    icon: <Users size={18} strokeWidth={1.75} className="text-gold-dark" />,
    q: "Do you treat men, or only women?",
    a: [
      "Both. Hair loss and scalp concerns can affect men and women, though the pattern may look different from person to person. Male pattern hair loss can begin as early as the late teens or early 20s, while many women also experience hair loss at some point in their lives.",
      "Megan works with clients of all ages experiencing shedding, thinning, scalp irritation, density changes, and hair-quality changes in a private, judgment-free setting.",
    ],
  },
  {
    icon: <Lock size={18} strokeWidth={1.75} className="text-gold-dark" />,
    q: "Do I need a referral, and is it confidential?",
    a: [
      "No referral is needed. You can book directly with Megan.",
      "Appointments are private and confidential. Hair loss can feel personal, and the consultation is designed to give you space to talk openly, ask questions, and understand what may be happening without feeling rushed or dismissed.",
    ],
  },
];

export default function Trichology() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(faqItems))}
      />

      {/* Hero: bordered headline + real photo */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Eyebrow rule>Trichology, explained</Eyebrow>
            <div className="rounded-md border border-gold/60 p-7 md:p-8">
              <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
                Why trichology matters
              </h1>
              <div className="prose-body mt-4 text-ink/80">
                <p>
                  After more than seventeen years behind the chair, Megan kept
                  hearing the same concern: clients were losing hair, noticing
                  changes, or struggling with scalp issues, but they did not know
                  where to start.
                </p>
                <p>
                  Trichology gave her a framework to look deeper. It studies the
                  hair, scalp, growth cycle, shedding patterns, and contributing
                  factors that can affect hair and scalp health, helping clients
                  move from guessing to clearer next steps.
                </p>
              </div>
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
            <div className="prose-body mt-5 text-ink/80">
              <p>
                A clinical trichologist is trained to evaluate hair and scalp
                concerns through the lens of hair growth, scalp health, shedding
                patterns, history, lifestyle, and contributing factors.
              </p>
              <p>
                Megan Keck is an AMCA-certified clinical trichologist serving
                Eastern Idaho. She uses detailed intake, scalp analysis, and scope
                imaging to help clients understand what may be contributing to
                shedding, thinning, scalp irritation, or changes in hair density,
                and what next steps make sense.
              </p>
              <p>
                When medical diagnosis, lab work, prescription treatment, biopsy,
                or injections are needed, Megan will recommend involving the
                appropriate licensed medical provider.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow rule>Trichology questions</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl text-evergreen md:text-4xl">
            What to know before you book
          </h2>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="olive">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Still wondering where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl">
            You do not need to know what type of hair loss you have before
            booking. Start with a Hair & Scalp Consultation, and Megan will help
            you understand your pattern, what may be contributing, and what next
            steps make sense.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BookButton label="Start Your Hair & Scalp Plan" />
            <QuizButton label="Take the Hair & Scalp Quiz" onDark />
          </div>
        </div>
      </Section>
    </>
  );
}
