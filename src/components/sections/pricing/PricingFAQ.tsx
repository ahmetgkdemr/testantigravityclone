"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges or credits on your next billing cycle.",
  },
  {
    question: "What's included in the free trial?",
    answer:
      "The 14-day free trial gives you full access to the Pro plan features, so you can experience the full power of YOGII before committing. No credit card required.",
  },
  {
    question: "Do you offer annual billing discounts?",
    answer:
      "Yes! When you pay annually, we offer a 20% discount on Pro plans and custom discounts on Enterprise plans. Contact our sales team for more details.",
  },
  {
    question: "Is there a free tier for students or open source?",
    answer:
      "We offer special pricing for students and educators. Apply through our community program at yogii.com/community.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data remains accessible for 30 days after cancellation. You can download all your information during this period. After 30 days, your data will be permanently deleted.",
  },
  {
    question: "Do Enterprise plans include support?",
    answer:
      "Yes, all Enterprise plans include dedicated support with a response time of 1 hour during business hours. We also offer SLA guarantees and a dedicated account manager.",
  },
  {
    question: "Can I use YOGII for commercial projects?",
    answer:
      "Absolutely. Both Free and Pro plans can be used for commercial purposes. Enterprise plans come with additional commercial licensing options if needed.",
  },
  {
    question: "Do you offer volume discounts for teams?",
    answer:
      "Yes. For teams of 10+ members, we offer special volume pricing. Contact our sales team at sales@yogii.com for a custom quote.",
  },
];

export default function PricingFAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="mb-16 text-center">
          <p
            className="mb-2"
            style={{
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#5f6368",
            }}
          >
            FAQ
          </p>
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
            Frequently asked questions
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

        <div
          className="mt-16 p-8 rounded-2xl text-center"
          style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <h3
            style={{
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "18px",
              fontWeight: 500,
              color: "#1a1a1a",
              marginBottom: "8px",
            }}
          >
            Didn&apos;t find what you&apos;re looking for?
          </h3>
          <p
            style={{
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "14px",
              color: "#5f6368",
              marginBottom: "16px",
            }}
          >
            Our support team is here to help.
          </p>
          <a
            href="#"
            className="inline-block rounded-full px-6 py-3 transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Contact support
          </a>
        </div>
      </div>
    </section>
  );
}
