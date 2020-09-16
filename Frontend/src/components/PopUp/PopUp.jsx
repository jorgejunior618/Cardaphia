import React, { Component } from 'react';

import './PopUp.css';
import imagem from  "../../assets/chevron-left 2.svg";

class PopUp extends Component {
  constructor(props){
    super(props);
    this.order = props.order
    this.abortOrder = props.abortOrder;
    
  }

  finalizeOrder(){
    const { finalizeOrder } = this.props;
    this.order.setDishesToSendDataBase();
    finalizeOrder(this.order);
  }

  render() { 
    return (
      <div id="popUp">
        <p onClick={this.abortOrder}><img src={imagem} alt=""/></p>
        <h3>Seu Pedido</h3>
        <div id="requestView">
          <ul id="itens">
            {this.order.dishes.map(dish => (
              <li key={dish.dish.name + dish.dish.id}>
                <span>{dish.dish.name} </span>
                <span>{dish.amount} </span>
              </li>
            ))}
          </ul>
        <div id='valor'>
          <span>Valor do Pedido:</span>
          <span>R${this.order.requestValue}</span>
        </div>
        </div>

        <button class='button' onClick={this.finalizeOrder.bind(this)}>
          Finalizar Pedido
        </button>
      </div>
    );
  }
}
 
export default PopUp;
