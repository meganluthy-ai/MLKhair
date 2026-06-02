/**
 * Write the blog seed documents to seed.ndjson for `sanity dataset import`,
 * which uses your own authenticated CLI login (run `npx sanity login` first)
 * and therefore sidesteps API-token permission limits.
 *
 *   npm run seed:ndjson
 *   npx sanity dataset import seed.ndjson production --replace
 */
import { writeFileSync } from "node:fs";
import { seedDocuments } from "./seed-blog";

const ndjson = seedDocuments.map((d) => JSON.stringify(d)).join("\n") + "\n";
writeFileSync("seed.ndjson", ndjson);
console.log(`Wrote seed.ndjson with ${seedDocuments.length} documents.`);
