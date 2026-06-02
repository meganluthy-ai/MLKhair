import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/hair-loss", priority: 0.9 },
    { path: "/approach", priority: 0.9 },
    { path: "/trichology", priority: 0.9 },
    { path: "/services", priority: 0.8 },
    { path: "/quiz", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/shop", priority: 0.5 },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
