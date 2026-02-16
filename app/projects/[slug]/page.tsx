import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container-shell py-16">
      <p className="eyebrow">{project.category}</p>
      <h1 className="h1 mt-4">{project.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{project.summary}</p>
      <div className="relative mt-10 h-[26rem] overflow-hidden rounded-3xl">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <div className="mt-8 card p-8 text-sm text-muted">
        Project detail pattern placeholder: challenge, scope, process, and measurable result blocks.
      </div>
    </article>
  );
}
