import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Hero } from "@/components/Hero";
import { FocusShiftSection } from "@/components/FocusShiftSection";
import { LightsOnImage } from "@/components/LightsOnImage";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div>
      <Hero
        title={site.hero.title}
        subtitle={site.hero.subtitle}
        ctaPrimary={{ label: site.hero.ctaPrimaryLabel, href: "/contact" }}
        ctaSecondary={{ label: site.hero.ctaSecondaryLabel, href: "/portfolio" }}
      />

      <section className="mx-auto px-5 py-16" style={{ maxWidth: "var(--maxw)" }}>
        <SectionHeader
          eyebrow="Services"
          title="Outdoor spaces, interiors, and finishes — crafted with restraint."
          subtitle="Landscaping, renovations, and microcement executed with premium materials and clean detailing."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {site.servicesPreview.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-2xl bg-surface shadow-soft overflow-hidden border border-black/5"
            >
              <div className="relative h-44">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-sm inline-flex items-center gap-2 text-accent">
                  Explore <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto px-5 pb-4" style={{ maxWidth: "var(--maxw)" }}>
        <SectionHeader
          eyebrow="Interactive"
          title="Tap to reveal lighting — premium detail, not gimmick."
          subtitle="Replace the sample images with your real 'lights off' / 'lights on' pair."
        />
      </section>

      <section className="mx-auto px-5 pb-16" style={{ maxWidth: "var(--maxw)" }}>
        <LightsOnImage
          width={1400}
          height={800}
          alt="Outdoor lighting reveal demo"
          offSrc="/demo/lights-off.jpg"
          onSrc="/demo/lights-on.jpg"
          hotspots={[
            { id: "path", x: 0.68, y: 0.63, radius: 0.18 },
            { id: "pool", x: 0.35, y: 0.62, radius: 0.14 }
          ]}
        />
      </section>

      <section className="mx-auto px-5 pb-20" style={{ maxWidth: "var(--maxw)" }}>
        <SectionHeader
          eyebrow="Scroll"
          title="Focus-shift portfolio teaser"
          subtitle="As you scroll, the center card becomes crisp and active."
        />
        <div className="mt-10">
          <FocusShiftSection items={site.focusShiftDemo} />
        </div>
      </section>

      <footer className="border-t border-black/10">
        <div className="mx-auto px-5 py-10 text-sm text-muted" style={{ maxWidth: "var(--maxw)" }}>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>{site.footer.brandLine}</div>
            <div className="flex gap-4">
              <Link className="hover:text-ink transition-colors" href="/privacy">Privacy</Link>
              <Link className="hover:text-ink transition-colors" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
