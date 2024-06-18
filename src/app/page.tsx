import { Metadata } from "next";
import Blog from "../components/Blog";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Amrin",
  description:
    "A Frontend Developer. I love to build beautiful and interactive websites.",
  openGraph: {
    type: "website",
    title: "Coderamrin Blog",
    description:
      "A Frontend Developer. I love to build beautiful and interactive websites.",
    images: "/images/og-image.jpg",
    url: process.env.SITE_URL!,
  },
  twitter: {
    card: "summary_large_image",
    title: "Coderamrin Blog",
    description:
      "A Frontend Developer. I love to build beautiful and interactive websites.",
    images: "/images/og-image.jpg",
  },
};

export default function Home() {
  return (
    <main className="px-5 md:px-0 max-w-[815px] mx-auto flex-1">
      <Hero />
      <Blog />
    </main>
  );
}
