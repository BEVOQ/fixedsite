"use client";

import { useEffect } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) {
      document.documentElement.removeAttribute("data-smooth-scroll");
      return;
    }

    document.documentElement.setAttribute("data-smooth-scroll", "enabled");
    return () => {
      document.documentElement.removeAttribute("data-smooth-scroll");
    };
  }, []);

  return <>{children}</>;
}
