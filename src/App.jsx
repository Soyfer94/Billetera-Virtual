import './App.css'

import Crypto from './componentes/Crypto';
import Formulario from './componentes/Formulario';
import FormularioControlado from './componentes/FormularioControlado';
import Navbar from './componentes/barra';
import Card from './componentes/card';
import Portada from './componentes/portada';

import axios from 'axios';
import { useEffect, useState } from 'react';
import TableCoins from './componentes/APItable';


function App ()  {

      const [coins, setCoins] = useState([]);
      const [search, setSearch] = useState("");
    
      const getData = async () => {
        try {
          const res = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          );
          setCoins(res.data);
          console.log(res.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);
    





    return (
    <div className="App">
      
      <Navbar/>
      <Portada/>
      <Card/>
      <Formulario/>
      <FormularioControlado/>
      <h1 className='text-center'>React - Crypto</h1>
      <Crypto/>

     <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder='Busca la moneda'
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
            
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
      
    </div>
    );
}

export default App; 

