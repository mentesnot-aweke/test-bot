import React from "react";
import TaskBar from "../components/TaskBar";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
  const tasks = [
    {
      id: 1,
      title: "Join my Telegram Channel",
      points: "+20 000",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    },
    {
      id: 2,
      title: "Follow Lost Dogs on X",
      points: "+50 000",
      icon: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/X_logo_2023.svg/800px-X_logo_2023.svg.png",
    },
    {
      id: 3,
      title: "Subscribe to youtube channel",
      points: "+50 000",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Daily Check-in</h1>
        <span className="text-sm">897,225 Coins</span>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Social Tasks</h2>
        <p className="text-gray-400 mb-6">
          Perform social tasks to earn more coins and stay updated!
        </p>

        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <TaskBar />
    </div>
  );
};

export default TasksPage;
