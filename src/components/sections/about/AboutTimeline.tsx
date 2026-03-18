"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2023",
    title: "Founded YOGII",
    desc: "Started with a vision to create comfort wear that doesn't compromise on style or quality.",
  },
  {
    year: "2023",
    title: "First collection launch",
    desc: "Released our debut collection of 20 essential pieces. The response from customers was incredible.",
  },
  {
    year: "2024",
    title: "Trendyol partnership",
    desc: "Partnered with Trendyol to bring YOGII to a wider audience across Turkey and beyond.",
  },
  {
    year: "2024",
    title: "Launched YOGII Premium",
    desc: "Introduced our premium line featuring organic cotton and sustainable materials.",
  },
  {
    year: "2025",
    title: "50,000 happy customers",
    desc: "Reached a milestone of 50k customers and expanded to 15 collections across all categories.",
  },
];

export default function AboutTimeline() {
  return (
    <section className="w-full py-20 px-8 md:px-16 bg-white">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
          Our journey
        </h2>

        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-4 md:gap-8"
            >
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#1a1a1a" }}
                />
                {index < milestones.length - 1 && (
                  <div
                    className="w-0.5 h-20"
                    style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-6">
                <p
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#5f6368",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "4px",
                  }}
                >
                  {milestone.year}
                </p>
                <h3
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginBottom: "4px",
                  }}
                >
                  {milestone.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "14px",
                    color: "#5f6368",
                    lineHeight: 1.6,
                  }}
                >
                  {milestone.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
