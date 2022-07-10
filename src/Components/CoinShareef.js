import React from "react";
import "../Components/Coin.css";

const Coin = ({
  icon,
  coinName,
  cionSymbol,
  price,
  marketCap,
  priceChange,
  id,
}) => {
  return (
    <div className="coinContainer">
      <div className="coinRow">
        <div className="coinData">
          <div className="coin">
            <img src={icon} />
            <h1 className="coinName">{coinName}</h1>
            <p className="coinSymbol">{cionSymbol}</p>
            <p className="coinPrice">{price}</p>
            <p className="priceChange">{priceChange}</p>
            <p className="coinVolume">{marketCap}</p>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
