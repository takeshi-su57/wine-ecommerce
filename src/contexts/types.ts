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
  index: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
}

export interface ProductWineBox {
  id: number;
  name: string;
  image: string;
  priceMember: number;
  priceNonMember: number;
}

export interface ProductCart {
  id: number;
  name: string;
  image: string;
  priceMember: number;
  priceNonMember: number;
  quantity: number;
}

export const DEFAULT_VALUE = {
  products: [],
  productFocus: undefined,
  details: {
    page: 0,
    itemsPerPage: 0,
    totalItems: 0,
    totalPages: 0,
    pagination: [0],
  },
  cartCount: 0,
  loading: true,
  viewCart: false,
  loadingData: false,
  defineFocusProduct: () => {},
  saveInCart: () => {},
  loadMore: () => {},
  loadMoreForPage: () => {},
  setViewCart: () => {},
  removeFromWineBox: () => {},
  getByFilter: () => {},
  getInitInfo: () => {},
};

export type AppContextType = {
  getInitInfo: Function;
  products: Product[];
  productFocus: Product | undefined;
  defineFocusProduct: Function;
  saveInCart: Function;
  cartCount: number;
  loadMore: Function;
  loadMoreForPage: Function;
  loading: boolean;
  loadingData: boolean;
  viewCart: boolean;
  setViewCart: Function;
  removeFromWineBox: Function;
  getByFilter: Function;
  details: {
    page: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    pagination: number[];
  };
};

export type propsProvider = {
  children: JSX.Element;
};

export interface Props {
  actualPage?: any;
  progress?: any;
  viewContainer?: boolean;
}
