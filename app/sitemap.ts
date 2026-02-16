import type { MetadataRoute } from "next";
import { projects, services, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/services", "/projects", "/privacy"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
