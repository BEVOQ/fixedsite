import { buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(
  "Microcement",
  "Specialist microcement applications in Algarve homes for seamless luxury finishes across wet and dry zones.",
  "/services/microcement"
);

export default function MicrocementServicePage() {
  return (
    <section className="container-shell py-16">
      <p className="eyebrow">Microcement</p>
      <h1 className="h1 mt-4">Seamless surfaces with controlled texture and long-term resilience.</h1>
      <div className="mt-8 card p-8">
        <p className="text-muted">Placeholder premium copy area: substrate preparation, custom tone selection, sealing systems, and aftercare.</p>
      </div>
    </section>
  );
}
