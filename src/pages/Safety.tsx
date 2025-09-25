import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Users, Phone, AlertCircle, Heart, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Stars } from "@/components/DecorativeElements";

const Safety = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Verified Hosts",
      description: "Every host undergoes identity verification and background checks before they can start hosting.",
    },
    {
      icon: Eye,
      title: "AI-Powered Moderation",
      description: "Our conversations are monitored by AI to ensure safety without compromising privacy.",
    },
    {
      icon: Users,
      title: "Community Guidelines",
      description: "Clear boundaries and expectations that create a respectful environment for everyone.",
    },
    {
      icon: Phone,
      title: "24/7 Safety Team",
      description: "Real humans available round the clock to address any concerns immediately.",
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "No phone numbers shared. Your personal details stay safe with bank-grade encryption.",
    },
    {
      icon: AlertCircle,
      title: "Instant Reporting",
      description: "One-tap reporting with immediate action. Your safety is our top priority.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-soft rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
          <Stars count={6} />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-soft rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-light">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 animate-fade-in">
              Your safety is our foundation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              We believe meaningful connections happen when everyone feels safe. 
              That's why we've built protection into every conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="bg-card hover:shadow-hover transform hover:-translate-y-2 transition-all duration-200 border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 animate-wiggle" style={{ animationDelay: `${index * 100}ms` }}>
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-card rounded-3xl p-10 mb-12 shadow-soft">
            <h2 className="text-3xl font-serif text-foreground mb-6 text-center">
              Our promise to you
            </h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed max-w-3xl mx-auto">
              <p>
                <strong className="text-foreground">Connection without compromise.</strong> We'll never 
                ask you to sacrifice your safety for companionship. Every feature we build, every policy 
                we create, starts with your wellbeing in mind.
              </p>
              <p>
                Whether you're sharing your deepest thoughts at 3 AM or hosting your first circle, 
                you deserve to feel protected, respected, and valued.
              </p>
              <p className="text-primary font-semibold pt-4 text-center text-lg">
                That's not just our policy — it's our promise.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-serif text-foreground mb-4">For Participants</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                  <span>Choose hosts based on verified profiles and real reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                  <span>End conversations anytime with one tap</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                  <span>Your personal information stays private always</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                  <span>24/7 support team ready to help</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-serif text-foreground mb-4">For Hosts</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                  <span>Clear guidelines and boundaries for every conversation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                  <span>AI support to flag concerning behavior instantly</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                  <span>Block and report features at your fingertips</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                  <span>Dedicated host support team for guidance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-card rounded-3xl p-10 shadow-soft">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce-light" />
            <h3 className="text-2xl font-serif text-foreground mb-4">
              Safety enables connection
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              When you feel safe, you can be yourself. When you're yourself, real connections happen. 
              That's the magic we're protecting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Experience Safe Connection
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10">
                Read Full Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Safety;
