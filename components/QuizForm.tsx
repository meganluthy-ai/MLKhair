"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { intake, type Field, type Section, type ShowIf } from "@/lib/quiz";
import { site } from "@/lib/site";

type Value = string | string[] | Record<string, string>;
type Answers = Record<string, Value>;
type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-md border border-line bg-soft-white px-4 py-3 text-ink outline-none focus:border-evergreen focus:ring-1 focus:ring-evergreen";

function passShowIf(s: ShowIf | undefined, answers: Answers): boolean {
  if (!s) return true;
  const v = answers[s.field];
  if (s.equals !== undefined) return v === s.equals;
  if (s.oneOf) return typeof v === "string" && s.oneOf.includes(v);
  return true;
}

function fieldAnswered(f: Field, answers: Answers): boolean {
  const v = answers[f.id];
  if (f.type === "checkbox") return Array.isArray(v) && v.length > 0;
  if (f.type === "grid") return Boolean(v) && Object.keys(v as object).length > 0;
  return typeof v === "string" && v.trim() !== "";
}

// Build a readable summary (respecting conditional visibility) for the email.
function buildSummary(answers: Answers) {
  return intake
    .filter((s) => passShowIf(s.showIf, answers))
    .map((s) => ({
      section: s.title,
      items: s.fields
        .filter((f) => passShowIf(f.showIf, answers))
        .map((f) => ({ label: f.label, value: formatValue(f, answers) }))
        .filter((it) => it.value),
    }))
    .filter((s) => s.items.length > 0);
}

function formatValue(f: Field, answers: Answers): string {
  const v = answers[f.id];
  const other = answers[`${f.id}_other`];
  if (f.type === "checkbox") {
    const arr = Array.isArray(v) ? [...v] : [];
    if (other) arr.push(`Other: ${other}`);
    return arr.join(", ");
  }
  if (f.type === "grid") {
    if (!v || typeof v !== "object") return "";
    return Object.entries(v as Record<string, string>)
      .map(([row, col]) => `${row}: ${col}`)
      .join("; ");
  }
  let s = typeof v === "string" ? v : "";
  if (s === "Other" && other) s = `Other: ${other}`;
  return s;
}

export default function QuizForm() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [showErrors, setShowErrors] = useState(false);
  const [company, setCompany] = useState(""); // honeypot: real people leave this empty

  const visibleSections = useMemo(
    () => intake.filter((s) => passShowIf(s.showIf, answers)),
    [answers],
  );
  const total = visibleSections.length;
  const section: Section | undefined = visibleSections[step];
  const visibleFields = section
    ? section.fields.filter((f) => passShowIf(f.showIf, answers))
    : [];

  const progress = Math.round(((step + 1) / total) * 100);
  const isLast = step === total - 1;

  function set(id: string, value: Value) {
    setAnswers((a) => ({ ...a, [id]: value }));
  }
  function toggleMulti(id: string, opt: string) {
    setAnswers((a) => {
      const cur = Array.isArray(a[id]) ? (a[id] as string[]) : [];
      return { ...a, [id]: cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt] };
    });
  }
  function setGrid(id: string, row: string, col: string) {
    setAnswers((a) => ({ ...a, [id]: { ...((a[id] as Record<string, string>) || {}), [row]: col } }));
  }

  const stepValid = visibleFields.every((f) => !f.required || fieldAnswered(f, answers));

  function next() {
    if (!stepValid) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    setStep((s) => Math.min(total - 1, s + 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function back() {
    setShowErrors(false);
    setStep((s) => Math.max(0, s - 1));
  }

  async function submit() {
    if (!stepValid) {
      setShowErrors(true);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: {
            name: (answers.name as string) || "",
            email: (answers.email as string) || "",
            phone: (answers.phone as string) || "",
          },
          summary: buildSummary(answers),
          company,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    const first = ((answers.name as string) || "").split(" ")[0];
    return (
      <div className="rounded-md border border-line bg-soft-white p-8 text-center md:p-12">
        <h2 className="font-display text-3xl text-evergreen">
          Thank you{first ? `, ${first}` : ""}
        </h2>
        <p className="mx-auto mt-3 max-w-prose text-ink/80">
          Your profile is on its way to Megan. She&rsquo;ll review it before your
          visit so your consultation starts with context, not guesswork.
        </p>
        <p className="mx-auto mt-4 max-w-prose font-medium text-evergreen">
          Your next step: book your comprehensive scalp consultation.
        </p>
        <div className="mt-7 flex justify-center">
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
            Book your scalp consultation
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-line bg-soft-white p-6 md:p-9">
      {/* progress */}
      <div className="mb-8">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-gold transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-taupe">
          Step {step + 1} of {total} &middot; {section?.title}
        </p>
      </div>

      {section && (
        <div>
          <h2 className="font-display text-2xl text-evergreen md:text-3xl">{section.title}</h2>
          {section.desc && <p className="mt-2 max-w-prose text-sm text-ink/70">{section.desc}</p>}

          <div className="mt-7 space-y-7">
            {visibleFields.map((f) => (
              <FieldRow
                key={f.id}
                field={f}
                answers={answers}
                showError={Boolean(showErrors && f.required && !fieldAnswered(f, answers))}
                onText={(v) => set(f.id, v)}
                onOther={(v) => set(`${f.id}_other`, v)}
                onToggle={(opt) => toggleMulti(f.id, opt)}
                onGrid={(row, col) => setGrid(f.id, row, col)}
              />
            ))}
          </div>
        </div>
      )}

      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <div className="mt-9 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-taupe disabled:opacity-0"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {!isLast ? (
          <button type="button" onClick={next} className="btn btn-primary">
            Continue <ArrowRight size={16} />
          </button>
        ) : (
          <button type="button" onClick={submit} disabled={status === "sending"} className="btn btn-accent disabled:opacity-50">
            {status === "sending" ? "Sending..." : "Submit my profile"}
          </button>
        )}
      </div>

      {showErrors && !stepValid && (
        <p className="mt-4 text-sm text-clay-dark">Please answer the required questions before continuing.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-clay-dark">Something went wrong sending your profile. Please try again, or book directly online.</p>
      )}
      <p className="mt-6 text-xs text-taupe">Private and confidential. Your answers go only to Megan.</p>
    </div>
  );
}

// Month / Day / Year dropdowns instead of the native picker, so older clients
// are not stuck scrolling a calendar back decades. Stores "YYYY-MM-DD".
function DateSelect({
  value,
  onChange,
  showError,
}: {
  value: string;
  onChange: (v: string) => void;
  showError: boolean;
}) {
  const parts = value.split("-");
  const [y, setY] = useState(parts[0] || "");
  const [m, setM] = useState(parts[1] || "");
  const [d, setD] = useState(parts[2] || "");

  const nowY = new Date().getFullYear();
  const years = Array.from({ length: nowY - 1919 }, (_, i) => String(nowY - i));
  const months = [
    ["01", "January"], ["02", "February"], ["03", "March"], ["04", "April"],
    ["05", "May"], ["06", "June"], ["07", "July"], ["08", "August"],
    ["09", "September"], ["10", "October"], ["11", "November"], ["12", "December"],
  ];
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, "0"));

  function push(ny: string, nm: string, nd: string) {
    onChange(ny && nm && nd ? `${ny}-${nm}-${nd}` : "");
  }
  const sel = `rounded-md border bg-soft-white px-3 py-3 text-ink outline-none focus:border-evergreen focus:ring-1 focus:ring-evergreen ${
    showError ? "border-clay-dark" : "border-line"
  }`;

  return (
    <div className="grid grid-cols-3 gap-2">
      <select className={sel} value={m} onChange={(e) => { setM(e.target.value); push(y, e.target.value, d); }}>
        <option value="">Month</option>
        {months.map(([val, label]) => <option key={val} value={val}>{label}</option>)}
      </select>
      <select className={sel} value={d} onChange={(e) => { setD(e.target.value); push(y, m, e.target.value); }}>
        <option value="">Day</option>
        {days.map((dd) => <option key={dd} value={dd}>{Number(dd)}</option>)}
      </select>
      <select className={sel} value={y} onChange={(e) => { setY(e.target.value); push(e.target.value, m, d); }}>
        <option value="">Year</option>
        {years.map((yy) => <option key={yy} value={yy}>{yy}</option>)}
      </select>
    </div>
  );
}

function FieldRow({
  field: f,
  answers,
  showError,
  onText,
  onOther,
  onToggle,
  onGrid,
}: {
  field: Field;
  answers: Answers;
  showError: boolean;
  onText: (v: string) => void;
  onOther: (v: string) => void;
  onToggle: (opt: string) => void;
  onGrid: (row: string, col: string) => void;
}) {
  const v = answers[f.id];
  const labelEl = (
    <label className="block font-medium text-ink">
      {f.label}
      {f.required && <span className="text-gold-dark"> *</span>}
      {f.help && <span className="mt-1 block text-sm font-normal text-taupe">{f.help}</span>}
    </label>
  );
  const errorRing = showError ? "border-clay-dark" : "border-line";

  return (
    <div>
      {labelEl}
      <div className="mt-2.5">
        {f.type === "text" && (
          <input className={`${inputClass} ${showError ? "border-clay-dark" : ""}`} placeholder={f.placeholder} value={(v as string) || ""} onChange={(e) => onText(e.target.value)} />
        )}
        {f.type === "textarea" && (
          <textarea rows={3} className={`${inputClass} ${showError ? "border-clay-dark" : ""}`} placeholder={f.placeholder} value={(v as string) || ""} onChange={(e) => onText(e.target.value)} />
        )}
        {f.type === "date" && (
          <DateSelect value={(v as string) || ""} onChange={onText} showError={showError} />
        )}

        {f.type === "radio" && (
          <div className="flex flex-wrap gap-2">
            {[...(f.options || []), ...(f.other ? ["Other"] : [])].map((opt) => {
              const selected = v === opt;
              return (
                <button key={opt} type="button" onClick={() => onText(opt)} className={`rounded-md border px-4 py-2.5 text-left text-sm transition-colors ${selected ? "border-evergreen bg-evergreen/5 text-evergreen" : `${errorRing} bg-cream text-ink/85 hover:border-evergreen/40`}`}>
                  {opt}
                </button>
              );
            })}
            {f.other && v === "Other" && (
              <input className={`${inputClass} mt-1`} placeholder="Please specify" value={(answers[`${f.id}_other`] as string) || ""} onChange={(e) => onOther(e.target.value)} />
            )}
          </div>
        )}

        {f.type === "checkbox" && (
          <div className="flex flex-wrap gap-2">
            {[...(f.options || []), ...(f.other ? ["Other"] : [])].map((opt) => {
              const arr = Array.isArray(v) ? (v as string[]) : [];
              const selected = arr.includes(opt);
              return (
                <button key={opt} type="button" onClick={() => onToggle(opt)} className={`rounded-md border px-4 py-2.5 text-left text-sm transition-colors ${selected ? "border-evergreen bg-evergreen/5 text-evergreen" : `${errorRing} bg-cream text-ink/85 hover:border-evergreen/40`}`}>
                  {opt}
                </button>
              );
            })}
            {f.other && Array.isArray(v) && (v as string[]).includes("Other") && (
              <input className={`${inputClass} mt-1`} placeholder="Please specify" value={(answers[`${f.id}_other`] as string) || ""} onChange={(e) => onOther(e.target.value)} />
            )}
          </div>
        )}

        {f.type === "grid" && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="p-2" />
                  {f.cols?.map((c) => (
                    <th key={c} className="p-2 text-center font-medium text-evergreen">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {f.rows?.map((row) => (
                  <tr key={row} className="border-t border-line">
                    <td className="p-2 font-medium text-ink/85">{row}</td>
                    {f.cols?.map((col) => {
                      const sel = (v as Record<string, string>)?.[row] === col;
                      return (
                        <td key={col} className="p-2 text-center">
                          <button type="button" aria-label={`${row}: ${col}`} onClick={() => onGrid(row, col)} className={`mx-auto flex h-5 w-5 items-center justify-center rounded-full border ${sel ? "border-evergreen bg-evergreen" : "border-taupe"}`}>
                            {sel && <span className="h-2 w-2 rounded-full bg-cream" />}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
