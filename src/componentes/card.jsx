import React from "react";
import card from "./card.scss";

const Card = () => {
    return (
      <div class="cartas"> 
        <div class="carduno">
        <h5 class="card-title">INVERSIONES</h5>
        <img src="https://cdn-icons-png.flaticon.com/128/2654/2654986.png" alt="Ejemplo" className="card-img" />
            <p class="card-text">Incrementa tu dinero con nuestras opciones de inversión.</p>
            <button type="button" href="#" class="btn-primary">Mas Info</button> 
          </div>
        

      <div class="carddos">
      <h5 class="card-title">OPCIONES DE RECARGA</h5>
      <img src="https://cdn-icons-png.flaticon.com/128/3537/3537067.png" alt="Ejemplo" className="card-img" />
      <p class="card-text">Recarga con diferentes métodos de pago.</p>
      <button type="button" href="#" class="btn-primary">Mas Info</button> 
    </div>
  
    <div class="cardtres">
    <h5 class="card-title">PROMOCIONES</h5>
    <img src="https://cdn-icons-png.flaticon.com/128/8312/8312932.png" alt="Ejemplo" className="card-img" />

      <p class="card-text">Descubre descuentos y bonificaciones para tus transacciones.</p>
      <button type="button" href="#" class="btn-primary">Mas Info</button> 
    </div>
      
    <div class="cardcuatro">
    <h5 class="card-title">PREGUNTAS FRECUENTES</h5>
    <img src="https://cdn-icons-png.flaticon.com/128/10570/10570278.png" alt="Ejemplo" className="card-img" />
      <p class="card-text">Encuentra soluciones a tus preguntas aquí.</p>
      <button type="button" href="#" class="btn-primary">Mas Info</button> 
    </div>
      
      
      </div>
    );
};
export default Card;
