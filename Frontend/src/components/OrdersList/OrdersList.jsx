import React, { Component } from 'react';

import './OrdersList.css';

class OrdersList extends Component {
  state = {
    orders: [],
  }

  static getDerivedStateFromProps(props, state) {
    //console.log('Orders', props.orders.length !== state.orders);
    if(props.orders.length !== state.orders) {
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
      <section id="ordersContainer">
        <h2>Pedidos realizados</h2>

        <ul id="requestList">
          {(this.props.orders.length)
            ? (this.props.orders.map(order => (
                <li id="requestItem" key={order.orderId}>
                  <div id="resquestInfo">
                    <span>Codigo: <strong>{order.orderNumber}</strong></span>

                    <span>
                      <strong>{order.orderTime
                      .split('T')[1]
                      .split('.')[0].slice(0, 5)}</strong>
                    </span>
                  </div>
                  <ul id="resquestUl">
                    {
                      order.dish.map((dishes, index) => {
                        return(               
                          <li key={index + dishes}>
                            <span>{dishes}</span>
                          </li>
                        )}
                      )
                    }
                  </ul>
                </li>
              ))
            )
            : <h2>Sem Pedidos</h2>
          }
        </ul>
      </section>
    );
  }
}
 
export default OrdersList;