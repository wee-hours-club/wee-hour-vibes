import { Button } from "@/components/ui/button";
import { Moon, MessageCircle, Users, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-twilight border-t border-purple-mist/20 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Moon className="w-8 h-8 text-amber-glow mr-2" />
              <h3 className="text-2xl font-bold text-warm-white">weehour.club</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The feeling of wee hours, anytime. Voice-first companionship 
              when you need it most.
            </p>
            <div className="space-y-2">
              <Button variant="hero" size="lg" className="mr-4">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Talking
              </Button>
              <Button variant="ghost-glow" size="lg">
                <Users className="w-4 h-4 mr-2" />
                Become a Host
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-warm-white mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-amber-glow transition-colors">1:1 Sessions</a></li>
              <li><a href="#" className="hover:text-amber-glow transition-colors">Group Circles</a></li>
              <li><a href="#" className="hover:text-amber-glow transition-colors">Special Events</a></li>
              <li><a href="#" className="hover:text-amber-glow transition-colors">Browse Hosts</a></li>
            </ul>
          </div>

          {/* Host Resources */}
          <div>
            <h4 className="font-semibold text-warm-white mb-4">For Hosts</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-amber-glow transition-colors">Start Hosting</a></li>
              <li><a href="#" className="hover:text-amber-glow transition-colors">Host Resources</a></li>
              <li><a href="#" className="hover:text-amber-glow transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-amber-glow transition-colors">Earnings</a></li>
            </ul>
          </div>
        </div>

        {/* Example Use Cases */}
        <div className="border-t border-purple-mist/20 pt-12 mb-12">
          <h4 className="text-xl font-bold text-warm-white mb-8 text-center">
            When to hop in
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-amber-glow mb-2">📞</div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-warm-white">Stressed midday?</strong><br />
                Join a 10-minute pep talk
              </p>
            </div>
            <div className="text-center">
              <div className="text-amber-glow mb-2">🌙</div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-warm-white">Lonely at night?</strong><br />
                Find comfort in conversation
              </p>
            </div>
            <div className="text-center">
              <div className="text-amber-glow mb-2">✨</div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-warm-white">Want to share joy?</strong><br />
                Celebrate with others
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-purple-mist/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 weehour.club. Creating safe spaces for meaningful connection.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-amber-glow transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-glow transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-glow transition-colors">Safety</a>
            <a href="#" className="hover:text-amber-glow transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;