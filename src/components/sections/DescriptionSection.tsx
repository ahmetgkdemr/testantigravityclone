import { FloatingIcons } from "@/components/effects/FloatingIcons";

export function DescriptionSection() {
  return (
    <section className="w-full overflow-hidden py-20" style={{ backgroundColor: "#fff" }}>
      <div className="mb-16">
        <FloatingIcons />
      </div>

      <div className="px-8 md:px-16" style={{ maxWidth: "920px" }}>
        <p
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "clamp(30px, 4.5vw, 50px)",
            fontWeight: 400,
            lineHeight: 1.22,
            letterSpacing: "-0.014em",
            color: "#1a1a1a",
          }}
        >
          YOGII is your destination for premium comfort wear, designed to
          move with you through every moment of your day.
        </p>
      </div>
    </section>
  );
}
