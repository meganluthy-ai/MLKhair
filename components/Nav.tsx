"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
          ? "border-line bg-cream/95 backdrop-blur py-2 shadow-[0_1px_0_rgba(31,29,26,0.04)]"
          : "border-line/70 bg-cream py-4"
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
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-evergreen"
            >
              {item.label}
            </Link>
          ))}
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
          className="lg:hidden text-evergreen"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-cream px-5 py-4">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-base font-medium text-ink/85"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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
