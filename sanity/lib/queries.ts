import { client } from "./client";
import { sanityConfigured } from "../env";

// All queries no-op safely until a Sanity project is configured, so the site
// builds and renders an empty blog state before the dataset exists.

export type PostCard = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  readTime?: number;
  mainImage?: { _type: string; asset: { _ref: string } };
  author?: { name: string };
  categories?: { title: string; slug: { current: string } }[];
};

export async function getAllPosts(): Promise<PostCard[]> {
  if (!sanityConfigured) return [];
  return client.fetch(
    `*[_type == "post" && defined(publishedAt) && publishedAt <= now()] | order(publishedAt desc) {
      _id, title, slug, publishedAt, excerpt, readTime, mainImage,
      author->{ name },
      categories[]->{ title, slug }
    }`,
  );
}

export async function getPostBySlug(slug: string) {
  if (!sanityConfigured) return null;
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, excerpt, readTime, mainImage, body,
      seoTitle, seoDescription,
      author->{ name, image, bio },
      categories[]->{ title, slug }
    }`,
    { slug },
  );
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  if (!sanityConfigured) return [];
  return client.fetch(`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`);
}
