import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

// Derive the accepted source type from the builder so we don't depend on a
// version-specific internal type path.
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
