import { Button } from "@/components/ui/button";
import { Moon, MessageCircle, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-glow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-mist/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Moon className="w-12 h-12 text-amber-glow mr-3" />
          <h1 className="text-4xl font-bold text-warm-white">weehour.club</h1>
        </div>
        
        {/* Tagline */}
        <p className="text-xl text-amber-glow mb-4 font-medium">
          The feeling of wee hours, anytime.
        </p>
        
        {/* Main headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-warm-white mb-6 leading-tight">
          Voice-first companionship
          <br />
          <span className="text-amber-glow">when you need it most</span>
        </h2>
        
        {/* Description */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Join intimate 1:1 conversations, cozy group circles, or themed events. 
          Experience that warm, unhurried connection of late-night talks — available anytime.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="group">
            <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Start Talking
          </Button>
          <Button variant="ghost-glow" size="lg">
            <Users className="w-5 h-5 mr-2" />
            Become a Host
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-glow">₹6-15</div>
            <div className="text-sm text-muted-foreground">per minute</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-glow">5-12</div>
            <div className="text-sm text-muted-foreground">minute chats</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-glow">24/7</div>
            <div className="text-sm text-muted-foreground">available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;