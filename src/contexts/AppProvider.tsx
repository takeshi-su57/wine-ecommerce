import { createContext, useEffect, useState } from 'react';
import { getProductsInit, loadMoreProducts } from 'services/apiWine';
import { AppContextType, DEFAULT_VALUE, Product, propsProvider } from './types';

export const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

export const AppProvider = ({ children }: propsProvider) => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState(DEFAULT_VALUE.details);
  const [productFocus, setProdFocus] = useState(DEFAULT_VALUE.productFocus);
  const [cartCount, setCartCount] = useState(0);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(true);
  const [viewCart, setViewCart] = useState(false);

  const getInitInfo = async () => {
    const { items, page, totalPages, itemsPerPage, totalItems } = await getProductsInit();
    setProducts(items);
    setDetails({ page, totalPages, itemsPerPage, totalItems });
    setLoading(false);
  };

  const defineFocusProduct = (index: number) => {
    setProdFocus(products[index]);
  };

  const saveInCart = (product: Product, quantity: number) => {
    const cartData = localStorage.getItem('cart_wine');

    if (cartData && JSON.parse(cartData).items.length) {
      let updateCart = []; 
      let { items, totalPrice } = JSON.parse(cartData);

      const productInUpdate = items.find((Obj: Product) => Obj.id === product.id);

      if (productInUpdate) {
        productInUpdate['quantity'] += quantity;
        const allProductsinCart = items.filter((Obj: Product) => Obj.id !== product.id);
        updateCart = [...allProductsinCart, productInUpdate];
      } else {
        updateCart = [...items, { ...product, quantity }];
      }

      localStorage.setItem('cart_wine', JSON.stringify({
        items: updateCart,
        totalPrice: Number((totalPrice + product.priceMember * quantity).toFixed(2)),
      }));
      
      setCartCount(updateCart.length);
    } else {
      localStorage.setItem('cart_wine', JSON.stringify({
        items: [{ ...product, quantity }],
        totalPrice: Number((product.priceMember * quantity).toFixed(2)),
      }));
      setCartCount(1);
    };
  }

  const loadMore = async () => {
    setLoading(true);
    setLimit(limit + 12);
    const data = await loadMoreProducts(limit + 12);
    setProducts(data.items);
    setLoading(false);
  }

  useEffect(() => {
    getInitInfo();

    const cartData = localStorage.getItem('cart_wine');

    if (!cartData) {
      localStorage.setItem('cart_wine', JSON.stringify({ items: [], totalPrice: 0 }));
    } else {
      setCartCount(JSON.parse(cartData).items.length);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');

    if (viewCart && body) {
      body.style.overflow = 'hidden';
    } else if (body) {
      body.style.overflow = 'auto';
    };
  }, [viewCart]);
  
  return (
    <AppContext.Provider value={{
      products,
      details,
      productFocus,
      cartCount,
      defineFocusProduct,
      saveInCart,
      loadMore,
      loading,
      viewCart,
      setViewCart
    }}>
      { children }
    </AppContext.Provider>
  );
};
