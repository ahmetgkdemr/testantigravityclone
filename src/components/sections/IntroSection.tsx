"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import { ParticleField } from "@/components/effects/ParticleField";

function LargeAIcon() {
  return (
    <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 20h4l1.5-4h5l1.5 4h4L12 2z" fill="url(#intro-a)" />
      <defs>
        <linearGradient id="intro-a" x1="4" y1="2" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4285f4" />
          <stop offset="33%" stopColor="#ea4335" />
          <stop offset="66%" stopColor="#fbbc04" />
          <stop offset="100%" stopColor="#34a853" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IntroSection() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  const dismiss = () => {
    setHiding(true);
    setTimeout(() => setVisible(false), 700);
  };

  if (!visible) return null;

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        opacity: hiding ? 0 : 1,
        transition: "opacity 0.7s ease",
      }}
    >
      <ParticleField count={100} />

      <button
        onClick={dismiss}
        className="absolute top-6 left-6 z-10 flex items-center gap-2 rounded-full transition-all"
        style={{
          backgroundColor: "#fff",
          color: "#1a1a1a",
          fontFamily: "'Google Sans Flex', sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          padding: "10px 18px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e8eaed")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
      >
        <Play size={11} fill="currentColor" />
        Play intro
      </button>

      <div
        className="relative z-10 flex items-center gap-4"
        style={{ animation: "scale-in 0.6s cubic-bezier(0.4,0,0.2,1) 0.2s both" }}
      >
        <LargeAIcon />
        <div style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "clamp(36px,5vw,54px)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1 }}>
          <span style={{ color: "#fff" }}>Google </span>
          <span style={{ color: "#9aa0a6" }}>Antigravity</span>
        </div>
      </div>
    </section>
  );
}
