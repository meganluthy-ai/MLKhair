import type { Metadata } from "next";
import { Section, Eyebrow, AnswerSummary, BookButton, TrustRow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Hair Salon in Rexburg & Idaho Falls",
  description:
    "MLK Hair is a boutique salon for custom color, haircuts, texture services, and scalp-conscious treatments with Megan Keck in Rexburg and Idaho Falls. Healthy Hair, Simplified.",
  alternates: { canonical: "/services" },
};

// Color & texture offerings shown as a clean list, not a price menu.
// Pricing, timing, and availability live on the booking page.
const colorAndTexture: string[] = [
  "Gray coverage and gray blending",
  "Root refreshes",
  "Highlights and dimensional color",
  "Lightening and blonding services",
  "All-over blonde",
  "Lived-in color",
  "Toners and glossing",
  "Perms",
  "Keratin smoothing",
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Salon Services</Eyebrow>
          <h1 className="font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
            Custom color, haircuts, texture, and hair that feels like you
          </h1>
          <div className="mt-7">
            <AnswerSummary>
              MLK Hair is a boutique salon focused on custom color, haircuts,
              texture services, scalp-conscious treatments, and personalized
              hair care. Every service is tailored to you, combining continued
              education, high-performing products, and a scalp-conscious
              approach to help your hair look beautiful, feel healthy, and fit
              your lifestyle.
            </AnswerSummary>
          </div>
          <div className="mt-8">
            <BookButton label="Book a Salon Appointment" variant="primary" />
          </div>
        </div>
      </Section>

      {/* Salon Philosophy */}
      <Section variant="gold">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>The salon</Eyebrow>
            <h2 className="font-display text-3xl text-evergreen md:text-4xl">
              Healthy Hair, Simplified
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                The salon side of MLK Hair is built around hair that works in
                real life: custom color, haircuts, texture services,
                professional treatments, and product choices that support
                healthy hair and scalp.
              </p>
              <p>
                Megan&rsquo;s approach is personalized, efficient, and grounded
                in more than seventeen years behind the chair. Every service is
                shaped by your hair type, goals, routine, lifestyle, and the
                long-term condition of your hair and scalp.
              </p>
            </div>
            <TrustRow
              className="mt-7"
              items={["Healthy", "Personalized", "Efficient"]}
            />
          </div>
        </Reveal>
      </Section>

      {/* Color and Texture Philosophy */}
      <Section alt>
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="font-display text-2xl text-evergreen md:text-3xl">
                Color and texture services with hair integrity in mind
              </h2>
              <div className="prose-body mt-5 text-ink/80">
                <p>
                  Our color and texture philosophy is simple: beautiful color
                  and chemical services should not come at the expense of
                  healthy hair. We use professional color and texture systems
                  designed to deliver rich, beautiful results while helping
                  maintain the integrity of the hair and respecting the scalp.
                </p>
              </div>
              <div className="mt-7">
                <BookButton
                  label="View Color and Texture Services"
                  variant="outline"
                />
              </div>
            </div>
            <div className="rounded-md border border-line bg-cream p-7 md:p-8">
              <p className="eyebrow mb-4">Color and texture services include</p>
              <ul className="space-y-3">
                {colorAndTexture.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 text-ink/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-4 text-sm text-taupe">
                For full service descriptions, timing, and current availability,
                please visit the booking page.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Hair & Scalp Treatments */}
      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl text-evergreen md:text-3xl">
              Healthy hair starts with the scalp
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                MLK Hair offers scalp-conscious treatments and restorative
                conditioning services for clients who want their hair to feel
                healthier, stronger, and more balanced. These services are
                designed for scalp comfort, dryness, buildup, damage, frizz, or
                hair that needs extra care between color and cut appointments.
              </p>
            </div>
            <div className="mt-7">
              <BookButton
                label="Book a Hair & Scalp Treatment"
                variant="outline"
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Custom Haircuts */}
      <Section alt>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl text-evergreen md:text-3xl">
              Custom haircuts for your hair type and lifestyle
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                A good haircut should work with your hair, not against it. Megan
                considers your hair type, head shape, density, growth patterns,
                routine, styling habits, and lifestyle so your cut feels like
                you and works with your life.
              </p>
            </div>
            <p className="mt-5 font-display text-lg text-evergreen">
              Not loving your hair right now? Let&rsquo;s make it feel like you
              again.
            </p>
            <div className="mt-7">
              <BookButton label="Book a Haircut" variant="outline" />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Products Chosen With Purpose */}
      <Section variant="gold">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl text-evergreen md:text-3xl">
              Professional products chosen with purpose
            </h2>
            <div className="prose-body mt-5 text-ink/80">
              <p>
                We carefully select products and color lines that deliver
                professional results while supporting the health of the hair and
                scalp. Every product used at MLK Hair is chosen with intention,
                for performance, ingredient quality, scalp awareness, and the
                ability to help clients maintain healthy, manageable hair
                between visits.
              </p>
              <p>
                This same philosophy guides color, home care, scalp treatments,
                and styling recommendations, so every product has a reason
                behind it.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Final CTA */}
      <Section variant="olive">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Ready for hair that feels like you, only better?
          </h2>
          <p className="mx-auto mt-4 max-w-xl">
            Book a salon appointment with Megan for custom color, haircuts,
            texture services, scalp-conscious treatments, and care designed
            around your hair, routine, and lifestyle.
          </p>
          <div className="mt-8 flex justify-center">
            <BookButton label="Book a Salon Appointment" />
          </div>
        </div>
      </Section>
    </>
  );
}
