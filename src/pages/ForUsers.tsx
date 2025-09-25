import Header from "@/components/Header";
import LiveHosts from "@/components/LiveHosts";
import UpcomingEvents from "@/components/UpcomingEvents";
import ParticipantBenefits from "@/components/ParticipantBenefits";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { HumanPhoto } from "@/components/HumanPhotos";

const ForUsers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section for Users */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HumanPhoto 
            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&h=1080&fit=crop"
            alt="People connecting"
            className="w-full h-full opacity-10"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Button>
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">
              Find your perfect conversation partner
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether it's 3 AM or 3 PM, connect with verified hosts who are ready to listen, 
              share, and create that warm feeling of late-night conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chatting Now
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="w-5 h-5 mr-2" />
                Browse Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LiveHosts />
      <UpcomingEvents />
      <ParticipantBenefits />
      <Stories />
      <Footer />
    </div>
  );
};

export default ForUsers;
