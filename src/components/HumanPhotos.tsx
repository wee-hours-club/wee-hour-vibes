// Using Unsplash for real human photos
// For production, you should get your own API key from https://unsplash.com/developers

export const getUnsplashPhoto = (query: string, size: string = "400x400") => {
  // Using Unsplash Source API for simplicity (no API key needed for basic usage)
  // For production, use the full API with authentication
  return `https://source.unsplash.com/${size}/?${query}`;
};

// Curated photo collections for different contexts
export const photoCollections = {
  // Warm, friendly faces for hosts
  hosts: {
    maya: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces",
    arjun: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    priya: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    rahul: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    sara: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
    dev: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
  },
  
  // Diverse testimonial faces
  testimonials: {
    ananya: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
    karthik: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=faces",
    meera: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=faces",
    amit: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
    neha: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=faces",
    vikram: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop&crop=faces",
  },
  
  // Lifestyle images showing connection
  lifestyle: {
    listening: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=800&h=600&fit=crop",
    conversation: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
    comfort: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&h=600&fit=crop",
    nightTime: "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?w=800&h=600&fit=crop",
    tea: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&h=600&fit=crop",
    connection: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
  },
  
  // Hero section backgrounds
  hero: {
    warmLight: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&blur=20",
    cozySpace: "https://images.unsplash.com/photo-1522444690501-83e7d0b8c1f1?w=1920&h=1080&fit=crop&blur=20",
    nightConversation: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=1920&h=1080&fit=crop&blur=20",
  }
};

interface HumanPhotoProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackQuery?: string;
  size?: string;
}

export const HumanPhoto = ({ 
  src, 
  alt, 
  className = "", 
  fallbackQuery = "portrait,friendly", 
  size = "400x400" 
}: HumanPhotoProps) => {
  const photoSrc = src || getUnsplashPhoto(fallbackQuery, size);
  
  return (
    <img
      src={photoSrc}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
      onError={(e) => {
        // Fallback to a placeholder if image fails to load
        e.currentTarget.src = `https://source.unsplash.com/${size}/?person,portrait`;
      }}
    />
  );
};

// Avatar component with real human photos
interface RealAvatarProps {
  name: string;
  photoUrl?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const RealAvatar = ({ name, photoUrl, size = "md", className = "" }: RealAvatarProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-20 h-20",
    xl: "w-32 h-32"
  };
  
  const dimensions = {
    sm: "100x100",
    md: "200x200",
    lg: "300x300",
    xl: "400x400"
  };
  
  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden ${className}`}>
      <HumanPhoto
        src={photoUrl}
        alt={`${name}'s profile`}
        className="w-full h-full"
        fallbackQuery={`portrait,${name.toLowerCase()}`}
        size={dimensions[size]}
      />
    </div>
  );
};
