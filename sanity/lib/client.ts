import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "../env";

// "placeholder" keeps createClient from throwing before a real project is wired.
// Queries are gated on sanityConfigured, so this client is never actually hit
// until NEXT_PUBLIC_SANITY_PROJECT_ID is set.
const safeProjectId = projectId || "placeholder";

export const client = createClient({
  projectId: safeProjectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Server-only write client for the seed script. Needs SANITY_API_TOKEN.
export const writeClient = createClient({
  projectId: safeProjectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
