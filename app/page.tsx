import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "./components/site-shell";

export const metadata: Metadata = {
  title: "Linnea · Privacy, terms, and support",
  description:
    "How Linnea handles health information, AI processing, account controls, subscriptions, and support.",
};

const documents = [
  {
    href: "/privacy",
    title: "Privacy policy",
    summary:
      "The data Linnea handles, where it goes, how long it stays, and the controls available in the app.",
  },
  {
    href: "/consumer-health",
    title: "Consumer health data policy",
    summary:
      "A separate notice for consumer health data, including Washington residents’ access, deletion, and appeal rights.",
  },
  {
    href: "/terms",
    title: "Terms of service",
    summary:
      "The agreement for using Linnea, including wellness limits, Apple subscriptions, and acceptable use.",
  },
  {
    href: "/disclaimers",
    title: "AI notices",
    summary:
      "The versioned notices shown with Linnea's AI-assisted plans, summaries, suggestions, and parsed entries.",
  },
  {
    href: "/support",
    title: "Support",
    summary:
      "Account export and deletion, Apple subscription help, Health permissions, and a direct support contact.",
  },
] as const;

export default function Home() {
  return (
    <SiteShell activePath="/">
      <main className="home" id="main-content">
        <section className="home__opening" aria-labelledby="home-title">
          <p className="document-meta">Updated 19 July 2026 · Linnea</p>
          <h1 id="home-title">Your health record, with the terms in plain view.</h1>
          <p className="home__lede">
            Linnea brings together information you enter, daily summaries from
            Apple Health, and AI-assisted reflections. The raw Apple Health
            samples stay on the device. The documents below describe the rest
            of the system without hiding the practical details.
          </p>
        </section>

        <section className="document-index" aria-label="Legal and support documents">
          {documents.map((document) => (
            <article className="document-index__entry" key={document.href}>
              <h2>
                <Link href={document.href}>{document.title}</Link>
              </h2>
              <p>{document.summary}</p>
              <Link className="text-link" href={document.href}>
                Read {document.title.toLowerCase()}
                <span aria-hidden="true"> →</span>
              </Link>
            </article>
          ))}
        </section>

        <aside className="health-limit" aria-label="Medical information notice">
          <strong>Wellness information, not medical advice.</strong> Linnea does
          not diagnose, treat, prescribe, or recommend medication or dosage
          changes. Contact a qualified health professional for medical decisions
          and local emergency services for urgent care.
        </aside>
      </main>
    </SiteShell>
  );
}
