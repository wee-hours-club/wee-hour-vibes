import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Custom illustrated avatars for hosts
export const avatarStyles = {
  night: {
    background: "bg-gradient-to-br from-midnight-blue to-twilight-purple",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="40" r="20" fill="currentColor" className="text-moonlight/80" />
        <path d="M30 70C30 60 40 55 50 55C60 55 70 60 70 70V90H30V70Z" fill="currentColor" className="text-moonlight/60" />
        <path d="M45 35L50 45L55 35" stroke="currentColor" strokeWidth="2" className="text-midnight-blue" strokeLinecap="round" />
        <circle cx="42" cy="38" r="2" fill="currentColor" className="text-midnight-blue" />
        <circle cx="58" cy="38" r="2" fill="currentColor" className="text-midnight-blue" />
      </svg>
    )
  },
  morning: {
    background: "bg-gradient-to-br from-warm-amber to-candlelight",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="40" r="20" fill="currentColor" className="text-soft-cream" />
        <path d="M30 70C30 60 40 55 50 55C60 55 70 60 70 70V90H30V70Z" fill="currentColor" className="text-warm-amber/80" />
        <path d="M40 45Q50 50 60 45" stroke="currentColor" strokeWidth="2" className="text-cozy-brown" strokeLinecap="round" />
        <circle cx="42" cy="38" r="2" fill="currentColor" className="text-cozy-brown" />
        <circle cx="58" cy="38" r="2" fill="currentColor" className="text-cozy-brown" />
      </svg>
    )
  },
  creative: {
    background: "bg-gradient-to-br from-sunset-pink to-twilight-purple",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="40" r="20" fill="currentColor" className="text-soft-cream" />
        <path d="M30 70C30 60 40 55 50 55C60 55 70 60 70 70V90H30V70Z" fill="currentColor" className="text-twilight-purple/80" />
        <path d="M35 30Q40 25 45 30T55 30T65 30" stroke="currentColor" strokeWidth="2" className="text-sunset-pink" strokeLinecap="round" />
        <circle cx="42" cy="38" r="2" fill="currentColor" className="text-twilight-purple" />
        <circle cx="58" cy="38" r="2" fill="currentColor" className="text-twilight-purple" />
        <path d="M45 45Q50 48 55 45" stroke="currentColor" strokeWidth="2" className="text-twilight-purple" strokeLinecap="round" />
      </svg>
    )
  },
  understanding: {
    background: "bg-gradient-to-br from-candlelight to-warm-amber",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="40" r="20" fill="currentColor" className="text-soft-cream" />
        <path d="M30 70C30 60 40 55 50 55C60 55 70 60 70 70V90H30V70Z" fill="currentColor" className="text-candlelight/80" />
        <path d="M42 45Q50 48 58 45" stroke="currentColor" strokeWidth="2" className="text-warm-amber" strokeLinecap="round" />
        <circle cx="42" cy="38" r="2" fill="currentColor" className="text-warm-amber" />
        <circle cx="58" cy="38" r="2" fill="currentColor" className="text-warm-amber" />
      </svg>
    )
  },
  thoughtful: {
    background: "bg-gradient-to-br from-midnight-blue to-moonlight/30",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="40" r="20" fill="currentColor" className="text-moonlight/90" />
        <path d="M30 70C30 60 40 55 50 55C60 55 70 60 70 70V90H30V70Z" fill="currentColor" className="text-midnight-blue/80" />
        <path d="M45 45L55 45" stroke="currentColor" strokeWidth="2" className="text-midnight-blue" strokeLinecap="round" />
        <circle cx="42" cy="38" r="2" fill="currentColor" className="text-midnight-blue" />
        <circle cx="58" cy="38" r="2" fill="currentColor" className="text-midnight-blue" />
        <circle cx="50" cy="25" r="3" stroke="currentColor" strokeWidth="1.5" className="text-midnight-blue" fill="none" />
      </svg>
    )
  },
  inspiring: {
    background: "bg-gradient-to-br from-live-coral to-sunset-pink",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="40" r="20" fill="currentColor" className="text-soft-cream" />
        <path d="M30 70C30 60 40 55 50 55C60 55 70 60 70 70V90H30V70Z" fill="currentColor" className="text-live-coral/80" />
        <path d="M40 43Q50 48 60 43" stroke="currentColor" strokeWidth="2" className="text-live-coral" strokeLinecap="round" />
        <circle cx="42" cy="38" r="2" fill="currentColor" className="text-live-coral" />
        <circle cx="58" cy="38" r="2" fill="currentColor" className="text-live-coral" />
        <path d="M45 25L50 20L55 25" stroke="currentColor" strokeWidth="2" className="text-sunset-pink" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  comedy: {
    background: "bg-gradient-to-br from-warm-amber to-candlelight",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="40" r="20" fill="currentColor" className="text-soft-cream" />
        <path d="M30 70C30 60 40 55 50 55C60 55 70 60 70 70V90H30V70Z" fill="currentColor" className="text-warm-amber/80" />
        <path d="M35 45Q50 55 65 45" stroke="currentColor" strokeWidth="3" className="text-warm-amber" strokeLinecap="round" />
        <circle cx="42" cy="38" r="2" fill="currentColor" className="text-warm-amber" />
        <circle cx="58" cy="38" r="2" fill="currentColor" className="text-warm-amber" />
        <circle cx="35" cy="42" r="3" fill="currentColor" className="text-sunset-pink/50" />
        <circle cx="65" cy="42" r="3" fill="currentColor" className="text-sunset-pink/50" />
      </svg>
    )
  }
};

interface HostAvatarProps {
  name: string;
  style: keyof typeof avatarStyles;
  size?: "sm" | "md" | "lg";
}

export const HostAvatar = ({ name, style, size = "md" }: HostAvatarProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  };

  const avatarStyle = avatarStyles[style] || avatarStyles.thoughtful;

  return (
    <div className={`relative ${sizeClasses[size]} ${avatarStyle.background} rounded-full flex items-center justify-center overflow-hidden`}>
      {avatarStyle.icon}
    </div>
  );
};

// Generate placeholder avatar images using patterns
export const generateAvatarPattern = (seed: string) => {
  const colors = [
    ["#FF6B6B", "#FFE66D"],
    ["#4ECDC4", "#95E1D3"],
    ["#A8E6CF", "#FFDAC1"],
    ["#FF8B94", "#FFD3B6"],
    ["#C7CEEA", "#FFD3E1"]
  ];
  
  const hash = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorPair = colors[hash % colors.length];
  
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`gradient-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorPair[0]} />
          <stop offset="100%" stopColor={colorPair[1]} />
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill={`url(#gradient-${seed})`} />
      <text x="50" y="55" textAnchor="middle" fontSize="40" fill="white" fontWeight="bold">
        {seed.charAt(0).toUpperCase()}
      </text>
    </svg>
  );
};
