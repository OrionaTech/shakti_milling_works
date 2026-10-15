import type { MetadataRoute } from "next";
import { indexedLocationSlugs, siteUrl } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/pan-india`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${siteUrl}/videos/precision-regrinding`,
      changeFrequency: "yearly",
      priority: 0.7,
      videos: [
        {
          title: "Precision Carbide End Mill Regrinding",
          thumbnail_loc: `${siteUrl}/images/after/end-mill-after-1.jpeg`,
          description:
            "Watch the precision regrinding process for tungsten carbide end mills.",
          content_loc: `${siteUrl}/videos/precision-regrinding.mp4`,
        },
      ],
    },
    ...indexedLocationSlugs.map((slug) => ({
      url: `${siteUrl}/locations/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
