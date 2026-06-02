import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  contact: { name: string; email: string; phone?: string };
  answers: Record<string, string | string[]>;
  questions: { id: string; prompt: string }[];
};

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const notify = process.env.MLK_NOTIFY_EMAIL;
  const from = process.env.MLK_FROM_EMAIL || "hello@mlkhair.com";

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { contact, answers, questions } = body;
  if (!contact?.name || !contact?.email) {
    return NextResponse.json({ error: "Missing contact info" }, { status: 400 });
  }

  // Build a readable summary from the data-driven questions.
  const rows = questions
    .map((q) => {
      const a = answers[q.id];
      const val = Array.isArray(a) ? a.join(", ") : a || "(no answer)";
      return `<tr><td style="padding:6px 12px;border-bottom:1px solid #e4ddcf;font-weight:600;color:#2e4a3d">${q.prompt}</td><td style="padding:6px 12px;border-bottom:1px solid #e4ddcf;color:#1f1d1a">${val}</td></tr>`;
    })
    .join("");

  const adminHtml = `
    <div style="font-family:system-ui,sans-serif;color:#1f1d1a">
      <h2 style="color:#2e4a3d">New Hair & Scalp Quiz submission</h2>
      <p><strong>Name:</strong> ${contact.name}<br/>
         <strong>Email:</strong> ${contact.email}<br/>
         <strong>Phone:</strong> ${contact.phone || "(not provided)"}</p>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
    </div>`;

  const clientHtml = `
    <div style="font-family:system-ui,sans-serif;color:#1f1d1a">
      <h2 style="color:#2e4a3d">Thanks, ${contact.name.split(" ")[0]}</h2>
      <p>Here is a copy of what you shared with Megan at MLK Hair. The next step is a scalp analysis, where she finds the actual cause behind what you described.</p>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
      <p style="margin-top:20px">
        <a href="${site.bookingUrl}" style="background:#b89a54;color:#1f1d1a;padding:12px 20px;border-radius:5px;text-decoration:none;font-weight:600">Book your scalp analysis</a>
      </p>
    </div>`;

  // If Resend is not configured yet, accept the submission so the form works in
  // preview, and log it. Wire RESEND_API_KEY + MLK_NOTIFY_EMAIL before launch.
  if (!apiKey || !notify) {
    console.warn("Quiz submission received but email is not configured:", {
      contact,
      answers,
    });
    return NextResponse.json({ ok: true, emailed: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `MLK Hair <${from}>`,
      to: notify,
      replyTo: contact.email,
      subject: `Hair & Scalp Quiz: ${contact.name}`,
      html: adminHtml,
    });
    await resend.emails.send({
      from: `Megan at MLK Hair <${from}>`,
      to: contact.email,
      subject: "Your Hair & Scalp Quiz results",
      html: clientHtml,
    });
    return NextResponse.json({ ok: true, emailed: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
