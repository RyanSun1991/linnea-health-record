import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage } from "../components/document-page";

export const metadata: Metadata = {
  title: "Support",
  description: "Support for Linnea accounts, Apple subscriptions, Apple Health, export, and deletion.",
};

const faqs = [
  {
    question: "How do I export my data?",
    answer:
      "Open Linnea, go to You, and select Export my data. The export is prepared in the background. Its download link expires after one hour and the export file is deleted after seven days.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "Open You → Delete account and confirm the request. Linnea provides a 24-hour grace period in which deletion can be cancelled. After that window, the sign-in identity and associated app data are removed.",
  },
  {
    question: "How do I cancel or restore Linnea Premium?",
    answer:
      "Subscriptions are managed by Apple. Cancel from iOS Settings → Apple Account → Subscriptions. In Linnea, use Restore Purchases on the paywall to recover an eligible purchase made with the same Apple ID.",
  },
  {
    question: "Why is Apple Health data missing?",
    answer:
      "Check iOS Settings → Health → Data Access & Devices → Linnea and confirm the desired permissions. Apple does not tell apps whether a read permission was denied, so Linnea may show no data rather than a permission error.",
  },
  {
    question: "Can Linnea change a medication or dose?",
    answer:
      "No. Medication entries and reminders repeat only what the user entered. Linnea does not recommend starting, stopping, or changing a medication, dose, or treatment.",
  },
] as const;

export default function SupportPage() {
  return (
    <DocumentPage activePath="/support" title="Support" version="1.0">
      <p className="lede">
        For account, subscription, privacy, or technical help, email{" "}
        <a href="mailto:info@nourishrx.com?subject=Linnea%20support">
          info@nourishrx.com
        </a>
        . This is the monitored launch-transition address; replies should include
        the app version and a description of the screen or action, but no medical
        details, passwords, or full health records.
      </p>

      <h2>Common requests</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>

      <h2>Privacy and consumer health requests</h2>
      <p>
        Use “Privacy Request” or “Consumer Health Data Request” in the email
        subject. The <Link href="/privacy">Privacy Policy</Link> explains general
        rights; the <Link href="/consumer-health">Consumer Health Data Policy</Link>
        explains consumer health access, deletion, withdrawal, and appeal rights.
      </p>

      <h2>Response information</h2>
      <p>
        Support may ask for the account email, app version, iOS version, and an
        approximate time of the problem. Never send an Apple ID password,
        authentication code, payment-card number, or complete Apple Health export.
        Payment and refund decisions are handled by Apple.
      </p>
    </DocumentPage>
  );
}
