class Order {
  constructor(tableCode, restaurantId) {
    this.dishes = [];
    this.orderTable = tableCode;
    this.restaurantId = restaurantId;
    this.orderNumber = this._generateOrderNumber();
    this.situation = 'wating';
  }

  _generateOrderNumber() {
    var orderNumber = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < 6; i++){
      orderNumber += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return orderNumber;
  }

  get code() {
    return this._code;
  }

  get dishesList() {
    return this.dishes;
  }

  get orderDate() {
    return this._orderDate;
  }

  get requestValue() {
    const value = this.dishes.reduce((value, dish) => {
      return (Number(dish.dish.price) * dish.amount) + value;
    }, 0)
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  setDishesToSendDataBase() {
    this.dishes = this.dishes.reduce((newDishes, dish) => {
      const newArrayDishes = [];
      for(let i = 0; i< dish.amount; i++) {
        newArrayDishes.push(dish.dish.dishId)
      }
      
      return [...newDishes,...newArrayDishes];
    }, []);
  }

  addDish({ dish, amount }) {
    const newDish = {
      dish: dish,
      amount: amount,
    };

    const changingDish = this._findDish(dish.dishId)

    if (changingDish !== -1) {
      this._changeDish(changingDish, amount)
    }else {
      this.dishes.push(newDish);
    }
  }

  removeDish(dishId) {
    this.dishes = this.dishes.filter(dish => dish.dish.dishId !== dishId)
  }
  
  // Metodos utilitáios
  _findDish(dishId) {
    return this.dishes.findIndex(p => p.dish.dishId === dishId);
  }

  _changeDish(index, amount) {
    this.dishes[index].amount = amount
  }

}

export default Order;