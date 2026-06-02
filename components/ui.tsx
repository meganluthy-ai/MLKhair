import Link from "next/link";
import { site } from "@/lib/site";

// Shared, server-safe layout primitives so pages stay consistent and calm.

type SectionVariant = "cream" | "soft" | "olive" | "gold";

const sectionBg: Record<SectionVariant, string> = {
  cream: "bg-cream",
  soft: "bg-soft-white",
  olive: "bg-evergreen on-dark",
  gold: "bg-gold-tint",
};

export function Section({
  children,
  className = "",
  alt = false,
  variant,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  variant?: SectionVariant;
  id?: string;
}) {
  const v: SectionVariant = variant ?? (alt ? "soft" : "cream");
  return (
    <section id={id} className={`${sectionBg[v]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  rule = false,
}: {
  children: React.ReactNode;
  rule?: boolean;
}) {
  return <p className={`eyebrow mb-4 ${rule ? "eyebrow-rule" : ""}`}>{children}</p>;
}

// Gold hairline divider with a centered diamond.
export function Divider() {
  return (
    <div className="rule-gold my-2">
      <span aria-hidden className="text-xs">
        &#9670;
      </span>
    </div>
  );
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
  onDark = false,
}: {
  label?: string;
  onDark?: boolean;
}) {
  return (
    <Link href="/quiz" className={`btn ${onDark ? "btn-outline-light" : "btn-outline"}`}>
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

// Small trust chips (gold dot + label) for the hero.
export function TrustRow({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-2 text-sm text-ink/70">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {t}
        </li>
      ))}
    </ul>
  );
}
