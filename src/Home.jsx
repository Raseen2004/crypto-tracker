import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import Navbar from "./components/Navbar";

function Home({ user }) {
  const api =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(api)
      .then((res) => setCoins(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => setSearch(e.target.value);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <Navbar user={user} />
      <div className="coin-search">
        <input
          type="text"
          placeholder="Search a currency"
          className="coin-input"
          onChange={handleChange}
        />
      </div>
      {filteredCoins.map((coin) => (
        <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
        />
      ))}
    </div>
  );
}

export default Home;
