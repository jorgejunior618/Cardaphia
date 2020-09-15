import React from 'react';
import { useHistory } from 'react-router-dom'

export default function Wait() {
  const history = useHistory();

  const orderId = Number(localStorage.getItem('orderId'));
  if(!orderId) {
    history.push('/');
  }
  
  function redirectToMenu() {
    history.push('/Menu');
  }
  return (
    <>
      <h1>Aguarde seu pedido ser chamado</h1>
      <h2>Número do pedido: {orderId}</h2>
      <button onClick={redirectToMenu}>Realizar Novo Pedido</button>
    </>
  )
}