import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "video.other";
};

export function pageMetadata({ title, description, path, type = "website" }: PageMetadata): Metadata {
  const url = new URL(path, site.url).toString();
  const image = new URL("/images/open-graph-banner.png", site.url).toString();

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: site.locale,
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${site.name} carbide cutting tool regrinding services` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
