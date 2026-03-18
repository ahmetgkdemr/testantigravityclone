"use client";

export default function PricingHero() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p
          className="mb-4"
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#5f6368",
          }}
        >
          Pricing Plans
        </p>
        <h1
          className="mb-6"
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 400,
            letterSpacing: "-0.018em",
            color: "#1a1a1a",
            lineHeight: 1.15,
          }}
        >
          Simple, transparent pricing for everyone
        </h1>
        <p
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "18px",
            color: "#5f6368",
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Choose the plan that fits your needs. Scale up anytime with no hidden fees or surprise charges.
        </p>
      </div>
    </section>
  );
}
