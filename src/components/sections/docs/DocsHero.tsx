"use client";

import { useState } from "react";
import { Search, ExternalLink } from "lucide-react";

export default function DocsHero() {
  const [search, setSearch] = useState("");

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
          Documentation
        </p>
        <h1
          className="mb-6"
          style={{
            fontFamily: "'Google Sans Flex', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            letterSpacing: "-0.018em",
            color: "#1a1a1a",
            lineHeight: 1.18,
          }}
        >
          Everything you need to get started
        </h1>

        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={18}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9aa0a6",
                pointerEvents: "none",
              }}
            />
            <input
              type="text"
              placeholder="Search documentation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border transition-colors"
              style={{
                borderColor: "rgba(0,0,0,0.12)",
                fontFamily: "'Google Sans Flex', sans-serif",
                fontSize: "14px",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")}
            />
          </div>
          <a
            href="https://www.trendyol.com/magaza/yogii-m-575813"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 transition-colors"
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              fontFamily: "'Google Sans Flex', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#1a1a1a",
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.08)")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)")}
          >
            <ExternalLink size={16} />
            Trendyol Store
          </a>
        </div>
      </div>
    </section>
  );
}
