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
  size: string;
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
  details: {
    page: 0,
    itemsPerPage: 0,
    totalItems: 0,
    totalPages: 0,
  }
};

export type AppContextType = {
  products: Product[];
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
