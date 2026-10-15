import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LetsChat from "@/components/LetsChat";
import { localBusinessSchema, jsonLd } from "@/lib/schema";

// Chrome for the public marketing site. The /studio route lives outside this
// group, so the embedded Sanity Studio renders full-screen without Nav/Footer.
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(localBusinessSchema())}
      />
      <Nav />
      <main>{children}</main>
      <Footer />
      <LetsChat />
      {/* LeadConnector (GoHighLevel) chat widget, loaded site-wide after the page is interactive. */}
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6ad12980cc8a6767eec1be43"
        data-source="WEB_USER"
        strategy="afterInteractive"
      />
    </>
  );
}
