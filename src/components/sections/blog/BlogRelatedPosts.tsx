"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog-data";

export default function BlogRelatedPosts({ relatedPosts }: { relatedPosts: BlogPost[] }) {
  if (relatedPosts.length === 0) return null;

  return (
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
  );
}
