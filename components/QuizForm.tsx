"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { quizQuestions } from "@/lib/quiz";
import { site } from "@/lib/site";

type Answers = Record<string, string | string[]>;
type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-md border border-line bg-soft-white px-4 py-3 text-ink outline-none focus:border-evergreen focus:ring-1 focus:ring-evergreen";

export default function QuizForm() {
  const total = quizQuestions.length;
  const [step, setStep] = useState(0); // 0..total-1 = questions, total = contact step
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onContactStep = step === total;
  const progress = Math.round(((step + (onContactStep ? 1 : 0)) / (total + 1)) * 100);

  function selectSingle(qid: string, value: string) {
    setAnswers((a) => ({ ...a, [qid]: value }));
  }

  function toggleMulti(qid: string, value: string) {
    setAnswers((a) => {
      const cur = Array.isArray(a[qid]) ? (a[qid] as string[]) : [];
      return {
        ...a,
        [qid]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value],
      };
    });
  }

  const currentQ = quizQuestions[step];
  const currentAnswered =
    onContactStep ||
    (currentQ.type === "single"
      ? Boolean(answers[currentQ.id])
      : Array.isArray(answers[currentQ.id]) && (answers[currentQ.id] as string[]).length > 0);

  async function submit() {
    setStatus("sending");
    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact,
          answers,
          questions: quizQuestions.map((q) => ({ id: q.id, prompt: q.prompt })),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-line bg-soft-white p-8 text-center md:p-12">
        <h2 className="font-display text-3xl text-evergreen">Thank you, {contact.name.split(" ")[0] || "and well done"}</h2>
        <p className="mx-auto mt-3 max-w-prose text-ink/80">
          Your answers are on their way to Megan, and a copy is headed to your
          inbox. The next step is a scalp analysis, where she finds the actual
          cause behind what you described.
        </p>
        <div className="mt-7 flex justify-center">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            Book Your Scalp Analysis
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-line bg-soft-white p-6 md:p-10">
      {/* progress */}
      <div className="mb-8">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-gold transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-taupe">
          {onContactStep ? "Last step" : `Question ${step + 1} of ${total}`}
        </p>
      </div>

      {!onContactStep ? (
        <div>
          <h2 className="font-display text-2xl text-evergreen md:text-3xl">
            {currentQ.prompt}
          </h2>
          <div className="mt-6 space-y-3">
            {currentQ.options.map((opt) => {
              const selected =
                currentQ.type === "single"
                  ? answers[currentQ.id] === opt
                  : Array.isArray(answers[currentQ.id]) &&
                    (answers[currentQ.id] as string[]).includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() =>
                    currentQ.type === "single"
                      ? selectSingle(currentQ.id, opt)
                      : toggleMulti(currentQ.id, opt)
                  }
                  className={`flex w-full items-center gap-3 rounded-md border px-4 py-3 text-left transition-colors ${
                    selected
                      ? "border-evergreen bg-evergreen/5 text-evergreen"
                      : "border-line bg-cream text-ink/85 hover:border-evergreen/40"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center border ${
                      currentQ.type === "single" ? "rounded-full" : "rounded"
                    } ${selected ? "border-evergreen bg-evergreen" : "border-taupe"}`}
                  >
                    {selected && <span className="h-2 w-2 rounded-full bg-cream" />}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-display text-2xl text-evergreen md:text-3xl">
            Where should Megan send your results?
          </h2>
          <p className="mt-2 text-sm text-taupe">
            Private and confidential. No spam, ever.
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="q-name" className="mb-1.5 block text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="q-name"
                className={inputClass}
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="q-email" className="mb-1.5 block text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="q-email"
                type="email"
                className={inputClass}
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="q-phone" className="mb-1.5 block text-sm font-medium text-ink">
                Phone <span className="text-taupe">(optional)</span>
              </label>
              <input
                id="q-phone"
                className={inputClass}
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {/* nav */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-taupe disabled:opacity-0"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {!onContactStep ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!currentAnswered}
            className="btn btn-primary disabled:opacity-50"
          >
            Continue <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!contact.name || !contact.email || status === "sending"}
            className="btn btn-accent disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "See my next step"}
          </button>
        )}
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-gold-dark">
          Something went wrong sending your results. Please try again, or book
          directly online.
        </p>
      )}
    </div>
  );
}
