import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui";
import QuizForm from "@/components/QuizForm";

export const metadata: Metadata = {
  title: "Personal Hair Wellness Profile",
  description:
    "Start your Personal Hair Wellness Profile. A few minutes of questions about your hair, scalp, and health so Megan Luthy, a clinical trichologist, can find the cause before your visit.",
  alternates: { canonical: "/quiz" },
};

export default function Quiz() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <Eyebrow rule>Personal Hair Wellness Profile</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
            Let&rsquo;s get to the bottom of it
          </h1>
          <p className="mx-auto mt-5 max-w-prose text-lg text-ink/80">
            Your hair is a reflection of your whole health, so these questions go
            a little deeper than most. It takes about ten minutes, and it gives
            Megan a real head start on finding your cause. Private and
            confidential, your answers go only to her.
          </p>
        </div>
        <div className="mt-10">
          <QuizForm />
        </div>
      </div>
    </Section>
  );
}
