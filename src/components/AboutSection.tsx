import { Heart, Users, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Human First",
      description: "We believe in the power of human voice and genuine connection over algorithms and automation."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by and for people who understand the value of late-night conversations and meaningful connections."
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "The wee hour feeling isn't bound by time. Find your moment of connection 24/7."
    },
    {
      icon: Globe,
      title: "Inclusive Platform",
      description: "Supporting multiple languages and diverse voices, because connection knows no boundaries."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-soft-cream/20 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            About weehour.club
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from the understanding that the best conversations happen when the world quiets down. 
            We're building a platform where authentic human connection thrives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif text-foreground mb-4">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              weehour.club started with a simple observation: in our hyper-connected world, 
              genuine human connection has become rare. The intimate conversations that used to 
              happen naturally in the wee hours - when guards are down and hearts are open - 
              were getting lost.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We created this platform to bring back that feeling. A place where you can find 
              someone to talk to anytime, where hosts can earn by offering their time and empathy, 
              and where every conversation is protected by respect and boundaries.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To make meaningful human connection accessible to everyone, anytime. We're not just 
              another chat platform - we're creating a movement that values empathy, celebrates 
              vulnerability, and rewards those who create safe spaces for others.
            </p>
            <div className="bg-primary/10 p-6 rounded-2xl">
              <p className="text-lg font-medium text-foreground italic">
                "In the quiet hours, we find our loudest truths."
              </p>
              <p className="text-sm text-muted-foreground mt-2">- weehour.club philosophy</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-card hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
