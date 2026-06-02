import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui";
import QuizForm from "@/components/QuizForm";

export const metadata: Metadata = {
  title: "Hair & Scalp Quiz",
  description:
    "Not sure what is going on with your hair? Take the free 5-minute Hair & Scalp Quiz and Megan Luthy, a clinical trichologist, will point you toward your next step.",
  alternates: { canonical: "/quiz" },
};

export default function Quiz() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <Eyebrow>Hair & Scalp Quiz</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
            What is going on with your hair?
          </h1>
          <p className="mx-auto mt-5 max-w-prose text-lg text-ink/80">
            Answer a few quick questions and Megan will help you make sense of
            it. It takes about five minutes, it is free, and it is completely
            private.
          </p>
        </div>
        <div className="mt-10">
          <QuizForm />
        </div>
      </div>
    </Section>
  );
}
