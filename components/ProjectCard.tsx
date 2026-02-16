import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  summary: string;
  image: string;
  category: string;
  href: string;
};

export function ProjectCard({ title, summary, image, category, href }: ProjectCardProps) {
  return (
    <article className="card group overflow-hidden">
      <div className="relative h-56">
        <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">{category}</p>
        <h3 className="mt-2 text-xl tracking-tight">{title}</h3>
        <p className="mt-3 text-sm text-muted">{summary}</p>
        <Link href={href} className="mt-5 inline-flex text-sm font-medium text-accent focus-ring">
          View project →
        </Link>
      </div>
    </article>
  );
}
