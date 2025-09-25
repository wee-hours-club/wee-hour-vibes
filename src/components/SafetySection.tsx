import { Card, CardContent } from "@/components/ui/card";
import { Shield, UserCheck, Eye, Heart, Lock, Users } from "lucide-react";

const SafetySection = () => {
  const safetyFeatures = [
    {
      icon: UserCheck,
      title: "Every host verified",
      description: "We know who's creating spaces for you. Identity verification keeps our community genuine.",
    },
    {
      icon: Eye,
      title: "Gentle moderation",
      description: "AI helps maintain respectful conversations without intruding on your privacy.",
    },
    {
      icon: Shield,
      title: "Your boundaries matter",
      description: "Set your comfort levels. Block, report, or leave anytime — you're always in control.",
    },
    {
      icon: Lock,
      title: "Privacy protected",
      description: "No phone numbers shared. No off-platform contact. Your personal details stay personal.",
    },
    {
      icon: Heart,
      title: "Inclusive by design",
      description: "Safe spaces for all genders, orientations, and backgrounds. Everyone deserves connection.",
    },
    {
      icon: Users,
      title: "Community guidelines",
      description: "Clear rules create comfort. We're building a culture of respect and empathy.",
    },
  ];

  return (
    <section id="safety" className="py-20 px-6 bg-card/30 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Your safety is our foundation
          </h2>
          <p className="text-xl text-cozy-brown/80 max-w-3xl mx-auto leading-relaxed">
            We believe meaningful connections happen when everyone feels safe. 
            That's why we've built protection into every conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {safetyFeatures.map((feature, index) => (
            <Card key={index} className="bg-background/60 backdrop-blur-sm border-border/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-midnight-blue/10 rounded-full flex items-center justify-center mb-6 border border-midnight-blue/20">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-cozy-brown/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Promise */}
        <div className="bg-gradient-warm/10 rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-serif text-foreground mb-6">
            Our promise to you
          </h3>
          <div className="max-w-3xl mx-auto space-y-4 text-cozy-brown/80 leading-relaxed">
            <p>
              <strong className="text-foreground">Connection without compromise.</strong> We'll never 
              ask you to sacrifice your safety for companionship. Every feature we build, every policy 
              we create, starts with your wellbeing in mind.
            </p>
            <p>
              Whether you're sharing your deepest thoughts at 3 AM or hosting your first circle, 
              you deserve to feel protected, respected, and valued.
            </p>
            <p className="text-primary font-medium pt-4">
              That's not just our policy — it's our promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;