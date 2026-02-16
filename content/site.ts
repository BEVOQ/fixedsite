export const site = {
  brand: {
    name: "Algarve Luxury Studio",
    phone: "+351 000 000 000",
    whatsapp: "https://wa.me/351000000000",
    email: "hello@example.com",
    serviceArea: ["Lagos", "Portimão", "Albufeira", "Loulé", "Tavira"]
  },
  nav: {
    primary: [
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Microcement", href: "/microcement" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" }
    ],
    cta: "Request a site visit"
  },
  hero: {
    title: "Landscapes & finishes designed to feel inevitable.",
    subtitle:
      "We shape outdoor environments, renovate interiors, and apply microcement surfaces with a calm, architectural approach — across the Algarve.",
    image: "/demo/hero.jpg",
    ctaPrimaryLabel: "Request a site visit",
    ctaSecondaryLabel: "View projects"
  },
  servicesPreview: [
    {
      title: "Landscaping",
      desc: "Outdoor living, lighting, irrigation, stonework — tailored to your villa and climate.",
      href: "/services",
      image: "/demo/service-landscape.jpg"
    },
    {
      title: "Renovations",
      desc: "Refined upgrades, full remodels, and premium detailing — managed end-to-end.",
      href: "/services",
      image: "/demo/service-renovation.jpg"
    },
    {
      title: "Microcement",
      desc: "Seamless walls and floors with a tactile finish — bathrooms, kitchens, terraces.",
      href: "/microcement",
      image: "/demo/service-microcement.jpg"
    }
  ],
  focusShiftDemo: [
    {
      title: "Villa terrace lighting + stone",
      subtitle: "Warm ambience, precise detailing, and durable materials.",
      image: "/demo/portfolio-1.jpg"
    },
    {
      title: "Poolside microcement finish",
      subtitle: "Seamless transitions and a controlled sheen.",
      image: "/demo/portfolio-2.jpg"
    },
    {
      title: "Garden redesign",
      subtitle: "Planting palette tuned to Algarve sun and wind.",
      image: "/demo/portfolio-3.jpg"
    }
  ],
  footer: {
    brandLine: "Luxury landscaping • renovations • microcement — Algarve, Portugal"
  }
} as const;
