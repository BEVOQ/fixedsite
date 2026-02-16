import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export function ServiceCard({ title, description, href, image }: ServiceCardProps) {
  return (
    <article className="card group overflow-hidden">
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium tracking-tight">{title}</h3>
        <p className="mt-3 text-sm text-muted">{description}</p>
        <Link href={href} className="mt-5 inline-flex text-sm font-medium text-accent focus-ring">
          Explore service →
        </Link>
      </div>
    </article>
  );
}
