import React, { Component } from 'react';

import './ListRequests.css';

class ListRequests extends Component {
  constructor(props) {
    super(props);
    this.pedidos = props.pedido;
    console.log(this.pedidos)
  }
  
  render() { 
    return (
      <>
        <h2>Pedidos realizados</h2>
        <ul id="requestList">
          {
            (this.pedidos.leght)?(
              this.pedidos.map( pedido => (
                <li id="requestItem" key={pedido.codigo}>
                  <div id="resquestInfo">
                    <span>{pedido.codigo}</span>
                    <span>{pedido._horaDoPedido.split(' ')[1]}</span>
                  </div>
                  <ul id="resquestUl">
                    {
                      pedido.pratos.map( prato => (                    
                        <li key={prato.prato.id}>
                          <span>{prato.prato.nome}</span> <br/>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            ):<><h2>Sem pedidos</h2></>
          }
        </ul>
      </>
    );
  }
}
 
export default ListRequests;