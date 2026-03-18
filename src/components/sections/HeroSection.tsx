"use client";
import { ParticleField } from "@/components/effects/ParticleField";
import { ShoppingBag } from "lucide-react";

function YIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 2l8 10 8-10M12 12v10" stroke="url(#hero-y)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <defs>
        <linearGradient id="hero-y" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4285f4" />
          <stop offset="33%" stopColor="#ea4335" />
          <stop offset="66%" stopColor="#fbbc04" />
          <stop offset="100%" stopColor="#34a853" />
        </linearGradient>
      </defs>
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
          <YIcon />
          <span style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "16px", fontWeight: 500, color: "#1a1a1a" }}>
            YOGII
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
          Elevate your everyday
          <br />
          comfort
        </h1>

        {/* CTAs */}
        <div
          className="flex items-center gap-3 flex-wrap justify-center"
          style={{ animation: "float-up 0.7s ease-out 0.35s both" }}
        >
          <a
            href="https://www.trendyol.com/magaza/yogii-m-575813"
            target="_blank"
            rel="noopener noreferrer"
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
            <ShoppingBag size={14} />
            Shop Now
          </a>
          <a
            href="#features"
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
            Browse Collection
          </a>
        </div>
      </div>
    </section>
  );
}
