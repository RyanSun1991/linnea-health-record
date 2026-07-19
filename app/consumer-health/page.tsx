import type { Metadata } from "next";
import { DocumentPage } from "../components/document-page";

export const metadata: Metadata = {
  title: "Consumer health data policy",
  description: "Linnea’s consumer health data notice and Washington privacy rights.",
};

export default function ConsumerHealthPolicyPage() {
  return (
    <DocumentPage
      activePath="/consumer-health"
      title="Consumer health data policy"
      version="1.1"
    >
      <p className="lede">
        This notice supplements the Linnea Privacy Policy. It describes consumer
        health data practices and the rights provided by laws such as the
        Washington My Health My Data Act.
      </p>

      <h2>Consumer health data collected</h2>
      <p>
        Linnea may handle wellness profile details; food, water, medication,
        supplement, exercise, sleep, and wellbeing logs; photos or voice
        recordings submitted for logging; daily Apple Health aggregates; Today
        scores and trends; and inferences returned by requested AI features. Raw
        Apple Health samples remain on the device and are not collected by the
        service.
      </p>

      <h2>Sources</h2>
      <p>
        Data comes directly from the user, from Apple Health after device-level
        permission, from calculations performed by the app, and from service
        providers that return a requested transcription or AI result.
      </p>

      <h2>Why it is collected and used</h2>
      <ul>
        <li>Provide the log, score, trend, reminder, plan, and export features requested by the user.</li>
        <li>Synchronize records across reinstalls and authorized devices.</li>
        <li>Generate requested AI-assisted wellness information.</li>
        <li>Secure, debug, and operate the service and respond to support requests.</li>
      </ul>
      <p>
        Linnea does not use consumer health data for targeted advertising,
        profiling unrelated to the requested service, or decisions about credit,
        employment, insurance, housing, or healthcare eligibility.
      </p>

      <h2>Sharing</h2>
      <p>
        Consumer health data is shared only as needed with processors: Supabase
        for hosting and authentication; OpenAI and Anthropic for user-requested AI
        or transcription functions; Apple for app-platform and subscription
        functions; and scrubbed diagnostic providers when enabled. We may make a
        legally required disclosure or a safeguarded business transfer. Linnea
        does not sell consumer health data.
      </p>

      <h2>Rights</h2>
      <p>
        A consumer may request confirmation of collection or sharing, access to
        the data and a list of third parties or affiliates that received it,
        correction, withdrawal of consent, or deletion. Deletion requests extend
        to processors and ordinary backups as required by applicable law. The app
        also provides direct export and account-deletion controls.
      </p>
      <p>
        Send a request to{" "}
        <a href="mailto:mingjun.sun1991@gmail.com">mingjun.sun1991@gmail.com</a>
        with “Consumer Health Data Request” in the subject. We may request enough
        information to verify control of the account. If a request is denied, the
        response will explain why and how to appeal. Appeal by replying with
        “Privacy Appeal”; the appeal will be reviewed by a different decision
        maker where feasible. A Washington resident may contact the Washington
        Attorney General if an appeal remains unresolved.
      </p>
      <p>
        The controller and designated Privacy Officer is <strong>MINGJUN SUN</strong>,
        106 Mattingly Way, Ontario K4M 0C6, Canada.
      </p>

      <h2>Consent and changes</h2>
      <p>
        Apple Health access is optional and controlled through iOS permissions.
        Optional AI features run only after the user submits a request. Materially
        different uses require notice and any consent required by law. Updates to
        this notice will carry a new effective date.
      </p>
    </DocumentPage>
  );
}
