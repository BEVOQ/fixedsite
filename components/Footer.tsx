import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <div className="container-shell grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-medium">{site.name}</p>
          <p className="mt-2 text-sm text-muted">{site.footer}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Areas</p>
          <p className="mt-2 text-sm text-muted">{site.serviceArea.join(" • ")}</p>
        </div>
        <div className="text-sm">
          <p>
            <a className="focus-ring text-muted hover:text-ink" href={`tel:${site.contact.phone}`}>
              {site.contact.phone}
            </a>
          </p>
          <p className="mt-2">
            <a className="focus-ring text-muted hover:text-ink" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
          </p>
          <p className="mt-3">
            <Link href="/privacy" className="focus-ring text-muted hover:text-ink">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
