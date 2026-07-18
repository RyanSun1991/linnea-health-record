import type { Metadata, Viewport } from "next";
import { Fraunces, Newsreader } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://linnea-health.pages.dev"),
  title: {
    default: "Linnea · Privacy, terms, and support",
    template: "%s · Linnea",
  },
  description:
    "Public privacy, consumer health data, terms, and support information for Linnea.",
  applicationName: "Linnea",
  category: "health",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Linnea",
    title: "Linnea · Privacy, terms, and support",
    description:
      "How Linnea handles health information, AI processing, account controls, and support.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Linnea" }],
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
