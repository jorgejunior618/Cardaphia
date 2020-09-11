class Order {
  constructor(code, tableCode) {
    this._code = code;
    this._dishes = [];
    this._orderDate = new Date().toLocaleString();
    this._tableCode = tableCode;
  }

  get code() {
    return this._code;
  }

  get dishes() {
    return this._dishes;
  }

  get orderDate() {
    return this._orderDate;
  }

  get requestValue() {
    const value = this._dishes.reduce((value, dish) => {
      return (Number(dish.dish.price) * dish.amount) + value;
    }, 0)
    return value;
  }

  setDishesToSendDataBase() {
    this._dishes = this.dishes.reduce((newDishes, dish) => {
      const newArrayDishes = [];
      for(let i = 0; i< dish.amount; i++) {
        newArrayDishes.push(dish.dish)
      }

      
      return [...newDishes,...newArrayDishes];
    }, []);
  }

  addDish({ dish, amount }) {
    const newDish = {
      dish: dish,
      amount: amount,
    };

    const changingDish = this._findDish(dish.id)

    if (changingDish !== -1) {
      this._changeDish(changingDish, amount)
    }else {
      this._dishes.push(newDish);
    }
  }

  removeDish(dishId) {
    this._dishes = this._dishes.filter(dish => dish.dish.id !== dishId)
  }
  
  // Metodos utilitáios
  _findDish(dishId) {
    return this.dishes.findIndex(p => p.dish.id === dishId);
  }

  _changeDish(index, amount) {
    this._dishes[index].amount = amount
  }

}

export default Order;