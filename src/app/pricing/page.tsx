import { Header } from "@/components/layout/Header";
import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingTiers from "@/components/sections/pricing/PricingTiers";
import ComparisonTable from "@/components/sections/pricing/ComparisonTable";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";
import CTASection from "@/components/sections/pricing/CTASection";

export const metadata = {
  title: "Pricing | YOGII",
  description: "Flexible pricing plans for individuals and teams. Choose the plan that fits your needs.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[60px]">
        <PricingHero />
        <PricingTiers />
        <ComparisonTable />
        <PricingFAQ />
        <CTASection />
      </div>
    </main>
  );
}
