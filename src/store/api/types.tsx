export type LoginApiResponseParams = {
  data?: {
    data?: {
      expiration: string;
      refreshToken: string;
      status: boolean;
      token: string;
    };
    status: boolean;
  };
};

export type LoginApiParams = {
  username: string;
  password: string;
};

export type Category = {
  imagePath: any;
  categoryName: string;
  hasImage: number;
  id: number;
  link: string;
  order: number;
  parentId: number;
  productCount: number;
  subCategoryCount: number;
};

export type CategoryApiResponse = {
  data: {
    categories: Category[];
    parentCategoryId: number;
    selectedCategoryId: number;
  };
};

export type ProductImage = {
  id: number;
  imagePath: string;
};

export type Product = {
  currency: string;
  discountRate: number;
  id: number;
  inCartQty: number;
  isInFavorite: number;
  kdv: number;
  key: number;
  listPrice: number;
  listPriceVat: string;
  maxSaleUnit: number;
  minSaleUnit: number;
  price: number;
  priceVat: string;
  productImages: ProductImage[];
  score: number;
  stock: number;
  stockCode: string;
  stockName: string;
  stockType: string;
  totalRow: number;
  unitIncrement: number;
};

export type ProductDetailApiResponse = {
  data: Product[];
  status: boolean;
};

export type AddToCartApiResponse = {
  data: AddCart[];
};
export type AddCart = {
  status: boolean;
  message: string;
};

export type CartApiResponse = {
  data: {
    detail: CartItem[];
    message: {
      minOrderAmount: string;
    };
    coupon: {
      couponMessage: string;
      couponDiscountStr: string;
    };
    basket: {
      totalPrice: number;
      generalTotalPrice: number;
      basketBagQuantity: number;
      basketBagPrice: number;
      couponDiscountAmount: number;
      cargoPrice: number;
    };
  };
  status: boolean;
};

export type CartItem = {
  cartID: number;
  id: number;
  productImage: string;
  stockName: string;
  stockCode: string;
  salePrice: number;
  listingPrice: number;
  currency: string;
  unitIncrement: number;
  discountRate: number;
  maxSaleUnit: number;
  minSaleUnit: number;
  qty: number;
  totalPrice: number;
  categoryName: string;
  stockReduced: number;
};

export type Cart = {
  data: CartItem[];
  status: boolean;
};
