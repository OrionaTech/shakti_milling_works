import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const siteUrl = "https://shaktimillingworks.orionatech.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Tungsten Carbide End Mill Regrinding & Sharpening | Shakti Milling Works",
    template: "%s | Shakti Milling Works",
  },

  description:
    "Tungsten carbide end mill regrinding and resharpening from Yamunanagar, Haryana. Restore suitable worn carbide end mills and get more value from expensive CNC cutting tools. Serving customers across India.",

  keywords: [
    "tungsten carbide end mill regrinding",
    "tungsten carbide end mill sharpening",
    "carbide end mill regrinding",
    "carbide end mill sharpening",
    "end mill regrinding",
    "end mill sharpening",
    "end mill resharpening",
    "carbide cutter regrinding",
    "carbide cutter sharpening",
    "CNC end mill regrinding",
    "CNC end mill sharpening",
    "ball nose end mill regrinding",
    "ball nose carbide end mill sharpening",
    "carbide cutting tool regrinding",
    "cutting tool sharpening",
    "end mill regrinding India",
    "carbide end mill regrinding India",
    "end mill regrinding Haryana",
    "end mill regrinding Yamunanagar",
    "carbide tool regrinding Yamunanagar",
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
      "Tungsten Carbide End Mill Regrinding & Sharpening | Shakti Milling Works",

    description:
      "Professional tungsten carbide end mill regrinding and resharpening from Yamunanagar, Haryana. Get more life from suitable worn carbide end mills.",

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
      "Tungsten Carbide End Mill Regrinding | Shakti Milling Works",

    description:
      "Professional carbide end mill regrinding and sharpening from Yamunanagar, Haryana.",

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