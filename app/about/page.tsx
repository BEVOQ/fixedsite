import { buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(
  "About",
  "Meet the Algarve construction specialists behind Luso Atelier Build and our approach to premium project execution.",
  "/about"
);

export default function AboutPage() {
  return (
    <section className="container-shell py-16">
      <p className="eyebrow">About</p>
      <h1 className="h1 mt-4">A disciplined team built around detail and trust.</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-7 text-muted">
          We are a local Algarve team combining landscaping, premium handyman operations, and specialist microcement expertise.
          Our workflow is intentionally transparent: scoped proposals, predictable timelines, and meticulous site standards.
        </div>
        <div className="card p-7 text-muted">
          Placeholder content block for founder story, certifications, insurance details, and partner network. Replace this with real
          credibility signals as assets become available.
        </div>
      </div>
    </section>
  );
}
