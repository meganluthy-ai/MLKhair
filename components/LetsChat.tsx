"use client";

import { useState } from "react";
import { MessageCircle, X, MessageSquare, Mail, CalendarCheck } from "lucide-react";
import { site } from "@/lib/site";

// Floating "Let's chat" launcher. Replaces the old Wix Chat widget (which was
// tied to Wix). Routes visitors to Megan's real channels: text, email, booking.
// For true real-time chat, swap in a Tawk.to/Crisp widget id later.
const smsHref = `sms:${site.phoneHref.replace("tel:", "")}`;

export default function LetsChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div className="w-72 overflow-hidden rounded-lg border border-line bg-soft-white shadow-xl">
          <div className="bg-evergreen px-5 py-4">
            <p className="font-display text-lg text-cream">Chat with Megan</p>
            <p className="mt-0.5 text-sm text-cream/85">
              Questions about your hair? Reach out. It is private and
              judgment-free.
            </p>
          </div>
          <div className="flex flex-col p-3">
            <a
              href={smsHref}
              className="flex items-center gap-3 rounded-md px-3 py-3 text-ink/85 transition-colors hover:bg-gold-tint"
            >
              <MessageSquare size={20} className="text-gold-dark" />
              <span>
                <span className="block font-medium text-evergreen">Text Megan</span>
                <span className="block text-xs text-taupe">{site.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 rounded-md px-3 py-3 text-ink/85 transition-colors hover:bg-gold-tint"
            >
              <Mail size={20} className="text-gold-dark" />
              <span>
                <span className="block font-medium text-evergreen">Email Megan</span>
                <span className="block text-xs text-taupe">{site.email}</span>
              </span>
            </a>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md px-3 py-3 text-ink/85 transition-colors hover:bg-gold-tint"
            >
              <CalendarCheck size={20} className="text-gold-dark" />
              <span>
                <span className="block font-medium text-evergreen">Book a scalp analysis</span>
                <span className="block text-xs text-taupe">See real-time availability</span>
              </span>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat options" : "Open chat options"}
        className="btn btn-accent shadow-lg"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        {open ? "Close" : "Let's chat"}
      </button>
    </div>
  );
}
