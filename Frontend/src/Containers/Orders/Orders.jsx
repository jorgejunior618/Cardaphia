import React, {useEffect,  useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import OrdersList from '../../components/OrdersList/OrdersList';

import { getOrders } from '../../Services/restaurant.service';


function Orders() {
  const [orders, setorders] = useState([]);
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
