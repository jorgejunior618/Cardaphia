import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Order from '../../Classes/Order';
import PopUp from '../../components/PopUp/PopUp';
import { getMenu, finishOrder } from '../../Services/clientes.service';

function Menu () {
  const history = useHistory();
  
  const restaurantID = Number(localStorage.getItem('restaurantID'));
  const tableCode = localStorage.getItem('tableCode');

  if (!tableCode) {
    history.push('/');
  }
  
  const order = new Order(tableCode, restaurantID);

  const [ isFinalized, finalize ] = useState(false)
  const [ orderRealized, setOrderRealized ] = useState({});
  const [ dishes, setDishes ] = useState([]);

  useEffect(() => {
    getMenu(restaurantID)
      .then(response => setDishes(response.data))
      .catch(error => console.log(error)); 
  }, [restaurantID]);

  function finalizeOrder(order) {
    setOrderRealized(order);
    
    const response = {
      request: orderRealized,
      success: "Pedido realizado com suceso",
    };

    console.log(response.request)
    
    alert(response.success);
    finalize(false);

    finishOrder(restaurantID, orderRealized).then(response => {
      console.log(response.data);
      localStorage.setItem('orderId', response.data.orderId);
    });
    
    history.push('/waiting');
  }

  function ShowPopUp(order) {
    setOrderRealized(order);

    finalize(true);
  }

  function abortOrder() {
    finalize(false);
  }

  return (
    <> 
      <Header
        title="Restauante Jorge"
        subtitle="Cardápio"
      />

      <List
        dishes={dishes}
        order={order}
        ShowPopUp={ShowPopUp}
      />

      {/* <h3>Sem Cardápio no momento</h3> */}
      
      {isFinalized
      ? (
      <PopUp
        order={orderRealized}
        finalizeOrder={finalizeOrder}
        abortOrder={abortOrder}
      />)
      : (<></>) }
       
    </>
  );
}
 
export default Menu;