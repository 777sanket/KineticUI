import { MetadataRoute } from "next";
import categories from "./data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kinetic-ui.vercel.app";

  // Add base pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/components`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ] as MetadataRoute.Sitemap;

  // Add category pages
  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/components/${category.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // Add component pages
    category.components.forEach((component) => {
      routes.push({
        url: `${baseUrl}/components/${category.id}/${component.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return routes;
}
