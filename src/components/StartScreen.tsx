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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              Chào mừng đến "Cửa Hàng Sự Chú Ý"!
            </h1>
            
            <div className="space-y-4 text-lg text-foreground/80 animate-fade-in">
              <p className="leading-relaxed">
                Ở đây, mọi thứ đều <span className="font-semibold text-primary">"miễn phí"</span>! 
                <span className="inline-block ml-2">(Chỉ vào các món ảo như Kẹo, Snack)</span>
              </p>
              
              <p className="leading-relaxed">
                Nhưng khoan... để có chúng, bạn phải <span className="font-semibold">"trả tiền"</span>. 
                Cửa hàng của tôi không nhận tiền mặt; tôi chỉ chấp nhận một loại tiền tệ:
              </p>
              
              <p className="text-2xl font-bold text-accent drop-shadow-lg animate-pulse">
                Xu Sự Chú Ý
              </p>
            </div>
          </div>

          <Button 
            onClick={onStart}
            size="lg"
            className="mt-8 text-lg px-8 py-6 bg-gradient-primary hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in"
          >
            Khám Phá Cửa Hàng
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default StartScreen;
