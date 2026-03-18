export default function ContactHero() {
  return (
    <section className="w-full py-20 px-8 md:px-16 bg-white">
      <div style={{ maxWidth: "1080px", margin: "0 auto", textAlign: "center" }}>
        <p
          className="mb-3"
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#5f6368",
          }}
        >
          Support
        </p>
        <h1
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            letterSpacing: "-0.018em",
            color: "#1a1a1a",
            lineHeight: 1.18,
          }}
        >
          We&apos;re here to help
        </h1>
      </div>
    </section>
  );
}
