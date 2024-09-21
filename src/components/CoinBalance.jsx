import React from "react";
import WalletInfo from "./WalletInfo";

const CoinBalance = ({ balances }) => (
  <div className="space-y-2">
    {balances.map((coin) => (
      <WalletInfo
        key={coin.name}
        coinName={coin.name}
        coinSymbol={coin.symbol}
        balance={coin.balance}
        usdValue={coin.usdValue}
      />
    ))}
  </div>
);

export default CoinBalance;
