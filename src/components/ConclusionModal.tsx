import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface ConclusionModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemPurchased: string;
}

const ConclusionModal = ({ isOpen, onClose, itemPurchased }: ConclusionModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-primary" />
            <DialogTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
              TRANSACTION COMPLETE!
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p className="text-lg">
            You "bought" <span className="font-semibold text-primary">{itemPurchased}</span>. 
            Did you realize? You didn't use real money.
          </p>
          
          <p className="text-lg">
            You paid me with <span className="font-semibold text-accent">your hobbies</span> and{" "}
            <span className="font-semibold text-accent">your time spent watching an ad</span>.
          </p>
          
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary mt-6">
            <p className="text-base font-medium">
              This is exactly how platforms like <span className="font-bold">TikTok</span> and{" "}
              <span className="font-bold">Facebook</span> work.
            </p>
            <p className="text-base mt-3">
              The content you watch (like this candy) seems "free", but you are actually paying 
              for it with the most valuable currency in the digital economy:
            </p>
            <p className="text-xl font-bold text-primary mt-3">
              Your Personal Data and your Attention
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button 
            onClick={onClose}
            className="w-full mt-4 bg-gradient-primary text-lg py-6"
          >
            I Understand Now!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConclusionModal;
