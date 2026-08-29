import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MLK Hair collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function Privacy() {
  return (
    <Section>
      <div className="max-w-prose">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display text-4xl text-evergreen">Privacy Policy</h1>
        <div className="prose-body mt-8 text-ink/80">
          <p className="text-sm text-taupe">Last updated: August 28, 2026</p>
          <p className="mt-4">
            MLK Hair respects your privacy and is committed to protecting the
            personal information you provide when you visit our website, book an
            appointment, complete a form, communicate with us, or receive
            services.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Information We Collect
          </h2>
          <p>
            We may collect information such as your name, email address, phone
            number, appointment information, service preferences, information
            submitted through forms, and communications you send to us. Our
            website and service providers may also collect limited technical
            information such as browser type, device information, IP address, and
            website usage data.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            How We Use Your Information
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Schedule and manage appointments</li>
            <li>Respond to questions and inquiries</li>
            <li>Send appointment confirmations and reminders</li>
            <li>Communicate about services you have requested</li>
            <li>Provide client follow-up and customer support</li>
            <li>Send promotional communications when you have opted in</li>
            <li>Improve our website, services, and client experience</li>
            <li>Maintain appropriate business and administrative records</li>
          </ul>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Text Messaging and Mobile Information
          </h2>
          <p>
            If you choose to receive text messages from MLK Hair, your consent
            applies only to the messaging program for which you opted in. You may
            opt out at any time by replying STOP.
          </p>
          <p>
            Mobile information and text-messaging opt-in data and consent will
            not be shared with third parties or affiliates for their marketing or
            promotional purposes. MLK Hair may share information with service
            providers that support business operations or messaging services,
            only as necessary to provide those services.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Service Providers
          </h2>
          <p>
            MLK Hair uses technology and service providers to operate our
            website, scheduling, communications, payment processing, and other
            business functions. These providers may process information as
            necessary to perform services on our behalf.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Data Security
          </h2>
          <p>
            We take reasonable administrative and technical measures to protect
            personal information. However, no online system or method of
            electronic storage can be guaranteed to be completely secure.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Your Choices
          </h2>
          <p>
            You may request that we update or correct certain personal
            information by contacting us. You may unsubscribe from marketing
            emails using the unsubscribe link provided in those messages and may
            opt out of text messages by replying STOP.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Children&apos;s Privacy
          </h2>
          <p>
            Our website and marketing communications are not intended to
            knowingly collect personal information from children without
            appropriate parental or guardian involvement.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. The revised policy
            will be posted on this page with an updated effective date.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Contact Us
          </h2>
          <p>
            MLK Hair
            <br />
            Business mailing address: 865 Dickson Ave, Idaho Falls, ID 83402
            <br />
            Email:{" "}
            <a
              className="text-evergreen underline hover:text-gold-dark"
              href="mailto:megan@mlkhair.com"
            >
              megan@mlkhair.com
            </a>
            <br />
            Phone:{" "}
            <a
              className="text-evergreen underline hover:text-gold-dark"
              href="tel:+12087892727"
            >
              +1 208-789-2727
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
