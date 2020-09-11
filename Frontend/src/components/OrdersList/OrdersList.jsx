import React, { Component } from 'react';

import './OrdersList.css';

class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.orders = props.orders;
  }
  
  render() { 
    return (
      <>
        <h2>Pedidos realizados</h2>
        <ul id="requestList">
          {
            (this.orders.length)
            ? (
              this.orders.map( order => (
                <li id="requestItem" key={order.code}>
                  <div id="resquestInfo">
                    <span>{order.code}</span>
                    <span>{order.orderDate.split(' ')[1]}</span>
                  </div>
                  <ul id="resquestUl">
                    {
                      order.dishes.map( dish => (                    
                        <li key={dish.dish.id}>
                          <span>{dish.dish.name}</span> <br/>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            )
            : <h2>Sem Pedidos</h2>
          }
        </ul>
      </>
    );
  }
}
 
export default OrdersList;