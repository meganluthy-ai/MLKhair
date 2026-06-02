// Central source of truth for site-wide constants.
// Items marked OPEN are gaps from the build brief §7 — confirm with Megan before launch.

export const site = {
  name: "MLK Hair",
  legalName: "MLK Hair",
  owner: "Megan Luthy",
  ownerAlt: "Megan Keck",
  credential: "AMCA-certified clinical trichologist",
  url: "https://mlkhair.com",
  tagline: "Healthy Hair, Simplified",
  description:
    "Science-based hair loss treatment, scalp health, and salon services with Megan Luthy, AMCA-certified clinical trichologist serving Idaho Falls and Rexburg, Idaho, plus remote consults.",

  // Booking stays on Acuity (build brief). Every CTA points here.
  bookingUrl: "https://MeganKeckHair.as.me",

  // Contact — OPEN (brief §7.6): confirm public phone + how to present addresses
  // given the private/confidential positioning.
  phone: "", // OPEN
  email: "hello@mlkhair.com", // placeholder until confirmed

  locations: [
    {
      city: "Idaho Falls",
      region: "ID",
      note: "Private suite",
      // OPEN: street address — confirm whether to publish or keep service-area only
      street: "",
      postalCode: "",
    },
    {
      city: "Rexburg",
      region: "ID",
      note: "Salon chair",
      street: "",
      postalCode: "",
    },
  ],

  // OPEN (§7.6): business hours
  hours: [] as { day: string; opens: string; closes: string }[],

  social: {
    // OPEN: confirm handles
    instagram: "",
    facebook: "",
  },

  // OPEN (§2.3): carry over the full Google site-verification token from Wix.
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
} as const;

export const nav = [
  { label: "Hair Loss", href: "/hair-loss" },
  { label: "Our Approach", href: "/approach" },
  { label: "Trichology", href: "/trichology" },
  { label: "Salon", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Quiz", href: "/quiz" },
  { label: "Contact", href: "/contact" },
];
