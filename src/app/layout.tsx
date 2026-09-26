import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const siteUrl = "https://shaktimillingworks.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Carbide End Mill Resharpening & Regrinding | Shakti Milling Works",
    template: "%s | Shakti Milling Works",
  },

  description:
    "Carbide end mill resharpening, drill bit sharpening, ball nose and radius end mill regrinding. 4mm–20mm service, 24-hour turnaround, from ₹70/piece.",

  keywords: [
    "tungsten carbide end mill regrinding",
    "tungsten carbide end mill sharpening",
    "carbide end mill regrinding",
    "carbide end mill sharpening",
    "end mill regrinding",
    "end mill sharpening",
    "end mill resharpening",
    "carbide end mill resharpening",
    "end mill resharpening service",
    "carbide cutter regrinding",
    "carbide cutter sharpening",
    "CNC end mill regrinding",
    "CNC end mill sharpening",
    "ball nose end mill regrinding",
    "ball nose end mill resharpening",
    "ball nose carbide end mill sharpening",
    "drill bit regrinding",
    "drill bit sharpening",
    "carbide drill bit sharpening",
    "radius end mill regrinding",
    "radius end mill sharpening",
    "radius end mill resharpening",
    "carbide cutting tool regrinding",
    "cutting tool sharpening",
    "end mill regrinding India",
    "carbide end mill regrinding India",
    "end mill regrinding Haryana",
  ],

  authors: [
    {
      name: "Shakti Milling Works",
    },
  ],

  creator: "Shakti Milling Works",
  publisher: "Shakti Milling Works",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Shakti Milling Works",

    title:
      "Carbide End Mill Resharpening & Regrinding | Shakti Milling Works",

    description:
      "Carbide end mill resharpening, drill bit sharpening, ball nose and radius end mill regrinding. From ₹70/piece.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shakti Milling Works Tungsten Carbide End Mill Regrinding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Carbide End Mill Resharpening | Shakti Milling Works",

    description:
      "End mill resharpening, drill bit sharpening, ball nose and radius end mill regrinding from ₹70/piece.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
