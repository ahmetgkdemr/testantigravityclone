"use client";
const posts = [
  {
    tag: "Product",
    title: "Introducing multi-file agents in Antigravity",
    desc: "Today we're launching the ability to run agents that autonomously plan and execute changes across your entire repository.",
    date: "Mar 12, 2026",
    readTime: "5 min read",
  },
  {
    tag: "Engineering",
    title: "How we built a 200k-token context window for code",
    desc: "A deep dive into the infrastructure and model techniques that allow Antigravity to hold your whole project in context.",
    date: "Feb 28, 2026",
    readTime: "8 min read",
  },
  {
    tag: "Company",
    title: "Why we're rethinking the IDE from first principles",
    desc: "The editor hasn't fundamentally changed in 30 years. We think it's time to build something designed for the agent-first era.",
    date: "Feb 10, 2026",
    readTime: "4 min read",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="w-full py-28 px-8 md:px-16" style={{ backgroundColor: "#fafafa" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <p
          className="mb-3"
          style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5f6368" }}
        >
          Blog
        </p>
        <h2
          className="mb-16"
          style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 400, letterSpacing: "-0.018em", color: "#1a1a1a", lineHeight: 1.18 }}
        >
          Latest from the team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="rounded-2xl p-6 flex flex-col group transition-shadow"
              style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)")}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <span
                className="inline-block mb-4 rounded-full px-3 py-1"
                style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "11px", fontWeight: 500, color: "#1a1a1a", backgroundColor: "#f1f3f4" }}
              >
                {post.tag}
              </span>
              <h3
                style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "17px", fontWeight: 500, color: "#1a1a1a", lineHeight: 1.4, marginBottom: "12px" }}
              >
                {post.title}
              </h3>
              <p style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "14px", color: "#5f6368", lineHeight: 1.6, flex: 1 }}>
                {post.desc}
              </p>
              <div className="flex items-center gap-2 mt-5" style={{ color: "#9aa0a6" }}>
                <span style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "12px" }}>{post.date}</span>
                <span>·</span>
                <span style={{ fontFamily: "'Google Sans Flex', sans-serif", fontSize: "12px" }}>{post.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
