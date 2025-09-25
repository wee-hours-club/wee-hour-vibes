import HeroSection from "@/components/HeroSection";
import LiveHostsSection from "@/components/LiveHostsSection";
import StreamingEventsSection from "@/components/StreamingEventsSection";
import BecomeHostSection from "@/components/BecomeHostSection";
import ValueProposition from "@/components/ValueProposition";
import PricingSection from "@/components/PricingSection";
import SafetySection from "@/components/SafetySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <LiveHostsSection />
      <StreamingEventsSection />
      <BecomeHostSection />
      <ValueProposition />
      <PricingSection />
      <SafetySection />
      <Footer />
    </div>
  );
};

export default Index;
