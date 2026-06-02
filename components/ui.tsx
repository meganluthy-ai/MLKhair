import Link from "next/link";
import { site } from "@/lib/site";

// Shared, server-safe layout primitives so pages stay consistent and calm.

export function Section({
  children,
  className = "",
  alt = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${alt ? "bg-soft-white" : "bg-cream"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

// The 2-3 sentence above-the-fold answer an AI engine can lift (build brief §3.2).
export function AnswerSummary({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-prose border-l-2 border-gold pl-5 text-lg leading-relaxed text-ink/85">
      {children}
    </p>
  );
}

export function BookButton({
  label = "Book Your Scalp Analysis",
  variant = "accent",
}: {
  label?: string;
  variant?: "accent" | "primary" | "outline";
}) {
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${variant}`}
    >
      {label}
    </a>
  );
}

export function QuizButton({
  label = "Take the Hair & Scalp Quiz",
}: {
  label?: string;
}) {
  return (
    <Link href="/quiz" className="btn btn-outline">
      {label}
    </Link>
  );
}

export function CTARow() {
  return (
    <div className="flex flex-wrap gap-3">
      <BookButton />
      <QuizButton />
    </div>
  );
}
