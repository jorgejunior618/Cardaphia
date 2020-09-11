import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Order from '../../Classes/Order';
import PopUp from '../../components/PopUp/PopUp';
import api from '../../Services/Restaurant.service';

function Menu (props) {
  const history = useHistory();
  const tableCode = localStorage.getItem('tableCode');

  if (!tableCode) {
    history.push('/');
  }
  
  const order = new Order(Number(tableCode));
  const [ isFinalized, finalize ] = useState(false)
  const [ orderRealized, setOrderRealized ] = useState({});
  const [ dishes, setDishes ] = useState([]);

  useEffect(() => {
    api.get(`/restaurante/${1}/dishes/`)
      .then(response => setDishes(response.data))
      .catch(error => console.log(error)); 
  }, []);

  console.log(dishes)

  function finalizeOrder(order) {
    setOrderRealized(order);
    const response = {
      request: orderRealized,
      success: "Pedido realizado com suceso",
    };
    console.log(response);
    finalize(false);
    alert(response.success);
    history.push('/waiting');
  }

  function ShowPopUp(order) {
    setOrderRealized(order);

    finalize(true);
  }

  function abortOrder() {
    finalize(false);
  }

  if (dishes.length) {
    return (
      <> 
        <Header
          title="Restauante Jorge"
          subtitle="Cardápio"
        />
        
        {isFinalized
        ? (
        <PopUp
          order={orderRealized}
          finalizeOrder={finalizeOrder}
          abortOrder={abortOrder}
        />)
        : (<></>) }
        
      </>
    )
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