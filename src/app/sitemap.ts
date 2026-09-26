import type { MetadataRoute } from "next";
import { indexedLocationSlugs, siteUrl } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/pan-india`, changeFrequency: "monthly", priority: 0.8 },
    ...indexedLocationSlugs.map((slug) => ({
      url: `${siteUrl}/locations/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
