import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Crypto = () => {
  const [search, setSearch] = useState("");
  const [cryptos, setCryptos] = useState([]); // Definición de cryptos usando useState

  const endpoint = 'https://api.coingecko.com/api/v3/coins/list';

  const showData = () => {
    axios.get(endpoint).then( (res) => {
      console.log(res.data);
      setSearch(res.data)
    });
  };

useEffect(() => {
  showData();
}, []);

const searcher = (e) => {
  setSearch(e.target.value)

  const results = !search ? cryptos : cryptos.filter( (val)=> val.name.toLowerCase().includes(search.toLocaleLowerCase()) )

};


export default Crypto;
/*
  useEffect(() => {
    showData();
  }, []);
  //3 - función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)
      //console.log(e.target.value)
  }
  //4 - filtrar los datos
  const results = !search ? cryptos : cryptos.filter( (val)=> val.name.toLowerCase().includes(search.toLocaleLowerCase()) )
  //renderizamos la vista
  return (
   <h3>VAMO a VE</h3>
    /*
    <>
    
    <table className='table table-dark table-hover mt-3'>
        <thead>
            <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>Price 24h</th>
            </tr>
        </thead>
        <tbody>
            { results.map( (result)=> (
                <tr key={result.id}>
                    <td>{result.market_data.market_cap_rank}</td>
                    <td><small><img src={result.image.small}/> {result.name} </small></td>
                    <td>{result.symbol.toUpperCase()}</td>
                    <td>{result.market_data.current_price.bmd.toFixed(2)}</td>
                    <td>
                        { result.market_data.price_change_percentage_24h < 0 ? (
                          <span className='badge bg-danger'>{result.market_data.price_change_percentage_24h}</span>  
                        ):(
                          <span className='badge bg-success'>{result.market_data.price_change_percentage_24h}</span>    
                        ) }
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
    */
//  )
//}

