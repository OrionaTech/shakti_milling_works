import type { MetadataRoute } from "next";
import { indexedLocationSlugs, site } from "@/lib/site";
import { guides, services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services/end-mill-regrinding`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/services/carbide-insert-regrinding`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${site.url}/services/carbide-insert-regrinding`,
      changeFrequency: "monthly",
      priority: 0.9,
      videos: [
        {
          title: "Carbide Insert Regrinding at Shakti Milling Works",
          thumbnail_loc: `${site.url}/videos/carbide-insert-regrinding-yamunanagar-poster.webp`,
          description: "A short demonstration of carbide insert handling and regrinding at Shakti Milling Works in Yamunanagar, Haryana.",
          content_loc: `${site.url}/videos/carbide-insert-regrinding-yamunanagar.mp4`,
          duration: 18,
          publication_date: "2026-10-25",
        },
      ],
    },
    { url: `${site.url}/pan-india`, changeFrequency: "monthly", priority: 0.8 },
    ...["about", "bulk-accounts", "contact", "guides", "send-by-courier"].map((path) => ({ url: `${site.url}/${path}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...services.map(({ slug }) => ({ url: `${site.url}/services/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...guides.map(({ slug }) => ({ url: `${site.url}/guides/${slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    {
      url: `${site.url}/videos/precision-regrinding`,
      changeFrequency: "yearly",
      priority: 0.7,
      lastModified: new Date(), // better: a real per-page date
      videos: [
        {
          title: "Precision Carbide End Mill Regrinding",
          thumbnail_loc: `${site.url}/images/after/end-mill-after-1.jpeg`,
          description:
            "Watch the precision regrinding process for tungsten carbide end mills.",
          content_loc: `${site.url}/videos/precision-regrinding.mp4`,
        },
      ],
    },
    ...indexedLocationSlugs.map((slug) => ({
      url: `${site.url}/locations/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      lastModified: new Date(),
    })),
  ];
}
