import { Button } from "@/components/ui/button";
import { Moon, Heart, Mic, Shield, HelpCircle, FileText, Lock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { BsMoonStars } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";
import { FloatingCandle } from "./DecorativeElements";

const Footer = () => {
  return (
    <footer className="relative bg-muted/30 dark:bg-background border-t border-border/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingCandle className="top-10 right-20 opacity-10" />
        <FloatingCandle className="bottom-20 left-32 opacity-10" delay={2000} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6 group">
              <div className="w-10 h-10 bg-gradient-soft rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-foreground">weehour.club</h3>
            </Link>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Where late-night souls find their perfect conversation. Experience the warmth of human connection, anytime.
            </p>
            <div className="space-y-3">
              <Link to="/join">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Heart className="w-4 h-4 mr-2" />
                  Find Your Host
                </Button>
              </Link>
              <Link to="/host">
                <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10">
                  <Mic className="w-4 h-4 mr-2" />
                  Become a Host
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
            {/* For You */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 flex items-center">
                <Heart className="w-4 h-4 mr-2 text-primary" />
                For You
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/join" className="text-muted-foreground hover:text-primary transition-colors inline-block">
                    Browse Live Hosts
                  </Link>
                </li>
                <li>
                  <Link to="/join#sessions" className="text-muted-foreground hover:text-primary transition-colors inline-block">
                    1:1 Sessions
                  </Link>
                </li>
                <li>
                  <Link to="/join#events" className="text-muted-foreground hover:text-primary transition-colors inline-block">
                    Themed Events
                  </Link>
                </li>
                <li>
                  <Link to="/join#pricing" className="text-muted-foreground hover:text-primary transition-colors inline-block">
                    Pricing Plans
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Hosts */}
            <div>
              <h4 className="font-semibold text-foreground mb-6 flex items-center">
                <Mic className="w-4 h-4 mr-2 text-primary" />
                For Hosts
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/host" className="text-muted-foreground hover:text-primary transition-colors inline-block">
                    Start Your Journey
                  </Link>
                </li>
                <li>
                  <Link to="/host#benefits" className="text-muted-foreground hover:text-primary transition-colors inline-block">
                    Host Benefits
                  </Link>
                </li>
                <li>
                  <Link to="/host#stories" className="text-muted-foreground hover:text-primary transition-colors inline-block">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link to="/host#support" className="text-muted-foreground hover:text-primary transition-colors inline-block">
                    Host Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Moments section */}
        <div className="border-t border-border/50 pt-12 mb-12">
          <h4 className="text-2xl font-serif text-foreground mb-10 text-center">
            Your moments, our purpose
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-soft/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BsMoonStars className="w-8 h-8 text-primary" />
              </div>
              <h5 className="font-semibold text-foreground mb-2">Can't sleep?</h5>
              <p className="text-sm text-muted-foreground">Night companions await</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-soft/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h5 className="font-semibold text-foreground mb-2">Need to vent?</h5>
              <p className="text-sm text-muted-foreground">Judgment-free listeners</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-soft/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <GiCoffeeCup className="w-8 h-8 text-primary" />
              </div>
              <h5 className="font-semibold text-foreground mb-2">Morning ritual?</h5>
              <p className="text-sm text-muted-foreground">Coffee chat companions</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-soft/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h5 className="font-semibold text-foreground mb-2">Feeling creative?</h5>
              <p className="text-sm text-muted-foreground">Share in our circles</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 weehour.club • Creating safe spaces for meaningful connection
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
                     <Link 
                      to="/safety" 
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                      <Shield className="w-3 h-3 mr-1" />
                      Safety
                    </Link>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <Lock className="w-3 h-3 mr-1" />
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <FileText className="w-3 h-3 mr-1" />
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <HelpCircle className="w-3 h-3 mr-1" />
                Support
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
            </nav>
          </div>
          
          {/* Tagline */}
          <div className="text-center mt-12 pt-8 border-t border-border/30">
            <p className="text-primary/80 italic font-serif text-lg">
              "In the quiet hours, we find our loudest truths."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;