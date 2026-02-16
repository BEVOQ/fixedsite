import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export function absoluteUrl(path = "") {
  return new URL(path, baseUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: "Algarve Luxury Studio",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Algarve Luxury Studio",
    areaServed: ["Lagos", "Portimão", "Albufeira", "Loulé", "Tavira"],
    telephone: "+351 000 000 000",
    email: "hello@example.com",
    url: baseUrl,
    description:
      "Premium landscaping, handyman services, and microcement finishes across Algarve properties.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Algarve",
      addressCountry: "PT"
    }
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      name: "Algarve Luxury Studio",
      areaServed: "Algarve"
    },
    description,
    url: absoluteUrl(path)
  };
}
