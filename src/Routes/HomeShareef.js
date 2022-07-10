import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Coin from "../Components/Coin";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useEffect("");
  const [isLoading, setIsLoading] = useEffect(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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

  const fiterCoins = coins.filter((coin) => {
    coin.name.toLowerCase().include(searchTerm.toLowerCase());
    {filterCoins.map()
  });

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
        {isLoading && <h1 className="loadingMssg">data Loading...</h1>}
        <Coin />
      </div>
    </div>
  );
};

export default Home;
