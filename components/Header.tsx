import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-bg/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight focus-ring">
          {site.shortName}
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted transition hover:text-ink focus-ring">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary text-sm">
          Request a visit
        </Link>
      </div>
    </header>
  );
}
