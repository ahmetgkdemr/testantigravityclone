import { Header } from "@/components/layout/Header";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogGrid from "@/components/sections/blog/BlogGrid";

export const metadata = {
  title: "Blog | YOGII",
  description: "Read the latest articles, updates, and style stories from the YOGII team.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[60px]">
        <BlogHero />
        <BlogGrid />
      </div>
    </main>
  );
}
