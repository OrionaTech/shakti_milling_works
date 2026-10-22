import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="antialiased font-sans">
        {children}
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
