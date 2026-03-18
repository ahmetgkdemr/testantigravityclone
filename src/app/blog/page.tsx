import { Header } from "@/components/layout/Header";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogGrid from "@/components/sections/blog/BlogGrid";

export const metadata = {
  title: "Blog | Google Antigravity",
  description: "Read the latest articles, updates, and engineering stories from the Antigravity team.",
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
