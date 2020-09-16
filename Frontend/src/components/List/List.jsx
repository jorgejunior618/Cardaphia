import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PopUpDetails from './../PopUpDetails/PopUpDetails.jsx'

import './List.css';

class  List extends Component {
  state = {
    dishes: [],
  }

  constructor(props) {
    super(props);
    this.order = props.order;
  }

  static getDerivedStateFromProps(props, state) {
    if(props.dishes.length !== state.dishes.length) {
      return {
        dishes: props.dishes.dishes,
      }
    }
    
    return {
      dishes: [],
    }
  }

  changeOrder(dish, amountDishes) {
    const amount = Number(amountDishes);

    if (amount === 0) {
      this.order.removeDish(dish.dishId);
    } else {
      this.order.addDish({dish: dish, amount: amount});
    }
  }

  sendOrder() {
    const { ShowPopUp } = this.props;
    
    if (this.order.dishes.length === 0) {
      return alert('Adicione a amount dos dishes que deseja pedir! :)')
    }
    
    ShowPopUp(this.order);
  }
  
  dishDetails(dish){
    const {showDetails} = this.props
    showDetails(dish)
  }

  render() { 
    return (
      <>
        <Link to="/">VOLTAR</Link>
        <ul id="menuList">

          {this.state.dishes.map(dish => (
            <li id="menuItem" key={dish.dishId}>
              
              <span onClick={() => {this.dishDetails(dish)}}>Prato: {dish.name}</span> <br/>
              <span>preco: {dish.price}</span>
                

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