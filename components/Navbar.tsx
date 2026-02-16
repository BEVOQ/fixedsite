"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { site } from "@/content/site";

export function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={clsx("sticky top-0 z-50 border-b transition-all", solid ? "border-black/10 bg-bg/85 backdrop-blur" : "border-transparent bg-transparent")}>
      <div className="lux-shell flex items-center justify-between py-4">
        <Link href="/" className="text-sm tracking-[0.08em] uppercase text-ink">
          {site.brand.name}
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {site.nav.primary.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="rounded-full border border-black/15 bg-white/70 px-4 py-2 text-sm hover:bg-white">
          {site.nav.cta}
        </Link>
      </div>
    </header>
  );
}
