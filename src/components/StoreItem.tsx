import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Lock } from "lucide-react";

interface StoreItemProps {
  name: string;
  price: number;
  emoji: string;
  canAfford: boolean;
  onPurchase: () => void;
}

const StoreItem = ({ name, price, emoji, canAfford, onPurchase }: StoreItemProps) => {
  return (
    <Card className="p-6 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
      {!canAfford && (
        <div className="absolute inset-0 bg-muted/50 backdrop-blur-[2px] z-10 flex items-center justify-center">
          <Lock className="w-8 h-8 text-muted-foreground/50" />
        </div>
      )}
      
      <div className="text-center space-y-4">
        <div className="text-6xl mb-2">{emoji}</div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex items-center justify-center gap-2 text-accent font-bold text-lg">
          <span>{price}</span>
          <span className="text-sm">Attention Coins</span>
        </div>
        
        <Button
          onClick={onPurchase}
          disabled={!canAfford}
          className="w-full bg-gradient-primary hover:shadow-card-hover disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Buy
        </Button>
      </div>
    </Card>
  );
};

export default StoreItem;
