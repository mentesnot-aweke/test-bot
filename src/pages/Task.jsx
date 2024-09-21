// src/pages/Task.jsx
import React, { useState } from "react";
import TaskCard from "../components/TaskCard";

const Task = () => {
  const [tasks] = useState([
    {
      id: 1,
      category: "skills",
      title: "Coding Practice",
      profitPerHour: 50,
      level: 1,
      price: 200,
    },
    {
      id: 2,
      category: "skills",
      title: "Design Course",
      profitPerHour: 70,
      level: 2,
      price: 300,
    },
    {
      id: 3,
      category: "business",
      title: "Client Meeting",
      profitPerHour: 150,
      level: 3,
      price: 500,
    },
    {
      id: 4,
      category: "business",
      title: "Market Research",
      profitPerHour: 100,
      level: 2,
      price: 400,
    },
  ]);

  const skillTasks = tasks.filter((task) => task.category === "skills");
  const businessTasks = tasks.filter((task) => task.category === "business");

  return (
    <div>
      <h1>Tasks Page</h1>

      <section>
        <h2>Skills</h2>
        <div className="task-list">
          {skillTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>

      <section>
        <h2>Business</h2>
        <div className="task-list">
          {businessTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Task;
