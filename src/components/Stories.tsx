import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { FloatingCandle, MoonPhases, SoundWaves } from "@/components/DecorativeElements";
import { RealAvatar, photoCollections } from "@/components/HumanPhotos";

const Stories = () => {
  const stories = [
    {
      name: "Ananya",
      age: 28,
      role: "Participant",
      photoUrl: photoCollections.testimonials.ananya,
      story: "After my divorce, nights were the hardest. I found weehour at 3 AM one sleepless night. Maya, my host, didn't try to fix me — she just listened. Now I sleep better knowing there's always someone there.",
      highlight: "Sometimes you just need someone to listen",
    },
    {
      name: "Karthik",
      age: 24,
      role: "Host",
      photoUrl: photoCollections.testimonials.karthik,
      story: "I started hosting 'Late Night Philosophy' sessions as a side hustle. Now I earn ₹25k/month and have regulars who say our talks help them think deeper. It's not just income — it's impact.",
      highlight: "Earning while making a difference",
    },
    {
      name: "Priya",
      age: 31,
      role: "Participant",
      photoUrl: photoCollections.hosts.priya,
      story: "Working from home was isolating. The morning 'Chai & Chat' sessions became my coffee companion. It's like having colleagues again, but better — they actually care about your day.",
      highlight: "Connection beyond the screen",
    },
    {
      name: "Rahul",
      age: 35,
      role: "Host",
      photoUrl: photoCollections.hosts.rahul,
      story: "As a therapist, I host guided meditation sessions on weekends. The platform lets me reach people who can't afford regular therapy. Every 'thank you' message reminds me why I do this.",
      highlight: "Affordable mental wellness for all",
    },
    {
      name: "Meera",
      age: 22,
      role: "Participant",
      photoUrl: photoCollections.testimonials.meera,
      story: "Exam stress was killing me. Found a host who runs 'Student Support' circles. ₹29 for an hour of motivation from someone who's been there? Best investment in my mental health.",
      highlight: "Support when you need it most",
    },
    {
      name: "Arjun",
      age: 27,
      role: "Host",
      photoUrl: photoCollections.hosts.arjun,
      story: "Lost my job during COVID. Started hosting evening rant sessions — turns out, many needed to vent. Now I make more than my old job and love that people leave feeling lighter.",
      highlight: "Turning empathy into livelihood",
    },
  ];

  return (
    <section className="py-20 px-6 bg-soft-cream/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Stories from our wee hours
          </h2>
          <p className="text-xl text-cozy-brown/80 max-w-3xl mx-auto leading-relaxed">
            Real people, real connections, real impact. These are their moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm border-border/30 p-8 hover:shadow-soft transition-all duration-300 relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <RealAvatar name={story.name} photoUrl={story.photoUrl} size="sm" className="mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {story.name}, {story.age}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      {story.role}
                    </span>
                  </div>
                </div>
                <p className="text-cozy-brown/80 leading-relaxed mb-4 italic">
                  "{story.story}"
                </p>
                <p className="text-sm font-medium text-foreground/80">
                  {story.highlight}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-20 text-center">
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50K+</p>
              <p className="text-cozy-brown/70">Conversations hosted</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">2,000+</p>
              <p className="text-cozy-brown/70">Active hosts</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">4.8/5</p>
              <p className="text-cozy-brown/70">Average rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">₹2.5L</p>
              <p className="text-cozy-brown/70">Weekly host earnings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
