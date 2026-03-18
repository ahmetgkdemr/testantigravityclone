"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What's the best way to report a bug?",
    answer:
      "Use our bug report form at support.antigravity.dev with as much detail as possible. Include your system info, reproduction steps, and any error messages. Screenshots or videos are helpful too.",
  },
  {
    question: "How long does it take to get a response?",
    answer:
      "Our support team typically responds within 24 hours. Priority support with a 1-hour SLA is available on enterprise plans. For urgent issues, you can use our chat support channel.",
  },
  {
    question: "Do you offer phone support?",
    answer:
      "Phone support is available for Enterprise customers. For other plans, we support email, chat, and our community forum. You can schedule a call with our team during business hours.",
  },
  {
    question: "How do I request a feature?",
    answer:
      "You can request features through our feedback portal or in our community forum. We review all suggestions and prioritize them based on user demand and our product roadmap.",
  },
  {
    question: "Is there a knowledge base or documentation?",
    answer:
      "Yes! We have comprehensive documentation at docs.antigravity.dev with guides, API reference, tutorials, and FAQs. Most common questions are answered there.",
  },
  {
    question: "Can I schedule a demo or training session?",
    answer:
      "Absolutely. Contact our team at sales@antigravity.dev to schedule a demo or arrange custom training for your team. We also offer onboarding sessions for new accounts.",
  },
];

export default function ContactFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="mb-16 text-center">
          <h2
            style={{
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              letterSpacing: "-0.018em",
              color: "#1a1a1a",
              lineHeight: 1.2,
            }}
          >
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl overflow-hidden"
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                backgroundColor: "#fff",
              }}
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                style={{
                  backgroundColor:
                    expandedIndex === index ? "#f8f9fa" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (expandedIndex !== index) {
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                  }
                }}
                onMouseLeave={(e) => {
                  if (expandedIndex !== index) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#1a1a1a",
                  }}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ flexShrink: 0, marginLeft: "12px" }}
                >
                  <ChevronDown size={20} color="#5f6368" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="px-6 pb-6"
                      style={{
                        borderTop: "1px solid rgba(0,0,0,0.06)",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Google Sans Flex', sans-serif",
                          fontSize: "15px",
                          color: "#5f6368",
                          lineHeight: 1.6,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
