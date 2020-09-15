import api from './api';

export function getMenu(restaurantID) {
  const endpoint = `/restaurante/${restaurantID}/dishes/`;
  
  const response = api.get(endpoint)

  return response;
}

export function finishOrder(restaurantID, order) {
  
  const endpoint = `/restaurante/${restaurantID}/pedidos/criar/`;
  
  const response = api.post(endpoint, order)

  return response;
}
