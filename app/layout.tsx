import type { Metadata, Viewport } from "next";
import { Fraunces, Newsreader } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://linnea-health-record.pages.dev/";
const metadataBase = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Linnea · Privacy, terms, and support",
    template: "%s · Linnea",
  },
  description:
    "Public privacy, consumer health data, terms, and support information for Linnea.",
  applicationName: "Linnea",
  category: "health",
  icons: {
    icon: new URL("favicon.svg", metadataBase),
    shortcut: new URL("favicon.svg", metadataBase),
  },
  openGraph: {
    type: "website",
    siteName: "Linnea",
    title: "Linnea · Privacy, terms, and support",
    description:
      "How Linnea handles health information, AI processing, account controls, and support.",
    images: [{ url: new URL("og.png", metadataBase), width: 1200, height: 630, alt: "Linnea" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${newsreader.variable}`}>
        {children}
      </body>
    </html>
  );
}
