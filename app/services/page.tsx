import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/content/site";
import { buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(
  "Services",
  "Explore luxury landscaping, high-end handyman support, and microcement services in Algarve properties.",
  "/services"
);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.name,
    description: service.short
  }))
};

export default function ServicesPage() {
  return (
    <section className="container-shell py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <p className="eyebrow">Services</p>
      <h1 className="h1 mt-4">Specialist delivery for premium Algarve homes.</h1>
      <p className="mt-5 max-w-3xl text-muted">
        Choose a focused service line or combine scopes into one coordinated project. Every package is designed around durability,
        visual calm, and transparent execution.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} title={service.name} description={service.short} href={`/services/${service.slug}`} image={service.image} />
        ))}
      </div>
    </section>
  );
}
