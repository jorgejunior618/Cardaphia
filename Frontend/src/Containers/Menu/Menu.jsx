import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Pedido from '../../Classes/Pedido';
import PopUp from '../../components/PopUp/PopUp';

const columns =  [
  {id: 1, nome: 'prato', preco: '88'},
  {id: 2, nome: 'prato2', preco: '9'},
  {id: 3, nome: 'prato3', preco: '55'},
  {id: 4, nome: 'prato4', preco: '66'},
]
function Menu (props) {
  const history = useHistory();
  const pedido = new Pedido('111');
  const [ isFinalized, finalize ] = useState(false)
  const [ pedidoRealizado, setPedidoRelizado ] = useState({});

  function finalizeRequest() {
    const response = {
      request: pedidoRealizado,
      success: "Pedido realizado com suceso",
    };
    console.log(response);
    finalize(false)
    history.push('/Menu');
  }

  function ShowPopUp(pedido) {
    setPedidoRelizado(pedido);
    finalize(true);
  }

  function abortRequest() {
    finalize(false);
  }

  return (
    <> 
      <Header
        title="Restauante Jorge"
        subtitle="Cardápio"
      />

      <List
        pratos={columns}
        pedido={pedido}
        ShowPopUp={ShowPopUp}
      />

      {isFinalized
      ? (
      <PopUp
        pedido={pedidoRealizado}
        finalizePedido={finalizeRequest}
        abortPedido={abortRequest}
      />)
      : (<></>) }
       
    </>
  );
}
 
export default Menu;