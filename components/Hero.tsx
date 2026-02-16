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
        <Image
          src={site.hero.image}
          alt="Algarve luxury landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-bg/90" />
      </div>

      <div className="relative mx-auto px-5 pt-20 pb-16 md:pt-28 md:pb-24" style={{ maxWidth: "var(--maxw)" }}>
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-2xl"
        >
          <div className="text-xs tracking-[0.22em] uppercase text-white/80">Algarve • Portugal</div>
          <h1 className="mt-4 text-4xl md:text-6xl leading-[1.02] tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-5 text-sm md:text-base text-white/75 leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={ctaPrimary.href}
              className="rounded-full px-5 py-2.5 bg-white text-ink text-sm hover:bg-white/90 transition-colors"
            >
              {ctaPrimary.label}
            </Link>
            <Link
              href={ctaSecondary.href}
              className="rounded-full px-5 py-2.5 border border-white/25 text-white text-sm hover:border-white/45 transition-colors"
            >
              {ctaSecondary.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
