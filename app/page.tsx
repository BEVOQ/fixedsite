import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { StickyMediaStory } from "@/components/StickyMediaStory";
import { site } from "@/content/site";

const processSteps = [
  { title: "Discover", text: "Site visit, use-case review, and material moodboard aligned with your villa architecture." },
  { title: "Design", text: "Clear line items, timeline, and visual references so decisions stay confident and calm." },
  { title: "Deliver", text: "Craft-led execution with weekly updates, finishing checks, and clean handover." }
];

const testimonials = [
  "The team handled design decisions with real restraint. Nothing felt overworked, everything felt intentional.",
  "Communication was meticulous, and the microcement finish is the exact tone and texture we briefed.",
  "They translated an outdated terrace into a space we now use every evening. Premium from start to finish."
];

export default function Home() {
  return (
    <div>
      <Hero
        title={site.hero.title}
        subtitle={site.hero.subtitle}
        ctaPrimary={{ label: site.hero.ctaPrimaryLabel, href: "/contact" }}
        ctaSecondary={{ label: site.hero.ctaSecondaryLabel, href: "/portfolio" }}
      />

      <section className="lux-shell py-[var(--space-lg)]">
        <div className="lux-card grid gap-4 px-6 py-5 text-sm text-muted md:grid-cols-3 md:px-8">
          <p><span className="text-ink">Local Algarve expertise.</span> Climatic materials and detailing built for coastal wear.</p>
          <p><span className="text-ink">Insured & trusted teams.</span> Placeholder for certifications, warranties, and compliance badges.</p>
          <p><span className="text-ink">Process clarity.</span> Placeholder for milestone check-ins, schedules, and quality controls.</p>
        </div>
      </section>

      <section className="lux-shell py-[var(--space-xl)]">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted">Services</p>
          <h2 className="mt-3 text-4xl md:text-5xl leading-[1.06]">Premium exterior and interior upgrades, composed with restraint.</h2>
        </div>
        <div className="mt-[var(--space-lg)] grid gap-6 md:grid-cols-3">
          {site.servicesPreview.map((service) => (
            <Link key={service.title} href={service.href} className="lux-card group overflow-hidden">
              <div className="relative h-44">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl leading-tight">{service.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{service.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm lux-link">Explore<span aria-hidden>→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <StickyMediaStory
        eyebrow="Signature Story"
        title="Three service lines, one consistent standard of detail."
        chapters={[
          {
            id: "microcement",
            kicker: "Chapter 01",
            title: "Microcement surfaces with architectural continuity",
            body: "Bathrooms, kitchens, and pool edges are finished as one visual plane — controlled sheen, durable tactility, and clean transitions.",
            image: "/demo/service-microcement.jpg",
            alt: "Microcement finish detail"
          },
          {
            id: "landscape",
            kicker: "Chapter 02",
            title: "Landscapes tuned to Algarve sun and rhythm",
            body: "Stone, planting, and lighting are balanced for how you actually live outside — summer evenings, wind exposure, and low-maintenance routines.",
            image: "/demo/service-landscape.jpg",
            alt: "Premium Algarve landscaping"
          },
          {
            id: "handyman",
            kicker: "Chapter 03",
            title: "Handyman execution that protects the design intent",
            body: "From punch-list precision to discrete upgrades, every final detail is resolved with the same care as the headline renovation.",
            image: "/demo/service-renovation.jpg",
            alt: "Premium renovation craftsmanship"
          }
        ]}
      />

      <section className="lux-shell py-[var(--space-xl)]">
        <div className="lux-card flex flex-col gap-6 overflow-hidden p-7 md:flex-row md:items-center md:justify-between md:p-9">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted">Featured Work</p>
            <h2 className="mt-2 text-3xl md:text-4xl">Selected villas and interior transformations across the Algarve.</h2>
          </div>
          <Link href="/portfolio" className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm hover:-translate-y-0.5">Open portfolio</Link>
        </div>
      </section>

      <section className="lux-shell py-[var(--space-xl)]">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted">Process</p>
          <h2 className="mt-3 text-4xl md:text-5xl leading-[1.06]">Quiet structure behind every premium result.</h2>
        </div>
        <div className="mt-[var(--space-lg)] grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="lux-card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">0{index + 1}</p>
              <h3 className="mt-3 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lux-shell py-[var(--space-xl)]">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted">Testimonials</p>
          <h2 className="mt-3 text-4xl md:text-5xl leading-[1.06]">Client placeholders for social proof and trust.</h2>
        </div>
        <div className="mt-[var(--space-lg)] grid gap-6 md:grid-cols-3">
          {testimonials.map((quote) => (
            <blockquote key={quote} className="lux-card p-6 text-sm leading-relaxed text-muted">“{quote}”</blockquote>
          ))}
        </div>
      </section>

      <section className="lux-shell pb-[var(--space-2xl)] pt-[var(--space-lg)]">
        <div className="rounded-[var(--radius-lg)] border border-black/10 bg-ink px-6 py-10 text-white shadow-soft md:px-10 md:py-14">
          <p className="text-[0.7rem] uppercase tracking-[0.24em] text-white/70">Ready to begin</p>
          <h2 className="mt-3 max-w-3xl text-4xl leading-[1.02] md:text-5xl">Book a site visit and shape your next chapter with confidence.</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={site.brand.whatsapp} className="rounded-full bg-white px-5 py-3 text-sm text-ink hover:bg-white/90">WhatsApp us</Link>
            <Link href="/contact" className="rounded-full border border-white/30 px-5 py-3 text-sm hover:border-white/55">Contact studio</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
