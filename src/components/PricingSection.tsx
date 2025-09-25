import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Users, Ticket } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 px-6 bg-twilight">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-warm-white mb-4">
            Simple, fair pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pay only for what you use. No hidden fees, no monthly commitments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1:1 Sessions */}
          <Card className="p-8 bg-gradient-card border-purple-mist/20 shadow-card hover:shadow-glow transition-all duration-500 text-center">
            <div className="w-12 h-12 bg-amber-glow/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-6 h-6 text-amber-glow" />
            </div>
            <h3 className="text-xl font-bold text-warm-white mb-2">1:1 Sessions</h3>
            <div className="text-3xl font-bold text-amber-glow mb-4">₹6-15<span className="text-sm text-muted-foreground">/minute</span></div>
            <p className="text-muted-foreground mb-6">Intimate one-on-one conversations with verified hosts</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-amber-glow mr-2 flex-shrink-0" />
                Instant matching
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-amber-glow mr-2 flex-shrink-0" />
                5-12 minute sessions
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-amber-glow mr-2 flex-shrink-0" />
                Safe & moderated
              </div>
            </div>
            
            <Button variant="ghost-glow" className="w-full">Try Now</Button>
          </Card>

          {/* Group Sessions */}
          <Card className="p-8 bg-gradient-card border-amber-glow/40 shadow-card hover:shadow-glow transition-all duration-500 text-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
            </div>
            <div className="w-12 h-12 bg-amber-glow/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-6 h-6 text-amber-glow" />
            </div>
            <h3 className="text-xl font-bold text-warm-white mb-2">Group Circles</h3>
            <div className="text-3xl font-bold text-amber-glow mb-4">₹29-49<span className="text-sm text-muted-foreground">/ticket</span></div>
            <p className="text-muted-foreground mb-6">Cozy group conversations with 4-8 people</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-amber-glow mr-2 flex-shrink-0" />
                Themed conversations
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-amber-glow mr-2 flex-shrink-0" />
                Small group intimacy
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-amber-glow mr-2 flex-shrink-0" />
                Hosted experiences
              </div>
            </div>
            
            <Button variant="hero" className="w-full">Join Circle</Button>
          </Card>

          {/* Special Events */}
          <Card className="p-8 bg-gradient-card border-purple-mist/20 shadow-card hover:shadow-glow transition-all duration-500 text-center">
            <div className="w-12 h-12 bg-amber-glow/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Ticket className="w-6 h-6 text-amber-glow" />
            </div>
            <h3 className="text-xl font-bold text-warm-white mb-2">Special Events</h3>
            <div className="text-3xl font-bold text-amber-glow mb-4">₹49+<span className="text-sm text-muted-foreground">/event</span></div>
            <p className="text-muted-foreground mb-6">Poetry nights, rant clubs, mindful breaks & more</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-amber-glow mr-2 flex-shrink-0" />
                Curated experiences
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-amber-glow mr-2 flex-shrink-0" />
                Special themes
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-amber-glow mr-2 flex-shrink-0" />
                Premium hosts
              </div>
            </div>
            
            <Button variant="ghost-glow" className="w-full">Browse Events</Button>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card border border-purple-mist/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-warm-white mb-4">Virtual Gifts</h3>
            <p className="text-muted-foreground mb-6">
              Show appreciation with virtual "candles," "chai," or "lamps" — token packs from ₹19-199
            </p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <span>🕯️ Candle - ₹19</span>
              <span>☕ Chai - ₹49</span>
              <span>🪔 Lamp - ₹99</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;