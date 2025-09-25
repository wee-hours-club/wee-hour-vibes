import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, Users, Heart, Shield, Globe } from "lucide-react";
import { Lantern, HandsHolding, TeaCup } from "@/components/DecorativeElements";

const ParticipantBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Any hour is wee hour",
      description: "Whether it's 3 AM or 3 PM, find that calm, intimate energy of late-night conversations whenever you need it.",
    },
    {
      icon: Phone,
      title: "Instant connection",
      description: "Join a conversation within seconds. No swiping, no waiting — just real voices and genuine moments.",
    },
    {
      icon: Heart,
      title: "Choose your vibe",
      description: "From motivational pep talks to calming meditation, poetry circles to casual chai chats — find your perfect space.",
    },
    {
      icon: Users,
      title: "Affordable companionship",
      description: "Pay only for the minutes you use. Start from just ₹6/minute for 1:1 sessions or join group events from ₹29.",
    },
    {
      icon: Globe,
      title: "Speak your language",
      description: "Hinglish, regional languages, or English — communicate in whatever feels most natural to you.",
    },
    {
      icon: Shield,
      title: "Always safe",
      description: "Every host is verified, every room is moderated. No off-platform contact, just safe conversations.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background/30 relative overflow-hidden">
      {/* Warm background elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-soft rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-mist rounded-full blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <HandsHolding className="text-primary/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Your sanctuary of connection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In a world that never stops, we all need moments of genuine human connection. 
            Here's how weehour.club becomes your companion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/30 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-soft rounded-full flex items-center justify-center mb-6 shadow-soft">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use cases */}
        <div className="mt-20 bg-card/40 backdrop-blur-sm rounded-3xl p-10 border border-border/30 relative">
          <div className="absolute top-4 right-4">
            <Lantern isGlowing={true} />
          </div>
          <div className="absolute bottom-4 left-4">
            <TeaCup className="text-primary/30" />
          </div>
          <h3 className="text-2xl font-serif text-foreground mb-8 text-center">
            When you might need us
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <span className="text-primary text-2xl">🌙</span>
              <div>
                <p className="text-muted-foreground">
                  <strong>Can't sleep at 2 AM?</strong> Join our "Night Owls" circle 
                  for soothing conversations that ease your mind.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-primary text-2xl">💼</span>
              <div>
                <p className="text-muted-foreground">
                  <strong>Tough day at work?</strong> Book a quick pep talk session 
                  to boost your confidence and mood.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-primary text-2xl">☕</span>
              <div>
                <p className="text-muted-foreground">
                  <strong>Morning coffee alone?</strong> Join "Chai & Coffee" rooms 
                  for warm morning conversations.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-primary text-2xl">🎭</span>
              <div>
                <p className="text-muted-foreground">
                  <strong>Creative soul?</strong> Share your poetry, stories, or 
                  thoughts in our creative circles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantBenefits;
