import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BeforeAfter } from "@/components/BeforeAfter";
import { portfolioBySlug, portfolioProjects } from "@/content/portfolio";
import { buildMetadata } from "@/lib/seo";

type Params = { slug: string };

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioBySlug[slug as keyof typeof portfolioBySlug];
  if (!project) {
    return {};
  }

  return buildMetadata({
    title: `${project.title} | Portfolio`,
    description: project.summary,
    path: `/portfolio/${project.slug}`
  });
}

export default async function PortfolioDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = portfolioBySlug[slug as keyof typeof portfolioBySlug];

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto px-5 py-16" style={{ maxWidth: "var(--maxw)" }}>
      <p className="text-xs uppercase tracking-[0.18em] text-muted">{project.location} · {project.service}</p>
      <h1 className="mt-3 text-4xl tracking-tight">{project.title}</h1>
      <p className="mt-4 max-w-2xl text-muted leading-relaxed">{project.summary}</p>

      <div className="mt-8 relative h-80 rounded-2xl overflow-hidden border border-black/10">
        <Image src={project.coverImage} alt={project.title} fill className="object-cover" sizes="100vw" />
      </div>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl tracking-tight">Project scope</h2>
          <ul className="mt-3 text-sm text-muted space-y-2">
            {project.scope.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl tracking-tight">Outcome</h2>
          <p className="mt-3 text-sm text-muted">{project.outcome}</p>
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <BeforeAfter beforeSrc={project.beforeImage} afterSrc={project.afterImage} alt={project.title} />
      </section>

      <Link href="/contact" className="mt-10 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-white">Start a similar project</Link>
    </article>
  );
}
