import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Moon, Heart, Coffee, Sparkles, Users, Mic, Clock, Star, Flame, Feather, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { FloatingCandle, Stars, Fireflies, TeaCup, MoonPhases } from "@/components/DecorativeElements";
import { GiCoffeeCup } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { IoSparklesSharp } from "react-icons/io5";

const HeroSection = () => {
  const [liveCount, setLiveCount] = useState(847);
  const [activeUsers, setActiveUsers] = useState(2342);

  // Simulate live count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 5) - 2);
      setActiveUsers(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: "Night Owls", count: 156, color: "bg-soft-blue/20 text-soft-blue border-soft-blue/30", icon: BsMoonStars },
    { name: "Pep Talks", count: 89, color: "bg-dusty-mauve/20 text-dusty-mauve border-dusty-mauve/30", icon: Heart },
    { name: "Rant & Vent", count: 43, color: "bg-quiet-plum/20 text-quiet-plum border-quiet-plum/30", icon: Flame },
    { name: "Poetry Circle", count: 27, color: "bg-lavender-mist/20 text-lavender-mist border-lavender-mist/30", icon: Feather },
    { name: "Chai Chat", count: 65, color: "bg-sage-whisper/20 text-sage-whisper border-sage-whisper/30", icon: GiCoffeeCup },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-soft rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-soft-blue/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-lavender-mist/10 rounded-full blur-2xl animate-float delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-dusty-mauve/10 rounded-full blur-2xl animate-pulse-glow"></div>
        
        {/* Decorative elements */}
        <Stars count={8} />
        <Fireflies count={4} />
        <FloatingCandle className="top-1/4 left-1/6 text-soft-blue/30" delay={0} />
        <FloatingCandle className="bottom-1/3 right-1/5 text-lavender-mist/20" delay={2000} />
        <FloatingCandle className="top-1/2 right-1/3 text-moonlight/25" delay={1000} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Enhanced welcome */}
        <div className="text-center mb-16 pt-32 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-soft rounded-full flex items-center justify-center shadow-soft-glow transform hover:scale-110 transition-transform">
                <Moon className="w-12 h-12 text-white animate-pulse-glow" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-dusty-mauve rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-soft-blue rounded-full flex items-center justify-center animate-float">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-4 animate-slide-up">weehour.club</h1>
          <p className="text-xl text-muted-foreground italic animate-slide-up delay-100">The feeling of wee hours, anytime.</p>
        </div>
        
        {/* Live stats with animation */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 animate-slide-up delay-200">
          <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
            <div className="relative">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping"></div>
            </div>
            <span className="text-primary font-bold text-lg">{liveCount} hosts live now</span>
          </div>
          <div className="flex items-center space-x-2 bg-lavender-mist/10 px-4 py-2 rounded-full">
            <Users className="w-5 h-5 text-lavender-mist" />
            <span className="text-lavender-mist font-semibold">{activeUsers.toLocaleString()} in conversations</span>
          </div>
          <div className="flex items-center space-x-2 bg-sage-whisper/10 px-4 py-2 rounded-full">
            <Clock className="w-5 h-5 text-sage-whisper" />
            <span className="text-sage-whisper font-semibold">24/7 available</span>
          </div>
        </div>

        {/* Main message with gradient text */}
        <div className="text-center max-w-5xl mx-auto mb-12 animate-slide-up delay-300">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Where late-night souls find
            <span className="block text-transparent bg-gradient-soft bg-clip-text mt-2">
              their perfect conversation
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Join thousands who've discovered that the best conversations happen when the world quiets down. 
            Whether it's 3 AM or 3 PM, find your moment of genuine human connection.
          </p>
        </div>

        {/* Two enhanced CTA paths */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 animate-slide-up delay-400">
          {/* For Participants - More vibrant */}
          <div className="group bg-card/90 backdrop-blur-sm p-8 rounded-3xl shadow-soft hover:shadow-hover border border-border/50 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-soft rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">I need someone to talk to</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Find your perfect listener in seconds. Share, vent, celebrate, or just chat — 
              real voices, real connection.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span className="text-muted-foreground">Instant matching with verified hosts</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span className="text-muted-foreground">Pay per minute from just ₹6</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span className="text-muted-foreground">Join themed circles & events</span>
              </li>
            </ul>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg group-hover:scale-105 transition-transform shadow-soft">
              <Mic className="w-5 h-5 mr-2" />
              Browse Live Hosts
            </Button>
          </div>

          {/* For Hosts - More appealing */}
          <div className="group bg-gradient-mist/10 backdrop-blur-sm p-8 rounded-3xl shadow-soft hover:shadow-hover border border-lavender-mist/20 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-dawn rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">I want to host & earn</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Turn your empathy into income. Create safe spaces for conversations 
              and earn ₹20k-40k/month.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dusty-mauve rounded-full mr-3"></span>
                <span className="text-muted-foreground">Keep 60-70% of all earnings</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dusty-mauve rounded-full mr-3"></span>
                <span className="text-muted-foreground">Weekly payouts via UPI/Bank</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-dusty-mauve rounded-full mr-3"></span>
                <span className="text-muted-foreground">Set your own schedule & rates</span>
              </li>
            </ul>
            <Button size="lg" variant="outline" className="w-full border-2 border-dusty-mauve text-dusty-mauve hover:bg-dusty-mauve hover:text-white font-semibold text-lg group-hover:scale-105 transition-all">
              Start Earning Today
            </Button>
          </div>
        </div>

        {/* Live categories with hover effects */}
        <div className="text-center mb-8 animate-slide-up delay-500">
          <p className="text-sm text-muted-foreground mb-4">Popular right now</p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge 
                key={category.name} 
                variant="outline" 
                className={`${category.color} hover:shadow-soft-glow cursor-pointer transform hover:scale-110 transition-all text-sm px-4 py-2 animate-fade-in`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name} • {category.count} live
              </Badge>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1100ms' }}>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-soft-blue mr-1" />
              <span>4.8/5 rating</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 text-soft-blue mr-1" />
              <span>50k+ happy users</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 text-soft-blue mr-1" />
              <span>100% safe & verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;