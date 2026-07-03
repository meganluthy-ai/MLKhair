import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";

const year = new Date().getFullYear(); // real year, not the Wix "© 2035" leftover (build brief §6)

export default function Footer() {
  return (
    <footer className="border-t border-line bg-soft-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/logo.png"
              alt="MLK Hair, Trichologist and Hair Stylist"
              width={878}
              height={226}
              className="h-14 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-taupe">
              Science-based hair loss treatment, scalp health, and salon care
              with {site.owner}, {site.credential}.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Explore</p>
            <ul className="space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink/80 transition-colors hover:text-evergreen"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Visit</p>
            <ul className="space-y-2 text-sm text-ink/80">
              <li>Idaho Falls, ID &middot; private suite</li>
              <li>Rexburg, ID</li>
              <li>Remote consults by Zoom or FaceTime</li>
              {site.phone && (
                <li>
                  <a href={site.phoneHref} className="hover:text-evergreen">
                    {site.phone}
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-evergreen">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold-dark hover:text-gold-dark"
                >
                  Book online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-taupe md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} MLK Hair. {site.owner}, {site.credential}.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-evergreen">
              Privacy
            </Link>
            <Link href="/accessibility" className="hover:text-evergreen">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
