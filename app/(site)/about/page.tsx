import type { Metadata } from "next";
import { Award, ShieldCheck, MapPin } from "lucide-react";
import { Section, Eyebrow, AnswerSummary, BookButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { personSchema, localBusinessSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Megan Luthy, Clinical Trichologist",
  description:
    "Megan Luthy is an AMCA-certified clinical trichologist and licensed cosmetologist with 17+ years of experience, serving Idaho Falls and Rexburg, Idaho, and clients remotely.",
  alternates: { canonical: "/about" },
};

const credentials = [
  {
    icon: Award,
    title: "AMCA-certified clinical trichologist",
    body: "Trained through the US Trichology Institute in the science of hair and scalp health.",
  },
  {
    icon: ShieldCheck,
    title: "17+ years, licensed cosmetologist",
    body: "Nearly two decades behind the chair before specializing in hair loss.",
  },
  {
    icon: MapPin,
    title: "Idaho Falls, Rexburg, and remote",
    body: "A private suite in Idaho Falls, a chair in Rexburg, and consults by Zoom or FaceTime.",
  },
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

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <Reveal>
            <Photo
              src="/images/megan-suite.jpg"
              alt="Megan Luthy in her private hair studio"
              ratio="aspect-[4/5]"
              priority
            />
          </Reveal>
          <div>
            <Eyebrow>About Megan</Eyebrow>
            <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
              Hi, I&rsquo;m Megan
            </h1>
            <div className="mt-7">
              <AnswerSummary>
                I am Megan Luthy, an AMCA-certified clinical trichologist and
                licensed cosmetologist with more than seventeen years of
                experience. I help people in Idaho Falls, Rexburg, and online
                understand why their hair is changing and what to actually do
                about it.
              </AnswerSummary>
            </div>
          </div>
        </div>
      </section>

      <Section alt>
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>The story</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              I got tired of guessing
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                For most of my career I was a cosmetologist, and I loved it. But
                over seventeen years behind the chair I kept meeting the same
                quiet heartbreak. A client would lean in and tell me her hair was
                thinning, that she had tried everything, and she would ask me what
                to do. And the honest answer was that I did not really know. Not
                the way she needed me to know.
              </p>
              <p>
                I could recommend a product. Everybody can recommend a product.
                What I could not do was tell her why it was happening, and without
                the why, a product is just another guess. So I went and learned
                the science. I trained as a clinical trichologist through the US
                Trichology Institute and earned my AMCA certification.
              </p>
              <p>
                Now I do the part I always wished I could. I look at the scalp
                under magnification, take a real health history, and find the
                cause. Then I build a plan around it and walk with people through
                the slow, real work of growing their hair back. It is private, it
                is judgment-free, and it is based on science instead of whatever is
                trending online.
              </p>
              <p>
                If your hair is changing and you are exhausted by the noise, I
                would love to help you find a straight answer.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Credentials</Eyebrow>
          <h2 className="font-display text-3xl text-evergreen md:text-4xl">
            Trained for this, not improvising
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {credentials.map((c) => (
            <Reveal key={c.title}>
              <div className="h-full rounded-md border border-line bg-soft-white p-7">
                <c.icon className="text-gold-dark" size={28} strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl text-evergreen">
                  {c.title}
                </h3>
                <p className="mt-2 text-ink/80">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-evergreen">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <h2 className="font-display text-3xl text-cream md:text-4xl">
            Let&rsquo;s find out what is really going on
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            A scalp analysis is a private, no-pressure way to get a real answer
            about your hair.
          </p>
          <div className="mt-8 flex justify-center">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
}
