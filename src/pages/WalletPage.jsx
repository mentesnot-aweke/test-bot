import React from "react";
import TaskBar from "../components/TaskBar";

function WalletPage() {
  return (
    <div className="p-4 min-h-screen bg-black text-white ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Assets</h1>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Connect your wallet
        </button>
      </div>

      <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">
            390.11 <span className="text-lg">USDT</span>
          </h2>
          <span className="text-sm text-gray-400">≈ 0.006588 BTC</span>
        </div>
        <div className="flex mt-4 space-x-4">
          <button className="bg-gray-700 py-2 px-6 rounded-lg">Withdraw</button>
          <button className="bg-gray-700 py-2 px-6 rounded-lg">Swap</button>
          <button className="bg-gray-700 py-2 px-6 rounded-lg">Airdrop</button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Balances</h3>
        <div className="space-y-2">
          {["MAX", "USDT", "TON"].map((coin, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`w-8 h-8 bg-${coin.toLowerCase()} rounded-full`}
                ></div>
                <div>
                  <h4 className="font-bold">{coin}</h4>
                  <span className="text-sm text-gray-400">
                    {coin === "MAX"
                      ? "Maxicoin"
                      : coin === "USDT"
                      ? "Tether US"
                      : "Toncoin"}
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-bold">0.00</h4>
                <span className="text-sm text-gray-400">$0.00</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TaskBar />
    </div>
  );
}

export default WalletPage;
