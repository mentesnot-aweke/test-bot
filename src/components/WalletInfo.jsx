import React from "react";

const WalletInfo = ({ balance, coinName, coinSymbol, usdValue }) => (
  <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
      <div>
        <h4 className="font-bold">{coinName}</h4>
        <span className="text-sm text-gray-400">{coinSymbol}</span>
      </div>
    </div>
    <div>
      <h4 className="font-bold">{balance}</h4>
      <span className="text-sm text-gray-400">${usdValue}</span>
    </div>
  </div>
);

export default WalletInfo;
