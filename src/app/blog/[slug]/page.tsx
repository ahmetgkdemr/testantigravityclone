import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

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

        {/* Article Body */}
        <section className="px-8 md:px-16 py-12 bg-white">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {post.content.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="mb-8"
              >
                {block.heading && (
                  <h2
                    style={{
                      fontFamily: "'Google Sans Flex', sans-serif",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#1a1a1a",
                      marginBottom: "12px",
                    }}
                  >
                    {block.heading}
                  </h2>
                )}
                <p
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "15px",
                    color: "#3c4043",
                    lineHeight: 1.8,
                  }}
                >
                  {block.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="px-8 md:px-16 py-20 bg-white" style={{ backgroundColor: "#fafafa" }}>
            <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
              <h2
                className="mb-12"
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 400,
                  letterSpacing: "-0.018em",
                  color: "#1a1a1a",
                  lineHeight: 1.18,
                }}
              >
                Related articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="rounded-2xl p-6 flex flex-col group transition-shadow h-full"
                      style={{
                        backgroundColor: "#fff",
                        border: "1px solid rgba(0,0,0,0.07)",
                        textDecoration: "none",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")
                      }
                      onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
                    >
                      <span
                        className="inline-block mb-4 rounded-full px-3 py-1 w-fit"
                        style={{
                          fontFamily: "'Google Sans Flex', sans-serif",
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "#1a1a1a",
                          backgroundColor: "#f1f3f4",
                        }}
                      >
                        {relatedPost.category}
                      </span>
                      <h3
                        style={{
                          fontFamily: "'Google Sans Flex', sans-serif",
                          fontSize: "17px",
                          fontWeight: 500,
                          color: "#1a1a1a",
                          lineHeight: 1.4,
                          marginBottom: "12px",
                        }}
                      >
                        {relatedPost.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Google Sans Flex', sans-serif",
                          fontSize: "14px",
                          color: "#5f6368",
                          lineHeight: 1.6,
                          flex: 1,
                        }}
                      >
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-5" style={{ color: "#9aa0a6" }}>
                        <span
                          style={{
                            fontFamily: "'Google Sans Flex', sans-serif",
                            fontSize: "12px",
                          }}
                        >
                          {new Date(relatedPost.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span>·</span>
                        <span
                          style={{
                            fontFamily: "'Google Sans Flex', sans-serif",
                            fontSize: "12px",
                          }}
                        >
                          {relatedPost.readTime} min read
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
