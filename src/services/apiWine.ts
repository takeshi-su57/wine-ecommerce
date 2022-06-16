import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wine-back-test.herokuapp.com/',
});

export const getProducts = async (
  page: number = 1,
  limit: number = 12,
  filter: string = '',
  search: string = ''
) => {
  console.log(page);
  console.log(limit);
  console.log(filter);
  console.log(search);
  console.log(`/products?page=${ page }&limit=${ limit }&filter=${ filter }&name=${ search }`);
  

  const { data } = await api.get(
    `/products?page=${ page }&limit=${ limit }&filter=${ filter }&name=${search}`
  );
  return data;
};
