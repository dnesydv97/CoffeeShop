import axios from 'axios';

const API_URL = 'https://fake-coffee-brand-api.vercel.app/api';

export const fetchCoffees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};