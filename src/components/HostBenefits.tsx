import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IndianRupee, Calendar, Star, Users, Gift, ShieldCheck } from "lucide-react";

const HostBenefits = () => {
  const benefits = [
    {
      icon: IndianRupee,
      title: "Earn on your terms",
      description: "Keep 60-70% of earnings. Weekly payouts directly to your UPI or bank account.",
      highlight: "₹12,000+/month part-time",
    },
    {
      icon: Calendar,
      title: "Complete flexibility",
      description: "Host when you want, for as long as you want. No minimum hours, no pressure.",
      highlight: "Your schedule, your rules",
    },
    {
      icon: Star,
      title: "Build your following",
      description: "Grow from ratings, badges, and loyal participants who subscribe to your sessions.",
      highlight: "Become a trusted voice",
    },
    {
      icon: Gift,
      title: "Multiple income streams",
      description: "Earn from per-minute chats, ticketed events, and virtual gifts from grateful participants.",
      highlight: "Diversified earnings",
    },
    {
      icon: Users,
      title: "Create meaningful impact",
      description: "Be the comforting voice someone needs. Create safe spaces for connection and growth.",
      highlight: "Make a difference",
    },
    {
      icon: ShieldCheck,
      title: "Safe & supported",
      description: "Identity verification, moderation tools, and clear boundaries keep you protected.",
      highlight: "Host with confidence",
    },
  ];

  const hostTypes = [
    {
      title: "The Night Companion",
      description: "Sara hosts 'Midnight Musings' daily from 11 PM - 1 AM",
      earnings: "Earns ₹15,000/month",
      schedule: "2 hours/day",
    },
    {
      title: "The Motivator",
      description: "Ravi runs morning pep talk sessions before work",
      earnings: "Earns ₹8,000/month",
      schedule: "1 hour/day",
    },
    {
      title: "The Creative Soul",
      description: "Priya hosts weekend poetry circles and storytelling",
      earnings: "Earns ₹6,000/month",
      schedule: "Weekends only",
    },
    {
      title: "The Listener",
      description: "Arjun offers 1:1 venting sessions in the evenings",
      earnings: "Earns ₹20,000/month",
      schedule: "3 hours/day",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Become a beacon in someone's night
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Turn your empathy, experience, and voice into meaningful income. 
            Host on your schedule, earn with purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card hover:shadow-hover transform hover:-translate-y-2 transition-all duration-200 border-primary/20">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 animate-bounce-light">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {benefit.description}
                </p>
                <p className="text-primary font-semibold">
                  {benefit.highlight}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif text-foreground mb-10 text-center">
            Real hosts, real earnings
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostTypes.map((host, index) => (
              <div key={index} className="bg-card hover:shadow-hover rounded-2xl p-6 border border-primary/20 transform hover:-translate-y-1 transition-all duration-200">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {host.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {host.description}
                </p>
                <div className="space-y-2">
                  <p className="text-foreground font-medium">
                    {host.earnings}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {host.schedule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Earning Calculator */}
        <div className="bg-gradient-soft rounded-3xl p-10 border border-primary/30 text-center shadow-soft animate-fade-in-up">
          <h3 className="text-2xl font-serif text-foreground mb-6">
            Your earning potential
          </h3>
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">10 hours/week hosting 1:1 sessions</span>
              <span className="font-semibold text-primary">₹3,600 - ₹5,400/week</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Host 2 themed events/week (30 participants)</span>
              <span className="font-semibold text-primary">₹1,740 - ₹2,940/week</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Virtual gifts from grateful participants</span>
              <span className="font-semibold text-primary">₹500 - ₹2,000/week</span>
            </div>
            <div className="border-t border-primary/30 pt-4 mt-4">
              <div className="flex items-center justify-between">
                <span className="text-xl text-foreground">Potential monthly earnings</span>
                <span className="text-2xl font-bold text-primary animate-glow-pulse">₹20,000 - ₹40,000</span>
              </div>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Start Your Host Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HostBenefits;
