import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import PricingSection from "@/components/PricingSection";
import SafetySection from "@/components/SafetySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValueProposition />
      <PricingSection />
      <SafetySection />
      <Footer />
    </div>
  );
};

export default Index;
