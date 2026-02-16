import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/site";
import { buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(
  "Projects",
  "Portfolio of landscaping, handyman upgrades, and microcement projects completed across the Algarve.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <section className="container-shell py-16">
      <p className="eyebrow">Projects</p>
      <h1 className="h1 mt-4">Portfolio of crafted outcomes.</h1>
      <p className="mt-5 max-w-3xl text-muted">This gallery scaffold is designed for quick replacement with real case studies, process notes, and final photography.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} title={project.title} summary={project.summary} image={project.image} category={project.category} href={`/projects/${project.slug}`} />
        ))}
      </div>
    </section>
  );
}
