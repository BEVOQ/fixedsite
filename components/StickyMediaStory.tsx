"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

type StoryChapter = {
  id: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  kicker?: string;
};

export function StickyMediaStory({
  eyebrow,
  title,
  chapters
}: {
  eyebrow: string;
  title: string;
  chapters: StoryChapter[];
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const chapterRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReduceMotion(query.matches);
    syncPreference();
    query.addEventListener("change", syncPreference);
    return () => query.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number((entry.target as HTMLElement).dataset.chapterIndex ?? 0);
          setActiveIndex(idx);
        });
      },
      { threshold: 0.55, rootMargin: "-10% 0px -20% 0px" }
    );

    chapterRefs.current.forEach((chapter) => chapter && obs.observe(chapter));
    return () => obs.disconnect();
  }, [chapters.length]);

  useEffect(() => {
    if (reduceMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    let running = false;
    const inViewObserver = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) {
          frame = requestAnimationFrame(tick);
        } else {
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0 }
    );

    const tick = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height + viewport;
      const travelled = viewport - rect.top;
      const normalized = Math.min(1, Math.max(0, travelled / total));
      setScrollProgress(normalized);
      if (running) frame = requestAnimationFrame(tick);
    };

    inViewObserver.observe(section);

    return () => {
      inViewObserver.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  const driftY = useMemo(() => {
    if (reduceMotion) return 0;
    return (scrollProgress - 0.5) * 22;
  }, [reduceMotion, scrollProgress]);

  return (
    <section ref={sectionRef} className="lux-shell py-[var(--space-2xl)]">
      <div className="max-w-3xl">
        <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted">{eyebrow}</p>
        <h2 className="mt-3 text-4xl md:text-5xl leading-[1.04]">{title}</h2>
      </div>

      <div className="mt-[var(--space-xl)] grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-10">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              data-chapter-index={index}
              ref={(node) => {
                chapterRefs.current[index] = node;
              }}
              className={clsx(
                "rounded-[var(--radius-md)] border border-black/5 bg-white/65 p-6 backdrop-blur-sm transition-opacity duration-500",
                activeIndex === index ? "opacity-100" : "opacity-55"
              )}
            >
              {chapter.kicker ? (
                <p className="text-xs uppercase tracking-[0.22em] text-accent">{chapter.kicker}</p>
              ) : null}
              <h3 className="mt-2 text-2xl leading-tight">{chapter.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{chapter.body}</p>
            </article>
          ))}
        </div>

        <div className="lg:sticky lg:top-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-black/10 bg-surface shadow-soft">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.id}
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  transform: `translate3d(0, ${activeIndex === index ? driftY : 0}px, 0)`
                }}
              >
                <Image
                  src={chapter.image}
                  alt={chapter.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
