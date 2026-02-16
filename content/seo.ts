import type { Metadata } from "next";
import { site } from "@/content/site";

export function buildMetadata(title: string, description: string, path = ""): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const url = `${site.url}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [{ url: "/demo/hero.svg", width: 1200, height: 630, alt: site.name }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/demo/hero.svg"]
    }
  };
}
