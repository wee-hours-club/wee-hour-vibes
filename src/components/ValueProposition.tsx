import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, Gift, Shield, Clock, Heart } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-20 px-6 bg-midnight">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-warm-white mb-4">
            Why weehour.club feels different
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            It's not about the clock — it's about the feeling. That safe, intimate energy 
            of late-night conversations, whenever you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* For Participants */}
          <div>
            <h3 className="text-2xl font-bold text-amber-glow mb-8 text-center">
              For Participants
            </h3>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-purple-mist/20 shadow-soft hover:shadow-glow transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-amber-glow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-warm-white mb-2">Companionship on demand</h4>
                    <p className="text-muted-foreground">Hop in whenever you feel like sharing, venting, or simply listening to others.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-purple-mist/20 shadow-soft hover:shadow-glow transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-amber-glow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-warm-white mb-2">Affordable micro-pricing</h4>
                    <p className="text-muted-foreground">Pay only for the minutes or events you choose. No subscriptions, no commitments.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-purple-mist/20 shadow-soft hover:shadow-glow transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-amber-glow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-warm-white mb-2">That wee-hour vibe, always</h4>
                    <p className="text-muted-foreground">Warm, unhurried, intimate conversations at any hour of the day.</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="secondary">Start Listening</Button>
            </div>
          </div>

          {/* For Hosts */}
          <div>
            <h3 className="text-2xl font-bold text-amber-glow mb-8 text-center">
              For Hosts
            </h3>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-purple-mist/20 shadow-soft hover:shadow-glow transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-amber-glow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-warm-white mb-2">Flexible income stream</h4>
                    <p className="text-muted-foreground">Earn on your own time by hosting sessions or events. Keep 60-70% of earnings.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-purple-mist/20 shadow-soft hover:shadow-glow transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <Gift className="w-6 h-6 text-amber-glow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-warm-white mb-2">Multiple revenue channels</h4>
                    <p className="text-muted-foreground">Per-minute chats, group tickets, and virtual gifts from grateful participants.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-purple-mist/20 shadow-soft hover:shadow-glow transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-amber-glow mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-warm-white mb-2">Respect & trust built-in</h4>
                    <p className="text-muted-foreground">Verification, safety tools, and boundaries. Grow a following with ratings and badges.</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="hero">Become a Host</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;