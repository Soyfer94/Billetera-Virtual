//EJEMPLO BASICO

import React,{Component} from 'react';

export default class Eventos extends Component {
  constructor(){
    super()
    this.state = {
        contador : 0
    }
  }
  sumar(){
    console.log("sumando")
  }
  restar(){
    console.log("restando")
  }
  render(){
    return(
      <div>
        <h2>Eventos en React</h2>
        <h3> {this.state.contador} </h3>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
      </div>
    )
  }
}

//ESTE ES UN EJEMPLO DE COMO DEBERIA QUEDAR UN 
//EVENTO PARA QUE SE CARGUE EN App.jsx y se ejecute