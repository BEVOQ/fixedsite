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
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    cta: "Request a site visit"
  },
  hero: {
    title: "Landscapes & finishes designed to feel inevitable.",
    subtitle:
      "We shape outdoor environments, maintain premium properties, and apply microcement surfaces with a calm architectural approach across the Algarve.",
    image: "/demo/hero.jpg",
    ctaPrimaryLabel: "Request a site visit",
    ctaSecondaryLabel: "View projects"
  },
  servicesPreview: [
    {
      title: "Landscaping",
      desc: "Outdoor living, lighting, irrigation, stonework — tailored to your villa and climate.",
      href: "/services/landscaping",
      image: "/demo/service-landscape.jpg"
    },
    {
      title: "Handyman",
      desc: "Reliable fixes and upgrades with premium execution for owners and rental managers.",
      href: "/services/handyman",
      image: "/demo/portfolio-3.jpg"
    },
    {
      title: "Microcement",
      desc: "Seamless walls and floors with a tactile finish — bathrooms, kitchens, terraces.",
      href: "/services/microcement-finishes",
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
    brandLine: "Luxury landscaping • handyman • microcement — Algarve, Portugal"
  }
} as const;
