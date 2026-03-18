"use client";

import { motion } from "framer-motion";

const concepts = [
  {
    title: "Premium Materials",
    description:
      "YOGII products are crafted from carefully sourced materials — organic cotton, bamboo blends, and performance fabrics. Each material is chosen for its softness, durability, and breathability to ensure all-day comfort.",
  },
  {
    title: "Care Instructions",
    description:
      "Proper care extends the life of your garments. Machine wash cold inside-out, air dry when possible, and avoid harsh detergents. Our fabrics are pre-shrunk and designed to maintain their shape wash after wash.",
  },
  {
    title: "Sizing Philosophy",
    description:
      "We design for real bodies with a relaxed, modern fit. Our sizing runs true-to-size with extra room for movement. Check our size guide for detailed measurements, and when in doubt, size up for a more relaxed feel.",
  },
];

export default function DocsConcepts() {
  return (
    <section className="w-full py-20 px-8 md:px-16 bg-white" style={{ backgroundColor: "#fafafa" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <h2
          className="mb-12 text-center"
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            letterSpacing: "-0.018em",
            color: "#1a1a1a",
            lineHeight: 1.18,
          }}
        >
          Core concepts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl p-6 transition-shadow cursor-default"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <h3
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#1a1a1a",
                  marginBottom: "8px",
                }}
              >
                {concept.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#5f6368",
                  lineHeight: 1.6,
                }}
              >
                {concept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
