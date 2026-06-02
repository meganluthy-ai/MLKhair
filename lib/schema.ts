// JSON-LD structured data generators. Keep these the single place schema is built
// so NAP and entity facts stay consistent (build brief §6).
import { site } from "./site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/og.jpg`,
    ...(site.phone ? { telephone: site.phone } : {}),
    areaServed: ["Idaho Falls", "Rexburg", "East Idaho"],
    founder: {
      "@type": "Person",
      name: site.owner,
      jobTitle: "Clinical Trichologist, Licensed Cosmetologist",
    },
    address: site.locations.map((l) => ({
      "@type": "PostalAddress",
      addressLocality: l.city,
      addressRegion: l.region,
      addressCountry: "US",
      ...(l.street ? { streetAddress: l.street } : {}),
      ...(l.postalCode ? { postalCode: l.postalCode } : {}),
    })),
    knowsAbout: [
      "Trichology",
      "Hair loss",
      "Scalp health",
      "Androgenetic alopecia",
      "Telogen effluvium",
      "Alopecia areata",
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.owner,
    alternateName: site.ownerAlt,
    jobTitle: "Clinical Trichologist",
    description: `${site.owner}, ${site.credential}, with 17+ years as a licensed cosmetologist, serving Idaho Falls and Rexburg, Idaho.`,
    url: `${site.url}/about`,
    worksFor: { "@type": "Organization", name: site.name, url: site.url },
    knowsAbout: ["Trichology", "Hair loss treatment", "Scalp health"],
    hasCredential: [
      "AMCA-certified clinical trichologist",
      "US Trichology Institute",
      "Licensed cosmetologist",
    ],
  };
}

export type Faq = { q: string; a: string };

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Render helper: drop a <script type="application/ld+json"> with the given object.
export function jsonLd(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
