"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

export function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary
}: {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={site.hero.image} alt="Algarve luxury landscape" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-bg/95" />
      </div>

      <div className="lux-shell relative pb-[var(--space-2xl)] pt-28 md:pt-36">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.95, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.26em] text-white/80">Algarve • Portugal</p>
          <h1 className="mt-5 text-5xl leading-[0.96] text-white md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">{subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={ctaPrimary.href} className="rounded-full bg-white px-6 py-3 text-sm text-ink hover:bg-white/92">
              {ctaPrimary.label}
            </Link>
            <Link href={ctaSecondary.href} className="rounded-full border border-white/30 px-6 py-3 text-sm text-white hover:border-white/60">
              {ctaSecondary.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
