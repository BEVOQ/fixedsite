import Link from "next/link";
import { site } from "@/content/site";

export function ServiceCTA() {
  return (
    <section className="mt-12 rounded-2xl border border-black/10 bg-surface p-8 shadow-soft">
      <h2 className="text-2xl tracking-tight">Ready to plan your project?</h2>
      <p className="mt-3 text-sm text-muted max-w-2xl">
        Share your property, timeline, and goals. We&apos;ll recommend the right approach and propose next steps.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={site.brand.whatsapp} className="rounded-full bg-ink px-5 py-2.5 text-sm text-white hover:opacity-90 transition-opacity">
          WhatsApp us
        </Link>
        <Link href="/contact" className="rounded-full border border-black/15 px-5 py-2.5 text-sm hover:bg-white transition-colors">
          Request a site visit
        </Link>
      </div>
    </section>
  );
}
