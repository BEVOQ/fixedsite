export type FaqItem = {
  q: string;
  a: string;
};

export type ServiceItem = {
  slug: "landscaping" | "handyman" | "microcement-finishes";
  title: string;
  shortDescription: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  process: { title: string; text: string }[];
  faqs: FaqItem[];
};

export const services: ServiceItem[] = [
  {
    slug: "landscaping",
    title: "Landscaping & Outdoor Living",
    shortDescription:
      "Climate-smart gardens, terraces, poolsides, lighting and stone detailing designed for elegant everyday living.",
    heroImage: "/demo/service-landscape.jpg",
    intro:
      "From first sketch to final planting, we shape outside spaces that feel calm, durable, and intentional in Algarve sun, wind, and coastal conditions.",
    highlights: [
      "Garden concept + material palette",
      "Irrigation, drainage, and low-maintenance planting",
      "Natural stone, decking, pergolas, and ambient lighting",
      "Integrated pool and terrace transitions"
    ],
    process: [
      { title: "Site visit", text: "We map sun, wind, privacy, and circulation so every zone has purpose." },
      { title: "Design direction", text: "You receive a clear concept with materials, planting mood, and lighting approach." },
      { title: "Build + finish", text: "Our team executes works with tidy sequencing and premium detailing." }
    ],
    faqs: [
      { q: "How long does a full landscaping project take?", a: "Most projects run 4–10 weeks depending on hardscape complexity, irrigation, and plant availability." },
      { q: "Do you handle lighting and irrigation in-house?", a: "Yes. We coordinate and install both so the final result is cohesive, reliable, and easy to maintain." },
      { q: "Can you redesign an existing garden without starting from zero?", a: "Absolutely. We often preserve mature trees, upgrade circulation, and rework key zones for a stronger layout." }
    ]
  },
  {
    slug: "handyman",
    title: "Handyman & Property Care",
    shortDescription:
      "Reliable premium maintenance for villas and rental properties — one trusted team for fixes, upgrades, and preventative care.",
    heroImage: "/demo/portfolio-3.jpg",
    intro:
      "For owners who want standards, speed, and no drama. We handle practical works and small improvements with the same finish quality as larger projects.",
    highlights: [
      "Repairs, installations, and finishing upgrades",
      "Snagging lists before owner arrival or guest check-in",
      "Coordination with electricians, plumbers, and specialists",
      "Seasonal maintenance and rapid-response visits"
    ],
    process: [
      { title: "Brief + photos", text: "Share your task list and urgency. We confirm scope quickly." },
      { title: "Fixed plan", text: "You get transparent timing and cost before works start." },
      { title: "Execution", text: "We complete tasks cleanly, document outcomes, and flag future risks." }
    ],
    faqs: [
      { q: "Do you offer one-off jobs or only ongoing maintenance?", a: "Both. We can complete one-off fixes or build a recurring property care schedule." },
      { q: "Can you prepare homes for short-term rental season?", a: "Yes, including snagging, touch-ups, and practical upgrades that improve guest experience." },
      { q: "How fast can you attend urgent issues?", a: "For existing clients we prioritize urgent requests and typically respond same day." }
    ]
  },
  {
    slug: "microcement-finishes",
    title: "Microcement Finishes",
    shortDescription:
      "Seamless walls, floors, bathrooms, and outdoor areas with tactile, architectural surfaces and long-term durability.",
    heroImage: "/demo/service-microcement.jpg",
    intro:
      "Microcement is about precision in prep and layering. We deliver monolithic surfaces with controlled texture and tone, tailored to your interior or exterior palette.",
    highlights: [
      "Bathrooms, kitchens, floors, stairs, and feature walls",
      "Wet-room compatible systems with sealed protection",
      "Colour sampling and texture calibration",
      "Indoor/outdoor continuity for modern villas"
    ],
    process: [
      { title: "Substrate assessment", text: "We check movement risk, moisture conditions, and compatibility before committing." },
      { title: "Sample approval", text: "You choose from curated tones and textures, then sign off on site samples." },
      { title: "Application", text: "Layered application, sanding, and seal cycles are timed for lasting performance." }
    ],
    faqs: [
      { q: "Is microcement suitable for showers?", a: "Yes, with correct waterproof preparation and sealing system." },
      { q: "How is it different from polished concrete?", a: "Microcement is a thin, multi-layer coating over existing substrates; polished concrete is a thick slab process." },
      { q: "How do I maintain it?", a: "Use pH-neutral cleaners and avoid aggressive chemicals. We provide a clear care guide after handover." }
    ]
  }
];

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<ServiceItem["slug"], ServiceItem>;
