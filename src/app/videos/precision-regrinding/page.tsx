import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/locations";

const pageUrl = `${siteUrl}/videos/precision-regrinding`;
const videoUrl = `${siteUrl}/videos/precision-regrinding.mp4`;
const thumbnailUrl = `${siteUrl}/images/after/end-mill-after-1.jpeg`;

export const metadata: Metadata = {
  title: "Precision Carbide End Mill Regrinding Video",
  description:
    "Watch tungsten carbide end mills being precision reground to restore their cutting edges and geometry.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "video.other",
    title: "Precision Carbide End Mill Regrinding",
    description:
      "Watch the precision grinding process for restoring tungsten carbide end mills.",
    videos: [{ url: videoUrl, type: "video/mp4" }],
    images: [thumbnailUrl],
  },
};

const videoObject = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Precision Carbide End Mill Regrinding",
  description:
    "Watch tungsten carbide end mills being precision reground to restore their cutting edges and geometry.",
  thumbnailUrl: [thumbnailUrl],
  uploadDate: "2026-08-11",
  contentUrl: videoUrl,
  embedUrl: pageUrl,
  publisher: {
    "@type": "Organization",
    name: "Shakti Milling Works",
    url: siteUrl,
  },
};

export default function PrecisionRegrindingVideoPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 md:py-16">
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
          preload="metadata"
          poster={thumbnailUrl.replace(siteUrl, "")}
        >
          <source src={videoUrl.replace(siteUrl, "")} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoObject).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}