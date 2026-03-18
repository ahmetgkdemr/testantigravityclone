export type Category = "All" | "Product" | "Engineering" | "Company" | "Tutorial";

export interface BlogPost {
  slug: string;
  category: Exclude<Category, "All">;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: number;
  content: { heading?: string; body: string }[];
}

export const CATEGORIES: Category[] = ["All", "Product", "Engineering", "Company", "Tutorial"];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "multi-file-agents",
    category: "Product",
    title: "Introducing Multi-File Agents: Edit Your Entire Codebase at Once",
    excerpt: "Our new multi-file agents can coordinate changes across your entire project, making large refactors and migrations seamless.",
    author: "Sarah Chen",
    authorRole: "Product Manager",
    date: "2025-03-10",
    readTime: 8,
    content: [
      {
        heading: "The Challenge of Large-Scale Refactors",
        body: "One of the biggest pain points developers face is coordinating changes across multiple files. When you need to rename a component, update imports, and modify related utilities all at once, it's easy to miss something.",
      },
      {
        heading: "How Multi-File Agents Work",
        body: "Our agents now understand your entire project structure and can make coordinated changes across multiple files simultaneously. They analyze dependencies, update imports automatically, and ensure consistency throughout your codebase.",
      },
      {
        heading: "Real-World Impact",
        body: "Early adopters report 60% faster refactoring time and significantly fewer bugs introduced during large-scale changes. One team used this to migrate their entire API layer in a single session.",
      },
    ],
  },
  {
    slug: "200k-context-window",
    category: "Engineering",
    title: "200K Context Window: What We Learned",
    excerpt: "We've expanded our context window to 200K tokens. Here's how we optimized for long-context reasoning and what it means for developers.",
    author: "James Park",
    authorRole: "ML Engineer",
    date: "2025-03-05",
    readTime: 10,
    content: [
      {
        heading: "Why Context Matters",
        body: "A larger context window means the AI can understand more of your codebase at once, leading to better decisions and fewer mistakes.",
      },
      {
        heading: "The Technical Challenge",
        body: "Scaling context windows isn't just about memory—it's about maintaining reasoning quality and speed. We invested heavily in optimization to keep response times reasonable.",
      },
      {
        heading: "What's Possible Now",
        body: "With 200K tokens, you can paste your entire service architecture, all related tests, and documentation in a single request. The AI understands the full picture and makes better suggestions.",
      },
    ],
  },
  {
    slug: "rethinking-the-ide",
    category: "Company",
    title: "Rethinking the IDE for the AI Era",
    excerpt: "How AI is changing what we expect from our development environment, and why the traditional IDE is evolving.",
    author: "Mike Liu",
    authorRole: "VP Engineering",
    date: "2025-02-28",
    readTime: 12,
    content: [
      {
        heading: "The IDE Has Stayed the Same",
        body: "For decades, the core IDE experience hasn't fundamentally changed. You open files, edit text, run commands. But AI changes what's possible.",
      },
      {
        heading: "New Paradigms",
        body: "Instead of one-at-a-time code generation, imagine systems that understand intent and apply changes holistically. Imagine debugging with AI partners who see your full project context.",
      },
      {
        heading: "Our Vision",
        body: "We're building the IDE for developers who want to collaborate with AI on code. It's not about replacing developers—it's about amplifying what they can accomplish.",
      },
    ],
  },
  {
    slug: "private-by-design",
    category: "Engineering",
    title: "Building Private-by-Design AI Tools",
    excerpt: "How we ensure your code never leaves your machine while still providing powerful AI assistance.",
    author: "Elena Rodriguez",
    authorRole: "Security Lead",
    date: "2025-02-20",
    readTime: 9,
    content: [
      {
        heading: "Privacy Is Non-Negotiable",
        body: "We believe developers should be able to use AI without compromising their code's privacy. That's why we've invested in on-device processing for sensitive operations.",
      },
      {
        heading: "The Architecture",
        body: "Our system uses a hybrid approach: lightweight analysis happens locally, while complex reasoning happens on secure, encrypted servers. Your code snippets are never stored.",
      },
      {
        heading: "Transparency First",
        body: "We're open about what data we process and how. You maintain full control over what gets sent to our servers.",
      },
    ],
  },
  {
    slug: "team-collaboration",
    category: "Product",
    title: "Teams Are Stronger Together: Our New Collaboration Features",
    excerpt: "Share sessions with your team, collaborate on code in real-time, and let AI help the entire group work better together.",
    author: "Jessica Wong",
    authorRole: "Product Designer",
    date: "2025-02-15",
    readTime: 7,
    content: [
      {
        heading: "The Problem with Solo AI Assistance",
        body: "AI pairs well with individuals, but teams need more. You need to share context, build on each other's work, and ensure alignment.",
      },
      {
        heading: "Session Sharing",
        body: "You can now share your AI session with teammates. They see your conversation, add to it, and work toward solutions together without starting from scratch.",
      },
      {
        heading: "Real-Time Collaboration",
        body: "Multiple developers can work on different files in the same session, and the AI understands the full context of everyone's work.",
      },
    ],
  },
  {
    slug: "ai-code-generation",
    category: "Engineering",
    title: "The State of AI Code Generation in 2025",
    excerpt: "An in-depth look at what modern AI code generation can do, what it struggles with, and how to use it effectively.",
    author: "David Kumar",
    authorRole: "Research Scientist",
    date: "2025-02-08",
    readTime: 14,
    content: [
      {
        heading: "The Current Landscape",
        body: "AI code generation has evolved dramatically. It's no longer just about simple snippets—modern systems can understand architecture and generate coherent, tested code.",
      },
      {
        heading: "What Works Well",
        body: "AI excels at boilerplate, test generation, documentation, and refactoring. It's particularly strong at understanding intent from context and suggesting improvements.",
      },
      {
        heading: "Remaining Challenges",
        body: "Complex domain logic, novel architectures, and subtle bugs remain challenging. The best approach is treating AI as a powerful assistant, not a replacement for thinking.",
      },
      {
        heading: "Best Practices",
        body: "Always review generated code. Use AI for acceleration, not automation. Leverage its ability to explain code and generate tests. The future is collaborative.",
      },
    ],
  },
  {
    slug: "getting-started-guide",
    category: "Tutorial",
    title: "Getting Started with Claude Code: A Complete Guide",
    excerpt: "New to Claude Code? This guide walks you through everything you need to know to start leveraging AI for development.",
    author: "Alex Turner",
    authorRole: "Developer Advocate",
    date: "2025-02-01",
    readTime: 6,
    content: [
      {
        heading: "Step 1: Installation",
        body: "Download Claude Code from our website and install it like any other development tool. It works with your favorite IDE through integrations.",
      },
      {
        heading: "Step 2: Configure Your Environment",
        body: "Set up your API keys, choose your preferred Claude model, and configure privacy settings to match your organization's requirements.",
      },
      {
        heading: "Step 3: Your First AI-Assisted Edit",
        body: "Open a file and ask the AI to help. Start with simple tasks: adding a function, writing tests, or explaining code. Get comfortable with the workflow.",
      },
      {
        heading: "Step 4: Advanced Workflows",
        body: "Once comfortable, try multi-file editing, agent workflows, and team collaboration. Each feature builds on the last.",
      },
      {
        heading: "Tips for Success",
        body: "Be specific in your requests. Provide context. Review AI suggestions carefully. Use version control to experiment safely. Most importantly, stay engaged—AI works best with active developers.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: Category): BlogPost[] {
  if (category === "All") return BLOG_POSTS;
  return BLOG_POSTS.filter((post) => post.category === category);
}
