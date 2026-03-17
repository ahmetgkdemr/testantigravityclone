import dynamicImport from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { DescriptionSection } from "@/components/sections/DescriptionSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { BlogSection } from "@/components/sections/BlogSection";

export const dynamic = "force-dynamic";

const IntroSection = dynamicImport(() => import("@/components/sections/IntroSection").then(m => m.IntroSection), { ssr: false });
const HeroSection = dynamicImport(() => import("@/components/sections/HeroSection").then(m => m.HeroSection), { ssr: false });
const PromptSection = dynamicImport(() => import("@/components/sections/PromptSection").then(m => m.PromptSection), { ssr: false });

export default function Home() {
  return (
    <main>
      <Header />
      <IntroSection />
      <HeroSection />
      <DescriptionSection />
      <FeaturesSection />
      <PricingSection />
      <BlogSection />
      <PromptSection />
    </main>
  );
}
