import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.dishes = props.dishes;
    this.order = props.order;
  }

  changeOrder(dish, amountDishes) {
    const amount = Number(amountDishes);

    if (amount === 0) {
      this.order.removeDish(dish.id);
    } else {
      this.order.addDish({dish: dish, amount: amount});
    }
  }

  sendOrder() {
    const { ShowPopUp } = this.props;

    if (this.order.dishes.length === 0) {
      return alert('Adicione a amount dos dishes que deseja pedir! :)')
    }

    // this.order.setDishesToSendDataBase()
    
    ShowPopUp(this.order);
  }

  render() { 
    return (
      <>
        <Link to="/">VOLTAR</Link>
        <ul id="menuList">
          {this.dishes.map(dish => (
            <li id="menuItem" key={dish.id}>
              <Link to={`/dish/${dish.id}`}>
                <span>Prato: {dish.name}</span> <br/>
                <span>preco: {dish.price}</span>
              </Link>

              <span id="amountItem">
                <input
                  defaultValue="0"
                  onChange={(e) => this.changeOrder(dish, e.target.value)}
                  min="0"
                  type="number"
                />
              </span>
            </li>
          ))}

        </ul>
        <button onClick={this.sendOrder.bind(this)} id="sendOrder">
          Enviar Pedido
        </button>
      </>
    );
  }
}
 
export default List;