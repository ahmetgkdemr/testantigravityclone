"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Download, Zap, Layers, Terminal, BookOpen, Video, FileText, HelpCircle, Users } from "lucide-react";

const DROPDOWNS: Record<string, { icon: React.ReactNode; label: string; desc: string }[]> = {
  "Use Cases": [
    { icon: <Zap size={15} />, label: "AI Code Generation", desc: "Write, refactor, and debug with AI" },
    { icon: <Layers size={15} />, label: "Multi-file Editing", desc: "Coordinated changes across your codebase" },
    { icon: <Terminal size={15} />, label: "Agent Workflows", desc: "Automate complex dev tasks end-to-end" },
    { icon: <Users size={15} />, label: "Team Collaboration", desc: "Share context and sessions with your team" },
  ],
  "Resources": [
    { icon: <BookOpen size={15} />, label: "Documentation", desc: "Guides, API reference, and examples" },
    { icon: <Video size={15} />, label: "Video Tutorials", desc: "Step-by-step walkthroughs" },
    { icon: <FileText size={15} />, label: "Blog", desc: "Updates, deep dives, and engineering stories" },
    { icon: <HelpCircle size={15} />, label: "Support", desc: "Community forum and help center" },
  ],
};

function AIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 20h4l1.5-4h5l1.5 4h4L12 2z" fill="url(#nav-a)" />
      <defs>
        <linearGradient id="nav-a" x1="4" y1="2" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4285f4" />
          <stop offset="33%" stopColor="#ea4335" />
          <stop offset="66%" stopColor="#fbbc04" />
          <stop offset="100%" stopColor="#34a853" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const NAV = [
    { label: "Product", href: "#features" },
    { label: "Use Cases", dropdown: true },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", dropdown: true },
  ];

  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-[60px]"
      style={{
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Link href="/" className="flex items-center gap-2 select-none">
        <AIcon />
        <span style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "15px", fontWeight: 500, color: "#1a1a1a", letterSpacing: "-0.01em" }}>
          Google <span style={{ fontWeight: 400 }}>Antigravity</span>
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-1">
        {NAV.map((item) => (
          <div key={item.label} className="relative">
            {item.dropdown ? (
              <button
                onClick={() => setOpen(open === item.label ? null : item.label)}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center gap-1 px-3 py-2 rounded-full transition-colors"
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#3c4043",
                  backgroundColor: hovered === item.label || open === item.label ? "rgba(0,0,0,0.05)" : "transparent",
                }}
              >
                {item.label}
                <ChevronDown
                  size={13}
                  style={{
                    opacity: 0.6,
                    transform: open === item.label ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
            ) : (
              <Link
                href={item.href || "#"}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center gap-1 px-3 py-2 rounded-full transition-colors"
                style={{
                  fontFamily: "'Google Sans Flex', sans-serif",
                  fontSize: "14px",
                  color: "#3c4043",
                  backgroundColor: hovered === item.label ? "rgba(0,0,0,0.05)" : "transparent",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            )}

            {item.dropdown && open === item.label && (
              <div
                className="absolute top-full mt-2 left-0 rounded-2xl py-2"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  width: "280px",
                  animation: "fade-in 0.15s ease-out",
                }}
              >
                {DROPDOWNS[item.label]?.map((entry) => {
                  const href = entry.label === "Documentation" ? "/docs" : entry.label === "Support" ? "/contact" : entry.label === "Blog" ? "/blog" : "#";
                  return (
                    <Link
                      key={entry.label}
                      href={href}
                      className="flex items-start gap-3 px-4 py-3 transition-colors"
                      style={{ textDecoration: "none", color: "inherit" }}
                      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
                      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <span style={{ color: "#5f6368", marginTop: "2px", flexShrink: 0 }}>{entry.icon}</span>
                      <div>
                        <div style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "14px", fontWeight: 500, color: "#1a1a1a" }}>
                          {entry.label}
                        </div>
                        <div style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "12px", color: "#5f6368", marginTop: "2px" }}>
                          {entry.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>

      <a
        href="https://claude.com/download"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 rounded-full transition-opacity hover:opacity-90 active:scale-95"
        style={{
          backgroundColor: "#1a1a1a",
          color: "#fff",
          fontFamily: "'Google Sans Flex', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          padding: "8px 18px",
          textDecoration: "none",
        }}
      >
        <Download size={13} />
        Download
      </a>
    </header>
  );
}
