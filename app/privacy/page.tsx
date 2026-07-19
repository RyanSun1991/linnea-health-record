import type { Metadata } from "next";
import Link from "next/link";
import { DocumentPage } from "../components/document-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Linnea collects, uses, discloses, retains, and deletes personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <DocumentPage activePath="/privacy" title="Privacy policy" version="1.1">
      <p className="lede">
        Linnea is a personal wellness companion. This policy explains what
        information the app handles, why it is needed, where it goes, and how
        to export or delete it. “Linnea,” “we,” and “us” refer to MINGJUN SUN,
        the individual developer identified as the seller on Linnea’s App Store
        product page.
      </p>

      <h2>Information we handle</h2>
      <p>
        <strong>Account information.</strong> Email address, or the identifier
        provided by Apple or Google sign-in, authentication tokens, internal
        user ID, device push token, app version, locale, and time zone. We do
        not receive the password for a third-party sign-in account.
      </p>
      <p>
        <strong>Profile and wellness information.</strong> Date of birth, sex,
        height, weight entries, goals, medication and supplement names and
        schedules entered by the user, reminder preferences, and onboarding
        choices.
      </p>
      <p>
        <strong>Logs and user content.</strong> Food, water, medication,
        supplement, exercise, sleep, and wellbeing entries; notes; photos
        submitted for food recognition; and audio submitted for voice logging.
        Voice audio is sent for transcription and is not persisted by Linnea
        after that request. The resulting transcript may be stored with the log.
      </p>
      <p>
        <strong>Apple Health summaries.</strong> If permission is granted,
        Linnea reads Apple Health on the device and produces daily aggregates
        such as sleep totals, steps, workout minutes, active energy, mindful
        minutes, and weight trend. <strong>Raw Apple Health samples never leave
        the device.</strong> The service rejects payloads shaped like raw samples.
      </p>
      <p>
        <strong>Derived information.</strong> Today scores and sub-scores,
        history, trends, generated meal plans, weekly digests, insights, and
        other AI-assisted results. AI results display a versioned notice that
        they are general wellness information, not medical advice.
      </p>
      <p>
        <strong>Diagnostics and product analytics.</strong> When the production
        services are enabled, Linnea may send crash, performance, screen-name,
        and coarse usage events to Sentry and PostHog. A central scrubber
        removes health fields and contact details before transmission. Analytics
        and crash reporting can be turned off in <strong>You → Analytics</strong>.
      </p>

      <h2>Purposes</h2>
      <ul>
        <li>Authenticate the account and synchronize the user’s own records.</li>
        <li>Calculate scores, trends, reminders, exports, and requested AI features.</li>
        <li>Verify Apple subscription entitlements without receiving payment-card data.</li>
        <li>Protect the service, enforce rate limits, diagnose failures, and prevent abuse.</li>
        <li>Answer support, privacy, export, correction, and deletion requests.</li>
      </ul>

      <h2>AI processing</h2>
      <p>
        Requested AI features send only the information needed for that request
        to OpenAI or Anthropic. Depending on the feature, that can include profile
        metrics, relevant daily aggregates and logs, a question, a photo, or
        audio. Linnea does not attach the account email or stored contact name.
        Personal information placed directly in a note, question, photo, or
        recording will be part of that request.
      </p>
      <p>
        Our commercial API arrangements do not permit these providers to train
        their general models on Linnea API data by default. Provider security and
        abuse-monitoring logs may be retained for up to 30 days under their
        standard API terms, unless a shorter approved retention setting applies.
      </p>

      <h2>Processors and disclosures</h2>
      <p>
        Supabase hosts authentication, databases, storage, and server functions
        in the United States. OpenAI and Anthropic process requested AI features.
        Apple processes subscriptions and provides Apple Health APIs; Google or
        Apple may provide sign-in when selected. Sentry and PostHog process
        scrubbed diagnostics when enabled. These providers act for the stated
        service purposes. We may also disclose information when legally required,
        to protect users or the service, or as part of a business transfer with
        notice and applicable safeguards.
      </p>
      <p>
        Linnea does not sell personal or consumer health data, use it for
        targeted advertising, or track activity across other companies’ apps or
        websites.
      </p>

      <h2>Storage, security, and international transfers</h2>
      <p>
        Account data is stored in the United States. This means information from
        Canada and other launch regions can be processed under United States law.
        Database rows are protected by default-deny row-level access controls,
        and the local device cache is encrypted. No Internet service can promise
        absolute security; Linnea limits access and data fields instead of making
        that promise.
      </p>

      <h2>Retention</h2>
      <p>
        Account records are kept while the account exists. Generated AI artifacts
        that are no longer referenced are purged after 90 days. Data-export files
        are deleted after seven days; each download link expires after one hour.
        Operational caches and rate-limit records expire automatically. When an
        account deletion is requested, there is a 24-hour cancellation window;
        after it ends, the account identity and associated application rows are
        deleted. Residual encrypted backups are isolated from normal use and age
        out under the hosting provider’s backup cycle.
      </p>

      <h2>Choices and rights</h2>
      <p>
        The app provides <strong>You → Export my data</strong> and <strong>You →
        Delete account</strong>. Apple Health permissions can be changed in iOS
        Settings, and analytics can be disabled in the app. Depending on where
        the user lives, additional rights may include access, correction,
        portability, objection, withdrawal of consent, restriction, and complaint
        to a privacy regulator. We will verify a request before acting on it and
        will not discriminate for exercising a privacy right.
      </p>

      <h2>Children</h2>
      <p>
        Linnea is not directed to children under 13 and is not available where a
        higher minimum age for independent digital consent applies unless a
        parent or guardian provides legally valid consent. Contact support if a
        child’s account should be removed.
      </p>

      <h2>Changes and contact</h2>
      <p>
        Material changes will be dated and presented in the app before they take
        effect where notice is required. The controller and designated Privacy
        Officer is <strong>MINGJUN SUN</strong>, 106 Mattingly Way, Ontario K4M
        0C6, Canada. Privacy questions, complaints, and rights requests can be
        sent to <a href="mailto:mingjun.sun1991@gmail.com">mingjun.sun1991@gmail.com</a>.
        The in-app support route reaches the same monitored address. Washington
        consumer health requests follow the separate{" "}
        <Link href="/consumer-health">Consumer Health Data Policy</Link>.
      </p>
    </DocumentPage>
  );
}
