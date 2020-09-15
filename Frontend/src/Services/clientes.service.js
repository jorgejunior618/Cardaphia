import api from './api';

export function getMenu(restaurantID) {
  const endpoint = `/restaurante/${restaurantID}/dishes/`;
  
  const response = api.get(endpoint)

  return response;
}
