import React from 'react';
import heroWeb from '../assets/img/heroWeb.png';

const portada = () => {
  return (
    <div>
      <h2>La billetera de los bancos que conecta tu dinero con todo lo que querés</h2>
      <p>Tus bancos, cuentas y tarjetas 100% digitales.</p>
      <img
        src={heroWeb}
        alt="portada"
        
      />
      
    </div>
  );
};

export default portada;