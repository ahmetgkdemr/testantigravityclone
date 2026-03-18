"use client";
import { Zap, GitBranch, Shield, Layers, Terminal, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <Zap size={20} />,
    title: "AI-native editing",
    desc: "Every keystroke is model-aware. YOGII predicts your next move across files, tests, and configs.",
  },
  {
    icon: <Layers size={20} />,
    title: "Multi-file agents",
    desc: "Spin up agents that plan, execute, and validate changes across your entire repository autonomously.",
  },
  {
    icon: <Terminal size={20} />,
    title: "Integrated terminal",
    desc: "Run commands, watch tests, and stream logs — all in the same surface as your code.",
  },
  {
    icon: <GitBranch size={20} />,
    title: "Context-aware diffs",
    desc: "See exactly what changed and why. Every AI edit comes with an explanation and a one-click undo.",
  },
  {
    icon: <Shield size={20} />,
    title: "Private by design",
    desc: "Your code never leaves your machine without permission. On-device models available for sensitive work.",
  },
  {
    icon: <RefreshCw size={20} />,
    title: "Continuous learning",
    desc: "YOGII learns your codebase conventions and improves with every session.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-28 px-8 md:px-16" style={{ backgroundColor: "#fafafa" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <p
          className="mb-3"
          style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5f6368" }}
        >
          Platform
        </p>
        <h2
          className="mb-16"
          style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, letterSpacing: "-0.018em", color: "#1a1a1a", lineHeight: 1.18 }}
        >
          Everything you need to ship faster
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-6 transition-shadow cursor-default"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                style={{ backgroundColor: "#f1f3f4", color: "#1a1a1a" }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "16px", fontWeight: 500, color: "#1a1a1a", marginBottom: "8px" }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "14px", color: "#5f6368", lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
