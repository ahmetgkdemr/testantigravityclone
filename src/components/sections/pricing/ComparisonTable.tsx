"use client";

import { Check, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    category: "Core Features",
    items: [
      { name: "AI-powered code generation", free: true, pro: true, enterprise: true },
      { name: "Multi-file editing", free: false, pro: true, enterprise: true },
      { name: "Agent workflows", free: false, pro: true, enterprise: true },
      { name: "Terminal integration", free: true, pro: true, enterprise: true },
      { name: "Context window up to 200k", free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Collaboration",
    items: [
      { name: "Shared agent sessions", free: false, pro: false, enterprise: true },
      { name: "Team workspaces", free: false, pro: false, enterprise: true },
      { name: "Admin controls", free: false, pro: false, enterprise: true },
      { name: "Audit logs", free: false, pro: false, enterprise: true },
      { name: "SSO / SAML", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Support & SLA",
    items: [
      { name: "Community support", free: true, pro: false, enterprise: false },
      { name: "Email support", free: false, pro: true, enterprise: true },
      { name: "Priority support", free: false, pro: false, enterprise: true },
      { name: "Dedicated account manager", free: false, pro: false, enterprise: true },
      { name: "SLA guarantees", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Advanced",
    items: [
      { name: "Custom workflows", free: false, pro: true, enterprise: true },
      { name: "API access", free: false, pro: true, enterprise: true },
      { name: "Webhooks", free: false, pro: true, enterprise: true },
      { name: "Custom integrations", free: false, pro: false, enterprise: true },
      { name: "On-premise deployment", free: false, pro: false, enterprise: true },
    ],
  },
];

export default function ComparisonTable() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Core Features");

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-b from-white via-white to-gray-50">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            Plan Comparison
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
            Detailed feature comparison
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="hidden md:grid md:grid-cols-4 gap-6 mb-1">
              <div></div>
              {["Free", "Pro", "Enterprise"].map((plan) => (
                <div
                  key={plan}
                  className="text-center"
                  style={{
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                  }}
                >
                  {plan}
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {features.map((category, categoryIdx) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: categoryIdx * 0.05 }}
                >
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === category.category ? null : category.category
                      )
                    }
                    className="w-full md:hidden mb-4 text-left p-4 rounded-lg flex items-center justify-between"
                    style={{
                      backgroundColor: "#f1f3f4",
                      fontFamily: "'Google Sans Flex', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#1a1a1a",
                    }}
                  >
                    {category.category}
                    <svg
                      style={{
                        transform:
                          expandedCategory === category.category
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div className="hidden md:block mb-4">
                    <div
                      className="px-4 py-3 rounded-lg"
                      style={{
                        backgroundColor: "#f1f3f4",
                        fontFamily: "'Google Sans Flex', sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#1a1a1a",
                      }}
                    >
                      {category.category}
                    </div>
                  </div>

                  <div className={`space-y-2 ${expandedCategory === category.category ? "block md:block" : "hidden md:block"}`}>
                      {category.items.map((item, itemIdx) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIdx * 0.05 }}
                          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-4 rounded-lg md:rounded-none"
                          style={{
                            backgroundColor:
                              itemIdx % 2 === 0 ? "transparent" : "#f8f9fa",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "'Google Sans Flex', sans-serif",
                              fontSize: "14px",
                              color: "#1a1a1a",
                              fontWeight: 500,
                            }}
                          >
                            {item.name}
                          </div>

                          {[item.free, item.pro, item.enterprise].map(
                            (included, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-center md:justify-center"
                              >
                                {included ? (
                                  <Check size={20} style={{ color: "#34a853" }} />
                                ) : (
                                  <X
                                    size={20}
                                    style={{ color: "#dadce0", strokeWidth: 3 }}
                                  />
                                )}
                              </div>
                            )
                          )}
                        </motion.div>
                      ))}
                    </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
