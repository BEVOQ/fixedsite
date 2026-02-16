import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { SectionHeader } from "@/components/SectionHeader";
import { portfolioProjects } from "@/content/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio | Algarve Luxury Studio",
  description: "Selected landscaping, handyman, and microcement transformations across Algarve properties.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  const featured = portfolioProjects[0];

  return (
    <div className="mx-auto px-5 py-16" style={{ maxWidth: "var(--maxw)" }}>
      <SectionHeader
        eyebrow="Portfolio"
        title="Proof of craft"
        subtitle="A data-driven scaffold ready for real photo case studies as your project archive grows."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {portfolioProjects.map((project) => (
          <article key={project.slug} className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-soft">
            <div className="relative h-44">
              <Image src={project.coverImage} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">{project.location} · {project.service}</p>
              <h2 className="mt-2 text-lg tracking-tight">{project.title}</h2>
              <p className="mt-2 text-sm text-muted">{project.summary}</p>
              <Link href={`/portfolio/${project.slug}`} className="mt-4 inline-flex text-sm text-accent hover:opacity-80">
                View project →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-2xl tracking-tight">Before / after highlight</h2>
        <p className="mt-2 text-sm text-muted">Use this lightweight comparator to communicate visual impact without heavy scripts.</p>
        <div className="mt-6 max-w-3xl">
          <BeforeAfter beforeSrc={featured.beforeImage} afterSrc={featured.afterImage} alt={featured.title} />
        </div>
      </section>
    </div>
  );
}
