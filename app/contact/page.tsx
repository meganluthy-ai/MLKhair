import type { Metadata } from "next";
import { MapPin, Video, CalendarCheck } from "lucide-react";
import { Section, Eyebrow, BookButton } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { localBusinessSchema, jsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact MLK Hair in Idaho Falls & Rexburg",
  description:
    "Get in touch with Megan Luthy at MLK Hair. Serving Idaho Falls and Rexburg, Idaho, plus remote consults by Zoom and FaceTime. Book a scalp analysis or send a message.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(localBusinessSchema())}
      />

      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
            Reach Megan
          </h1>
          <p className="mt-5 max-w-prose text-lg text-ink/80">
            The fastest way to start is to book a scalp analysis online. If you
            have a question first, send a message and Megan will get back to you.
          </p>
          <div className="mt-7">
            <BookButton />
          </div>
        </div>
      </Section>

      <Section alt className="!pt-0 md:!pt-0">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-clay" size={22} />
              <div>
                <h2 className="font-display text-xl text-evergreen">Locations</h2>
                <p className="mt-1 text-ink/80">
                  Private suite in Idaho Falls, ID
                  <br />
                  Salon chair in Rexburg, ID
                </p>
                {/* OPEN (brief §7.6): exact addresses + how to present them
                    given the private/confidential positioning. */}
                <p className="mt-1 text-sm text-taupe">
                  Exact address shared on booking.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Video className="mt-1 shrink-0 text-clay" size={22} />
              <div>
                <h2 className="font-display text-xl text-evergreen">Remote consults</h2>
                <p className="mt-1 text-ink/80">
                  Not local? Megan consults by Zoom and FaceTime, so you can
                  start from anywhere.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CalendarCheck className="mt-1 shrink-0 text-clay" size={22} />
              <div>
                <h2 className="font-display text-xl text-evergreen">Booking</h2>
                <p className="mt-1 text-ink/80">
                  All appointments are booked online with real-time availability.
                </p>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-medium text-clay hover:text-clay-dark"
                >
                  Book online
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-line bg-cream p-7 md:p-8">
            <h2 className="font-display text-2xl text-evergreen">Send a message</h2>
            <p className="mt-2 text-sm text-taupe">
              Everything here is private and confidential.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
