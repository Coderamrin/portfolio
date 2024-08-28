import { getAllPosts } from "@/libs/markdown";

const URL = process.env.SITE_URL;

export default async function sitemap() {
  const blog = getAllPosts([
    "title",
    "published_at",
    "edited_at",
    "description",
    "coverImage",
    "slug",
  ]);
  const posts = blog.map(({ slug, edited_at }) => ({
    url: `${URL}/blog/${slug}`,
    lastModified: new Date(edited_at).toISOString(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const staticPages = [
    {
      path: "/",
      priority: 1,
    },
    {
      path: "/blog",
      priority: 0.9,
    },
  ];

  const routes = staticPages.map(({ path: route, priority }) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: priority,
  }));

  return [...routes, ...posts];
}
