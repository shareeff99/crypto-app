import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const CoinPageShareef = () => {
  let { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    console.log(id);
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
      (response) => {
        console.log(response.data);
        setCoin(response.data);
      }
    );
  }, []);

  if (coin) {
    return;
    <div className="coinPage-Container">
      <div className="coinPage-Info">
        <h1>{coin.name}</h1>
        <img src={coin.image.large} alt="" className="coinPage-Icon" />
        <div className="coinPage-Data">
          <h3 className="coinPage-RowHeader">
            Current Price: {coin.market_data.current_price.usd}
          </h3>
        </div>
      </div>
    </div>;
  }
};

export default CoinPageShareef;
