import type { Metadata } from "next";
import { Section, Eyebrow, AnswerSummary, BookButton, QuizButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import PhotoSlot from "@/components/PhotoSlot";
import { faqSchema, jsonLd, type Faq } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hair Loss Treatment in Idaho Falls",
  description:
    "Thinning, shedding, or a widening part? Megan Luthy, a clinical trichologist in Idaho Falls and Rexburg, finds the cause and treats it with a science-based, multi-therapeutic plan. Book a scalp analysis.",
  alternates: { canonical: "/hair-loss" },
};

const conditions = [
  {
    name: "Androgenetic alopecia",
    plain: "Genetic thinning",
    body: "The most common pattern, often a widening part or thinning at the crown and temples. It responds best when it is caught early and treated on more than one front.",
  },
  {
    name: "Telogen effluvium",
    plain: "Stress and shock shedding",
    body: "Sudden, heavy shedding a few months after a trigger like illness, surgery, childbirth, crash dieting, or major stress. Often very treatable once the trigger is identified.",
  },
  {
    name: "Alopecia areata",
    plain: "Patchy loss",
    body: "Round patches where the immune system attacks the follicle. This is one where Megan works alongside your medical provider as part of the plan.",
  },
  {
    name: "Scalp disorders",
    plain: "Itch, flaking, inflammation",
    body: "A healthy scalp grows healthy hair. Dandruff, seborrheic dermatitis, folliculitis, and chronic irritation all get in the way and are part of what the analysis checks for.",
  },
];

const steps = [
  {
    n: "1",
    title: "Comprehensive scalp analysis",
    body: "We look at your scalp under magnification and take a full health and lifestyle history. This is where we find the cause instead of guessing at it.",
  },
  {
    n: "2",
    title: "A plan built for your cause",
    body: "Based on what we find, Megan combines the therapies that fit you: professional scalp treatments, low-light therapy, growth serums, nutrition, and medical collaboration when it belongs in the plan.",
  },
  {
    n: "3",
    title: "Tracked progress over months",
    body: "We photograph your progress at months one, three, six, nine, and twelve, and adjust as your hair and scalp respond. You are not left wondering whether it is working.",
  },
];

const faqs: Faq[] = [
  {
    q: "Can thinning hair actually grow back?",
    a: "In many cases, yes, especially when the follicle is still alive and the cause is treatable, like stress shedding, nutrition, hormones, or a scalp condition. Some causes are about slowing and stabilizing loss rather than full regrowth. The scalp analysis is how we tell which situation you are in, so the plan is honest from day one.",
  },
  {
    q: "How long before I see a difference?",
    a: "Hair grows slowly, so most people see meaningful change between three and six months, with more by months nine and twelve. Month three is the hard part. It often feels like nothing is happening even when the groundwork is being laid. Megan documents progress with photos so you can see what your eyes in the mirror miss.",
  },
  {
    q: "Do you replace my dermatologist or doctor?",
    a: "No. A trichologist focuses on the hair and scalp and collaborates with medical providers rather than replacing them. If something in your analysis points to a medical cause, Megan will tell you and coordinate with your doctor so you get the full picture.",
  },
  {
    q: "Is this just selling me products?",
    a: "No. The whole point is to find the cause first. Products may be part of the plan, but they are chosen for your situation, not sold as a one-size cure. If a product was going to fix this on its own, you would not be reading this page.",
  },
  {
    q: "What if I am not local?",
    a: "Megan consults remotely by Zoom or FaceTime, so you can start the conversation from anywhere. Some parts of an in-person analysis cannot be done over video, and she will be clear about what is possible remotely versus in the suite.",
  },
];

export default function HairLoss() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))}
      />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <Eyebrow>Hair Loss & Restoration</Eyebrow>
            <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
              If you have tried everything, you have probably never been told why
            </h1>
            <div className="mt-7">
              <AnswerSummary>
                Thinning, shedding, and a widening part almost always have a
                cause. Megan Luthy, a clinical trichologist in Idaho Falls and
                Rexburg, finds that cause with a comprehensive scalp analysis,
                then treats it with a science-based, multi-therapeutic plan
                instead of one more product off the shelf.
              </AnswerSummary>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton />
              <QuizButton />
            </div>
          </div>
          <Reveal>
            <PhotoSlot caption="Scalp analysis in progress, hands-on and warm-graded" tone="gold" />
          </Reveal>
        </div>
      </section>

      {/* Empathy + POV */}
      <Section alt>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>You are not imagining it</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              Losing your hair is hard, and the internet is not helping
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                You noticed more in the drain. The part got wider. You started
                parting it differently, wearing it differently, thinking about it
                constantly. Then you went looking for answers and found a wall of
                miracle oils and confident strangers selling you the one thing
                that finally works.
              </p>
              <p>
                Here is the honest version. It is rarely about shampoo, and it is
                rarely one product. Hair loss has a root cause, hormones, stress,
                nutrition, genetics, or a scalp condition, and the only way to
                treat it well is to find out which one is driving yours. That is
                the work. Not rosemary oil. Not random stuff. The actual reason.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Conditions */}
      <Section>
        <Reveal>
          <Eyebrow>What we treat</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl text-evergreen md:text-4xl">
            The common causes behind thinning and shedding
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {conditions.map((c) => (
            <Reveal key={c.name}>
              <div className="h-full rounded-md border border-line bg-soft-white p-7">
                <p className="eyebrow">{c.plain}</p>
                <h3 className="mt-2 font-display text-2xl text-evergreen">
                  {c.name}
                </h3>
                <p className="mt-3 text-ink/80">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How the program works */}
      <Section alt>
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl text-evergreen md:text-4xl">
            From a single analysis to a tracked plan
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <Reveal key={s.n}>
              <div className="flex h-full flex-col rounded-md border border-line bg-cream p-7">
                <span className="font-display text-4xl text-gold-dark">{s.n}</span>
                <h3 className="mt-3 font-display text-xl text-evergreen">
                  {s.title}
                </h3>
                <p className="mt-3 text-ink/80">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 max-w-prose rounded-md border-l-2 border-gold bg-soft-white p-5 text-ink/80">
            A note on timing, because it matters. Around month three, many people
            feel like nothing is working and want to quit. That is usually the
            moment the plan is starting to take hold under the surface. Megan will
            prepare you for it so you do not give up right before the turn.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-display text-3xl text-evergreen md:text-4xl">
            What people want to know
          </h2>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </Section>

      <section className="bg-evergreen">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <h2 className="font-display text-3xl text-cream md:text-4xl">
            Find your cause with a scalp analysis
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            One private visit to understand what is happening, and a clear,
            science-based plan for what to do about it.
          </p>
          <div className="mt-8 flex justify-center">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
}
