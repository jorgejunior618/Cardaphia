import React, { Component } from 'react';

import './OrdersList.css';

class OrdersList extends Component {
  state = {
    orders: [],
  }

  static getDerivedStateFromProps(props, state) {
    //console.log('Orders', props.orders);
    if(props.orders.length !== state.orders.length) {
      return {
        orders: props.orders.orders,
      }
    }

    return {
      orders: [],
    }
  }

  render() {
    return (
      <>
        <h2>Pedidos realizados</h2>
        <ul id="requestList">
          {(this.state.orders.length)
            ? (this.state.orders.map(order => (
                /* Order:
                    id: 1
                    orderTime: "2020-09-09T01:30:58.119695Z"
                    table: 2
                */

                <li id="requestItem" key={order.id}>
                  <div id="resquestInfo">
                    <span>{order.id}</span>

                    <span>
                      {order.orderTime
                      .split('T').join(' ')
                      .split('.')[0]}
                    </span>
                  </div>
                  <ul id="resquestUl">
                    {
                      order.dishes.map( dish => (                    
                        <li key={dish}>
                          <span>{dish}</span> <br/>
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