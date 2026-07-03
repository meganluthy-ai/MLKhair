import { NextResponse } from "next/server";
import { Resend } from "resend";
import { esc, isEmail } from "@/lib/escape";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const notify = process.env.MLK_NOTIFY_EMAIL;
  const from = process.env.MLK_FROM_EMAIL || "hello@mlkhair.com";

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, phone, message, company } = body;

  // Honeypot: real people leave this empty.
  if (company) return NextResponse.json({ ok: true });
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    (phone !== undefined && typeof phone !== "string")
  ) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if ([name, email, phone || ""].some((s) => s.length > 200) || message.length > 5000) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const html = `
    <div style="font-family:system-ui,sans-serif;color:#1f1d1a">
      <h2 style="color:#2e4a3d">New message from mlkhair.com</h2>
      <p><strong>Name:</strong> ${esc(name)}<br/>
         <strong>Email:</strong> ${esc(email)}<br/>
         <strong>Phone:</strong> ${esc(phone || "(not provided)")}</p>
      <p style="white-space:pre-wrap">${esc(message)}</p>
    </div>`;

  if (!apiKey || !notify) {
    console.warn("Contact submission received but email is not configured:", body);
    return NextResponse.json({ ok: true, emailed: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `MLK Hair Website <${from}>`,
      to: notify,
      replyTo: email,
      subject: `New message from ${name}`,
      html,
    });
    return NextResponse.json({ ok: true, emailed: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
