"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            backgroundColor: "#1a1a1a",
            color: "#fff",
          }}
        >
          <div className="absolute inset-0 opacity-5">
            <div
              style={{
                position: "absolute",
                top: "-50%",
                right: "-20%",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #4285f4, transparent)",
                filter: "blur(80px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-50%",
                left: "-20%",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, #ea4335, transparent)",
                filter: "blur(80px)",
              }}
            />
          </div>

          <div className="relative z-10">
            <h2
              style={{
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 400,
                letterSpacing: "-0.018em",
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              Ready to build with Antigravity?
            </h2>

            <p
              style={{
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "16px",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "32px",
                maxWidth: "500px",
                margin: "0 auto 32px",
                lineHeight: 1.6,
              }}
            >
              Start your 14-day free trial today. No credit card required. Full access to all Pro features.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2"
                style={{
                  backgroundColor: "#fff",
                  color: "#1a1a1a",
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Start free trial
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium transition-all"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Schedule demo
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "⚡",
              title: "Setup in seconds",
              desc: "Start coding immediately with zero configuration required.",
            },
            {
              icon: "🔒",
              title: "100% secure",
              desc: "Enterprise-grade security with SSO and data encryption.",
            },
            {
              icon: "🎯",
              title: "Scale as you grow",
              desc: "Upgrade anytime as your team and needs expand.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>
                {item.icon}
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
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#5f6368",
                  lineHeight: 1.5,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
