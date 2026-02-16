import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
import { buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(
  "Contact",
  "Book a consultation for landscaping, handyman, or microcement works in the Algarve.",
  "/contact"
);

export default function ContactPage() {
  return (
    <section className="container-shell py-16">
      <p className="eyebrow">Contact</p>
      <h1 className="h1 mt-4">Fast route to scope, schedule, and pricing.</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="card p-6">
            <p className="text-sm text-muted">WhatsApp (fastest)</p>
            <a className="mt-2 inline-flex text-lg font-medium focus-ring" href={site.contact.whatsapp}>
              Start a WhatsApp chat
            </a>
          </div>
          <div className="card p-6">
            <p className="text-sm text-muted">Email</p>
            <a className="mt-2 inline-flex text-lg font-medium focus-ring" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
