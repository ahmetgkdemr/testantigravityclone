"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const docSections = [
  {
    title: "Installation",
    description: "Get Claude Code installed and configured for your environment.",
    href: "#installation",
  },
  {
    title: "Configuration",
    description: "Customize settings, API keys, and privacy preferences.",
    href: "#configuration",
  },
  {
    title: "AI Commands",
    description: "Learn all the commands available for AI-assisted development.",
    href: "#commands",
  },
  {
    title: "Agent Workflows",
    description: "Create and run autonomous agents for complex tasks.",
    href: "#agents",
  },
  {
    title: "API Reference",
    description: "Complete API documentation for integrations and plugins.",
    href: "#api",
  },
  {
    title: "Keyboard Shortcuts",
    description: "Master keyboard shortcuts to maximize your productivity.",
    href: "#shortcuts",
  },
];

export default function DocsNavCards() {
  return (
    <section className="w-full py-20 px-8 md:px-16 bg-white">
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
          Documentation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docSections.map((section, index) => (
            <motion.a
              key={section.title}
              href={section.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl p-6 flex flex-col group transition-shadow"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <h3
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "#1a1a1a",
                  marginBottom: "8px",
                }}
              >
                {section.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#5f6368",
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: "12px",
                }}
              >
                {section.description}
              </p>
              <div
                className="flex items-center transition-transform group-hover:translate-x-1"
                style={{ color: "#1a1a1a", gap: "8px" }}
              >
                <span
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Learn more
                </span>
                <ArrowRight size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
