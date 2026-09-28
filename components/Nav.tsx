"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? "border-line bg-white py-2 shadow-[0_1px_0_rgba(31,29,26,0.06)]"
          : "border-line bg-white py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="MLK Hair home" className="flex items-center">
          <Image
            src="/logo-nav.png"
            alt="MLK Hair"
            width={878}
            height={174}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-ink/80 transition-colors hover:text-evergreen"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    aria-hidden
                    className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                </Link>
                {/* pt-3 bridges the gap so the menu stays open while the cursor moves down */}
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-[11rem] rounded-md border border-line bg-white py-2 shadow-[0_8px_24px_rgba(31,29,26,0.08)]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          // Drop focus so :focus-within doesn't hold the menu open after navigating.
                          onClick={(e) => e.currentTarget.blur()}
                          className="block whitespace-nowrap px-4 py-2 text-sm text-ink/80 transition-colors hover:bg-soft-white hover:text-evergreen"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-evergreen"
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href={site.bookingUrlMain}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            Book your appointment
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden text-evergreen"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="lg:hidden border-t border-line bg-white px-5 py-4">
          <div className="flex flex-col gap-3">
            {nav.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <p className="py-1 text-base font-medium text-ink/85">{item.label}</p>
                  <div className="ml-4 flex flex-col gap-2 border-l border-line pl-4 pt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1 text-base text-ink/75"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-1 text-base font-medium text-ink/85"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href={site.bookingUrlMain}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent mt-2"
            >
              Book your appointment
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
