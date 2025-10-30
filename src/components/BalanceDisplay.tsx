import { Coins } from "lucide-react";

interface BalanceDisplayProps {
  balance: number;
}

const BalanceDisplay = ({ balance }: BalanceDisplayProps) => {
  return (
    <div className="flex items-center justify-center gap-3 bg-card p-6 rounded-2xl shadow-card border-2 border-accent/20 transition-all duration-300 hover:scale-105">
      <Coins className="w-8 h-8 text-accent drop-shadow-lg animate-pulse" />
      <div className="text-center">
        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
          Số Dư
        </p>
        <p className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent transition-all duration-300">
          {balance} Xu Sự Chú Ý
        </p>
      </div>
    </div>
  );
};

export default BalanceDisplay;
