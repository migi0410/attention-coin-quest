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
    <Card className="p-6 hover:shadow-card-hover transition-all duration-300 hover:scale-105 relative overflow-hidden animate-fade-in">
      {!canAfford && (
        <div className="absolute inset-0 bg-muted/50 backdrop-blur-[2px] z-10 flex items-center justify-center animate-fade-in">
          <Lock className="w-8 h-8 text-muted-foreground/50 animate-pulse" />
        </div>
      )}
      
      <div className="text-center space-y-4">
        <div className="text-6xl mb-2 transition-transform duration-300 hover:scale-125 inline-block">{emoji}</div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex items-center justify-center gap-2 text-accent font-bold text-lg">
          <span>{price}</span>
          <span className="text-sm">Xu Sự Chú Ý</span>
        </div>
        
        <Button
          onClick={onPurchase}
          disabled={!canAfford}
          className="w-full bg-gradient-primary hover:shadow-card-hover hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Mua
        </Button>
      </div>
    </Card>
  );
};

export default StoreItem;
