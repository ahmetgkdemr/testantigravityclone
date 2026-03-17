"use client";
import { Check } from "lucide-react";


const plans = [
  {
    name: "Personal",
    price: "Free",
    period: "",
    desc: "For solo developers exploring Antigravity.",
    cta: "Get started",
    ctaStyle: { backgroundColor: "#f1f3f4", color: "#1a1a1a" },
    features: ["50 AI requests / day", "Single-file agent", "Integrated terminal", "Community support"],
  },
  {
    name: "Pro",
    price: "$20",
    period: "/ month",
    desc: "For professionals who ship every day.",
    cta: "Start free trial",
    ctaStyle: { backgroundColor: "#1a1a1a", color: "#fff" },
    highlight: true,
    features: ["Unlimited AI requests", "Multi-file agents", "Priority model access", "Context up to 200k tokens", "Email support"],
  },
  {
    name: "Team",
    price: "$40",
    period: "/ seat / month",
    desc: "For teams building together.",
    cta: "Contact sales",
    ctaStyle: { backgroundColor: "#f1f3f4", color: "#1a1a1a" },
    features: ["Everything in Pro", "Shared agent sessions", "Admin & audit controls", "SSO / SAML", "Dedicated support"],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-28 px-8 md:px-16" style={{ backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <p
          className="mb-3"
          style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5f6368" }}
        >
          Pricing
        </p>
        <h2
          className="mb-16"
          style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, letterSpacing: "-0.018em", color: "#1a1a1a", lineHeight: 1.18 }}
        >
          Simple, transparent pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                border: plan.highlight ? "2px solid #1a1a1a" : "1px solid rgba(0,0,0,0.08)",
                backgroundColor: "#fff",
              }}
            >
              <div className="mb-6">
                <p style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "13px", fontWeight: 500, color: "#5f6368", marginBottom: "8px" }}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "36px", fontWeight: 400, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "13px", color: "#5f6368" }}>{plan.period}</span>
                  )}
                </div>
                <p style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "14px", color: "#5f6368", marginTop: "8px" }}>
                  {plan.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check size={14} style={{ color: "#34a853", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "14px", color: "#3c4043" }}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="flex items-center justify-center rounded-full py-3 transition-opacity hover:opacity-90"
                style={{ ...plan.ctaStyle, fontFamily: "'Google Sans Flex', sans-serif", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
