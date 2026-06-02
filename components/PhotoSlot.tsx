// Type-led placeholder for a real photo slot. The brief forbids AI/stock beauty
// imagery, so until Megan's shoot we render an intentional, on-brand frame that
// names the photo that belongs here. Swap for <Image> once real assets arrive.
import { Camera } from "lucide-react";

export default function PhotoSlot({
  caption,
  ratio = "aspect-[4/5]",
  tone = "evergreen",
}: {
  caption: string;
  ratio?: string;
  tone?: "evergreen" | "gold" | "cream";
}) {
  const bg =
    tone === "gold"
      ? "bg-gold/10 border-gold/30"
      : tone === "cream"
        ? "bg-cream border-line"
        : "bg-evergreen/10 border-evergreen/25";

  return (
    <div
      className={`relative flex ${ratio} w-full items-end overflow-hidden rounded-md border ${bg}`}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <Camera size={40} className="text-evergreen" strokeWidth={1.25} />
      </div>
      <p className="relative m-4 rounded bg-soft-white/85 px-3 py-2 text-xs font-medium text-taupe">
        Photo: {caption}
      </p>
    </div>
  );
}
