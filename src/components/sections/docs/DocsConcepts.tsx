"use client";

import { motion } from "framer-motion";

const concepts = [
  {
    title: "Context Window",
    description:
      "Claude Code uses a 200K token context window, allowing it to understand your entire codebase at once. This means better decisions, fewer mistakes, and more accurate suggestions across your entire project.",
  },
  {
    title: "Agent Sessions",
    description:
      "An agent session is a continuous conversation with Claude about your code. You can ask multiple questions, build on previous answers, and have Claude make coordinated changes across multiple files.",
  },
  {
    title: "Model Selection",
    description:
      "Choose between different Claude models for different tasks. Larger models are more capable but slower, while smaller models are faster. Select based on your needs and latency requirements.",
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
