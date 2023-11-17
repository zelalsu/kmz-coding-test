import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  AddToCartApiResponse,
  CartApiResponse,
  CategoryApiResponse,
  ProductDetailApiResponse,
} from './types';
import {useAuth} from '../AuthContext';
// import {LoginApiResponseParams} from './types';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://apiv5.akilliticaretim.com'}),
  endpoints: builder => ({
    category: builder.query<CategoryApiResponse, void>({
      query: () => ({
        url: 'api/v5/ad/product/categories',
        method: 'GET',
        headers: {
          GUID: '24BE-DB0E-D75E-4060',
        },
      }),
    }),
    subCategory: builder.query<void, {parentId: number}>({
      query: ({parentId}) => ({
        url: `api/v5/ad/product/categories?parentId=${parentId}`,
        method: 'GET',
        headers: {
          GUID: '24BE-DB0E-D75E-4060',
        },
      }),
    }),
    productList: builder.query<
      ProductDetailApiResponse,
      {CategoryId: number; PageNumber?: number; PageSize?: number}
    >({
      query: ({CategoryId, PageNumber = 1, PageSize = 10}) => ({
        url: `api/v5/sf/product/category_products?CategoryId=${CategoryId}&PageNumber=${PageNumber}&PageSize=${PageSize}`,
        method: 'GET',
        headers: {
          GUID: '24BE-DB0E-D75E-4060',
        },
      }),
    }),
    addToCart: builder.mutation<
      AddToCartApiResponse,
      {userId: number; productId: number; amount: number}
    >({
      query: ({userId, productId, amount}) => {
        return {
          url: 'api/v5/sf/cart/cart',
          method: 'POST',
          headers: {
            GUID: '24BE-DB0E-D75E-4060',
            Authorization: useAuth.token,
            ContentType: 'application/json',
          },

          body: {userId, productId, amount},
        };
      },
    }),
    cart: builder.query<CartApiResponse, void>({
      query: () => {
        return {
          url: 'api/v5/sf/cart/cart?userId=4444',
          method: 'GET',
          headers: {
            GUID: '24BE-DB0E-D75E-4060',
            Authorization: useAuth.token,
          },
        };
      },
    }),
  }),
});
export const {
  useLazyCategoryQuery,
  useLazySubCategoryQuery,
  useLazyProductListQuery,
  useAddToCartMutation,
  useLazyCartQuery,
} = categoryApi;
export const {category, addToCart} = categoryApi.endpoints;
