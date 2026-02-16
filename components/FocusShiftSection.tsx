"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Minimal “focus shift” section:
 * - Cards are in a vertical stack.
 * - As scroll progresses, the closest-to-center card becomes active (opacity/scale).
 * - This is a starter implementation; refine based on /docs/MOTION.md.
 */
export function FocusShiftSection({
  items
}: {
  items: ReadonlyArray<{ title: string; subtitle: string; image: string }>;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-card]"));
    if (!cards.length) return;

    const update = () => {
      const center = window.innerHeight / 2;
      let bestIdx = 0;
      let bestDist = Infinity;

      cards.forEach((c, idx) => {
        const r = c.getBoundingClientRect();
        const cCenter = r.top + r.height / 2;
        const d = Math.abs(cCenter - center);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = idx;
        }
      });

      cards.forEach((c, idx) => {
        const active = idx === bestIdx;
        gsap.to(c, {
          opacity: active ? 1 : 0.55,
          scale: active ? 1 : 0.985,
          filter: active ? "blur(0px)" : "blur(1px)",
          duration: 0.35,
          ease: "power2.out"
        });
      });
    };

    const st = ScrollTrigger.create({
      trigger: root,
      start: "top bottom",
      end: "bottom top",
      onUpdate: update
    });

    update();
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
      st.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className="grid gap-6">
      {items.map((it, i) => (
        <article
          key={i}
          data-card
          className="rounded-2xl overflow-hidden border border-black/10 bg-surface shadow-soft"
        >
          <div className="relative h-56 md:h-64">
            <Image
              src={it.image}
              alt={it.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1180px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-medium tracking-tight">{it.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{it.subtitle}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
