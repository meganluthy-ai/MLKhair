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

  // Booking on Acuity. The scalp-analysis CTAs use bookingUrl; the nav's
  // general "Book your appointment" button uses bookingUrlMain.
  bookingUrl: "https://MeganKeckHair.as.me/?appointmentType=68646028",
  bookingUrlMain: "https://megankeckhair.as.me/schedule/e055413c",

  // Contact (from Megan's card + pricing menu)
  phone: "208-390-6695",
  phoneHref: "tel:+12083906695",
  email: "megan@mlkhair.com",

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
  { label: "Blog", href: "/blog" },
  { label: "Quiz", href: "/quiz" },
  { label: "Contact", href: "/contact" },
];
