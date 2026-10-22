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
  const image = new URL("/images/video-poster.jpg", site.url).toString();

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
      images: [{ url: image, alt: `${site.name} carbide tool regrinding` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
