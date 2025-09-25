import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Mic, Video } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-twitch-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-mystic-pink/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cosmic-blue/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Logo & Platform Name */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-live rounded-full flex items-center justify-center shadow-live-glow">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-live-red rounded-full border-2 border-background animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-2">weehour.club</h1>
          <p className="text-xl text-twitch-purple font-medium">Live Voice Companionship Platform</p>
        </div>
        
        {/* Main Tagline */}
        <div className="text-center max-w-4xl mb-8">
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Find your
            <span className="block text-transparent bg-gradient-live bg-clip-text">
              perfect conversation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse live hosts, join intimate voice chats, or discover themed conversation rooms. 
            Your community of listeners is waiting.
          </p>
        </div>

        {/* Live Stats */}
        <div className="flex items-center space-x-8 mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-live-red rounded-full animate-pulse"></div>
            <span className="text-live-red font-semibold">847 hosts live</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-twitch-purple" />
            <span className="text-foreground">2.3k in conversations</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button variant="live" size="lg" className="group">
            <Mic className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Browse Live Hosts
          </Button>
          <Button variant="hero" size="lg" className="group">
            <Video className="w-5 h-5 mr-2" />
            Start Hosting
          </Button>
          <Button variant="ghost-glow" size="lg">
            Join Random Chat
          </Button>
        </div>

        {/* Quick Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { name: "Pep Talks", count: 45, color: "bg-mystic-pink/20 text-mystic-pink border-mystic-pink/30" },
            { name: "Late Night", count: 89, color: "bg-twitch-purple/20 text-twitch-purple border-twitch-purple/30" },
            { name: "Rant Club", count: 23, color: "bg-live-red/20 text-live-red border-live-red/30" },
            { name: "Poetry", count: 12, color: "bg-cosmic-blue/20 text-cosmic-blue border-cosmic-blue/30" }
          ].map((category) => (
            <Badge key={category.name} variant="outline" className={`${category.color} hover:shadow-purple-glow/50 transition-all cursor-pointer`}>
              {category.name} • {category.count} live
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;