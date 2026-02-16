import { buildMetadata } from "@/content/seo";

export const metadata = buildMetadata("Privacy", "Privacy policy and contact data handling for Luso Atelier Build.", "/privacy");

export default function PrivacyPage() {
  return (
    <section className="container-shell py-16">
      <h1 className="h1">Privacy Policy</h1>
      <div className="card mt-8 p-8 text-sm text-muted">
        Placeholder policy copy. Replace with legal text covering data collection, storage, processing, and contact-form retention.
      </div>
    </section>
  );
}
