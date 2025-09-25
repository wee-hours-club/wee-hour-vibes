import { Card } from "@/components/ui/card";
import { Shield, UserCheck, Eye, Heart } from "lucide-react";

const SafetySection = () => {
  return (
    <section className="py-20 px-6 bg-midnight">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-warm-white mb-4">
            Safety & trust first
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every conversation happens in a protected space with built-in boundaries 
            and respect for all participants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-card border-purple-mist/20 shadow-soft hover:shadow-glow transition-all duration-500 text-center">
            <div className="w-12 h-12 bg-amber-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-6 h-6 text-amber-glow" />
            </div>
            <h3 className="font-semibold text-warm-white mb-2">Identity Verification</h3>
            <p className="text-sm text-muted-foreground">All hosts go through identity verification for your safety</p>
          </Card>

          <Card className="p-6 bg-gradient-card border-purple-mist/20 shadow-soft hover:shadow-glow transition-all duration-500 text-center">
            <div className="w-12 h-12 bg-amber-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-amber-glow" />
            </div>
            <h3 className="font-semibold text-warm-white mb-2">AI + Human Moderation</h3>
            <p className="text-sm text-muted-foreground">Smart moderation keeps conversations respectful and safe</p>
          </Card>

          <Card className="p-6 bg-gradient-card border-purple-mist/20 shadow-soft hover:shadow-glow transition-all duration-500 text-center">
            <div className="w-12 h-12 bg-amber-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-amber-glow" />
            </div>
            <h3 className="font-semibold text-warm-white mb-2">Boundary Protection</h3>
            <p className="text-sm text-muted-foreground">Built-in tools prevent harassment and maintain boundaries</p>
          </Card>

          <Card className="p-6 bg-gradient-card border-purple-mist/20 shadow-soft hover:shadow-glow transition-all duration-500 text-center">
            <div className="w-12 h-12 bg-amber-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-amber-glow" />
            </div>
            <h3 className="font-semibold text-warm-white mb-2">Inclusive Community</h3>
            <p className="text-sm text-muted-foreground">Empowering diverse voices, especially women and non-binary creators</p>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-card border border-purple-mist/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-warm-white mb-4">No off-platform contact</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All interactions stay within weehour.club for your protection. 
            We maintain the intimate feeling while keeping everyone safe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;