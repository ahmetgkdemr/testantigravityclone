"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in original packaging. Visit support.yogii.com to initiate a return. Refunds are processed within 5-7 business days.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days within Turkey. Express shipping (1-2 business days) is available at checkout. International shipping times vary by destination.",
  },
  {
    question: "How do I find my size?",
    answer:
      "Check our detailed size guide at docs.yogii.com. We include measurements for chest, waist, hips, and length for every product. If you're between sizes, we recommend sizing up for a relaxed fit.",
  },
  {
    question: "Do you offer exchanges?",
    answer:
      "Yes! If your item doesn't fit, you can exchange it for a different size within 30 days. Contact us at support@yogii.com to arrange an exchange.",
  },
  {
    question: "How do I care for my YOGII products?",
    answer:
      "Most of our products are machine washable at 30\u00B0C. We recommend washing inside-out and air drying to maintain the fabric quality. Check the care label on each garment for specific instructions.",
  },
  {
    question: "Can I schedule a styling consultation?",
    answer:
      "Absolutely. Contact our team at sales@yogii.com to schedule a personal styling session. We also offer virtual consultations for bulk or corporate orders.",
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
