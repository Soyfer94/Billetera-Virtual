import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoTable = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coinmarketcap.com/v2/listings/top/?limit=5")
      .then((response) => {
        setCryptos(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Nombre</th>
          <th>Símbolo</th>
          <th>Cotización</th>
        </tr>
      </thead>
      <tbody>
        {cryptos.map((crypto) => (
          <tr key={crypto.id}>
            <td>{crypto.rank}</td>
            <td>{crypto.name}</td>
            <td>{crypto.symbol}</td>
            <td>{crypto.price_usd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;