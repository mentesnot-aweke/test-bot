import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BiTask } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";

const TaskBar = () => (
  <div className="fixed bottom-0 left-0 w-full bg-black text-xs z-50">
    <div className="flex justify-around items-center p-2">
      <Link to="/" className="text-center text-gray-200 w-1/5">
        <GoHome className="w-8 h-8 mx-auto" />
        <p>Home</p>
      </Link>
      <Link to="/tasks" className="text-center text-gray-200 w-1/5">
        <BiTask className="w-7 h-7 mx-auto" />
        <p>Task</p>
      </Link>
      <Link to="/friends" className="text-center text-gray-200 w-1/5">
        <FaUserFriends className="w-8 h-8 mx-auto" />
        <p>Friends</p>
      </Link>
      <Link to="/wallet" className="text-center text-gray-200 w-1/5">
        <CiWallet className="w-8 h-8 mx-auto" />
        <p>Wallet</p>
      </Link>
    </div>
  </div>
);

export default TaskBar;
