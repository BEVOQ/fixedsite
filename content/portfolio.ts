export type PortfolioProject = {
  slug: string;
  title: string;
  location: string;
  service: string;
  summary: string;
  coverImage: string;
  beforeImage: string;
  afterImage: string;
  scope: string[];
  outcome: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "lagos-courtyard-reset",
    title: "Lagos Courtyard Reset",
    location: "Lagos",
    service: "Landscaping",
    summary: "A heat-heavy courtyard transformed into a layered evening living space with native planting and warm lighting.",
    coverImage: "/demo/portfolio-1.jpg",
    beforeImage: "/demo/lights-off.jpg",
    afterImage: "/demo/lights-on.jpg",
    scope: ["Hardscape simplification", "Lighting plan", "Low-water planting", "Outdoor lounge zoning"],
    outcome: "The villa gained a cooler, calmer social space with lower maintenance and a stronger rental visual identity."
  },
  {
    slug: "portimao-rental-upgrade",
    title: "Portimão Rental Upgrade",
    location: "Portimão",
    service: "Handyman",
    summary: "Fast-turn upgrade works before peak season, focused on durability and guest-ready finishes.",
    coverImage: "/demo/portfolio-3.jpg",
    beforeImage: "/demo/portfolio-2.jpg",
    afterImage: "/demo/portfolio-3.jpg",
    scope: ["Snagging + repairs", "Bathroom fixture refresh", "Joinery fixes", "Paint touch-up strategy"],
    outcome: "Owner reduced emergency callouts and improved review consistency during summer occupancy."
  },
  {
    slug: "albufeira-spa-bathroom",
    title: "Albufeira Spa Bathroom",
    location: "Albufeira",
    service: "Microcement Finishes",
    summary: "Seamless microcement application across walls, vanity surround, and wet-room floor for a boutique spa feel.",
    coverImage: "/demo/service-microcement.jpg",
    beforeImage: "/demo/portfolio-1.jpg",
    afterImage: "/demo/portfolio-2.jpg",
    scope: ["Substrate preparation", "Tone sampling", "Wet-room waterproofing", "Microcement + sealer system"],
    outcome: "The client achieved a unified, easy-care finish with soft texture and premium detailing throughout."
  }
];

export const portfolioBySlug = Object.fromEntries(portfolioProjects.map((project) => [project.slug, project]));
