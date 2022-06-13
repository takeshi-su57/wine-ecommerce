export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  volume: string;
  rating: number;
  avaliations: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
}

export interface ProductCard {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
}

export const DEFAULT_VALUE = {
  products: [],
  productFocus: undefined,
  details: {
    page: 0,
    itemsPerPage: 0,
    totalItems: 0,
    totalPages: 0,
  },
  cartCount: 0,
  loading: true,
  defineFocusProduct: () => {},
  saveInCart: () => {},
  loadMore: () => {},
};

export type AppContextType = {
  products: Product[];
  productFocus: Product | undefined;
  defineFocusProduct: Function;
  saveInCart: Function;
  cartCount: number;
  loadMore: Function;
  loading: boolean;
  details: {
    page: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
};

export type propsProvider = {
  children: JSX.Element;
};
