import React from "react";
import useFarming from "../hooks/useFarming";
import TaskBar from "../components/TaskBar";

const Home = () => {
  const { isFarming, timeLeft, startFarming, formatTime } = useFarming(
    8 * 60 * 60
  );

  return (
    <div className="bg-black w-screen h-screen p-2 flex-col">
      <div className="border-4 p-5 rounded-lg bg-gray-800 w-full text-center mt-28">
        <p>Total Asset</p>
        <h1 className="text-3xl font-bold text-white">0 Coins</h1>
      </div>
      <button
        className={`bg-white text-black mt-72 p-2 w-full ${
          isFarming ? "opacity-50" : ""
        }`}
        onClick={startFarming}
        disabled={isFarming}
      >
        {isFarming ? `Time Left: ${formatTime(timeLeft)}` : "Start Farming"}
      </button>
      <TaskBar />
    </div>
  );
};

export default Home;
