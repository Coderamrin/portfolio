import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/libs/markdown";
import { Metadata } from "next";

const url = process.env.SITE_URL!;

export const metadata: Metadata = {
  title: "Coderamrin Blog",
  description:
    "Learn about Next.js, React.js and all the other frontend technologies",
  openGraph: {
    type: "website",
    title: "Coderamrin Blog",
    description:
      "Learn about Next.js, React.js and all the other frontend technologies.",
    images: `${url}/images/og-image.jpg`,
    url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Coderamrin Blog",
    description:
      "Learn about Next.js, React.js and all the other frontend technologies.",
    images: `${url}/images/og-image.jpg`,
  },
};

const BlogArchive = () => {
  const posts = getAllPosts([
    "title",
    "published_at",
    "edited_at",
    "description",
    "coverImage",
    "slug",
  ]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <main className="px-5 flex-1">
      <section className="pt-16 max-w-[815px] mx-auto">
        {/* <h2 className="text-2xl font-bold text-gray-700 mb-3">
          Latest Blog Posts
        </h2> */}
        <div className="">
          {posts.map((item: any, i) => {
            return (
              <Link
                href={`/blog/${item.slug}`}
                key={i}
                className="block w-full mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100"
              >
                <div className="relative">
                  {/* <span className="absolute -top-8 -right-8 text-white btn-bg text-sm px-2 py-1 rounded">
                  dev.to
                </span> */}
                  <h3 className="text-2xl font-medium pb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <div className="flex gap-2 pb-2">
                    <p className="text-slate-600 text-sm">
                      Published: {item.published_at}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {item.edited_at ? `Updated: ${item.edited_at}` : "-"}
                    </p>
                  </div>
                  <p className="py-2 text-gray-700 leading-5 text-base">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default BlogArchive;
