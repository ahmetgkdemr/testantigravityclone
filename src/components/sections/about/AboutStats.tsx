"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Developers", value: "120k+" },
  { label: "Companies", value: "4,200+" },
  { label: "AI Models", value: "12" },
  { label: "Uptime", value: "99.9%" },
];

export default function AboutStats() {
  return (
    <section className="w-full py-20 px-8 md:px-16 bg-white" style={{ backgroundColor: "#fafafa" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "clamp(28px, 5vw, 44px)",
                  fontWeight: 500,
                  color: "#1a1a1a",
                  marginBottom: "8px",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#5f6368",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
