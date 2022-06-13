import { createContext, useEffect, useState } from 'react';
import { getProductsInit } from 'services/apiWine';
import { propsProvider } from './types';

export const AppContext = createContext({});

export const AppProvider = ({ children }: propsProvider) => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState({});

  const getInitInfo = async () => {
    const { items, page, totalPages, itemsPerPage, totalItems } = await getProductsInit();
    setProducts(items);
    setDetails({ page, totalPages, itemsPerPage, totalItems });
  };

  useEffect(() => {
    getInitInfo();
  }, []);
  
  return (
    <AppContext.Provider value={{ products, details }}>
      { children }
    </AppContext.Provider>
  );
};
