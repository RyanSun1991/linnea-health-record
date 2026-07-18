import type { Metadata } from "next";
import { DocumentPage } from "../components/document-page";

export const metadata: Metadata = {
  title: "AI notices",
  description:
    "Versioned informational notices displayed with Linnea's AI-assisted content.",
};

const notices = [
  {
    scope: "Meal plans",
    version: "v1.0.2026-04",
    text: "AI-generated guidance. Not medical advice. Consult your prescriber before changing your GLP-1 regimen.",
  },
  {
    scope: "Weekly digests",
    version: "v1.0.2026-04",
    text: "AI-generated weekly summary. Patterns only — not a clinical report. Your prescriber has the final word.",
  },
  {
    scope: "News summaries",
    version: "v1.0.2026-04",
    text: "AI-summarized external content. Headlines paraphrased, not verified. Check the source before acting.",
  },
  {
    scope: "Fitness suggestions",
    version: "v1.0.2026-04",
    text: "AI-suggested movement ideas. Not a prescribed workout plan. Modify or skip if anything feels off.",
  },
  {
    scope: "Today score explanations",
    version: "v2.0.2026-05",
    text: "Today score is a behavioral wellness observation, not medical guidance. Discuss persistent changes with your clinician.",
  },
  {
    scope: "Parsed intake reviews",
    version: "v2.0.2026-05",
    text: "AI-parsed entry. Confirm what you actually had — calorie + macro estimates are approximate, not lab-grade nutrition.",
  },
  {
    scope: "Today suggestions",
    version: "v2.0.2026-05",
    text: "Suggested next steps based on your recent inputs. Not a treatment plan; skip anything that feels off.",
  },
] as const;

export default function DisclaimersPage() {
  return (
    <DocumentPage activePath="/disclaimers" title="AI notices" version="1.0">
      <p className="lede">
        Linnea places a version stamp and an informational notice beside each
        AI-assisted artifact. These notices define the limits of the content;
        they do not replace the more detailed Privacy Policy or Terms of Service.
      </p>

      <aside className="health-limit">
        <strong>Linnea is not a medical device.</strong> AI-assisted content is
        informational only. It does not diagnose, prescribe, or recommend
        medication or dosage changes.
      </aside>

      {notices.map((notice) => (
        <section key={notice.scope}>
          <h2>{notice.scope}</h2>
          <p className="document-meta">{notice.version}</p>
          <p>{notice.text}</p>
        </section>
      ))}
    </DocumentPage>
  );
}
