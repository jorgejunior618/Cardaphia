import React, { Component } from 'react';

import './PopUp.css';

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
          
          <span>Valor do Pedido: R${this.order.requestValue}</span>
        </div>

        <button onClick={this.finalizeOrder.bind(this)}>
          Finalizar Pedido
        </button>

        <button onClick={this.abortOrder}>
          Voltar para o menu
        </button>
      </div>
    );
  }
}
 
export default PopUp;
