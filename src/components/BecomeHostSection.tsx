import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Star, Users, Crown, Zap } from "lucide-react";

const BecomeHostSection = () => {
  const hostPerks = [
    {
      icon: DollarSign,
      title: "Earn ₹12,000+ monthly",
      description: "Top hosts make consistent income with flexible schedules",
      highlight: "60-70% revenue share"
    },
    {
      icon: TrendingUp,
      title: "Grow your following",
      description: "Build a loyal community with ratings, badges, and subscriptions",
      highlight: "Weekly payouts via UPI"
    },
    {
      icon: Crown,
      title: "Premium recognition",
      description: "Get featured, verified badges, and access to exclusive events",
      highlight: "VIP host benefits"
    },
    {
      icon: Zap,
      title: "Multiple income streams",
      description: "Per-minute chats, group events, virtual gifts, and bonuses",
      highlight: "Diversified earnings"
    }
  ];

  const successStories = [
    {
      name: "Sara",
      specialty: "Daily Motivation",
      earnings: "₹18k/month",
      sessions: "200+ sessions",
      rating: 4.9,
      quote: "Helping people start their day positively while earning from home!"
    },
    {
      name: "Ravi",
      specialty: "Philosophy & Life",
      earnings: "₹22k/month",
      sessions: "150+ sessions",
      rating: 4.8,
      quote: "Deep conversations that matter, and I get paid for doing what I love."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-live rounded-full flex items-center justify-center shadow-live-glow">
              <Crown className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Become a Host
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your listening skills into income. Create safe spaces, build meaningful connections, 
            and earn on your own schedule.
          </p>
        </div>

        {/* Host Perks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {hostPerks.map((perk) => (
            <Card key={perk.title} className="bg-gradient-card border-border shadow-card hover:shadow-purple-glow transition-all duration-300 p-6 text-center">
              <div className="w-12 h-12 bg-twitch-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <perk.icon className="w-6 h-6 text-twitch-purple" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{perk.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{perk.description}</p>
              <Badge variant="outline" className="bg-twitch-purple/10 text-twitch-purple border-twitch-purple/30 text-xs">
                {perk.highlight}
              </Badge>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <Card key={story.name} className="bg-gradient-card border-border shadow-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{story.name}</h4>
                    <p className="text-twitch-purple font-medium">{story.specialty}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-live-red">{story.earnings}</div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-foreground">{story.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{story.sessions}</span>
                  </div>
                </div>
                
                <blockquote className="text-foreground italic">
                  "{story.quote}"
                </blockquote>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Steps */}
        <div className="bg-gradient-card border border-border rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Start Hosting in 3 Simple Steps
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-twitch-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-twitch-purple font-bold">1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Verify Identity</h4>
              <p className="text-sm text-muted-foreground">Quick verification process for safety and trust</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-twitch-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-twitch-purple font-bold">2</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Create Profile</h4>
              <p className="text-sm text-muted-foreground">Set your specialty, rates, and availability</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-twitch-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-twitch-purple font-bold">3</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Go Live</h4>
              <p className="text-sm text-muted-foreground">Start hosting and earning immediately</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="live" size="lg" className="mr-4">
            <Crown className="w-5 h-5 mr-2" />
            Apply to Become Host
          </Button>
          <Button variant="ghost-glow" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BecomeHostSection;