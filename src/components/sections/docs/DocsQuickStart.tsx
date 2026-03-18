"use client";

import { motion } from "framer-motion";
import DocsCodeBlock from "./DocsCodeBlock";

const steps = [
  {
    title: "Install Claude Code",
    description: "Download and install Claude Code for your platform.",
    code: "npm install -g @anthropic/claude-code\n# or download from claude.com/download",
  },
  {
    title: "Sign in with your account",
    description: "Authenticate with your Claude account to get started.",
    code: "claude login\n# Follow the browser prompt to authorize",
  },
  {
    title: "Open your project",
    description: "Navigate to your project directory and open it with Claude Code.",
    code: "cd /path/to/your/project\nclaude open",
  },
  {
    title: "Start coding with AI",
    description: "Use natural language to ask Claude to edit, generate, or refactor your code.",
    code: '// In the chat, you can say:\n"Create a React component for a user profile card"\n"Add error handling to this function"\n"Write tests for this API endpoint"',
  },
];

export default function DocsQuickStart() {
  return (
    <section className="w-full py-20 px-8 md:px-16 bg-white" style={{ backgroundColor: "#fafafa" }}>
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
          Quick start
        </h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-6 md:gap-12"
            >
              {/* Step number */}
              <div className="flex-shrink-0 flex items-start">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "14px",
                    color: "#5f6368",
                    lineHeight: 1.6,
                    marginBottom: "12px",
                  }}
                >
                  {step.description}
                </p>
                <DocsCodeBlock code={step.code} language="bash" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
