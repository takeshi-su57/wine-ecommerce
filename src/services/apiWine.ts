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

export const loadMoreProductsByFilter = async (limit: number, filter: string) => {
  const { data } = await api.get(`/products?page=1&limit=${ limit }&filter=${ filter }`);
  return data;
};

export const loadProductsByFilter = async (filter: string) => {
  const { data } = await api.get(`/products?page=1&limit=12&filter=${filter}`);
  return data;
};

export const loadByFilterForPage = async (filter: string, page: number) => {
  const { data } = await api.get(`/products?page=${page}&limit=12&filter=${filter}`);
  return data;
};

export const loadProductsBySearch = async (search: string) => {
  const { data } = await api.get(`products?page=1&limit=12&name=${search}`);
  return data;
};

export const loadBySearchForPage = async (search: string, page: number) => {
  const { data } = await api.get(`/products?page=${page}&limit=12&name=${search}`);
  return data;
};
