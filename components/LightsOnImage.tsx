"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

/**
 * Luxury-friendly "lights on" reveal:
 * - Two images: offSrc (base) and onSrc (lit)
 * - Clicking a hotspot reveals the lit layer via an SVG radial mask
 *
 * Replace demo images in /public/demo and tune hotspots in content.
 */
export function LightsOnImage({
  offSrc,
  onSrc,
  alt,
  width,
  height,
  hotspots
}: {
  offSrc: string;
  onSrc: string;
  alt: string;
  width: number;
  height: number;
  hotspots: Array<{ id: string; x: number; y: number; radius: number }>; // x,y,radius are 0..1 relative
}) {
  const [active, setActive] = useState<string | null>(hotspots[0]?.id ?? null);

  const activeHotspot = useMemo(
    () => hotspots.find((h) => h.id === active) ?? hotspots[0],
    [active, hotspots]
  );

  const maskId = useMemo(() => `mask-${Math.random().toString(16).slice(2)}`, []);

  return (
    <div className="rounded-2xl overflow-hidden border border-black/10 bg-surface shadow-soft">
      <div className="relative" style={{ aspectRatio: `${width} / ${height}` }}>
        <Image
          src={offSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 1180px"
          priority={false}
        />

        {/* Lit layer with mask */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
          <defs>
            <mask id={maskId}>
              <rect x="0" y="0" width={width} height={height} fill="black" />
              {activeHotspot ? (
                <circle
                  cx={activeHotspot.x * width}
                  cy={activeHotspot.y * height}
                  r={activeHotspot.radius * Math.min(width, height)}
                  fill="white"
                />
              ) : null}
            </mask>
          </defs>

          <foreignObject x="0" y="0" width={width} height={height} mask={`url(#${maskId})`}>
            <div className="relative h-full w-full">
              {/* Soft glow overlay to feel premium */}
              <div className="absolute inset-0 bg-white/0" />
              {/* On image */}
              <Image
                src={onSrc}
                alt=""
                fill
                className="object-cover transition-opacity duration-700"
                sizes="(max-width: 900px) 100vw, 1180px"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
            </div>
          </foreignObject>
        </svg>

        {/* Hotspots */}
        <div className="absolute inset-0">
          {hotspots.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={() => setActive(h.id)}
              aria-label={`Reveal lighting: ${h.id}`}
              className={[
                "absolute -translate-x-1/2 -translate-y-1/2",
                "h-10 w-10 rounded-full",
                "bg-white/10 border border-white/30 backdrop-blur",
                "hover:bg-white/15 hover:border-white/45 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-white/60"
              ].join(" ")}
              style={{ left: `${h.x * 100}%`, top: `${h.y * 100}%` }}
            >
              <span className="block h-2 w-2 rounded-full bg-white/70 mx-auto" />
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 flex items-center justify-between gap-3">
        <div className="text-sm text-muted">Tap points to reveal lighting.</div>
        <button
          type="button"
          className="text-sm rounded-full px-4 py-2 border border-black/10 bg-bg hover:bg-white transition-colors"
          onClick={() => setActive(null)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
