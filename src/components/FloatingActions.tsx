import { Button } from "@/components/ui/button";
import { MessageCircle, Headphones, X } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
        setHasScrolled(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show expanded view briefly when first visible
  useEffect(() => {
    if (isVisible && !hasScrolled) {
      setIsExpanded(true);
      const timer = setTimeout(() => setIsExpanded(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasScrolled]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
      {/* Secondary actions */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-hover animate-slide-up flex items-center gap-2 px-6 font-semibold"
          style={{ animationDelay: '100ms' }}
        >
          <Headphones className="w-5 h-5" />
          <span className="whitespace-nowrap">Browse Hosts</span>
        </Button>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-hover animate-slide-up flex items-center gap-2 px-6 font-semibold animate-glow-pulse"
          style={{ animationDelay: '200ms' }}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="whitespace-nowrap">Talk Now</span>
        </Button>
      </div>

      {/* Main floating button */}
      <Button
        size="icon"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          w-16 h-16 rounded-full shadow-hover transform transition-all duration-300
          ${isExpanded 
            ? 'bg-muted hover:bg-muted/80 rotate-45' 
            : 'bg-primary hover:bg-primary/90 hover:scale-110 animate-glow-pulse'
          }
        `}
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-primary-foreground" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full">
              <div className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping"></div>
            </div>
          </div>
        )}
      </Button>

      {/* Tooltip on first appearance */}
      {isExpanded && !hasScrolled && (
        <div className="absolute bottom-20 right-0 bg-card text-card-foreground px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in border border-border">
          <div className="absolute bottom-0 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-card"></div>
          Need someone to talk to?
        </div>
      )}
    </div>
  );
};

export default FloatingActions;
