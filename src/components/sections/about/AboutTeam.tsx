"use client";

import { motion } from "framer-motion";

const team = [
  { initials: "DK", name: "Dario Amodei", role: "CEO & Co-founder" },
  { initials: "DN", name: "Daniela Amodei", role: "President & Co-founder" },
  { initials: "CM", name: "Chris Olah", role: "VP Research" },
  { initials: "JL", name: "Jane Liu", role: "Head of Product" },
  { initials: "MK", name: "Marcus Kim", role: "VP Engineering" },
  { initials: "SR", name: "Sarah Rodriguez", role: "Head of Security" },
];

export default function AboutTeam() {
  return (
    <section className="w-full py-20 px-8 md:px-16 bg-white">
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <h2
          className="mb-12 text-center"
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            letterSpacing: "-0.018em",
            color: "#1a1a1a",
            lineHeight: 1.18,
          }}
        >
          Our team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl p-6 text-center transition-shadow cursor-default"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-semibold"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                {member.initials}
              </div>
              <h3
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#1a1a1a",
                  marginBottom: "4px",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#5f6368",
                }}
              >
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
