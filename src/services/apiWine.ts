import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wine-back-test.herokuapp.com/',
});

export const getProductsInit = async () => {
  const { data } = await api.get(`/products?page=1&limit=12`);
  return data;
};

export const loadMoreProductsForPage = async (page: number) => {
  const { data } = await api.get(`/products?page=${ page }&limit=12`);
  return data;
};

export const loadMoreProducts = async (limit: number) => {
  const { data } = await api.get(`/products?page=1&limit=${ limit }`);
  return data;
};
