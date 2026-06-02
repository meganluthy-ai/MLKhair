import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";
export const metadata = {
  title: "MLK Hair Studio",
  robots: { index: false, follow: false },
};

// Megan edits the blog at mlkhair.com/studio (logs in with her Sanity account).
export default function StudioPage() {
  return <NextStudio config={config} />;
}
