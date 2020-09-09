import React, { Component } from 'react';

import './PopUp.css';

class PopUp extends Component {
  constructor(props){
    super(props);
    this.pedido = props.pedido
    this.abortPedido = props.abortPedido;
    this.finalizePedido = props.finalizePedido;
  }

  render() { 
    return (
      <div id="popUp">
        <h3>Seu Pedido</h3>
        <ul id="itens">
        {this.pedido.pratos.map(prato => (
          <li key={prato.prato.nome + prato.prato.id}>
            <span>{prato.prato.nome} </span>
            <span>R$ {prato.prato.preco} </span>
          </li>
        ))}
        </ul>
        <button id="finalizePedido" onClick={this.finalizePedido}>
          Finalizar Pedido
        </button>

        <button onClick={this.abortPedido}>
          Voltar para o menu
        </button>
      </div>
    );
  }
}
 
export default PopUp;
