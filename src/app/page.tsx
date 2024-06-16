import Blog from "../components/Blog";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <main className="px-5 md:px-0 max-w-[815px] mx-auto flex-1">
      <Hero />
      <Blog />
    </main>
  );
}
