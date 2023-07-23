import React from 'react';
import imagen from '../assets/img/heroWeb.png'
import portada from './portada.scss'

const Portada = () => {
  return (
    //el primer div contiene a la img al texto y al button.
    <div>
        <div class="titulo"> 
            <h2>La billetera de los bancos que conecta tu dinero con todo lo que querés</h2>
            <h3>Tus bancos, cuentas y tarjetas 100% digitales.</h3>
                
                <div>
                   <button type="button" href="#" class="btn-primary">Empezá a usar TuUNSTA</button> 
                </div>    
        </div>
    </div>
  );
};
export default Portada;