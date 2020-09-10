import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import ListRequests from '../../components/ListRequests/ListRequests'


import Pedido from '../../Classes/Pedido';

const pedido1 = new Pedido('01');
pedido1.addPrato({prato: { nome: 'agua', quantidade: 1, id: 12 } })
const pedido2 = new Pedido('02');
pedido2.addPrato({prato: { nome: 'suco', quantidade: 2, id: 132 } })

const pedidos = []

function Requests (props) {
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

      <ListRequests
        pedido={pedidos}
      />
    </>
  );
}
export default Requests;