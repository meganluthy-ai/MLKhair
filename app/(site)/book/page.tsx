import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Online",
  description: "Book your scalp analysis or salon appointment with MLK Hair.",
  alternates: { canonical: "/book" },
};

// Booking lives on Acuity (build brief). /book is a clean, shareable redirect.
// If Megan later wants the scheduler embedded instead, swap this for an iframe.
export default function Book() {
  redirect(site.bookingUrl);
}
