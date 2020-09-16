import React, { Component } from 'react';

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

  changeValueInput(e, id, dish) {
    const { name } = e.target;

    const input = document.querySelector(`input[name="${id}"]`);

    const value = Number(input.value)

    if (name === 'remove') {
      if (value !== 0){
        input.value = value-1;
        this.changeOrder(dish, input.value)
      }

    } else {
      input.value = value+1;
      this.changeOrder(dish, input.value)
    }
  }
  
  dishDetails(dish){
    const {showDetails} = this.props
    showDetails(dish)
  }

  render() { 
    return (
      <>
        <ul id="menuList">

          {this.state.dishes.map(dish => (
            <li id="menuItem" key={dish.dishId}>
              
              <div className="dishInfos">
                <span onClick={() => {this.dishDetails(dish)}}>{dish.name}</span> <br/>
                <span>{dish.price}</span>
              </div>

              <span id="amountItem">
                <button
                  name="remove"
                  onClick={e => this.changeValueInput(e, dish.dishId, dish)}
                  className="amountChange"
                >
                  -
                </button>
                
                <input
                  id="amountNumber"
                  name={dish.dishId}
                  disabled
                  defaultValue="0"
                  onChange={(e) => this.changeOrder(dish, e.target.value)}
                  min="0"
                  type="number"
                />

                <button
                  name="add"
                  onClick={e => this.changeValueInput(e, dish.dishId, dish)}
                  className="amountChange"
                  id="right"
                >
                  +
                </button>
              </span>
            </li>
          ))}

        </ul>
        <button className="button" onClick={this.sendOrder.bind(this)} id="sendOrder">
          Enviar Pedido
        </button>
      </>
    );
  }
}
 
export default List;