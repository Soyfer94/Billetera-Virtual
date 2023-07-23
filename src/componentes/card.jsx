import React from 'react'
//import './card.css';
import uala from '../assets/img/uala.png'

function Card () {
    return (
    <div className="card">
      <img src= {uala} alt=""/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Button</a>
      </div>
    </div>

  );
};

export default Card;
