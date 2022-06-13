import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wine-back-test.herokuapp.com/',
});

export const getProductsInit = async () => {
  const { data } = await api.get(`/products?page=1&limit=10`);
  return data;
};
