import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, JsonLd } from "@/lib/jsonld";

const pageUrl = `${site.url}/videos/precision-regrinding`;
const videoUrl = `${site.url}/videos/precision-regrinding.mp4`;
const thumbnailUrl = `${site.url}/images/after/end-mill-after-1.jpeg`;

export function generateMetadata(): Metadata {
  const description = "Watch the carbide end mill regrinding process from Shakti Milling Works.";
  return { ...pageMetadata({ title: "Precision Carbide End Mill Regrinding Video", description, path: "/videos/precision-regrinding", type: "video.other" }), openGraph: { type: "video.other", url: pageUrl, title: "Precision Carbide End Mill Regrinding Video", description, videos: [{ url: videoUrl, type: "video/mp4" }], images: [thumbnailUrl] } };
}

const videoObject = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Precision Carbide End Mill Regrinding",
  description: "Watch the regrinding process used to restore suitable tungsten carbide end mills, cutting edges and tool geometry.",
  thumbnailUrl: [thumbnailUrl],
  uploadDate: "2026-08-11",
  contentUrl: videoUrl,
  embedUrl: pageUrl,
  publisher: {
    "@type": "Organization",
    name: "Shakti Milling Works",
    url: site.url,
  },
};

export default function PrecisionRegrindingVideoPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 md:py-16">
      <JsonLd data={videoObject} />
      <JsonLd data={breadcrumbJsonLd([
        { label: "Home", href: "/" },
        { label: "Precision Carbide End Mill Regrinding", href: "/videos/precision-regrinding" },
      ])} />
      <Link href="/" className="text-sm text-navy underline underline-offset-4">
        Shakti Milling Works
      </Link>
      <h1 className="mt-6 max-w-3xl text-3xl font-black md:text-5xl">
        Precision Carbide End Mill Regrinding
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-charcoal/70">
        Watch the regrinding process used to restore suitable tungsten carbide
        end mills, cutting edges and tool geometry.
      </p>
      <div className="mt-8 flex justify-center rounded-md bg-charcoal p-3 md:p-6">
        <video
          className="aspect-[9/16] max-h-[75vh] w-auto max-w-full rounded-sm"
          controls
          playsInline
          preload="none"
          poster={thumbnailUrl.replace(site.url, "")}
        >
          <source src={videoUrl.replace(site.url, "")} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
    </main>
  );
}
