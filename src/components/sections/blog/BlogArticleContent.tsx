"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog-data";

export default function BlogArticleContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Article Body */}
      <section className="w-full py-12 px-8 md:px-16 bg-white">
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
    </>
  );
}
