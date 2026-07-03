import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MLK Hair | Trichologist in Idaho Falls",
    template: "%s | MLK Hair",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "MLK Hair | Trichologist in Idaho Falls",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  // Carry over the existing Search Console verification (build brief §2.3).
  verification: site.googleSiteVerification
    ? { google: site.googleSiteVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body>
        {/* JS disabled: fallback for browsers without @media (scripting) support */}
        <noscript>
          <style>{`.reveal { opacity: 1; transform: none; transition: none; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
