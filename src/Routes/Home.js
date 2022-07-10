import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Coin from "../Components/Coin";
import "../App.css";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    refreshPage();
  }, []);

  const refreshPage = () => {
    setIsLoading(true);
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((response) => {
      console.log(response.data);
      setIsLoading(false);
      setCoins(response.data);
    });
  };

  return (
    <div className="App">
      <div className="headerContainer">
        <h1>Welcome to CryptoChecker</h1>
        <div className="buttonContainer">
          <input
            placeholder="Search for a coin"
            type="text"
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="coinContainer">
        {isLoading && <h1 className="loadingMssg">Data Loading...</h1>}
        {filterCoins.map((coins) => {
          return (
            <Coin
              id={coins.id}
              icon={coins.image}
              coinName={coins.name}
              coinSymbol={coins.symbol}
              price={coins.current_price}
              marketCap={coins.market_cap}
              priceChange={coins.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
