import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Algarve Luxury Studio",
  description: "Landscaping, handyman care, and microcement finishes for premium Algarve properties.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <div className="mx-auto px-5 py-16" style={{ maxWidth: "var(--maxw)" }}>
      <SectionHeader
        eyebrow="Services"
        title="Crafted work for Algarve homes"
        subtitle="Choose the service pathway that matches your property goals, timeline, and finish standards."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-soft">
            <div className="relative h-48">
              <Image src={service.heroImage} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-6">
              <h2 className="text-xl tracking-tight">{service.title}</h2>
              <p className="mt-3 text-sm text-muted leading-relaxed">{service.shortDescription}</p>
              <Link href={`/services/${service.slug}`} className="mt-5 inline-flex text-sm text-accent hover:opacity-80">
                View service details →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
