import Header from "@/components/Header";
import HostBenefits from "@/components/HostBenefits";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mic, DollarSign, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { HumanPhoto } from "@/components/HumanPhotos";
import { Card, CardContent } from "@/components/ui/card";

const ForHosts = () => {
  const quickStats = [
    { icon: DollarSign, label: "Average Monthly Earnings", value: "₹20,000 - ₹40,000" },
    { icon: Calendar, label: "Work On Your Schedule", value: "Flexible Hours" },
    { icon: Star, label: "Host Satisfaction", value: "4.8/5 Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section for Hosts */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HumanPhoto 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop"
            alt="Host helping others"
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
              Turn your empathy into income
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Create meaningful connections while earning on your own schedule. 
              Join thousands of hosts who are making a difference, one conversation at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mic className="w-5 h-5 mr-2" />
                Start Hosting Today
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickStats.map((stat, index) => (
                <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/30">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-primary mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Highlight */}
      <section className="py-20 px-6 bg-soft-cream/30">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-serif text-foreground mb-4">
                    "I found my calling and a stable income"
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Sara started hosting evening sessions after her day job. Within 3 months, 
                    she was earning enough to quit and host full-time. Now she helps 50+ people 
                    every week find comfort and connection.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">₹35,000</p>
                      <p className="text-sm text-muted-foreground">Monthly earnings</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">200+</p>
                      <p className="text-sm text-muted-foreground">Regular listeners</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <HumanPhoto 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop"
                    alt="Successful host Sara"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <HostBenefits />
      
      {/* Filter stories to show only host stories */}
      <section className="py-20 px-6 bg-soft-cream/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-midnight-blue mb-6">
              Host success stories
            </h2>
            <p className="text-xl text-cozy-brown/80 max-w-3xl mx-auto leading-relaxed">
              Real hosts sharing their journey of impact and income
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ForHosts;
