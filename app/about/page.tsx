import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About | Algarve Luxury Studio",
  description: "Our process-first approach to landscaping, handyman care, and microcement across Algarve homes.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="mx-auto px-5 py-16" style={{ maxWidth: "var(--maxw)" }}>
      <SectionHeader
        eyebrow="About"
        title="Built around process, not promises"
        subtitle="We partner with homeowners, investors, and villa managers who value clean execution and long-term quality."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Craft over chaos",
            text: "Every project starts with site reality: climate, circulation, wear patterns, and maintenance expectations."
          },
          {
            title: "Algarve-native decisions",
            text: "Materials and systems are selected for coastal exposure, sun intensity, and seasonal occupancy patterns."
          },
          {
            title: "Quality promise",
            text: "Clear scope, tidy sequencing, and detail-led finishes. We only hand over work we would install in our own homes."
          }
        ].map((item) => (
          <article key={item.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
            <h2 className="text-xl tracking-tight">{item.title}</h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">{item.text}</p>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-black/10 bg-surface p-8">
        <h2 className="text-2xl tracking-tight">Our 4-step delivery model</h2>
        <ol className="mt-5 grid gap-4 md:grid-cols-2 text-sm text-muted">
          <li>1. Discovery call + site visit.</li>
          <li>2. Scope and material recommendations.</li>
          <li>3. Sequenced execution and live updates.</li>
          <li>4. Handover with care guidance.</li>
        </ol>
      </section>
    </div>
  );
}
