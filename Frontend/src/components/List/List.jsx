import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.list = props.list
  }
  render() { 
    return (
      <>
        <Link to="/">VOLTAR</Link>
        <ul id="menuList">
          {this.list.map(item => (
            <li id="menuItem" key={item.id}>
              <Link to={`/prato/${item.id}`}>
                <span>Prato: {item.prato}</span> <br/>
                <span>preco: {item.preco}</span>
              </Link>

              <span id="amountItem">
                <input defaultValue="0" min="0" type="number"/>
              </span>
            </li>
          ))}

        </ul>
        <button id="sendRequest">Enviar pedido</button>
      </>
    );
  }
}
 
export default List;