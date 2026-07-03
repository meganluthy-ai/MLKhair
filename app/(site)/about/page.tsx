import type { Metadata } from "next";
import { Section, Eyebrow, AnswerSummary, BookButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { personSchema, localBusinessSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Megan Keck, Cosmetologist & Clinical Trichologist",
  description:
    "Megan Keck is a cosmetologist and AMCA-certified clinical trichologist serving Eastern Idaho. From the salon chair to the scalp, she helps clients understand their hair and care for it with confidence. Healthy Hair, Simplified.",
  alternates: { canonical: "/about" },
};

const principles = [
  "Healthy hair and scalp health come first",
  "Education helps clients make better decisions",
  "Professional products should perform and have a purpose",
  "Beautiful results should fit your lifestyle",
  "Every client deserves an individualized approach",
  "Long-term hair health matters more than quick fixes",
];

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(personSchema())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(localBusinessSchema())}
      />

      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <Reveal>
            <Photo
              src="/images/megan-suite.jpg"
              alt="Megan Keck in her private hair studio"
              ratio="aspect-[4/5]"
              priority
            />
          </Reveal>
          <div>
            <Eyebrow>About Megan</Eyebrow>
            <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
              Healthy Hair, Simplified
            </h1>
            <div className="mt-7">
              <AnswerSummary>
                I&rsquo;m Megan Keck, a cosmetologist and clinical trichologist
                serving Eastern Idaho. I help clients understand their hair from
                the salon chair to the scalp, combining beautiful salon services
                with a health-focused approach to hair and scalp care.
              </AnswerSummary>
            </div>
            <div className="prose-body mt-6 text-ink/80">
              <p>
                After nearly two decades behind the chair, I kept hearing the
                same concerns: more shedding, a widening part, a smaller
                ponytail, a changing hairline, or hair that simply felt
                different. Clients knew something had changed, but they often
                did not know where to turn for answers.
              </p>
              <p>
                That desire to better understand what was happening beneath the
                surface eventually led me to trichology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* An Unexpected Path */}
      <Section alt>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>The story</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              An unexpected path
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>I did not set out to become a trichologist.</p>
              <p>
                While researching ways to bring a head spa experience into my
                salon, I discovered trichology, the study of hair and scalp
                health. What started as curiosity quickly became a deeper
                passion for understanding the connection between the scalp, the
                hair fiber, the growth cycle, and the changes clients notice
                over time.
              </p>
              <p>
                The more I learned, the more it changed the way I approached
                everything behind the chair: color, haircuts, treatments,
                product recommendations, scalp care, and long-term hair goals.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* My Own Hair Changed Too */}
      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Why it&rsquo;s personal</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              My own hair changed too
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>This work also became personal.</p>
              <p>
                I have had seasons where stress, illness, and life changes
                affected my own hair. I experienced hair loss, and for a long
                time I also believed my hair simply could not be long or feel as
                healthy as I wanted it to.
              </p>
              <p>
                Learning more about the scalp, the hair-growth cycle, product
                choices, internal stressors, and consistent care changed the way
                I cared for my own hair. It was not one magic product or one
                quick fix. It was understanding what my hair needed, making a
                few intentional changes, and staying consistent long enough to
                see the difference.
              </p>
              <p>
                That experience gave me even more compassion for clients who
                feel discouraged, confused, or disconnected from their hair. I
                know what it feels like to wonder if your hair can improve, and I
                also know how empowering it can be when you finally understand
                what may be working against it.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Where Beauty Meets Biology */}
      <Section variant="gold">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Where beauty meets biology</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              It does not replace cosmetology, it complements it
            </h2>
            <div className="mt-6 space-y-1 font-display text-2xl text-evergreen">
              <p>Beautiful hair matters.</p>
              <p>Healthy hair matters.</p>
              <p>Understanding your hair matters.</p>
            </div>
            <div className="prose-body mt-6 text-ink/80">
              <p>
                Whether you are visiting for a haircut, color service, texture
                service, scalp treatment, head spa experience, or hair and scalp
                consultation, I take the same approach: listen carefully, ask
                thoughtful questions, and create a personalized plan based on
                your goals, lifestyle, and needs.
              </p>
              <p>
                Healthy hair should not require complicated routines, endless
                products, or chasing every trend online. It should be practical,
                personalized, and sustainable.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* What Guides My Work */}
      <Section alt>
        <Reveal>
          <Eyebrow>What guides my work</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl text-evergreen md:text-4xl">
            Every recommendation follows a few core principles
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p} delay={(i % 2) * 80}>
              <div className="flex h-full items-baseline gap-3 rounded-md border border-line bg-cream p-6 text-ink/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-lg">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Education & Continued Learning */}
      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Education &amp; continued learning</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              Learning does not stop at a license
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                I&rsquo;ve always believed that learning doesn&rsquo;t stop when
                you earn a license or certification.
              </p>
              <p>
                Throughout my career, I&rsquo;ve continued to invest in
                education because both the beauty industry and the science of
                hair and scalp health are constantly evolving. From advanced
                color and haircutting education to clinical trichology training,
                I believe my clients deserve recommendations that reflect
                current knowledge, not outdated information or quick fixes.
              </p>
              <p>
                In addition to my cosmetology and trichology education, I earned
                a Bachelor of Arts from BYU&ndash;Idaho and a Master of Business
                Administration from Idaho State University while continuing to
                work behind the chair.
              </p>
              <p>
                That experience shaped the way I approach both my clients and my
                business: I ask questions, look for evidence, and do my homework
                before making recommendations.
              </p>
              <p>
                Today, I continue to pursue ongoing education in both
                cosmetology and trichology so I can provide thoughtful, informed
                care, and continue contributing to a more educated,
                professional, and science-aware beauty industry.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Serving Eastern Idaho */}
      <Section variant="olive">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Serving Eastern Idaho
          </h2>
          <p className="mx-auto mt-4 max-w-xl">
            From custom color and haircuts to scalp care and hair wellness
            support, my mission is simple: to help clients understand their
            hair, care for it with confidence, and achieve results that work in
            real life.
          </p>
          <p className="mx-auto mt-4 max-w-xl">
            Healthy hair is not about perfection. It is about having the
            knowledge, support, and tools to feel like yourself, only more
            confident.
          </p>
          <div className="mt-8 flex justify-center">
            <BookButton label="Book an Appointment" />
          </div>
        </div>
      </Section>
    </>
  );
}
