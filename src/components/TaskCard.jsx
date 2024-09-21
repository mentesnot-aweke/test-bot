import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={task.icon} alt={task.title} className="w-10 h-10 mr-4" />
        <div>
          <h3 className="text-md font-bold">{task.title}</h3>
          <p className="text-sm text-yellow-400">{task.points}</p>
        </div>
      </div>
      <button className="px-4 py-2 bg-gray-700 rounded-md text-white">
        Perform
      </button>
      <button className="ml-2 px-4 py-2 bg-gray-600 rounded-md text-white">
        Verify
      </button>
    </div>
  );
};

export default TaskCard;
