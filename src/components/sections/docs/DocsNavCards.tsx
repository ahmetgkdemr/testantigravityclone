"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const docSections = [
  {
    title: "Size Guide",
    description: "Find your perfect fit with our detailed measurement charts.",
    href: "#size-guide",
  },
  {
    title: "Materials",
    description: "Learn about the premium fabrics and sustainable materials we use.",
    href: "#materials",
  },
  {
    title: "Care Instructions",
    description: "Keep your YOGII pieces looking fresh with proper care.",
    href: "#care",
  },
  {
    title: "Shipping & Returns",
    description: "Everything you need to know about delivery and returns.",
    href: "#shipping",
  },
  {
    title: "Styling Tips",
    description: "Outfit inspiration and ways to wear your YOGII collection.",
    href: "#styling",
  },
  {
    title: "FAQ",
    description: "Answers to the most common questions from our customers.",
    href: "#faq",
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
