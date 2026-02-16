import { buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(
  "Handyman",
  "Premium handyman services for Algarve villas and rental properties with reliable execution and finish quality.",
  "/services/handyman"
);

export default function HandymanPage() {
  return (
    <section className="container-shell py-16">
      <p className="eyebrow">Handyman</p>
      <h1 className="h1 mt-4">Reliable finishing works for properties that must stay guest-ready.</h1>
      <div className="mt-8 card p-8">
        <p className="text-muted">Placeholder premium copy area: proactive maintenance, repairs, detailing, and owner reporting.</p>
      </div>
    </section>
  );
}
