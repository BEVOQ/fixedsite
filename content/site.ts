export const site = {
  name: "Luso Atelier Build",
  shortName: "Luso Atelier",
  url: "https://example.com",
  description:
    "Luxury landscaping, premium handyman services, and seamless microcement finishes for discerning Algarve properties.",
  contact: {
    phone: "+351 910 000 000",
    whatsapp: "https://wa.me/351910000000",
    email: "hello@lusoatelier.pt",
    addressLocality: "Algarve",
    addressCountry: "PT"
  },
  serviceArea: ["Lagos", "Portimão", "Albufeira", "Vilamoura", "Loulé", "Tavira"],
  nav: [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  hero: {
    eyebrow: "Algarve • Portugal",
    title: "Luxury outdoor and interior craftsmanship, delivered with precision.",
    subtitle:
      "From bespoke landscaping to high-spec handyman works and architectural microcement, we create elegant spaces that hold up beautifully in Algarve conditions."
  },
  trustSignals: [
    "Fully insured and licensed local team",
    "Transparent planning and weekly site reporting",
    "Premium materials selected for coastal durability"
  ],
  testimonials: [
    {
      quote:
        "The terrace and garden now feel like a boutique resort. Every line is clean, every finish intentional.",
      author: "Private Villa Owner",
      location: "Quinta do Lago"
    },
    {
      quote:
        "Their handyman division handled dozens of details flawlessly before season opening. Professional and calm throughout.",
      author: "Property Manager",
      location: "Lagos"
    }
  ],
  faqs: [
    {
      question: "Do you manage complete projects or only specific tasks?",
      answer:
        "Both. We can deliver complete design-build scopes or focused packages such as irrigation upgrades, microcement bathrooms, and premium punch-list works."
    },
    {
      question: "How quickly can you start in the Algarve?",
      answer:
        "For smaller jobs we can often begin within 1-2 weeks. For larger works, we provide a clear scheduling window after a site visit and scope definition."
    },
    {
      question: "Is microcement suitable for coastal homes?",
      answer:
        "Yes, when specified correctly and installed by specialists. We use proven systems and detail preparation to ensure long-term performance."
    }
  ],
  footer: "Luxury landscaping, handyman services, and microcement across the Algarve."
} as const;

export const services = [
  {
    slug: "landscaping",
    name: "Landscaping",
    short:
      "Structured gardens, terraces, planting, and lighting that elevate daily living and property value.",
    image: "/demo/service-landscape.svg",
    bullets: ["Garden masterplanning", "Hardscape and lighting", "Irrigation and maintenance strategy"]
  },
  {
    slug: "handyman",
    name: "Handyman",
    short:
      "Reliable premium maintenance and finishing works for villas, rentals, and managed properties.",
    image: "/demo/service-renovation.svg",
    bullets: ["Joinery and fixes", "Paint, silicone, and detailing", "Turnover-ready maintenance"]
  },
  {
    slug: "microcement",
    name: "Microcement",
    short:
      "Seamless, contemporary surfaces for bathrooms, kitchens, and outdoor transitions.",
    image: "/demo/service-microcement.svg",
    bullets: ["Walls, floors, and wet areas", "Custom texture and tone", "Specialist preparation and sealing"]
  }
] as const;

export const projects = [
  {
    slug: "cliffside-villa-garden",
    title: "Cliffside Villa Garden Redesign",
    category: "Landscaping",
    image: "/demo/portfolio-1.svg",
    summary: "A layered Mediterranean planting strategy with limestone terraces and ambient lighting."
  },
  {
    slug: "season-ready-property-upgrade",
    title: "Season-Ready Property Upgrade",
    category: "Handyman",
    image: "/demo/portfolio-3.svg",
    summary: "Rapid premium maintenance package across interiors, joinery, and exterior details."
  },
  {
    slug: "microcement-poolhouse-suite",
    title: "Microcement Poolhouse Suite",
    category: "Microcement",
    image: "/demo/portfolio-2.svg",
    summary: "Continuous microcement envelope from shower room to outdoor lounge threshold."
  }
] as const;
