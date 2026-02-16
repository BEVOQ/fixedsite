import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy | Algarve Luxury Studio",
  description: "How Algarve Luxury Studio handles website enquiries and personal information.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto px-5 py-16" style={{ maxWidth: "var(--maxw)" }}>
      <SectionHeader
        eyebrow="Privacy"
        title="Privacy policy"
        subtitle="We only collect details needed to respond to project enquiries and never sell personal data."
      />
      <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 text-sm text-muted leading-relaxed">
        <p>When you submit the contact form, we store your name, email, and project message to respond to your request.</p>
        <p className="mt-3">If email delivery is configured, your message is routed through our email provider with secure transport.</p>
        <p className="mt-3">You can request deletion of your enquiry data at any time by contacting us directly.</p>
      </div>
    </div>
  );
}
