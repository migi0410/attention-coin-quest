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
      <DialogContent className="max-w-2xl animate-scale-in">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4 animate-fade-in">
            <AlertCircle className="w-8 h-8 text-primary animate-pulse" />
            <DialogTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
              GIAO DỊCH HOÀN TẤT!
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 text-foreground/90 leading-relaxed animate-fade-in">
          <p className="text-lg">
            Bạn đã "mua" <span className="font-semibold text-primary">{itemPurchased}</span>. 
            Bạn có nhận ra không? Bạn không dùng tiền thật.
          </p>
          
          <p className="text-lg">
            Bạn đã trả tôi bằng <span className="font-semibold text-accent">sở thích của bạn</span> và{" "}
            <span className="font-semibold text-accent">thời gian xem quảng cáo</span>.
          </p>
          
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary mt-6 animate-fade-in hover:scale-105 transition-all duration-300">
            <p className="text-base font-medium">
              Đây chính xác là cách các nền tảng như <span className="font-bold">TikTok</span> và{" "}
              <span className="font-bold">Facebook</span> hoạt động.
            </p>
            <p className="text-base mt-3">
              Nội dung bạn xem (như chiếc kẹo này) có vẻ "miễn phí", nhưng thực ra bạn đang trả 
              bằng loại tiền tệ có giá trị nhất trong nền kinh tế số:
            </p>
            <p className="text-xl font-bold text-primary mt-3 animate-pulse">
              Dữ Liệu Cá Nhân và Sự Chú Ý của Bạn
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button 
            onClick={onClose}
            className="w-full mt-4 bg-gradient-primary text-lg py-6 hover:scale-105 transition-all duration-300"
          >
            Tôi Hiểu Rồi!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConclusionModal;
