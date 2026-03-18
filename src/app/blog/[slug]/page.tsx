import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";
import BlogArticleContent from "@/components/sections/blog/BlogArticleContent";
import BlogRelatedPosts from "@/components/sections/blog/BlogRelatedPosts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Google Antigravity`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (3 posts excluding the current one)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[60px]">
        {/* Back Button */}
        <div className="px-8 md:px-16 py-8">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "14px",
                color: "#3c4043",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <section className="px-8 md:px-16 py-12 bg-white">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span
              className="inline-block mb-4 rounded-full px-3 py-1"
              style={{
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                color: "#1a1a1a",
                backgroundColor: "#f1f3f4",
              }}
            >
              {post.category}
            </span>
            <h1
              style={{
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 400,
                letterSpacing: "-0.018em",
                color: "#1a1a1a",
                lineHeight: 1.18,
                marginBottom: "20px",
              }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <span
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#5f6368",
                }}
              >
                By <strong>{post.author}</strong>
              </span>
              <span style={{ color: "#9aa0a6" }}>·</span>
              <span
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#5f6368",
                }}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span style={{ color: "#9aa0a6" }}>·</span>
              <span
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#5f6368",
                }}
              >
                {post.readTime} min read
              </span>
            </div>
          </div>
        </section>

        <BlogArticleContent post={post} />
        <BlogRelatedPosts relatedPosts={relatedPosts} />
      </div>
    </main>
  );
}
