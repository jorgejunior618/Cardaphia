import api from './api';

export function getOrders(restaurantID) {
  const endpoint = `restaurante/${restaurantID}/pedidos/`;

  const response = api.get(endpoint);

  return response;
}