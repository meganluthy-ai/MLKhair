import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
      {/* LeadConnector (GoHighLevel) chat widget. A plain <script> tag (not
          next/script) so it appears in each page's HTML body, where the
          LeadConnector install check looks for it. */}
      <script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6ad12980cc8a6767eec1be43"
        data-source="WEB_USER"
        async
      />
    </>
  );
}
