import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../Routes/Style/CoinPage.css";

const CoinPage = () => {
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

  // if statement to check if the data has been received from the API, only then render the component
  if (coin) {
    return (
      <div className="coinPage-Container">
        <div className="coinPage-Info">
          <h1>{coin.name}</h1>
          <img src={coin.image.large} alt="icon" className="coinPage-Icon" />
          <div className="coinPage-Data">
            <h3 className="coinPage-RowHeader">
              Current Price: {coin.market_data.current_price.usd}
            </h3>
          </div>
          <Link to="/">
            <div className="coinPage-RouteButton">Go Back</div>
          </Link>
        </div>
      </div>
    );
  }
};

export default CoinPage;
