// src/pages/Dashboard.jsx
import React, { useState } from "react";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [profitPerHour, setProfitPerHour] = useState(0);
  const [level, setLevel] = useState(0);
  const [price, setPrice] = useState(0);
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title,
      profitPerHour,
      level,
      price,
    };
    setTasks([...tasks, newTask]);

    // Reset form fields
    setTitle("");
    setProfitPerHour(0);
    setLevel(0);
    setPrice(0);
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <div>
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="profit">Profit Per Hour (coins)</label>
          <input
            type="number"
            id="profit"
            value={profitPerHour}
            onChange={(e) => setProfitPerHour(Number(e.target.value))}
          />
        </div>

        <div>
          <label htmlFor="level">Level</label>
          <input
            type="number"
            id="level"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
          />
        </div>

        <div>
          <label htmlFor="price">Price (coins)</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <button type="submit">Add Task</button>
      </form>

      <h2>Tasks</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
