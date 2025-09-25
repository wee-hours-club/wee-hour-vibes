import { useEffect, useState } from "react";

export const FloatingCandle = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div 
    className={`absolute opacity-20 animate-float ${className}`} 
    style={{ animationDelay: `${delay}ms` }}
  >
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="20" width="10" height="40" fill="currentColor" className="text-candlelight" />
      <ellipse cx="20" cy="10" rx="8" ry="12" fill="currentColor" className="text-warm-amber animate-pulse-glow" />
      <ellipse cx="20" cy="8" rx="4" ry="6" fill="currentColor" className="text-sunset-pink" />
    </svg>
  </div>
);

export const TeaCup = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15C10 15 10 35 20 40C30 45 40 40 40 40V15H10Z" fill="currentColor" className="text-soft-cream" />
      <path d="M40 20H45C48 20 50 22 50 25C50 28 48 30 45 30H40" stroke="currentColor" strokeWidth="2" className="text-cozy-brown" />
      <path d="M8 15H42" stroke="currentColor" strokeWidth="2" className="text-cozy-brown" />
      <path d="M15 5C15 5 17 10 20 10C23 10 25 5 25 5" stroke="currentColor" strokeWidth="1.5" className="text-warm-amber opacity-50" />
    </svg>
  </div>
);

export const MoonPhases = ({ currentPhase = 2 }: { currentPhase?: number }) => {
  const phases = [
    // New moon
    <circle cx="20" cy="20" r="15" fill="currentColor" className="text-night-sky" />,
    // Crescent
    <>
      <circle cx="20" cy="20" r="15" fill="currentColor" className="text-night-sky" />
      <circle cx="25" cy="20" r="15" fill="currentColor" className="text-moonlight" />
    </>,
    // Half moon
    <>
      <circle cx="20" cy="20" r="15" fill="currentColor" className="text-night-sky" />
      <rect x="20" y="5" width="15" height="30" fill="currentColor" className="text-moonlight" />
    </>,
    // Gibbous
    <>
      <circle cx="20" cy="20" r="15" fill="currentColor" className="text-moonlight" />
      <circle cx="15" cy="20" r="12" fill="currentColor" className="text-night-sky" />
    </>,
    // Full moon
    <circle cx="20" cy="20" r="15" fill="currentColor" className="text-moonlight animate-pulse-glow" />
  ];

  return (
    <div className="inline-block">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {phases[currentPhase]}
      </svg>
    </div>
  );
};

export const SoundWaves = ({ isActive = true }: { isActive?: boolean }) => (
  <div className="inline-block relative">
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M10 20C10 20 15 10 20 20C25 30 30 10 35 20C40 30 45 10 50 20" 
        stroke="currentColor" 
        strokeWidth="2" 
        className={`text-warm-amber ${isActive ? 'animate-pulse' : ''}`}
        strokeLinecap="round"
      />
      <path 
        d="M5 20C5 20 10 15 15 20C20 25 25 15 30 20C35 25 40 15 45 20C50 25 55 15 55 20" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        className={`text-candlelight opacity-50 ${isActive ? 'animate-pulse delay-100' : ''}`}
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export const HandsHolding = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 30C20 30 25 25 30 25C35 25 40 30 40 30" 
        stroke="currentColor" 
        strokeWidth="3" 
        className="text-warm-amber"
        strokeLinecap="round"
      />
      <path 
        d="M40 30C40 30 45 25 50 25C55 25 60 30 60 30" 
        stroke="currentColor" 
        strokeWidth="3" 
        className="text-candlelight"
        strokeLinecap="round"
      />
      <circle cx="40" cy="35" r="3" fill="currentColor" className="text-sunset-pink animate-pulse" />
    </svg>
  </div>
);

export const Lantern = ({ isGlowing = true }: { isGlowing?: boolean }) => (
  <div className="inline-block relative">
    {isGlowing && (
      <div className="absolute inset-0 blur-xl bg-candlelight/30 rounded-full scale-150"></div>
    )}
    <svg width="50" height="70" viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
      <path d="M15 10H35V15H15V10Z" fill="currentColor" className="text-cozy-brown" />
      <path d="M10 15H40V50C40 55 35 60 25 60C15 60 10 55 10 50V15Z" stroke="currentColor" strokeWidth="2" className="text-cozy-brown" fill="none" />
      <rect x="20" y="25" width="10" height="20" fill="currentColor" className={`text-candlelight ${isGlowing ? 'animate-pulse-glow' : ''}`} />
      <path d="M25 5V10" stroke="currentColor" strokeWidth="2" className="text-cozy-brown" />
      <circle cx="25" cy="5" r="2" fill="currentColor" className="text-cozy-brown" />
    </svg>
  </div>
);

export const Stars = ({ count = 5 }: { count?: number }) => {
  const [positions] = useState(() => 
    Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2000
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute animate-pulse-glow"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            animationDelay: `${pos.delay}ms`,
          }}
        >
          <svg 
            width={pos.size * 10} 
            height={pos.size * 10} 
            viewBox="0 0 10 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="1" fill="currentColor" className="text-candlelight" />
            <path 
              d="M5 0 L5 10 M0 5 L10 5" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              className="text-candlelight opacity-50"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export const WarmGlow = ({ className = "" }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-10 ${className}`}>
    <div className="w-full h-full bg-gradient-sunset animate-pulse-glow"></div>
  </div>
);

// Animated fireflies for magical effect
export const Fireflies = ({ count = 3 }: { count?: number }) => {
  const [fireflies] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="absolute w-1 h-1"
          style={{
            left: `${firefly.initialX}%`,
            top: `${firefly.initialY}%`,
            animation: `firefly-path ${firefly.duration}s ease-in-out ${firefly.delay}s infinite`
          }}
        >
          <div className="relative">
            <div className="absolute w-2 h-2 bg-candlelight rounded-full blur-sm animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      ))}
      <style jsx>{`
        @keyframes firefly-path {
          0% { transform: translate(0, 0); }
          25% { transform: translate(30px, -20px); }
          50% { transform: translate(-20px, -40px); }
          75% { transform: translate(-40px, 10px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
};
