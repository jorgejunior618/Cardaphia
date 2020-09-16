import React, {useEffect,  useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import OrdersList from '../../components/OrdersList/OrdersList';

import { getOrders } from '../../Services/Restaurant.service';

import './Orders.css';

function Orders() {
  const restaurantCode = localStorage.getItem('restaurantCode');
  
  const history = useHistory();
  
  if (!restaurantCode) {
    history.push('/restaurant');
  }
  
  const [ orders, setorders] = useState([]);

  const [time, setTime] = useState(true);

  useEffect(() => {
      getOrders(restaurantCode)
        .then(response => {
          setorders(response.data.orders);
          setTimeout(()=>{setTime(!time)},10000)
        })
        .catch(error => console.log({error: error}));      
  },[restaurantCode,time]);
  
  return (
    <section id="Orders"> 
      <Header
        title="Restauante Jorge"
        subtitle="Cardápio"
      />

      <OrdersList
        orders={orders}
      />
    </section>
  );
}

export default Orders;
