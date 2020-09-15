import React, {useEffect,  useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import OrdersList from '../../components/OrdersList/OrdersList';

import { getOrders } from '../../Services/Restaurant.service';
import { getMenu } from '../../Services/clientes.service';


function Orders() {
  const restaurantCode = localStorage.getItem('restaurantCode');
  
  const history = useHistory();
  
  if (!restaurantCode) {
    history.push('/restaurant');
  }
  
  const [ orders, setorders] = useState([]);
  const [ dishes, setDishes ] = useState([]);

  const [time, setTime] = useState(true);

  useEffect(() => {
      getOrders(restaurantCode)
        .then(response => {
          setorders(response.data);
          setTimeout(()=>{setTime(!time)},10000)
        })
        .catch(error => console.log({error: error}));      
  },[restaurantCode,time]);

  useEffect(() => {
    getMenu(restaurantCode)
      .then(response => setDishes(response.data))
      .catch(error => console.log(error)); 
  },[restaurantCode]);

  function pedidos(orders,dishes){
    if(orders.orders && dishes.dishes){
      for(let i=0; i<orders.orders.length; i++ ){
        
        for(let j=0; j<orders.orders[i].dishes.length; j++){

          for(let a=0; a<dishes.dishes.length; a++){
            if(orders.orders[i].dishes[j] === dishes.dishes[a].dishId){
              orders.orders[i].dishes[j] = dishes.dishes[a].name
            }
          }
        }
      }
    }
  }
  pedidos(orders,dishes)
  return (
    <> 
      <Header
        title="Restauante Jorge"
        subtitle="Cardápio"
      />

      <OrdersList
        orders={orders}
      />
    </>
  );
}

export default Orders;
