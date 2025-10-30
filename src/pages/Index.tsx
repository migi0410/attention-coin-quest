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
      title: "Share 3 Hobbies",
      description: "Tell me 3 of your personal hobbies (e.g., what you like to eat, movies you watch, places you go...)",
      reward: 5,
      type: "text",
      completed: false,
    },
    {
      id: "task-b",
      title: "Favorite TikTok Channel",
      description: "What is the name of the TikTok channel you watched the most this past week?",
      reward: 3,
      type: "text",
      completed: false,
    },
    {
      id: "task-c",
      title: "Watch an Ad",
      description: "Agree to watch a 30-second ad (You cannot look away or skip!)",
      reward: 7,
      type: "timer",
      completed: false,
    },
    {
      id: "task-d",
      title: "Create an Idea",
      description: "Quickly think of 1 idea for a new TikTok video.",
      reward: 6,
      type: "text",
      completed: false,
    },
  ]);

  const storeItems = [
    { id: "candy", name: "A Candy", price: 5, emoji: "🍬" },
    { id: "snack", name: "A Snack", price: 10, emoji: "🍿" },
    { id: "soda", name: "A Soda", price: 15, emoji: "🥤" },
  ];

  const handleTaskComplete = (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task || task.completed) return;

    setTasks(tasks.map((t) => (t.id === taskId ? { ...t, completed: true } : t)));
    setBalance(balance + task.reward);
    
    toast({
      title: "Task Completed!",
      description: `You earned ${task.reward} Attention Coins`,
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
          title: "Purchase Successful!",
          description: `You bought ${itemName}`,
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
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            The Attention Store
          </h1>
          <BalanceDisplay balance={balance} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Store Section */}
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-xl shadow-card">
              <h2 className="text-2xl font-bold text-primary mb-6">🛒 The Store</h2>
              <div className="space-y-4">
                {storeItems.map((item) => (
                  <StoreItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    emoji={item.emoji}
                    canAfford={balance >= item.price}
                    onPurchase={() => handlePurchase(item.name, item.price)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-xl shadow-card">
              <h2 className="text-2xl font-bold text-accent mb-6">💰 Earn Coins</h2>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    reward={task.reward}
                    type={task.type}
                    completed={task.completed}
                    onComplete={() => handleTaskComplete(task.id)}
                  />
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
