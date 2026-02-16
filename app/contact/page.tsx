import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Algarve Luxury Studio",
  description: "Request a site visit, message us on WhatsApp, or send a project brief.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="mx-auto px-5 py-16" style={{ maxWidth: "var(--maxw)" }}>
      <SectionHeader
        eyebrow="Contact"
        title="Let&apos;s scope your project"
        subtitle="Send a brief and we&apos;ll come back with practical next steps, timeline range, and the right service pathway."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr,1.1fr]">
        <aside className="rounded-2xl border border-black/10 bg-surface p-6">
          <h2 className="text-xl tracking-tight">Fastest ways to reach us</h2>
          <div className="mt-5 space-y-3 text-sm">
            <p>
              <strong>WhatsApp:</strong>{" "}
              <Link href={site.brand.whatsapp} className="text-accent hover:opacity-80">Start chat</Link>
            </p>
            <p><strong>Email:</strong> {site.brand.email}</p>
            <p><strong>Service area:</strong> {site.brand.serviceArea.join(", ")}</p>
          </div>
          <p className="mt-6 text-xs text-muted">We usually reply within one business day.</p>
        </aside>
        <ContactForm />
      </div>
    </div>
  );
}
