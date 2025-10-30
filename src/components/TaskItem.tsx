import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Coins, CheckCircle, Timer } from "lucide-react";

interface TaskItemProps {
  title: string;
  description: string;
  reward: number;
  type: "text" | "timer";
  onComplete: () => void;
  completed: boolean;
}

const TaskItem = ({ title, description, reward, type, onComplete, completed }: TaskItemProps) => {
  const [inputValue, setInputValue] = useState("");
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const handleTextSubmit = () => {
    if (inputValue.trim()) {
      onComplete();
      setInputValue("");
    }
  };

  const handleTimerStart = () => {
    setTimerActive(true);
    let time = 30;
    const interval = setInterval(() => {
      time -= 1;
      setTimeLeft(time);
      if (time <= 0) {
        clearInterval(interval);
        setTimerActive(false);
        setTimeLeft(30);
        onComplete();
      }
    }, 1000);
  };

  if (completed) {
    return (
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold text-primary">{title}</h3>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-accent font-bold">
            <Coins className="w-5 h-5" />
            <span>+{reward}</span>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 hover:shadow-card-hover transition-all duration-300">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {type === "text" && (
          <div className="space-y-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full"
            />
            <Button
              onClick={handleTextSubmit}
              disabled={!inputValue.trim()}
              className="w-full bg-gradient-primary"
            >
              Claim Reward (+{reward} Coins)
            </Button>
          </div>
        )}

        {type === "timer" && (
          <div className="space-y-3">
            {timerActive ? (
              <div className="text-center p-8 bg-primary/5 rounded-lg">
                <Timer className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
                <p className="text-4xl font-bold text-primary">{timeLeft}s</p>
                <p className="text-sm text-muted-foreground mt-2">Watching ad...</p>
              </div>
            ) : (
              <Button
                onClick={handleTimerStart}
                className="w-full bg-gradient-primary"
              >
                Start Watching
              </Button>
            )}
          </div>
        )}

        <div className="flex items-center justify-end gap-2 text-accent font-semibold pt-2 border-t">
          <Coins className="w-5 h-5" />
          <span>Reward: +{reward} Coins</span>
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;
