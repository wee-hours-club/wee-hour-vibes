import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, Ticket, Star } from "lucide-react";

const StreamingEventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Friday Night Ghazal Circle",
      host: "Aarti",
      time: "Tonight 9:00 PM",
      duration: "60 min",
      price: "₹49",
      capacity: "8 people",
      joined: 5,
      category: "Music & Poetry",
      featured: true
    },
    {
      id: 2,
      title: "Sunday Morning Mindfulness",
      host: "Rohit",
      time: "Tomorrow 8:00 AM",
      duration: "45 min",
      price: "₹39",
      capacity: "12 people",
      joined: 8,
      category: "Wellness"
    },
    {
      id: 3,
      title: "Startup Stories & Coffee",
      host: "Neha",
      time: "Wed 6:00 PM",
      duration: "90 min",
      price: "₹59",
      capacity: "6 people",
      joined: 3,
      category: "Business"
    }
  ];

  return (
    <section className="py-20 px-6 bg-chat-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join curated group experiences with verified hosts. Limited seats available.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className={`relative bg-gradient-card border-border shadow-card hover:shadow-purple-glow transition-all duration-300 overflow-hidden ${event.featured ? 'ring-2 ring-twitch-purple/50' : ''}`}>
              {event.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-live text-white border-none px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              {/* Event Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="bg-secondary/50 border-border text-xs">
                    {event.category}
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{event.price}</div>
                    <div className="text-xs text-muted-foreground">per person</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">Hosted by {event.host}</p>

                {/* Event Details */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-twitch-purple" />
                    <span className="text-foreground">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-twitch-purple" />
                    <span className="text-foreground">{event.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-twitch-purple" />
                    <span className="text-foreground">{event.capacity}</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Seats filled</span>
                    <span className="text-foreground">{event.joined}/{event.capacity.split(' ')[0]}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-live rounded-full h-2 transition-all duration-300"
                      style={{ width: `${(event.joined / parseInt(event.capacity.split(' ')[0])) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <Button 
                  variant={event.featured ? "live" : "hero"} 
                  size="sm" 
                  className="w-full"
                  disabled={event.joined >= parseInt(event.capacity.split(' ')[0])}
                >
                  {event.joined >= parseInt(event.capacity.split(' ')[0]) ? (
                    "Sold Out"
                  ) : (
                    <>
                      <Ticket className="w-4 h-4 mr-2" />
                      Reserve Seat
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="ghost-glow" size="lg">
            Browse All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StreamingEventsSection;