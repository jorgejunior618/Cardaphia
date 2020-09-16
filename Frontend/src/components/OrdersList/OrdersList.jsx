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
      <>
        <h2>Pedidos realizados</h2>
        <ul id="requestList">
          {(this.props.orders.length)
            ? (this.props.orders.map(order => (
                <li id="requestItem" key={order.orderId}>
                  <div id="resquestInfo">
                    
                    <span>{order.orderId}</span>

                    <span>
                      {order.orderTime
                      .split('T').join(' ')
                      .split('.')[0]}
                    </span>
                  </div>
                  <ul id="resquestUl">
                    {
                      order.dish.map( (dishs,index) => {
                        return(                    
                          <li key={index + dishs}>
                            <span>{dishs}</span> <br/>
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
      </>
    );
  }
}
 
export default OrdersList;