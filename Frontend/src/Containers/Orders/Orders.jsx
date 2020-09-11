import React, {useEffect,  useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import OrdersList from '../../components/OrdersList/OrdersList'

//import Order from '../../Classes/Order';

import api from '../../service/restaurant.service';
/*
const pedido1 = new Order('01');
pedido1.addDish({dish: { name: 'agua', amount: 1, id: 12 } })
const pedido2 = new Order('02');
pedido2.addDish({dish: { name: 'suco', amount: 2, id: 132 } })

const orders = [pedido1, pedido2];
*/


const Requests = () =>  {

  const [orders, setorders] = useState([])
  const [status,setStatus] = useState(true)

  useEffect(() => {
      api.get('').then(response => {
        setorders(response.data);        
      })
  },[])

  console.log();
  
  /*
  setInterval(() => {
    if(status){
      setStatus(false)
    }else{
      setStatus(true)
    }
  },5000)*/

  const history = useHistory();

  if (!localStorage.getItem('restaurantCode')) {
    history.push('/restaurant');
  }

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
export default Requests;