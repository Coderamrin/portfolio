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
    changeFrequency: 'monthly',
  }));

  const routes = ["", "/blog", "/about"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
  }));

  return [...routes, ...posts];
}
