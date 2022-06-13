import { createContext, useEffect, useState } from 'react';
import { getProductsInit } from 'services/apiWine';
import { AppContextType, DEFAULT_VALUE, propsProvider } from './types';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export const AppProvider = ({ children }: propsProvider) => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState(DEFAULT_VALUE.details);

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
