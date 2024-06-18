import { MetadataRoute } from "next";

const URL = process.env.SITE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${URL}/sitemap.xml`,
  };
}
