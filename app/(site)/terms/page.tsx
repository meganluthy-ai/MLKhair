import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the MLK Hair website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function Terms() {
  return (
    <Section>
      <div className="max-w-prose">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display text-4xl text-evergreen">
          Terms &amp; Conditions
        </h1>
        <div className="prose-body mt-8 text-ink/80">
          <p className="text-sm text-taupe">Last updated: August 28, 2026</p>
          <p className="mt-4">
            These Terms &amp; Conditions govern your use of the MLK Hair website
            and certain communications with MLK Hair. By using this website, you
            agree to these terms.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Services and Website Information
          </h2>
          <p>
            MLK Hair provides cosmetology, hair-care, scalp-care,
            trichology-related education, and related services. Information
            provided through this website is intended for general educational and
            informational purposes. Service descriptions, pricing, availability,
            and policies may change.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Hair and Scalp Information
          </h2>
          <p>
            Hair and scalp education provided by MLK Hair is not intended to
            diagnose, treat, cure, or prevent a medical condition and should not
            replace evaluation or treatment by a qualified medical professional.
            When a concern appears to require medical evaluation, clients may be
            encouraged to consult an appropriate healthcare provider.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Hair Restoration Services
          </h2>
          <p>
            MLK Hair offers hair and scalp support services that may include
            trichology assessments, scalp-focused treatments, microneedling,
            low-level light therapy, topical cosmetic products, home-care
            recommendations, nutritional supplements, and other non-medical
            hair-restoration support. Recommendations are individualized and may
            involve more than one approach because hair loss and thinning can be
            influenced by multiple factors. Individual results vary. MLK Hair does
            not guarantee hair regrowth, increased density, prevention of future
            hair loss, or any specific cosmetic or therapeutic outcome. Progress
            may depend on factors including the underlying pattern of hair loss,
            genetics, health history, medications, nutrition, consistency with
            recommendations, and other individual variables. MLK Hair does not
            provide medical diagnosis or prescribe medical treatment. When
            findings or concerns appear to require medical evaluation, clients may
            be advised to consult an appropriate licensed healthcare professional.
            Clients are responsible for providing complete and accurate
            information about relevant health history, medications, allergies,
            scalp conditions, recent procedures, and other changes that could
            affect the appropriateness of a service or recommendation.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Scalp Microneedling
          </h2>
          <p>
            Scalp microneedling may cause temporary redness, tenderness,
            sensitivity, dryness, itching, pinpoint bleeding, or other short-term
            skin responses. Treatment may be postponed or declined when the scalp
            is irritated, infected, inflamed, compromised, or when another
            contraindication is identified. Clients are responsible for following
            all pre-treatment and aftercare instructions and for notifying MLK
            Hair of relevant health, medication, allergy, or scalp changes before
            treatment. Multiple sessions may be recommended, and no specific level
            of hair growth or improvement is guaranteed. A separate informed
            consent may be required before treatment.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Appointments
          </h2>
          <p>
            Appointments are subject to availability and applicable booking,
            cancellation, rescheduling, and no-show policies communicated at the
            time of booking.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">Payments</h2>
          <p>
            Clients are responsible for charges associated with services and
            products they purchase. Specific pricing, deposits, cancellation fees,
            or refund policies may be provided separately during the booking or
            purchasing process.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Text Messaging Terms
          </h2>
          <p>
            By voluntarily opting in to receive text messages from MLK Hair, you
            may receive messages such as:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Appointment confirmations and reminders</li>
            <li>Scheduling and rescheduling messages</li>
            <li>Service-related communications</li>
            <li>Client follow-up</li>
            <li>Promotional or marketing messages when separately authorized</li>
          </ul>
          <p>Message frequency varies. Message and data rates may apply.</p>
          <p>
            You may cancel SMS communications at any time by replying STOP. After
            you send STOP, you may receive a final confirmation that you have been
            unsubscribed. If you later wish to receive messages again, you may
            re-enroll through an available MLK Hair opt-in method.
          </p>
          <p>
            For assistance, reply HELP or contact MLK Hair using the contact
            information below. Wireless carriers are not responsible for delayed or
            undelivered messages. Consent to receive marketing text messages is
            not a condition of purchasing services from MLK Hair.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Intellectual Property
          </h2>
          <p>
            Unless otherwise stated, website text, branding, photographs,
            graphics, educational materials, and other original content belonging
            to MLK Hair may not be reproduced or used commercially without
            permission.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Limitation of Liability
          </h2>
          <p>
            To the extent permitted by applicable law, MLK Hair is not responsible
            for indirect or consequential losses resulting from use of this
            website or reliance on general educational information presented on the
            website.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">
            Changes to These Terms
          </h2>
          <p>
            MLK Hair may update these Terms &amp; Conditions periodically. Changes
            will be posted on this page with an updated effective date.
          </p>

          <h2 className="mt-8 font-display text-2xl text-evergreen">Contact</h2>
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
