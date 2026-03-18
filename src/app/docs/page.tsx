import { Header } from "@/components/layout/Header";
import DocsHero from "@/components/sections/docs/DocsHero";
import DocsQuickStart from "@/components/sections/docs/DocsQuickStart";
import DocsNavCards from "@/components/sections/docs/DocsNavCards";
import DocsConcepts from "@/components/sections/docs/DocsConcepts";

export const metadata = {
  title: "Documentation | Google Antigravity",
  description: "Complete guide to using Claude Code with installation, configuration, API reference, and tutorials.",
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[60px]">
        <DocsHero />
        <DocsQuickStart />
        <DocsNavCards />
        <DocsConcepts />
      </div>
    </main>
  );
}
