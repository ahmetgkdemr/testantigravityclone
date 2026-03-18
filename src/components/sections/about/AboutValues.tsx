"use client";

import { Lightbulb, Shield, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: <Lightbulb size={20} />,
    title: "Innovation First",
    desc: "We push the boundaries of what's possible with AI. Every feature starts with a problem, not a feature list.",
  },
  {
    icon: <Shield size={20} />,
    title: "Privacy & Security",
    desc: "Your code is yours. We implement privacy by design and give you full control over what data is shared.",
  },
  {
    icon: <Users size={20} />,
    title: "Developer First",
    desc: "We build for developers, with developers. Every decision is guided by what makes developers more productive.",
  },
  {
    icon: <Zap size={20} />,
    title: "Quality & Speed",
    desc: "We obsess over performance and reliability. Speed isn't a feature, it's a requirement.",
  },
];

export default function AboutValues() {
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
          Our values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl p-6 transition-shadow cursor-default"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                style={{ backgroundColor: "#f1f3f4", color: "#1a1a1a" }}
              >
                {value.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#1a1a1a",
                  marginBottom: "8px",
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#5f6368",
                  lineHeight: 1.6,
                }}
              >
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
