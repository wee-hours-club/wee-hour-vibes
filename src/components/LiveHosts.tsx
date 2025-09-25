import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, Users, Star, Clock, Heart, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { RealAvatar, photoCollections } from "@/components/HumanPhotos";

interface Host {
  id: string;
  name: string;
  photoUrl: string;
  specialty: string;
  rating: number;
  ratePerMin: number;
  currentListeners: number;
  languages: string[];
  mood: string;
  isNew?: boolean;
  availability: "available" | "busy" | "in-session";
}

const LiveHosts = () => {
  const [hosts, setHosts] = useState<Host[]>([
    {
      id: "1",
      name: "Maya",
      photoUrl: photoCollections.hosts.maya,
      specialty: "Night Companion",
      rating: 4.9,
      ratePerMin: 12,
      currentListeners: 3,
      languages: ["English", "Hindi"],
      mood: "Calming",
      availability: "available"
    },
    {
      id: "2",
      name: "Arjun",
      photoUrl: photoCollections.hosts.arjun,
      specialty: "Morning Motivation",
      rating: 4.8,
      ratePerMin: 10,
      currentListeners: 5,
      languages: ["English", "Tamil"],
      mood: "Energetic",
      availability: "in-session"
    },
    {
      id: "3",
      name: "Priya",
      photoUrl: photoCollections.hosts.priya,
      specialty: "Poetry & Stories",
      rating: 5.0,
      ratePerMin: 15,
      currentListeners: 8,
      languages: ["English", "Bengali"],
      mood: "Creative",
      availability: "available",
      isNew: true
    },
    {
      id: "4",
      name: "Rahul",
      photoUrl: photoCollections.hosts.rahul,
      specialty: "Rant & Vent",
      rating: 4.7,
      ratePerMin: 8,
      currentListeners: 2,
      languages: ["Hinglish"],
      mood: "Understanding",
      availability: "available"
    },
    {
      id: "5",
      name: "Sara",
      photoUrl: photoCollections.hosts.sara,
      specialty: "Deep Conversations",
      rating: 4.9,
      ratePerMin: 14,
      currentListeners: 4,
      languages: ["English", "Urdu"],
      mood: "Thoughtful",
      availability: "busy"
    },
    {
      id: "6",
      name: "Dev",
      photoUrl: photoCollections.hosts.dev,
      specialty: "Life Coach",
      rating: 4.8,
      ratePerMin: 18,
      currentListeners: 6,
      languages: ["English", "Gujarati"],
      mood: "Inspiring",
      availability: "available"
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setHosts(prevHosts => 
        prevHosts.map(host => ({
          ...host,
          currentListeners: Math.max(0, host.currentListeners + Math.floor(Math.random() * 3) - 1),
          availability: Math.random() > 0.7 ? 
            ["available", "busy", "in-session"][Math.floor(Math.random() * 3)] as Host["availability"] : 
            host.availability
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getAvailabilityColor = (availability: Host["availability"]) => {
    switch (availability) {
      case "available": return "bg-green-500";
      case "busy": return "bg-yellow-500";
      case "in-session": return "bg-red-500";
    }
  };

  const getMoodColor = (mood: string) => {
    const colors: { [key: string]: string } = {
      "Calming": "bg-soft-blue/20 text-soft-blue",
      "Energetic": "bg-accent/20 text-accent",
      "Creative": "bg-lavender-mist/20 text-lavender-mist",
      "Understanding": "bg-dusty-mauve/20 text-dusty-mauve",
      "Thoughtful": "bg-quiet-plum/20 text-quiet-plum",
      "Inspiring": "bg-primary/20 text-primary"
    };
    return colors[mood] || "bg-muted/20 text-muted-foreground";
  };

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Live hosts waiting to connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real people, real conversations. Choose your perfect companion for this moment.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-muted-foreground">Available now</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm text-muted-foreground">Busy (join waitlist)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-muted-foreground">In session</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hosts.map((host, index) => (
            <Card 
              key={host.id} 
              className="group relative overflow-hidden hover:shadow-hover transform hover:-translate-y-2 transition-all duration-300 animate-slide-up border-2 border-transparent hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Live indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 ${getAvailabilityColor(host.availability)} rounded-full`}>
                    {host.availability === "available" && (
                      <div className={`absolute inset-0 w-3 h-3 ${getAvailabilityColor(host.availability)} rounded-full animate-ping`}></div>
                    )}
                  </div>
                </div>

                {/* Host info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative group-hover:scale-110 transition-transform">
                    <RealAvatar name={host.name} photoUrl={host.photoUrl} size="md" />
                    {host.isNew && (
                      <Badge className="absolute -top-2 -right-2 bg-sunset-pink text-white text-xs">
                        NEW
                      </Badge>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{host.name}</h3>
                    <p className="text-cozy-brown/70">{host.specialty}</p>
                    <div className="flex items-center mt-1">
                      <Star className="w-4 h-4 text-primary fill-primary mr-1" />
                      <span className="text-sm font-medium text-foreground">{host.rating}</span>
                      <span className="text-sm text-muted-foreground ml-2">₹{host.ratePerMin}/min</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className={getMoodColor(host.mood)}>
                    {host.mood}
                  </Badge>
                  {host.languages.map(lang => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                </div>

                {/* Current activity */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{host.currentListeners} listening now</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Avg 15 min</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  {host.availability === "available" ? (
                    <>
                      <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group-hover:scale-105 transition-transform shadow-soft">
                        <Mic className="w-4 h-4 mr-2" />
                        Talk Now
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-primary/10 border-primary/30">
                        <Heart className="w-4 h-4 text-primary" />
                      </Button>
                    </>
                  ) : host.availability === "busy" ? (
                    <Button variant="outline" className="flex-1">
                      <Clock className="w-4 h-4 mr-2" />
                      Join Waitlist
                    </Button>
                  ) : (
                    <Button variant="outline" disabled className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      In Session
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" variant="outline" className="border-2 border-warm-amber hover:bg-warm-amber hover:text-white">
            View All {hosts.length * 10}+ Live Hosts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveHosts;
