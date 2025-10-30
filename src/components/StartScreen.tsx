import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-bg p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-card-hover">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <Sparkles className="w-16 h-16 text-primary" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full shadow-coin animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Welcome to "The Attention Store"!
            </h1>
            
            <div className="space-y-4 text-lg text-foreground/80">
              <p className="leading-relaxed">
                Here, everything is <span className="font-semibold text-primary">"free"</span>! 
                <span className="inline-block ml-2">(Points to virtual items like Candy, Snacks)</span>
              </p>
              
              <p className="leading-relaxed">
                Oh, but wait... to get them, you must <span className="font-semibold">"pay"</span>. 
                My store doesn't accept cash; I only accept one currency:
              </p>
              
              <p className="text-2xl font-bold text-accent drop-shadow-lg">
                Attention Coins
              </p>
            </div>
          </div>

          <Button 
            onClick={onStart}
            size="lg"
            className="mt-8 text-lg px-8 py-6 bg-gradient-primary hover:shadow-card-hover transition-all duration-300"
          >
            Explore the Store
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default StartScreen;
