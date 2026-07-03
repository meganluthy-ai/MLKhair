import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section, BookButton, QuizButton } from "@/components/ui";
import PortableBody from "@/components/PortableBody";
import { getPostBySlug, getAllPostSlugs } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { site } from "@/lib/site";
import { jsonLd } from "@/lib/schema";
import { formatDate } from "@/lib/format";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: "article",
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).fit("crop").url()]
        : undefined,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name || site.owner,
    },
    publisher: { "@type": "Organization", name: site.name },
    ...(post.mainImage
      ? { image: urlFor(post.mainImage).width(1200).height(630).fit("crop").url() }
      : {}),
    mainEntityOfPage: `${site.url}/blog/${params.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(articleSchema)}
      />

      <Section>
        <article className="mx-auto max-w-prose">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-taupe hover:text-evergreen"
          >
            <ArrowLeft size={16} /> All articles
          </Link>

          {post.categories?.[0] && (
            <p className="eyebrow mt-8">{post.categories[0].title}</p>
          )}
          <h1 className="mt-3 font-display text-4xl leading-[1.1] text-evergreen md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-taupe">
            {post.author?.name || site.owner} · {formatDate(post.publishedAt)}
            {post.readTime ? ` · ${post.readTime} min read` : ""}
          </p>

          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(1200).height(750).fit("crop").url()}
              alt={post.title}
              width={1200}
              height={750}
              priority
              className="mt-8 aspect-[8/5] w-full rounded-md object-cover"
            />
          )}

          <div className="mt-8">
            <PortableBody value={post.body} />
          </div>
        </article>

        <div className="mx-auto mt-14 max-w-prose rounded-md border border-line bg-soft-white p-8 text-center">
          <h2 className="font-display text-2xl text-evergreen">
            Ready to find your why?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-ink/80">
            A scalp analysis is the front door. One private visit to find the
            cause, in person or by video.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <BookButton />
            <QuizButton />
          </div>
        </div>
      </Section>
    </>
  );
}
