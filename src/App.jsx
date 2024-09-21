import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Task from "./pages/Task";
import Dashboard from "./pages/Dashboard";
import WalletPage from "./pages/WalletPage";
import TasksPage from "./pages/TasksPage";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/task" element={<Task tasks={tasks} />} />
        <Route path="/dashboard" element={<Dashboard addTask={addTask} />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/tasks" element={<TasksPage />} />{" "}
        {/* New TasksPage Route */}
      </Routes>
    </Router>
  );
}

export default App;
