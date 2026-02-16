import { buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(
  "Landscaping",
  "Bespoke Algarve landscaping with hardscape, planting palettes, irrigation, and luxury outdoor lighting.",
  "/services/landscaping"
);

export default function LandscapingPage() {
  return (
    <section className="container-shell py-16">
      <p className="eyebrow">Landscaping</p>
      <h1 className="h1 mt-4">Architectural outdoor spaces tailored to Algarve climate.</h1>
      <div className="mt-8 card p-8">
        <p className="text-muted">Placeholder premium copy area: concept design, planting strategy, lighting, irrigation, and execution standards.</p>
      </div>
    </section>
  );
}
