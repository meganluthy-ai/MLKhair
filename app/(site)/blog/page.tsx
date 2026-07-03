import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/lib/format";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Hair & Scalp Blog",
  description:
    "Science-first answers about hair loss, thinning, scalp health, and what actually works, from Megan Luthy, a clinical trichologist in Idaho Falls.",
  alternates: { canonical: "/blog" },
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <Section>
      <Eyebrow>The Blog</Eyebrow>
      <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-evergreen md:text-5xl">
        Straight answers about hair loss and scalp health
      </h1>
      <p className="mt-5 max-w-prose text-lg text-ink/80">
        No miracle oils, no fear-mongering. Just the science, explained plainly
        by someone who reads scalps for a living.
      </p>

      {posts.length === 0 ? (
        <div className="mt-12 rounded-md border border-dashed border-line bg-soft-white p-10 text-center">
          <p className="text-ink/70">
            New articles are on the way. In the meantime, the best next step is a
            scalp analysis.
          </p>
          <Link
            href="/quiz"
            className="mt-4 inline-flex items-center gap-1.5 font-semibold text-gold-dark hover:text-evergreen"
          >
            Take the Hair & Scalp Quiz <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Reveal key={post._id}>
              <Link href={`/blog/${post.slug.current}`} className="group block">
                <div className="overflow-hidden rounded-md border border-line bg-soft-white">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).width(800).height(500).fit("crop").url()}
                      alt={post.title}
                      width={800}
                      height={500}
                      className="aspect-[8/5] w-full object-cover"
                    />
                  ) : (
                    <div className="aspect-[8/5] w-full bg-evergreen/10" />
                  )}
                </div>
                <div className="mt-4">
                  {post.categories?.[0] && (
                    <p className="eyebrow">{post.categories[0].title}</p>
                  )}
                  <h2 className="mt-2 font-display text-xl text-evergreen group-hover:text-gold-dark">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2 text-sm text-ink/75">{post.excerpt}</p>
                  )}
                  <p className="mt-3 text-xs text-taupe">
                    {formatDate(post.publishedAt)}
                    {post.readTime ? ` · ${post.readTime} min read` : ""}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
