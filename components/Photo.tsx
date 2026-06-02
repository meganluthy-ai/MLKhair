import Image from "next/image";

// Real photo in a brand-consistent rounded frame. Drop-in replacement for the
// PhotoSlot placeholder once actual imagery exists.
export default function Photo({
  src,
  alt,
  ratio = "aspect-[4/5]",
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative ${ratio} w-full overflow-hidden rounded-md border border-line`}>
      <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  );
}
