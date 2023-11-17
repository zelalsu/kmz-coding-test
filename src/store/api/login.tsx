import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {LoginApiParams, LoginApiResponseParams} from './types';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://apiv5.akilliticaretim.com'}),
  endpoints: builder => ({
    login: builder.mutation<LoginApiResponseParams, LoginApiParams>({
      query: ({username, password}) => ({
        url: '/api/v5/sf/auth/login',
        method: 'POST',
        body: {
          username,
          password,
        },
        headers: {
          GUID: '24BE-DB0E-D75E-4060',
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {useLoginMutation} = loginApi;
