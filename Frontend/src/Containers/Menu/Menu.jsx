import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Order from '../../Classes/Order';
import PopUp from '../../components/PopUp/PopUp';

const columns =  [
  {id: 1, name: 'prato', price: '88'},
  {id: 2, name: 'prato2', price: '9'},
  {id: 3, name: 'prato3', price: '55'},
  {id: 4, name: 'prato4', price: '66'},
]
function Menu (props) {
  const history = useHistory();
  const tableCode = localStorage.getItem('tableCode');

  if (!tableCode) {
    history.push('/');
  }
  
  const order = new Order('111', tableCode);
  const [ isFinalized, finalize ] = useState(false)
  const [ orderRealized, setOrderRealized ] = useState({});

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

  return (
    <> 
      <Header
        title="Restauante Jorge"
        subtitle="Cardápio"
      />

      <List
        dishes={columns}
        order={order}
        ShowPopUp={ShowPopUp}
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
  );
}
 
export default Menu;