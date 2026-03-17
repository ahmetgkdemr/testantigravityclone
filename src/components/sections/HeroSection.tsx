"use client";
import { ParticleField } from "@/components/effects/ParticleField";

function AIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 20h4l1.5-4h5l1.5 4h4L12 2z" fill="url(#hero-a)" />
      <defs>
        <linearGradient id="hero-a" x1="4" y1="2" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4285f4" />
          <stop offset="33%" stopColor="#ea4335" />
          <stop offset="66%" stopColor="#fbbc04" />
          <stop offset="100%" stopColor="#34a853" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.5L10 2v10H0V3.5zM11.5 1.8L24 0v12H11.5V1.8zM0 13h10v10L0 21.5V13zM11.5 13H24v12l-12.5-1.8V13z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#fff", minHeight: "100vh", paddingTop: "80px" }}
    >
      <ParticleField count={75} />

      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ maxWidth: "900px" }}>
        {/* Logo row */}
        <div
          className="flex items-center gap-2 mb-10"
          style={{ animation: "float-up 0.7s ease-out 0.1s both" }}
        >
          <AIcon />
          <span style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "16px", fontWeight: 500, color: "#1a1a1a" }}>
            Google <span style={{ fontWeight: 400 }}>Antigravity</span>
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "clamp(48px, 7.5vw, 74px)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-0.022em",
            color: "#1a1a1a",
            marginBottom: "48px",
            animation: "float-up 0.7s ease-out 0.2s both",
          }}
        >
          Experience liftoff with the
          <br />
          next-generation IDE
        </h1>

        {/* CTAs */}
        <div
          className="flex items-center gap-3 flex-wrap justify-center"
          style={{ animation: "float-up 0.7s ease-out 0.35s both" }}
        >
          <a
            href="#"
            className="flex items-center gap-2.5 rounded-full transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              padding: "14px 28px",
            }}
          >
            <WindowsIcon />
            Download for Windows
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full transition-colors"
            style={{
              backgroundColor: "#f1f3f4",
              color: "#1a1a1a",
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              padding: "14px 28px",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e8eaed")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f1f3f4")}
          >
            Explore use cases
          </a>
        </div>
      </div>
    </section>
  );
}
