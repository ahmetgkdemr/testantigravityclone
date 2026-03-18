"use client";

import { motion } from "framer-motion";
import DocsCodeBlock from "./DocsCodeBlock";

const steps = [
  {
    title: "Find your size",
    description: "Use our size chart to determine the best fit for your body type.",
    code: "Chest: S(90-95cm) M(96-101cm) L(102-107cm) XL(108-113cm)\nWaist: S(74-79cm) M(80-85cm) L(86-91cm) XL(92-97cm)\nHips:  S(90-95cm) M(96-101cm) L(102-107cm) XL(108-113cm)",
  },
  {
    title: "Choose your style",
    description: "Browse our collections and pick pieces that match your lifestyle.",
    code: "Collections:\n- Everyday Essentials (basics, tees, joggers)\n- Active Comfort (performance wear)\n- Premium Line (organic cotton, linen blends)\n- Accessories (caps, bags, socks)",
  },
  {
    title: "Place your order",
    description: "Add items to your cart on Trendyol and complete checkout.",
    code: "Visit: trendyol.com/magaza/yogii-m-575813\n# Free shipping on orders over 500 TL\n# Easy returns within 30 days",
  },
  {
    title: "Care for your garments",
    description: "Follow our care instructions to keep your YOGII pieces looking fresh.",
    code: "Washing: Machine wash cold (30°C), inside-out\nDrying:  Air dry flat, avoid direct sunlight\nIroning: Low heat if needed, avoid prints\nStorage: Fold neatly, avoid hanging knits",
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
