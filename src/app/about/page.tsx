import { Header } from "@/components/layout/Header";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutTeam from "@/components/sections/about/AboutTeam";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutTimeline from "@/components/sections/about/AboutTimeline";

export const metadata = {
  title: "About | Google Antigravity",
  description: "Learn about our mission to transform how developers work with code using AI.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[60px]">
        <AboutHero />
        <AboutStats />
        <AboutTeam />
        <AboutValues />
        <AboutTimeline />
      </div>
    </main>
  );
}
