import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Shield, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingCandle, Stars } from "@/components/DecorativeElements";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-soft rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
          <Stars count={6} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 animate-fade-in">
              About weehour.club
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Where meaningful conversations bloom in the quiet hours
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <div className="bg-card rounded-3xl p-10 shadow-soft mb-8 animate-fade-in-up">
              <h2 className="text-3xl font-serif text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Born from the understanding that the most profound connections often happen when the world quiets down, 
                weehour.club is more than just a platform — it's a sanctuary for souls seeking genuine human connection.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe that everyone deserves to be heard, especially in those vulnerable hours when thoughts 
                become louder and loneliness feels heavier. Whether it's 3 AM or 3 PM, we're here to ensure 
                no one has to face their thoughts alone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create a world where meaningful conversation is always within reach, 
                  where empathy has value, and where no one feels alone in their darkest hours.
                </p>
              </div>
              
              <div className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300">
                <Users className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-2xl font-serif text-foreground mb-4">Our Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A diverse tapestry of voices from across India and beyond, united by 
                  the simple act of listening and the profound impact of being heard.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 rounded-3xl p-10 mb-12">
              <h2 className="text-3xl font-serif text-foreground mb-6 text-center">Why wee hours?</h2>
              <p className="text-foreground/90 text-center text-lg leading-relaxed max-w-3xl mx-auto">
                The wee hours — those quiet moments between midnight and dawn — have always been special. 
                It's when masks come off, guards come down, and real conversations happen. We've taken 
                that magic and made it available 24/7, because your "wee hour" might be different from mine.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">50K+</p>
                <p className="text-muted-foreground">Conversations</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">2,000+</p>
                <p className="text-muted-foreground">Verified Hosts</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-muted-foreground">Available</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">4.8/5</p>
                <p className="text-muted-foreground">Rating</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-serif text-foreground mb-6">Ready to experience the magic?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/join">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Heart className="w-5 h-5 mr-2" />
                    Find Your Host
                  </Button>
                </Link>
                <Link to="/host">
                  <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10">
                    Become a Host
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
