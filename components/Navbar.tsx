"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { site } from "@/content/site";

export function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-colors",
        solid ? "bg-bg/80 backdrop-blur border-b border-black/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto px-5 py-4 flex items-center justify-between" style={{ maxWidth: "var(--maxw)" }}>
        <Link href="/" className="tracking-tight font-medium">
          {site.brand.name}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {site.nav.primary.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-ink transition-colors">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm rounded-full px-4 py-2 border border-black/10 bg-surface hover:bg-white transition-colors"
          >
            {site.nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
