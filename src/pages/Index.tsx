import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Mic, Users, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { HumanPhoto } from "@/components/HumanPhotos";
import { FloatingCandle, Stars, Fireflies } from "@/components/DecorativeElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Simplified Hero Section */}
      <section className="relative min-h-screen px-6 pt-24 pb-12 overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-soft rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-soft-blue/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
          <Stars count={6} />
          <Fireflies count={3} />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col justify-center min-h-[calc(100vh-6rem)]">
          <h1 className="text-6xl md:text-7xl font-serif text-foreground mb-6 animate-fade-in">
            weehour.club
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 animate-slide-up italic">
            The feeling of wee hours, anytime.
          </p>
          
          <div className="mb-20 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where late-night souls find their perfect conversation. 
              Connect through voice, share your story, or simply listen — 
              experience the warmth of human connection whenever you need it.
            </p>
          </div>

          {/* Two clear paths */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '400ms' }}>
            {/* For Users */}
            <Link to="/join" className="group block h-full">
              <div className="relative h-full overflow-hidden bg-card/90 backdrop-blur-sm p-10 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-hover flex flex-col">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <HumanPhoto 
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop"
                    alt="Person listening"
                    className="w-full h-full opacity-5"
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-soft rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-serif text-foreground mb-4">
                    I need someone to talk to
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    Find your perfect listener. Share, vent, celebrate, or just chat with 
                    verified hosts who truly care.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-8">
                    <div className="flex items-center justify-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>847 hosts live now</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Browse Hosts & Events
                  </Button>
                </div>
              </div>
            </Link>

            {/* For Hosts */}
            <Link to="/host" className="group block h-full">
              <div className="relative h-full overflow-hidden bg-card/90 backdrop-blur-sm p-10 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-hover flex flex-col">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <HumanPhoto 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                    alt="Host helping"
                    className="w-full h-full opacity-5"
                  />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-dawn rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-serif text-foreground mb-4">
                    I want to host & earn
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    Turn your empathy into income. Create safe spaces for conversations 
                    and earn while making a difference.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-8">
                    <div className="flex items-center justify-center">
                      <Star className="w-4 h-4 mr-2" />
                      <span>₹20k-40k/month average</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Shield className="w-4 h-4 mr-2" />
                      <span>Safe & supported</span>
                    </div>
                  </div>
                  <Button size="lg" variant="outline" className="w-full border-2 border-primary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                    Start Your Journey
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex items-center justify-center space-x-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-primary mr-1" />
              <span>4.8/5 rating</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 text-primary mr-1" />
              <span>50k+ happy users</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-primary mr-1" />
              <span>100% verified hosts</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;