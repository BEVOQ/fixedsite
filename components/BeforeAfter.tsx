"use client";

import { useId, useState } from "react";
import Image from "next/image";

export function BeforeAfter({ beforeSrc, afterSrc, alt }: { beforeSrc: string; afterSrc: string; alt: string }) {
  const [position, setPosition] = useState(50);
  const clipPath = `inset(0 ${100 - position}% 0 0)`;
  const id = useId();

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-black/5">
        <Image src={beforeSrc} alt={`${alt} before`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute inset-0" style={{ clipPath }}>
          <Image src={afterSrc} alt={`${alt} after`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="absolute inset-y-0 w-0.5 bg-white/80" style={{ left: `${position}%` }} />
      </div>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.16em] text-muted">Before / After</label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="w-full"
      />
    </div>
  );
}
