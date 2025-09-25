import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Users, Clock, Mic, Heart, MessageSquare } from "lucide-react";

const LiveHostsSection = () => {
  const liveHosts = [
    {
      id: 1,
      name: "Sara",
      title: "Coffee & Chai Check-in",
      category: "Motivational",
      rating: 4.9,
      listeners: 12,
      duration: "15 min",
      price: "₹12/min",
      avatar: "/placeholder.svg",
      tags: ["Stress Relief", "Daily Motivation"],
      status: "live"
    },
    {
      id: 2,
      name: "Ravi",
      title: "Late Night Philosophy",
      category: "Deep Talk",
      rating: 4.8,
      listeners: 8,
      duration: "20 min",
      price: "₹15/min",
      avatar: "/placeholder.svg",
      tags: ["Philosophy", "Life Questions"],
      status: "live"
    },
    {
      id: 3,
      name: "Priya",
      title: "Poetry & Dreams",
      category: "Creative",
      rating: 5.0,
      listeners: 6,
      duration: "12 min",
      price: "₹10/min",
      avatar: "/placeholder.svg",
      tags: ["Poetry", "Creative Writing"],
      status: "live"
    },
    {
      id: 4,
      name: "Dev",
      title: "Rant Club - Safe Space",
      category: "Venting",
      rating: 4.7,
      listeners: 15,
      duration: "10 min",
      price: "₹8/min",
      avatar: "/placeholder.svg",
      tags: ["Venting", "Emotional Support"],
      status: "live"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Live Hosts
            </h2>
            <p className="text-xl text-muted-foreground">
              Join conversations happening right now
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-live-red rounded-full animate-pulse"></div>
            <span className="text-live-red font-semibold">{liveHosts.length} hosts streaming</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveHosts.map((host) => (
            <Card key={host.id} className="group bg-gradient-card border-border shadow-card hover:shadow-purple-glow transition-all duration-300 overflow-hidden">
              {/* Live Indicator */}
              <div className="relative">
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-live-red/20 text-live-red border-live-red/30 text-xs">
                    <div className="w-2 h-2 bg-live-red rounded-full mr-1 animate-pulse"></div>
                    LIVE
                  </Badge>
                </div>
                
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                    <Users className="w-3 h-3 mr-1" />
                    {host.listeners}
                  </Badge>
                </div>

                {/* Stream Preview */}
                <div className="h-32 bg-gradient-stream bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-sm font-semibold text-foreground truncate">{host.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-4">
                {/* Host Info */}
                <div className="flex items-center space-x-3 mb-3">
                  <Avatar className="w-10 h-10 ring-2 ring-twitch-purple/30">
                    <AvatarImage src={host.avatar} />
                    <AvatarFallback>{host.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">{host.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{host.category}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-foreground">{host.rating}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {host.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs bg-secondary/50 border-border">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Session Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{host.duration}</span>
                  </div>
                  <div className="font-semibold text-foreground">{host.price}</div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button variant="live" size="sm" className="w-full">
                    <Mic className="w-4 h-4 mr-2" />
                    Join Voice Chat
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="stream" size="sm" className="flex-1">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Quick Chat
                    </Button>
                    <Button variant="stream" size="sm" className="flex-1">
                      <Heart className="w-3 h-3 mr-1" />
                      Send Gift
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Live Hosts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveHostsSection;