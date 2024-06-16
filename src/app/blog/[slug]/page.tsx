import { getAllPosts, getPostBySlug } from "@/libs/markdown";
import markdownToHtml from "@/libs/markdownToHtml";

type Props = {
  params: { slug: string };
};

// export async function generateMetadata({ params }: Props) {
//   const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
//   const post = getPostBySlug(params.slug, [
//     "title",
//     "author",
//     "content",
//     "metadata",
//   ]);

//   const siteName = process.env.SITE_NAME || "Your Site Name";
//   const authorName = process.env.AUTHOR_NAME || "Your Author Name";

//   if (post) {
//     const metadata = {
//       title: `${post.title || "Single Post Page"} | ${siteName}`,
//       author: authorName,
//       robots: {
//         index: true,
//         follow: true,
//         nocache: true,
//         googleBot: {
//           index: true,
//           follow: false,
//           "max-video-preview": -1,
//           "max-image-preview": "large",
//           "max-snippet": -1,
//         },
//       },
//     };

//     return metadata;
//   } else {
//     return {
//       title: "Not Found",
//       description: "No blog article has been found",
//       author: authorName,
//       robots: {
//         index: false,
//         follow: false,
//         nocache: false,
//         googleBot: {
//           index: false,
//           follow: false,
//           "max-video-preview": -1,
//           "max-image-preview": "large",
//           "max-snippet": -1,
//         },
//       },
//     };
//   }
// }

export default async function Post({ params }: Props) {

  const post = await getPostBySlug(params.slug, [
    "title",
    "author",
    "content",
    "description",
    "published_at",
    "edited_at",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <article className="mx-4 prose prose-lg md:prose-xl dark:prose-invert md:mx-auto mt-16">
      {/* <article class="prose md:prose-lg lg:prose-xl">{{ markdown }}</article> */}
        <div className="mb-20">
          <h1 className="!mb-0 !leading-tight text-gray-800">{post.title}</h1>
          <p className="text-gray-600 !mt-2"> <span className="text-gray-900">Published:</span> {post.published_at} <span className="text-gray-900">Edited</span> {post.edited_at} </p> 
        </div>


        <div  dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    </>
  );
}
