import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Star, Ticket, TrendingUp } from "lucide-react";
import { useState } from "react";
import { HostAvatar } from "@/components/AvatarIllustrations";

interface Event {
  id: string;
  title: string;
  host: string;
  hostAvatarStyle: "night" | "morning" | "creative" | "understanding" | "thoughtful" | "inspiring" | "comedy";
  category: string;
  startTime: string;
  duration: number;
  price: number;
  spotsTotal: number;
  spotsTaken: number;
  rating: number;
  tags: string[];
  isPopular?: boolean;
  description: string;
}

const UpcomingEvents = () => {
  const [events] = useState<Event[]>([
    {
      id: "1",
      title: "Midnight Poetry Circle",
      host: "Priya",
      hostAvatarStyle: "creative",
      category: "Creative",
      startTime: "Tonight 11:00 PM",
      duration: 60,
      price: 39,
      spotsTotal: 30,
      spotsTaken: 24,
      rating: 4.9,
      tags: ["Poetry", "Creative", "Late Night"],
      isPopular: true,
      description: "Share your verses under the virtual moonlight"
    },
    {
      id: "2",
      title: "Morning Motivation Kickstart",
      host: "Arjun",
      hostAvatarStyle: "morning",
      category: "Motivation",
      startTime: "Tomorrow 6:30 AM",
      duration: 45,
      price: 29,
      spotsTotal: 50,
      spotsTaken: 12,
      rating: 4.8,
      tags: ["Motivation", "Morning", "Energy"],
      description: "Start your day with purpose and energy"
    },
    {
      id: "3",
      title: "Rant Friday: Let It All Out",
      host: "Rahul",
      hostAvatarStyle: "understanding",
      category: "Venting",
      startTime: "Friday 9:00 PM",
      duration: 90,
      price: 49,
      spotsTotal: 40,
      spotsTaken: 38,
      rating: 5.0,
      tags: ["Rant", "Weekend", "Stress Relief"],
      isPopular: true,
      description: "A safe space to vent about your week"
    },
    {
      id: "4",
      title: "Chai & Deep Conversations",
      host: "Sara",
      hostAvatarStyle: "thoughtful",
      category: "Philosophy",
      startTime: "Sunday 5:00 PM",
      duration: 120,
      price: 59,
      spotsTotal: 20,
      spotsTaken: 15,
      rating: 4.9,
      tags: ["Philosophy", "Deep Talk", "Weekend"],
      description: "Explore life's big questions over virtual chai"
    },
    {
      id: "5",
      title: "Guided Sleep Meditation",
      host: "Maya",
      hostAvatarStyle: "night",
      category: "Wellness",
      startTime: "Daily 10:30 PM",
      duration: 30,
      price: 19,
      spotsTotal: 100,
      spotsTaken: 67,
      rating: 4.7,
      tags: ["Sleep", "Meditation", "Daily"],
      description: "Drift into peaceful sleep with calming guidance"
    },
    {
      id: "6",
      title: "Comedy Night: Laugh Together",
      host: "Dev",
      hostAvatarStyle: "comedy",
      category: "Entertainment",
      startTime: "Saturday 8:00 PM",
      duration: 60,
      price: 45,
      spotsTotal: 60,
      spotsTaken: 52,
      rating: 4.8,
      tags: ["Comedy", "Fun", "Weekend"],
      isPopular: true,
      description: "End your week with laughter and joy"
    }
  ]);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Creative": "bg-twilight-purple/20 text-twilight-purple border-twilight-purple/30",
      "Motivation": "bg-sunset-pink/20 text-sunset-pink border-sunset-pink/30",
      "Venting": "bg-live-coral/20 text-live-coral border-live-coral/30",
      "Philosophy": "bg-midnight-blue/20 text-midnight-blue border-midnight-blue/30",
      "Wellness": "bg-candlelight/20 text-candlelight border-candlelight/30",
      "Entertainment": "bg-warm-amber/20 text-warm-amber border-warm-amber/30"
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const spotsPercentage = (taken: number, total: number) => (taken / total) * 100;

  return (
    <section className="py-20 px-6 bg-soft-cream/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Join a circle, find your tribe
          </h2>
          <p className="text-xl text-cozy-brown/80 max-w-3xl mx-auto">
            Themed events where conversations flow naturally. From poetry to philosophy, 
            find your perfect gathering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card 
              key={event.id} 
              className="group hover:shadow-hover transform hover:-translate-y-2 transition-all duration-300 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                  {event.isPopular && (
                    <Badge className="bg-primary text-primary-foreground border-0 font-semibold">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
              </CardHeader>
              <CardContent>
                {/* Host info */}
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <HostAvatar name={event.host} style={event.hostAvatarStyle} size="sm" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Hosted by {event.host}</p>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-accent fill-accent mr-1" />
                      <span className="text-xs text-muted-foreground">{event.rating} rating</span>
                    </div>
                  </div>
                </div>

                {/* Event details */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {event.startTime}
                  </div>
                  <div className="flex items-center text-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {event.duration} minutes
                  </div>
                  <div className="flex items-center text-foreground">
                    <Ticket className="w-4 h-4 mr-2 text-primary" />
                    ₹{event.price} per seat
                  </div>
                </div>

                {/* Spots indicator */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">
                      {event.spotsTaken}/{event.spotsTotal} spots filled
                    </span>
                    <span className="text-primary font-semibold">
                      {event.spotsTotal - event.spotsTaken} left
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-soft rounded-full transition-all duration-500"
                      style={{ width: `${spotsPercentage(event.spotsTaken, event.spotsTotal)}%` }}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group-hover:scale-105 transition-transform"
                  disabled={event.spotsTaken >= event.spotsTotal}
                >
                  {event.spotsTaken >= event.spotsTotal ? "Sold Out" : "Reserve Your Spot"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Browse more */}
        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground">
            <Calendar className="w-5 h-5 mr-2" />
            Browse All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
