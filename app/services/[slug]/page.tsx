import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQList } from "@/components/FAQList";
import { ServiceCTA } from "@/components/ServiceCTA";
import { serviceBySlug, services } from "@/content/services";
import { buildMetadata, serviceSchema } from "@/lib/seo";

type Params = { slug: keyof typeof serviceBySlug };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  if (!service) {
    return {};
  }

  return buildMetadata({
    title: `${service.title} | Algarve Luxury Studio`,
    description: service.shortDescription,
    path: `/services/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = serviceBySlug[slug];

  if (!service) {
    notFound();
  }

  const schema = serviceSchema(service.title, service.shortDescription, `/services/${service.slug}`);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.heroImage} alt={service.title} fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-bg" />
        </div>
        <div className="relative mx-auto px-5 py-20" style={{ maxWidth: "var(--maxw)" }}>
          <p className="text-xs uppercase tracking-[0.2em] text-white/75">Service</p>
          <h1 className="mt-3 text-4xl md:text-5xl text-white tracking-tight">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">{service.intro}</p>
        </div>
      </section>

      <section className="mx-auto px-5 py-16 grid gap-10 md:grid-cols-2" style={{ maxWidth: "var(--maxw)" }}>
        <div>
          <h2 className="text-2xl tracking-tight">What&apos;s included</h2>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            {service.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl tracking-tight">How we work</h2>
          <div className="mt-5 space-y-4">
            {service.process.map((step) => (
              <article key={step.title} className="rounded-xl border border-black/10 bg-white p-4">
                <h3 className="font-medium">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto px-5 pb-4" style={{ maxWidth: "var(--maxw)" }}>
        <h2 className="text-2xl tracking-tight">Frequently asked questions</h2>
        <FAQList items={service.faqs} />
        <ServiceCTA />
        <div className="mt-8 text-sm">
          <Link href="/portfolio" className="text-accent hover:opacity-80">See related projects →</Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
