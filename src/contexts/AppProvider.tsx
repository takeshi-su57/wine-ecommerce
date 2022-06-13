import { createContext, useEffect, useState } from 'react';
import { getProductsInit } from 'services/apiWine';
import { AppContextType, DEFAULT_VALUE, Product, propsProvider } from './types';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export const AppProvider = ({ children }: propsProvider) => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState(DEFAULT_VALUE.details);
  const [productFocus, setProdFocus] = useState(DEFAULT_VALUE.productFocus);
  const [cartCount, setCartCount] = useState(0);

  const getInitInfo = async () => {
    const { items, page, totalPages, itemsPerPage, totalItems } = await getProductsInit();
    setProducts(items);
    setDetails({ page, totalPages, itemsPerPage, totalItems });
  };

  const defineFocusProduct = (index: number) => {
    setProdFocus(products[index]);
  };

  const saveInCart = (product: Product, quantity: number) => {
    const cartData = localStorage.getItem('cart_wine');

    if (!cartData) {
      localStorage.setItem('cart_wine', JSON.stringify([{ ...product, quantity }]));
      setCartCount(1);
    } else {
      let updateCart = []; 
      let cart = JSON.parse(cartData);

      const productInUpdate = cart.find((Obj: Product) => Obj.id === product.id);

      if (productInUpdate) {
        productInUpdate['quantity'] += quantity;
        const allProductsinCart = cart.filter((Obj: Product) => Obj.id !== product.id);
        console.log(allProductsinCart);
        updateCart = [...allProductsinCart, productInUpdate];
        localStorage.setItem('cart_wine', JSON.stringify(updateCart));
      } else {
        updateCart = [...cart, { ...product, quantity }];
        localStorage.setItem('cart_wine', JSON.stringify(updateCart));
      }
      
      setCartCount(updateCart.length);
    };
  }

  useEffect(() => {
    getInitInfo();

    const cartData = localStorage.getItem('cart_wine');

    if (!cartData) {
      localStorage.setItem('cart_wine', JSON.stringify([]));
    } else {
      setCartCount(JSON.parse(cartData).length);
    };
  }, []);
  
  return (
    <AppContext.Provider value={{
      products,
      details,
      productFocus,
      cartCount,
      defineFocusProduct,
      saveInCart
    }}>
      { children }
    </AppContext.Provider>
  );
};
