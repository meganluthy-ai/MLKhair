export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// True once a real Sanity project is wired up. Until then the blog renders an
// empty state and the build stays green (no failed fetches during SSG).
export const sanityConfigured = Boolean(projectId);
