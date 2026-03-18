"use client";

import Link from "next/link";

export default function AboutHero() {
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
          About us
        </p>
        <h1
          className="mb-4"
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            letterSpacing: "-0.018em",
            color: "#1a1a1a",
            lineHeight: 1.18,
          }}
        >
          Rethinking how developers work with code
        </h1>
        <p
          className="mb-12"
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "18px",
            color: "#5f6368",
            lineHeight: 1.6,
            maxWidth: "700px",
            margin: "0 auto 32px",
          }}
        >
          We believe the future of software development is collaborative between humans and AI. Our mission is to amplify developer creativity and accelerate the pace of innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="rounded-full px-6 py-3 transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Contact us
          </Link>
          <a
            href="https://claude.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 transition-all hover:bg-opacity-90"
            style={{
              backgroundColor: "#fff",
              color: "#1a1a1a",
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.12)",
              textAlign: "center",
            }}
          >
            Try Claude Code
          </a>
        </div>
      </div>
    </section>
  );
}
