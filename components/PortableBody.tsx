import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-3xl text-evergreen">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-2xl text-evergreen">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-gold pl-5 text-lg italic text-ink/80">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-5 max-w-prose leading-relaxed text-ink/85">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 max-w-prose list-disc space-y-2 pl-6 text-ink/85">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 max-w-prose list-decimal space-y-2 pl-6 text-ink/85">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-evergreen underline hover:text-gold-dark"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <span className="my-8 block overflow-hidden rounded-md">
          <Image
            src={urlFor(value).width(1200).fit("max").url()}
            alt={value.alt || ""}
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </span>
      ) : null,
  },
};

export default function PortableBody({ value }: { value: unknown }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <PortableText value={value as any} components={components} />;
}
