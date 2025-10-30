import { useState } from "react";
import StartScreen from "@/components/StartScreen";
import BalanceDisplay from "@/components/BalanceDisplay";
import StoreItem from "@/components/StoreItem";
import TaskItem from "@/components/TaskItem";
import ConclusionModal from "@/components/ConclusionModal";
import { useToast } from "@/hooks/use-toast";

type Screen = "start" | "main";

interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  type: "text" | "timer";
  completed: boolean;
}

const Index = () => {
  const [screen, setScreen] = useState<Screen>("start");
  const [balance, setBalance] = useState(0);
  const [showConclusion, setShowConclusion] = useState(false);
  const [purchasedItem, setPurchasedItem] = useState("");
  const [firstPurchase, setFirstPurchase] = useState(true);
  const { toast } = useToast();

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "task-a",
      title: "Chia Sẻ 3 Sở Thích",
      description: "Cho tôi biết 3 sở thích cá nhân của bạn (ví dụ: bạn thích ăn gì, xem phim gì, đi đâu...)",
      reward: 5,
      type: "text",
      completed: false,
    },
    {
      id: "task-b",
      title: "Kênh TikTok Yêu Thích",
      description: "Tên kênh TikTok bạn xem nhiều nhất tuần vừa rồi là gì?",
      reward: 3,
      type: "text",
      completed: false,
    },
    {
      id: "task-c",
      title: "Xem Quảng Cáo",
      description: "Đồng ý xem quảng cáo 30 giây (Bạn không được nhìn chỗ khác hay bỏ qua!)",
      reward: 7,
      type: "timer",
      completed: false,
    },
    {
      id: "task-d",
      title: "Tạo Ý Tưởng",
      description: "Nhanh chóng nghĩ ra 1 ý tưởng cho video TikTok mới.",
      reward: 6,
      type: "text",
      completed: false,
    },
  ]);

  const storeItems = [
    { id: "candy", name: "Một Viên Kẹo", price: 5, emoji: "🍬" },
    { id: "snack", name: "Một Gói Snack", price: 10, emoji: "🍿" },
    { id: "soda", name: "Một Lon Nước", price: 15, emoji: "🥤" },
  ];

  const handleTaskComplete = (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task || task.completed) return;

    setTasks(tasks.map((t) => (t.id === taskId ? { ...t, completed: true } : t)));
    setBalance(balance + task.reward);
    
    toast({
      title: "Nhiệm Vụ Hoàn Thành!",
      description: `Bạn đã kiếm được ${task.reward} Xu Sự Chú Ý`,
    });
  };

  const handlePurchase = (itemName: string, price: number) => {
    if (balance >= price) {
      setBalance(balance - price);
      setPurchasedItem(itemName);
      
      if (firstPurchase) {
        setShowConclusion(true);
        setFirstPurchase(false);
      } else {
        toast({
          title: "Mua Thành Công!",
          description: `Bạn đã mua ${itemName}`,
        });
      }
    }
  };

  if (screen === "start") {
    return <StartScreen onStart={() => setScreen("main")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-bg p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Cửa Hàng Sự Chú Ý
          </h1>
          <BalanceDisplay balance={balance} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Store Section */}
          <div className="space-y-4 animate-fade-in">
            <div className="bg-card p-4 rounded-xl shadow-card transition-all duration-300 hover:shadow-card-hover">
              <h2 className="text-2xl font-bold text-primary mb-6">🛒 Cửa Hàng</h2>
              <div className="space-y-4">
                {storeItems.map((item, index) => (
                  <div key={item.id} style={{ animationDelay: `${index * 100}ms` }}>
                    <StoreItem
                      name={item.name}
                      price={item.price}
                      emoji={item.emoji}
                      canAfford={balance >= item.price}
                      onPurchase={() => handlePurchase(item.name, item.price)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <div className="space-y-4 animate-fade-in">
            <div className="bg-card p-4 rounded-xl shadow-card transition-all duration-300 hover:shadow-card-hover">
              <h2 className="text-2xl font-bold text-accent mb-6">💰 Kiếm Xu</h2>
              <div className="space-y-4">
                {tasks.map((task, index) => (
                  <div key={task.id} style={{ animationDelay: `${index * 100}ms` }}>
                    <TaskItem
                      title={task.title}
                      description={task.description}
                      reward={task.reward}
                      type={task.type}
                      completed={task.completed}
                      onComplete={() => handleTaskComplete(task.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConclusionModal
        isOpen={showConclusion}
        onClose={() => setShowConclusion(false)}
        itemPurchased={purchasedItem}
      />
    </div>
  );
};

export default Index;
