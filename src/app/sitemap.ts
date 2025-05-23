import { MetadataRoute } from "next";
import { SITEMAP_QUERY } from "../../sanity/lib/queries";
import { client } from "@/sanity/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const paths = await client.fetch(SITEMAP_QUERY);

    const baseUrl =
      process.env.VERCEL && process.env.VERCEL_ENV === "production"
        ? "https://freelanceseo.co.in/"
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000";

    const dynamicPaths = paths.map(
      (path: { href: string; _updatedAt: string }) => ({
        url: new URL(path.href!, baseUrl).toString(),
        lastModified: new Date(path._updatedAt),
        changeFrequency: "weekly",
        priority: 1,
      })
    );

    const oldUrls = [
      "/",
      "/projects",
      "/seo-services-in-bangalore",
      "/on-page-seo-services-in-bangalore",
      "/off-page-seo-services-in-bangalore",
      "/seo-auditing-services-in-bangalore",
      "/seo-consultation-in-bangalore",
      "/gmb-page-optimization-in-bangalore",
      "/about-us",
      "/contact-us",
    ].map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: new Date("2024-12-31"), // or best guess
      changeFrequency: "monthly",
      priority: 0.8,
    }));

    return [...dynamicPaths, ...oldUrls];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
