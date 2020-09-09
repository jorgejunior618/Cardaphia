import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.pratos = props.pratos
    this.pedido = props.pedido
  }

  changePedido(prato, amount) {
    const quantidade = Number(amount);

    if (Number(quantidade) === 0) {
      this.pedido.removePrato(prato.id)
    } else {
      this.pedido.addPrato({prato: prato, quantidade: quantidade})
    }
  }

  sendRequest() {
    const { ShowPopUp } = this.props;

    if (this.pedido.pratos.length === 0) {
      return alert('Adicione a quantidade dos pratos que deseja pedir! :)')
    }
    
    ShowPopUp(this.pedido);
  }

  render() { 
    return (
      <>
        <Link to="/">VOLTAR</Link>
        <ul id="menuList">
          {this.pratos.map(prato => (
            <li id="menuItem" key={prato.id}>
              <Link to={`/prato/${prato.id}`}>
                <span>Prato: {prato.nome}</span> <br/>
                <span>preco: {prato.preco}</span>
              </Link>

              <span id="amountItem">
                <input
                  defaultValue="0"
                  onChange={(e) => this.changePedido(prato, e.target.value)}
                  min="0"
                  type="number"
                />
              </span>
            </li>
          ))}

        </ul>
        <button onClick={this.sendRequest.bind(this)} id="sendRequest">
          Enviar pedido
        </button>
      </>
    );
  }
}
 
export default List;