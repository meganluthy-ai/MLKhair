/**
 * Upload local images as Sanity assets and attach them to posts, using the
 * CLI login token (passed as SANITY_AUTH_TOKEN). Used for the two generated
 * blog images, since the import shorthand only accepts URLs, not local paths.
 */
import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";

const token = process.env.SANITY_AUTH_TOKEN;
if (!token) {
  console.error("Set SANITY_AUTH_TOKEN (from `npx sanity debug --secrets`).");
  process.exit(1);
}

const client = createClient({
  projectId: "oko3nolk",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const jobs = [
  { postId: "post-trichologist-vs-dermatologist", file: "seed-assets/trichologist-vs-dermatologist.png" },
  { postId: "post-rosemary-oil-science", file: "seed-assets/rosemary-oil.png" },
];

async function run() {
  for (const j of jobs) {
    const asset = await client.assets.upload("image", createReadStream(j.file), {
      filename: j.file.split("/").pop(),
    });
    await client
      .patch(j.postId)
      .set({ mainImage: { _type: "image", asset: { _type: "reference", _ref: asset._id } } })
      .commit();
    console.log("  ✓", j.postId, "->", asset._id);
  }
  console.log("Done.");
}

run().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
