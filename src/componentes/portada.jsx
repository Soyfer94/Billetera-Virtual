import React from 'react';
import imagen from '../assets/img/heroWeb.png'

const Portada = () => {
  return (
    //el primer div contiene a la img al texto y al button.
    <div>
        <div class="card-body"> 
            <h2>La billetera de los bancos que conecta tu dinero con todo lo que querés</h2>
            <p>Tus bancos, cuentas y tarjetas 100% digitales.</p>
                
                <div>
                   <button type="button" href="#" class="btn-primary">Empezá a usar TuUNSTA</button> 
                </div>    
        </div>
        <div>
             <img src= {imagen} alt="" style={{ maxWidth: '300px' }}
            />
        </div>
    </div>
  );
};
export default Portada;