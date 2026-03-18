"use client";

import { useState } from "react";
import { Check, Zap, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "For solo developers exploring Antigravity.",
    cta: "Get started",
    ctaStyle: { backgroundColor: "#f1f3f4", color: "#1a1a1a" },
    icon: Zap,
    features: [
      "50 AI requests / day",
      "Single-file agent",
      "Integrated terminal",
      "Community support",
      "Public sharing",
      "Standard model access",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$20",
    period: "per month",
    desc: "For professionals who ship every day.",
    cta: "Start free trial",
    ctaStyle: { backgroundColor: "#1a1a1a", color: "#fff" },
    highlight: true,
    icon: Users,
    features: [
      "Unlimited AI requests",
      "Multi-file agents",
      "Priority model access",
      "Context up to 200k tokens",
      "Email support",
      "Advanced workflows",
      "Custom snippets",
      "API access",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    desc: "For teams building at scale.",
    cta: "Contact sales",
    ctaStyle: { backgroundColor: "#f1f3f4", color: "#1a1a1a" },
    icon: Building2,
    features: [
      "Everything in Pro",
      "Shared agent sessions",
      "Admin & audit controls",
      "SSO / SAML",
      "Dedicated support",
      "Custom deployments",
      "SLA guarantees",
      "Volume discounts",
    ],
  },
];

export default function PricingTiers() {
  const [selected, setSelected] = useState<string | null>("pro");
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const isSelected = selected === plan.id;
            const isHovered = hoveredPlan === plan.id;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                onClick={() => setSelected(plan.id)}
                className="cursor-pointer rounded-3xl p-8 flex flex-col relative overflow-hidden transition-all duration-300"
                style={{
                  border: plan.highlight
                    ? "2px solid #1a1a1a"
                    : isHovered
                      ? "1px solid rgba(26,26,26,0.2)"
                      : "1px solid rgba(0,0,0,0.08)",
                  backgroundColor: "#fff",
                  transform: isHovered
                    ? "translateY(-8px)"
                    : plan.highlight && isSelected
                      ? "scale(1.02)"
                      : "scale(1)",
                  boxShadow:
                    isHovered || (plan.highlight && isSelected)
                      ? "0 20px 40px rgba(0,0,0,0.12)"
                      : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 px-4 py-2 text-center"
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#fff",
                      fontFamily: "'Google Sans Flex', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div className={plan.highlight ? "mt-12 mb-6" : "mb-6"}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 rounded-xl"
                      style={{
                        backgroundColor: plan.highlight ? "#1a1a1a" : "#f1f3f4",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: plan.highlight ? "#fff" : "#1a1a1a" }}
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: "'Google Sans Flex', sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#1a1a1a",
                      }}
                    >
                      {plan.name}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      style={{
                        fontFamily: "'Google Sans Flex', sans-serif",
                        fontSize: "42px",
                        fontWeight: 300,
                        color: "#1a1a1a",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        style={{
                          fontFamily: "'Google Sans Flex', sans-serif",
                          fontSize: "13px",
                          color: "#5f6368",
                        }}
                      >
                        / {plan.period}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontFamily: "'Google Sans Flex', sans-serif",
                      fontSize: "14px",
                      color: "#5f6368",
                      marginTop: "8px",
                    }}
                  >
                    {plan.desc}
                  </p>
                </div>

                <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check
                        size={16}
                        style={{
                          color: plan.highlight ? "#1a1a1a" : "#34a853",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Google Sans Flex', sans-serif",
                          fontSize: "13px",
                          color: "#3c4043",
                          lineHeight: 1.4,
                        }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#"
                  className="flex items-center justify-center rounded-full py-3 font-medium transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    ...plan.ctaStyle,
                    fontFamily: "'Google Sans Flex', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        <div
          className="mt-16 p-6 rounded-2xl text-center"
          style={{
            backgroundColor: "#f8f9fa",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <p
            style={{
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "14px",
              color: "#5f6368",
            }}
          >
            All plans include a <strong>14-day free trial</strong>. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
