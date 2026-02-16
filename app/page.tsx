import Image from "next/image";
import Link from "next/link";
import { BeforeAfterBlock } from "@/components/BeforeAfterBlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialBlock } from "@/components/TestimonialBlock";
import { projects, services, site } from "@/content/site";
import { buildMetadata } from "@/content/seo";

export const metadata = buildMetadata("Home", site.description, "/");

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  telephone: site.contact.phone,
  email: site.contact.email,
  areaServed: site.serviceArea,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.addressLocality,
    addressCountry: site.contact.addressCountry
  }
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <section className="relative overflow-hidden">
        <Image src="/demo/hero.svg" alt="Luxury Algarve construction detail" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-bg" />
        <div className="container-shell relative py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.22em] text-white/80">{site.hero.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[0.95] text-white md:text-7xl">{site.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 md:text-lg">{site.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Start your project</Link>
            <Link href="/projects" className="btn-secondary">View featured work</Link>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <ul className="grid gap-4 md:grid-cols-3">
          {site.trustSignals.map((signal) => (
            <li key={signal} className="card p-5 text-sm text-muted">{signal}</li>
          ))}
        </ul>
      </section>

      <section className="container-shell py-16">
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2 className="h2">A focused team for elegant, high-performing spaces.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} title={service.name} description={service.short} href={`/services/${service.slug}`} image={service.image} />
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="section-header">
          <p className="eyebrow">Featured projects</p>
          <h2 className="h2">Selected transformations across the Algarve.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} title={project.title} summary={project.summary} image={project.image} category={project.category} href={`/projects/${project.slug}`} />
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="section-header">
          <p className="eyebrow">Process</p>
          <h2 className="h2">Measured delivery from brief to handover.</h2>
        </div>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {["Site visit", "Detailed proposal", "Build and reporting", "Final walkthrough"].map((step, i) => (
            <li key={step} className="card p-5 text-sm"><span className="mr-2 text-muted">0{i + 1}</span>{step}</li>
          ))}
        </ol>
      </section>

      <section className="container-shell py-16">
        <div className="section-header">
          <p className="eyebrow">Before / After</p>
          <h2 className="h2">Clear proof of transformation.</h2>
        </div>
        <div className="mt-8">
          <BeforeAfterBlock beforeSrc="/demo/lights-off.svg" afterSrc="/demo/lights-on.svg" />
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {site.testimonials.map((testimonial) => (
            <TestimonialBlock key={testimonial.quote} quote={testimonial.quote} author={testimonial.author} location={testimonial.location} />
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="section-header">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2">Answers before your first visit.</h2>
        </div>
        <div className="mt-8">
          <FAQAccordion items={[...site.faqs]} />
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="card bg-ink p-10 text-white">
          <h2 className="text-4xl">Planning a project in the Algarve?</h2>
          <p className="mt-3 max-w-2xl text-white/75">Book a fast consultation by WhatsApp or send your brief for a structured proposal.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.contact.whatsapp} className="btn-primary">Message on WhatsApp</a>
            <Link href="/contact" className="btn-secondary border-white/30 text-white">Send your brief</Link>
          </div>
        </div>
      </section>
    </>
  );
}
