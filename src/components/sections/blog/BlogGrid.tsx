"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BLOG_POSTS, CATEGORIES, Category } from "@/lib/blog-data";

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let posts = BLOG_POSTS;

    // Filter by category
    if (activeCategory !== "All") {
      posts = posts.filter((post) => post.category === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) || post.excerpt.toLowerCase().includes(query)
      );
    }

    return posts;
  }, [activeCategory, searchQuery]);

  return (
    <section className="w-full py-12 px-8 md:px-16 bg-white">
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border transition-colors"
              style={{
                borderColor: "rgba(0,0,0,0.12)",
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "14px",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")}
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-4 py-2 transition-all text-sm font-medium"
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  backgroundColor: activeCategory === category ? "#1a1a1a" : "#f1f3f4",
                  color: activeCategory === category ? "#fff" : "#1a1a1a",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl p-6 flex flex-col group transition-shadow h-full"
                  style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)", textDecoration: "none" }}
                  onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")}
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
                    {post.category}
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
                    {post.title}
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
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-5" style={{ color: "#9aa0a6" }}>
                    <span style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "12px" }}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "12px" }}>
                      {post.readTime} min read
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p
              style={{
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "16px",
                color: "#5f6368",
              }}
            >
              No articles found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
