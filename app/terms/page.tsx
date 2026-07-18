import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage } from "../components/document-page";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms governing use of the Linnea personal wellness app.",
};

export default function TermsPage() {
  return (
    <DocumentPage activePath="/terms" title="Terms of service" version="1.0">
      <p className="lede">
        These terms form an agreement between the user and the developer
        identified as the seller on Linnea’s App Store product page. Creating an
        account or using Linnea means accepting these terms and the{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>What Linnea is</h2>
      <p>
        Linnea organizes information entered by the user, creates daily
        aggregates from Apple Health when permission is granted, and produces
        wellness scores, plans, reminders, trends, and AI-assisted reflections.
      </p>
      <aside className="health-limit">
        <strong>Linnea is not a medical device and does not provide medical
        advice, diagnosis, treatment, or prescriptions.</strong> Do not start,
        stop, or change medication, dosage, or treatment because of the app.
        Consult a qualified health professional. Contact local emergency services
        for urgent or emergency care.
      </aside>

      <h2>Eligibility and account</h2>
      <p>
        Users must be at least 13, or the higher age required to consent to an
        online service where they live. The user is responsible for access to the
        selected sign-in account and for accurate information submitted to Linnea.
        One person may not process another person’s health information without
        their valid authorization.
      </p>

      <h2>User content</h2>
      <p>
        The user retains rights in content they submit and grants Linnea a
        limited, worldwide license to host, process, transmit, and display that
        content solely to operate, secure, and improve the requested service.
        That license ends when the content is deleted, subject to technical backup
        cycles and legal retention duties. Do not submit content that is unlawful,
        abusive, infringing, or unsafe for the service to process.
      </p>

      <h2>AI-assisted output</h2>
      <p>
        AI output can be incomplete, inaccurate, or inappropriate for an
        individual situation. It must be reviewed before use and is never a basis
        for diagnosis, medication, dosage, treatment, or emergency decisions.
        Linnea may apply feature quotas, safety filters, and fair-use limits to
        protect reliability.
      </p>

      <h2>Linnea Premium</h2>
      <p>
        Linnea Premium unlocks paid AI-assisted features. Monthly and annual
        prices, any introductory offer, and the renewal period appear in Apple’s
        purchase sheet before confirmation. Apple bills the Apple ID and manages
        renewal, cancellation, taxes, and refunds. A subscription renews unless
        it is cancelled through Apple at least 24 hours before the end of the
        current period. Cancellation takes effect at the end of the paid period.
        Restore Purchases can recover an eligible entitlement. Refund requests
        are handled by Apple, without limiting mandatory local consumer rights.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not probe, disrupt, overload, bypass access controls or quotas, scrape
        the service, distribute malware, reverse engineer except where law allows,
        resell access, or use Linnea output to provide medical services. We may
        suspend access needed to investigate abuse, security risk, or a material
        breach and will give notice when reasonably possible.
      </p>

      <h2>Service changes and termination</h2>
      <p>
        Features may change as the service develops. We may perform maintenance,
        fix security issues, discontinue a feature, or end the service with
        reasonable notice when practicable. The user may stop using Linnea or
        delete the account at any time. Export tools are available before account
        deletion.
      </p>

      <h2>Disclaimers and liability</h2>
      <p>
        Linnea is provided “as is” and “as available.” To the extent permitted by
        law, the developer disclaims implied warranties and is not liable for
        indirect, incidental, special, consequential, or punitive loss, or for
        decisions based on wellness information. Nothing in these terms excludes
        liability or statutory rights that cannot lawfully be excluded or limited.
      </p>

      <h2>Changes and contact</h2>
      <p>
        Material changes will be dated and, where required, shown before they take
        effect. Questions can be sent to{" "}
        <a href="mailto:info@nourishrx.com">info@nourishrx.com</a> during the
        Linnea domain transition.
      </p>
    </DocumentPage>
  );
}
