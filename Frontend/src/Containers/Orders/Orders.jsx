import React, {useEffect,  useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import OrdersList from '../../components/OrdersList/OrdersList';

import { getOrders } from '../../Services/Restaurant.service';
import { getMenu } from '../../Services/clientes.service';


function Orders() {
  const [ orders, setorders] = useState([]);
  const [ dishes, setDishes ] = useState([]);
  const isLoged = localStorage.getItem('restaurantCode');

  if (!isLoged) {
    history.push('/restaurant');
  }
  
  const history = useHistory();
  
  useEffect(() => {
      getOrders(1)
        .then(response => {
          setorders(response.data);        
        })
        .catch(error => console.log({error: error}));
  },[]);

  useEffect(() => {
    getMenu(1)
      .then(response => setDishes(response.data))
      .catch(error => console.log(error)); 
  }, []);

  function pedidos(orders,dishes){
    if(orders.orders && dishes.dishes){
      for(let i=0; i<orders.orders.length; i++ ){
        
        for(let j=0; j<orders.orders[i].dishes.length; j++){

          for(let a=0; a<dishes.dishes.length; a++){

            if(orders.orders[i].dishes[j] === dishes.dishes[a].id){
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
