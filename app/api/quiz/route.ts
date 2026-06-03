import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Item = { label: string; value: string };
type SummarySection = { section: string; items: Item[] };
type Payload = {
  contact: { name: string; email: string; phone?: string };
  summary: SummarySection[];
};

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

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

  const { contact, summary } = body;
  if (!contact?.name || !contact?.email) {
    return NextResponse.json({ error: "Missing contact info" }, { status: 400 });
  }

  // Full intake for Megan: section headings + label/value rows.
  const sectionsHtml = (summary || [])
    .map(
      (s) => `
      <h3 style="margin:22px 0 6px;color:#5f6a57;font-family:Georgia,serif">${esc(s.section)}</h3>
      <table style="border-collapse:collapse;width:100%">
        ${s.items
          .map(
            (it) =>
              `<tr><td style="padding:6px 12px;border-bottom:1px solid #e4ddcf;font-weight:600;color:#1f1d1a;width:45%;vertical-align:top">${esc(it.label)}</td><td style="padding:6px 12px;border-bottom:1px solid #e4ddcf;color:#1f1d1a">${esc(it.value)}</td></tr>`,
          )
          .join("")}
      </table>`,
    )
    .join("");

  const adminHtml = `
    <div style="font-family:system-ui,sans-serif;color:#1f1d1a;max-width:640px">
      <h2 style="color:#5f6a57">New Personal Hair Wellness Profile</h2>
      <p><strong>Name:</strong> ${esc(contact.name)}<br/>
         <strong>Email:</strong> ${esc(contact.email)}<br/>
         <strong>Phone:</strong> ${esc(contact.phone || "(not provided)")}</p>
      ${sectionsHtml}
    </div>`;

  // Client gets a confirmation only — no health details echoed back.
  const clientHtml = `
    <div style="font-family:system-ui,sans-serif;color:#1f1d1a;max-width:560px">
      <h2 style="color:#5f6a57">Thanks, ${esc(contact.name.split(" ")[0])}</h2>
      <p>Your Personal Hair Wellness Profile is in, and Megan will review it before your visit. Everything you shared is private and confidential.</p>
      <p>The next step is your comprehensive scalp analysis, where Megan finds the actual cause behind what you described.</p>
      <p style="margin-top:20px">
        <a href="${site.bookingUrl}" style="background:#b89a54;color:#1f1d1a;padding:12px 20px;border-radius:5px;text-decoration:none;font-weight:600">Book your scalp analysis</a>
      </p>
      <p style="margin-top:20px;color:#8a8175;font-size:13px">MLK Hair &middot; ${esc(site.owner)}, ${esc(site.credential)}</p>
    </div>`;

  if (!apiKey || !notify) {
    console.warn("Intake received but email is not configured for:", contact.email);
    return NextResponse.json({ ok: true, emailed: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `MLK Hair Intake <${from}>`,
      to: notify,
      replyTo: contact.email,
      subject: `Hair Wellness Profile: ${contact.name}`,
      html: adminHtml,
    });
    await resend.emails.send({
      from: `Megan at MLK Hair <${from}>`,
      to: contact.email,
      subject: "We received your Hair Wellness Profile",
      html: clientHtml,
    });
    return NextResponse.json({ ok: true, emailed: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
